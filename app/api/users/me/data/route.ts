import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/lib/db";

export async function DELETE() {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Delete all user data in a transaction
    await prisma.$transaction([
      prisma.userAnswer.deleteMany({
        where: { userId: user.id },
      }),
      prisma.userWrongdoingQuestion.deleteMany({
        where: { userId: user.id },
      }),
      prisma.userDashboardData.deleteMany({
        where: { userId: user.id },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user data" },
      { status: 500 }
    );
  }
} 