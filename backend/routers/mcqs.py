# backend/routers/mcqs.py
from fastapi import APIRouter, Depends, HTTPException, Body
from typing import List, Dict
import uuid
import json # For parsing/stringifying pointsHistory
from datetime import datetime, timezone # Ensure timezone is imported

# Adjust imports for schemas and auth based on your structure
from schemas import (
    GenerateMCQsRequest, GenerateMCQsResponse, QuestionResponse, MCQOption,
    SubmitAnswerRequest, SubmitAnswerResponse,
    SubmitQuizSessionRequest, SubmitQuizSessionResponse, DashboardDataResponse # Changed UserDashboardDataResponse to DashboardDataResponse
)
from db import get_db # For database access
from prisma import Prisma
# from prisma.models import UserAnswer as PrismaUserAnswer # Avoid conflict if you have a UserAnswer schema
# No, we will use the one from prisma.models directly if needed, or it's already aliased by Prisma

# Placeholder Authentication (ensure this is adapted or replaced with real auth)
# Assuming this is in your main.py or a shared auth module
# For this file, let's assume get_current_user_id_from_header is correctly imported if used.
# If main.py is in the same directory as routers/ (i.e. backend/), then:
# from ..main import get_current_user_id_from_header
# If main.py is in backend/ and this file is backend/routers/mcqs.py:
import sys
if ".." not in sys.path: sys.path.append("..") # Ensure backend root is in path for auth import
from auth import get_current_user_id_from_header


router = APIRouter()

# --- Enhanced Dummy Data Store with Correct Answers ---
# Each question now includes its correctOptionId
class DummyQuestionFull(QuestionResponse): # Inherits id, question_text, options
    correctOptionId: str

dummy_questions_data: Dict[str, List[DummyQuestionFull]] = {
    "past simple tense": [
        DummyQuestionFull(
            id="dst_q1", # Using predictable IDs for dummy data makes mapping easier
            question_text="What did she ___ yesterday?",
            options=[MCQOption(id="A", text="do"), MCQOption(id="B", text="does"), MCQOption(id="C", text="did"), MCQOption(id="D", text="done")],
            correctOptionId="A"
        ),
        DummyQuestionFull(
            id="dst_q2",
            question_text="They ___ to the cinema last night.",
            options=[MCQOption(id="A", text="go"), MCQOption(id="B", text="goes"), MCQOption(id="C", text="went"), MCQOption(id="D", text="gone")],
            correctOptionId="C"
        ),
        DummyQuestionFull(
            id="dst_q3",
            question_text="He didn't ___ the homework.",
            options=[MCQOption(id="A", text="finish"), MCQOption(id="B", text="finishes"), MCQOption(id="C", text="finished"), MCQOption(id="D", text="finishing")],
            correctOptionId="A"
        ),
    ],
    "business email phrases": [
        DummyQuestionFull(
            id="dbe_q1",
            question_text="Which phrase is suitable for starting a formal business email to someone you don't know?",
            options=[MCQOption(id="A", text="Hey John,"), MCQOption(id="B", text="Dear Mr. Smith,"), MCQOption(id="C", text="What's up?"), MCQOption(id="D", text="To Whom It May Concern (if name unknown)")],
            correctOptionId="B" # Assuming "Dear Mr. Smith," if name known, D if not. Let's pick B for simplicity.
        ),
        DummyQuestionFull(
            id="dbe_q2",
            question_text="What does 'FYI' stand for in a business context?",
            options=[MCQOption(id="A", text="For Your Ideas"), MCQOption(id="B", text="Follow Your Instincts"), MCQOption(id="C", text="For Your Information"), MCQOption(id="D", text="For Your Inspection")],
            correctOptionId="C"
        ),
    ],
    "vocabulary for travel": [
        DummyQuestionFull(
            id="dvt_q1",
            question_text="What is a 'boarding pass'?",
            options=[MCQOption(id="A", text="A ticket for a bus"), MCQOption(id="B", text="A document allowing you to get on a plane"), MCQOption(id="C", text="A pass to a theme park"), MCQOption(id="D", text="A train schedule")],
            correctOptionId="B"
        ),
        DummyQuestionFull( # Added one more for variety
            id="dvt_q2",
            question_text="If your luggage is too heavy, you might have to pay for ___.",
            options=[MCQOption(id="A", text="excess baggage"), MCQOption(id="B", text="extra seat"), MCQOption(id="C", text="overload fee"), MCQOption(id="D", text="heavy load charge")],
            correctOptionId="A"
        ),
    ]
}

