import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/lib/db";

interface WrongQuestion {
  questionId: string;
  question: {
    text: string;
    options: string[];
    correctAnswer: string;
  };
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { count } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const wrongQuestions = await prisma.userWrongdoingQuestion.findMany({
      where: {
        userId: user.id,
        retestedCorrectly: false,
      },
      take: count,
      include: {
        question: true,
      },
    });

    return NextResponse.json({
      questions: wrongQuestions.map((wq: WrongQuestion) => ({
        id: wq.questionId,
        question_text: wq.question.text,
        options: wq.question.options,
        previousUserAnswer: wq.question.correctAnswer,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate retest questions" },
      { status: 500 }
    );
  }
} 