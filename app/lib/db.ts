import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function saveUserAnswer(
  userId: string,
  questionId: string,
  selectedAnswer: string,
  isCorrect: boolean
) {
  return prisma.userAnswer.create({
    data: {
      userId,
      questionId,
      selectedAnswer,
      isCorrect,
    },
  });
}

export async function addWrongdoingQuestion(
  userId: string,
  questionId: string
) {
  return prisma.userWrongdoingQuestion.create({
    data: {
      userId,
      questionId,
      retestedCorrectly: false,
    },
  });
}

export async function updateUserPoints(
  userId: string,
  points: number
) {
  return prisma.userDashboardData.upsert({
    where: { userId },
    update: {
      totalPoints: { increment: points },
      previousSessionPoints: points,
    },
    create: {
      userId,
      totalPoints: points,
      previousSessionPoints: points,
    },
  });
}

export async function getWrongQuestions(
  userId: string,
  count: number
) {
  return prisma.userWrongdoingQuestion.findMany({
    where: {
      userId,
      retestedCorrectly: false,
    },
    take: count,
    include: {
      question: true,
    },
  });
} 