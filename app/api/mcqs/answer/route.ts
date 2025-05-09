import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/lib/db";

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { question_id, selected_answer_text } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const question = await prisma.question.findUnique({
      where: { id: question_id },
    });

    if (!question) {
      return NextResponse.json({ error: "Question not found" }, { status: 404 });
    }

    const isCorrect = selected_answer_text === question.correctAnswer;

    // Save answer and update points in a transaction
    const [answer, dashboard] = await prisma.$transaction([
      prisma.userAnswer.create({
        data: {
          userId: user.id,
          questionId: question_id,
          selectedAnswer: selected_answer_text,
          isCorrect,
        },
      }),
      prisma.userDashboardData.upsert({
        where: { userId: user.id },
        update: {
          totalPoints: { increment: isCorrect ? 10 : 0 },
          previousSessionPoints: isCorrect ? 10 : 0,
        },
        create: {
          userId: user.id,
          totalPoints: isCorrect ? 10 : 0,
          previousSessionPoints: isCorrect ? 10 : 0,
          pointsHistory: [],
        },
      }),
    ]);

    // If answer is incorrect, add to wrong questions
    if (!isCorrect) {
      await prisma.userWrongdoingQuestion.create({
        data: {
          userId: user.id,
          questionId: question_id,
        },
      });
    }

    return NextResponse.json({
      is_correct: isCorrect,
      correct_answer_text: question.correctAnswer,
      current_points: dashboard.totalPoints,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process answer" },
      { status: 500 }
    );
  }
} 