import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { topic } = await request.json();
    
    // TODO: Implement actual question generation using your AI backend
    // This is a mock response for now
    const mockQuestions = [
      {
        id: "1",
        text: "What is the past simple form of 'go'?",
        options: ["went", "gone", "goed", "going"],
        correctAnswer: "went"
      },
      {
        id: "2",
        text: "Which sentence uses the past simple tense correctly?",
        options: [
          "I am going to the store yesterday",
          "I went to the store yesterday",
          "I have gone to the store yesterday",
          "I going to the store yesterday"
        ],
        correctAnswer: "I went to the store yesterday"
      }
    ];

    return NextResponse.json({ questions: mockQuestions });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
} 