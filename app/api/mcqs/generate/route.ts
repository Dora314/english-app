import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/lib/db";

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { topic_string, num_questions } = await request.json();
    
    // TODO: Implement AI question generation
    const mockQuestions = Array(num_questions).fill(null).map((_, index) => ({
      id: `q${index + 1}`,
      question_text: `Sample question ${index + 1} about ${topic_string}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
    }));

    // Save questions to database
    const savedQuestions = await prisma.$transaction(
      mockQuestions.map(q => 
        prisma.question.create({
          data: {
            text: q.question_text,
            options: q.options,
            topic: topic_string,
          },
        })
      )
    );

    return NextResponse.json({
      questions: savedQuestions,
      topic_id: "topic123",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
} 