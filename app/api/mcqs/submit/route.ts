import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/app/lib/db';

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { answers } = await request.json();
    
    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Save answers
    const savedAnswers = await Promise.all(
      Object.entries(answers).map(([questionId, selectedAnswer]) =>
        prisma.userAnswer.create({
          data: {
            userId: user.id,
            questionId,
            selectedAnswer: selectedAnswer as string,
            isCorrect: false, // Will be updated after checking
          }
        })
      )
    );

    // Update correct answers
    for (const answer of savedAnswers) {
      const question = await prisma.question.findUnique({
        where: { id: answer.questionId }
      });

      if (question) {
        const isCorrect = answer.selectedAnswer === question.correctAnswer;
        
        await prisma.userAnswer.update({
          where: { id: answer.id },
          data: { isCorrect }
        });

        if (!isCorrect) {
          await prisma.userWrongdoingQuestion.create({
            data: {
              userId: user.id,
              questionId: question.id
            }
          });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting answers:', error);
    return NextResponse.json(
      { error: 'Failed to submit answers' },
      { status: 500 }
    );
  }
}