# Helper to quickly find a dummy question by ID (needed for /answer)
def get_dummy_question_by_id(question_id: str) -> DummyQuestionFull | None:
    for topic_questions in dummy_questions_data.values():
        for question in topic_questions:
            if question.id == question_id:
                return question
    return None


@router.post("/generate", response_model=GenerateMCQsResponse, tags=["MCQs"])
async def generate_mcqs_endpoint(payload: GenerateMCQsRequest = Body(...)):
    print(f"Generating {payload.num_questions} MCQs for topic: '{payload.topic_string}'")
    topic_key = payload.topic_string.lower().strip()
    
    # Use a copy of the list to avoid modifying the original dummy_questions_data if we shuffle later
    questions_for_topic_full = list(dummy_questions_data.get(topic_key, []))

    if not questions_for_topic_full:
        print(f"Topic '{topic_key}' not in dummy store, attempting fallback to 'past simple tense'.")
        questions_for_topic_full = list(dummy_questions_data.get("past simple tense", [])) # Ensure fallback is also a list copy

    if not questions_for_topic_full: # If even fallback is empty
        print(f"No questions found for topic '{topic_key}' or fallback.")
        # Return empty list with a topic_id indicating no questions found
        return GenerateMCQsResponse(questions=[], topic_id=f"dummy_topic_{topic_key.replace(' ', '_')}_not_found")

    # Optional: Shuffle questions for variety if more are available than requested
    # import random
    # random.shuffle(questions_for_topic_full)

    actual_num_to_return = min(payload.num_questions, len(questions_for_topic_full))
    selected_questions_full = questions_for_topic_full[:actual_num_to_return]

    # Convert DummyQuestionFull to QuestionResponse (without correctOptionId) for the client
    client_questions = [
        QuestionResponse(id=q.id, question_text=q.question_text, options=q.options)
        for q in selected_questions_full
    ]

    # topic_id_response should reflect the actual topic key used (original or fallback)
    # or indicate if no questions were ultimately found.
    if not client_questions and payload.num_questions > 0:
        # This case should ideally be caught by the earlier check, but as a safeguard:
        final_topic_id = f"dummy_topic_{topic_key.replace(' ', '_')}_no_questions_available"
    elif not questions_for_topic_full and dummy_questions_data.get(topic_key, []) : # Original topic existed but was empty
        final_topic_id = f"dummy_topic_{topic_key.replace(' ', '_')}_empty"
    elif questions_for_topic_full and topic_key != payload.topic_string.lower().strip() and dummy_questions_data.get("past simple tense"): # Fallback was used
        final_topic_id = f"topic_past_simple_tense_fallback"
    else: # Original topic found and used, or no questions at all
         final_topic_id = f"topic_{topic_key.replace(' ', '_')}"


    return GenerateMCQsResponse(questions=client_questions, topic_id=final_topic_id)


@router.post("/answer", response_model=SubmitAnswerResponse, tags=["MCQs"])
async def submit_answer_endpoint(
    payload: SubmitAnswerRequest = Body(...),
    db: Prisma = Depends(get_db),
    current_user_id: str = Depends(get_current_user_id_from_header) # Assumes this dependency provides the user ID
):
    print(f"User '{current_user_id}' submitted answer for Q: '{payload.question_id}', Selected: '{payload.selected_answer_id}'")

    # For dummy data, find the question details (including correct answer)
    dummy_question = get_dummy_question_by_id(payload.question_id)

    if not dummy_question:
        # If we were using a real DB for questions, we'd fetch from there.
        # Since it's dummy data, if the ID isn't in our store, it's an issue.
        print(f"Error: Dummy question with ID '{payload.question_id}' not found in current dummy store.")
        raise HTTPException(status_code=404, detail=f"Question with ID {payload.question_id} not found in dummy store.")

    is_correct = (dummy_question.correctOptionId == payload.selected_answer_id)
    correct_option_text = ""
    for opt in dummy_question.options:
        if opt.id == dummy_question.correctOptionId:
            correct_option_text = opt.text
            break
    
    print(f"Q: '{payload.question_id}' - Correct ID: '{dummy_question.correctOptionId}', User Selected: '{payload.selected_answer_id}', IsCorrect: {is_correct}")

    # --- Database Operations ---
    # IMPORTANT: The following DB operations assume that `payload.question_id` (e.g., "dst_q1")
    # corresponds to an ACTUAL `id` in your `Question` table in the database.
    # If you are only using dummy questions NOT seeded in the DB, these operations will fail
    # due to foreign key constraints (UserAnswer.questionId -> Question.id).
    #
    # For a real application:
    # 1. Ensure questions (even if initially from a dummy set) are seeded into the `Question` table.
    # 2. The `payload.question_id` sent from the frontend must match an `id` in that `Question` table.

    try:
        # Check if the question exists in the DB. This is crucial.
        # This step is illustrative; in a full app, you might rely on FK constraints
        # or have a more robust way to ensure question validity.
        # For now, we'll proceed assuming the frontend sends valid IDs that *should* be in the DB
        # if we were beyond pure dummy data.

        print(f"Attempting to save UserAnswer for user '{current_user_id}', q_id '{payload.question_id}'")
        user_answer = await db.useranswer.create(
            data={
                "userId": current_user_id,
                "questionId": payload.question_id, # CRITICAL: This ID must exist in your DB `Question` table.
                "selectedOptionId": payload.selected_answer_id,
                "isCorrect": is_correct,
                # "quizSessionId": "some_session_id" # Optional: if you implement quiz sessions
            }
        )
        print(f"UserAnswer saved with ID: {user_answer.id if user_answer else 'Error or not saved'}")

        if not is_correct:
            print(f"Attempting to save/update UserWrongdoingQuestion for user '{current_user_id}', q_id '{payload.question_id}'")
            # Ensure questionId exists in Question table for this to work.
            wrongdoing_entry = await db.userwrongdoingquestion.upsert(
                where={"userId_questionId": {"userId": current_user_id, "questionId": payload.question_id}},
                data={
                    "create": {
                        "userId": current_user_id,
                        "questionId": payload.question_id, # CRITICAL
                        "retestedCorrectly": False, # Default on first wrong answer
                        "timestampMarkedWrong": datetime.now(timezone.utc) # Use timezone aware datetime
                    },
                    "update": {
                        "timestampMarkedWrong": datetime.now(timezone.utc), # Update timestamp
                        "retestedCorrectly": False # Reset if they get it wrong again
                    }
                }
            )
            print(f"UserWrongdoingQuestion saved/updated for user '{current_user_id}', q_id: '{payload.question_id}'.")


        # This is after the UserAnswer is created and after the existing
        # 'if not is_correct:' block that handles UserWrongdoingQuestion creation/update.
        elif is_correct: 
            # If the answer is correct, check if this was a question previously marked wrong
            # and update its retestedCorrectly status.
            existing_wrongdoing_entry = await db.userwrongdoingquestion.find_unique(
                where={
                    "userId_questionId": { # This assumes the unique constraint is named userId_questionId by Prisma
                        "userId": current_user_id,
                        "questionId": payload.question_id
                    }
                }
            )

            if existing_wrongdoing_entry and not existing_wrongdoing_entry.retestedCorrectly:
                updated_entry = await db.userwrongdoingquestion.update(
                    where={
                        "id": existing_wrongdoing_entry.id # Update by the primary key of the found entry
                    },
                    data={
                        "retestedCorrectly": True
                        # timestampMarkedWrong remains the same.
                        # Optionally, add/update a 'timestampRetestedCorrectly' field here.
                    }
                )
                print(f"UserWrongdoingQuestion for user '{current_user_id}', q_id: '{payload.question_id}' (ID: {updated_entry.id}) marked as retestedCorrectly.")
        
        # Return SubmitAnswerResponse
        return SubmitAnswerResponse(
            is_correct=is_correct,
            correct_answer_id=dummy_question.correctOptionId,
            correct_answer_text=correct_option_text, # Text of the correct option
            current_points=123 # Placeholder points
        )

    except Exception as e:
        # This would catch errors from DB operations if they were active, or other unexpected errors.
        print(f"Error during answer processing for user '{current_user_id}', Q: '{payload.question_id}': {e}")
        # Log the full traceback for debugging if possible
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred while processing your answer: {str(e)}")

@router.post("/session/submit", response_model=SubmitQuizSessionResponse, tags=["MCQs Quiz Session"])
async def submit_quiz_session_endpoint(
    payload: SubmitQuizSessionRequest = Body(...),
    db: Prisma = Depends(get_db),
    current_user_id: str = Depends(get_current_user_id_from_header)
):
    """
    Submits a completed quiz session, calculates points for the session,
    and updates the user\\'s dashboard data.
    """
    print(f"--- SUBMIT QUIZ SESSION START ---") # New Log
    print(f"User {current_user_id} submitted quiz session. Topic: {payload.topic_id}") # New Log
    print(f"Received answers_map: {payload.answers_map}") # New Log
    print(f"Number of answers received: {len(payload.answers_map)}") # New Log

    session_points_earned = 0
    points_per_correct_answer = 10 # Example: 10 points per correct answer
    processed_question_ids = [] # New Log: To track processed questions

    # Calculate points for this session based on the submitted answers_map
    # This requires knowing the correct answers for the questions.
    # We use our dummy_questions_data for this.
    for question_id, selected_option_id in payload.answers_map.items():
        print(f"Processing Q_ID: {question_id}, Selected_Option_ID: {selected_option_id}") # New Log
        processed_question_ids.append(question_id) # New Log
        dummy_question = get_dummy_question_by_id(question_id)
        
        if not dummy_question: # New Log Block
            print(f"  WARNING: Dummy question with ID '{question_id}' NOT FOUND in dummy_questions_data. Skipping.")
            continue

        print(f"  Found dummy_question: ID={dummy_question.id}, CorrectOptionID={dummy_question.correctOptionId}") # New Log
        if dummy_question.correctOptionId == selected_option_id:
            session_points_earned += points_per_correct_answer
            print(f"  CORRECT. Points for this question: {points_per_correct_answer}. Current session_points_earned: {session_points_earned}") # New Log
        else:
            print(f"  INCORRECT. Points for this question: 0. Current session_points_earned: {session_points_earned}") # New Log
    
    print(f"Total session points earned for user {current_user_id}: {session_points_earned}")
    print(f"Processed question IDs: {processed_question_ids}") # New Log
    print(f"Number of questions processed: {len(processed_question_ids)}") # New Log
    print(f"--- END OF POINTS CALCULATION ---") # New Log

    try:
        # Fetch or create UserDashboardData
        dashboard_data = await db.userdashboarddata.find_unique(where={"userId": current_user_id})

        if not dashboard_data:
            print(f"No dashboard data found for user {current_user_id}, creating new record.")
            dashboard_data = await db.userdashboarddata.create(
                data={
                    "userId": current_user_id,
                    "totalPoints": session_points_earned,
                    "previousSessionPoints": session_points_earned,
                    "pointsHistory": json.dumps([{ # Storing as JSON string
                        "timestamp": datetime.now(timezone.utc).isoformat(),
                        "points": session_points_earned,
                        "topic_id": payload.topic_id or "unknown_topic"
                    }])
                }
            )
        else:
            # Parse existing pointsHistory (it\'s a JSON string)
            try:
                current_history = json.loads(dashboard_data.pointsHistory) if dashboard_data.pointsHistory else []
            except json.JSONDecodeError:
                print(f"Warning: Could not parse pointsHistory for user {current_user_id}. Resetting history.")
                current_history = []

            current_history.append({
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "points": session_points_earned,
                "topic_id": payload.topic_id or "unknown_topic"
            })
            # Keep only the last N history entries if needed (e.g., last 50)
            max_history_items = 50 
            if len(current_history) > max_history_items:
                current_history = current_history[-max_history_items:]


            dashboard_data = await db.userdashboarddata.update(
                where={"userId": current_user_id},
                data={
                    "totalPoints": dashboard_data.totalPoints + session_points_earned,
                    "previousSessionPoints": session_points_earned,
                    "pointsHistory": json.dumps(current_history) # Store back as JSON string
                }
            )
        
        print(f"Dashboard data updated for user {current_user_id}.")

        # Prepare response
        response_dashboard_data = DashboardDataResponse( # Changed UserDashboardDataResponse to DashboardDataResponse
            user_id=dashboard_data.userId,
            total_points=dashboard_data.totalPoints,
            previous_session_points=dashboard_data.previousSessionPoints,
            points_history=json.loads(dashboard_data.pointsHistory), # Parse for response
            last_5_wrong_questions=[] # Add this field, assuming it's empty here or fetched separately if needed
        )

        return SubmitQuizSessionResponse(
            message="Quiz session submitted successfully and dashboard updated.",
            session_points_earned=session_points_earned,
            updated_dashboard_data=response_dashboard_data
        )

    except Exception as e:
        print(f"Error updating dashboard data for user {current_user_id}: {e}")
        # Potentially log the error more robustly
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Failed to update dashboard: {str(e)}")

# Example of how you might add more routes or refine existing ones
# For instance, an endpoint to get all topics:
# @router.get("/topics", response_model=List[str], tags=["MCQs"])
# async def get_all_topics():
#     return list(dummy_questions_data.keys())