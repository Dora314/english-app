import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // TODO: Fetch actual data from your database
    // This is mock data for demonstration
    const mockData = {
      totalPoints: 1250,
      previousSessionPoints: 150,
      pointsHistory: [
        { date: "2024-01-01", points: 100 },
        { date: "2024-01-02", points: 150 },
        { date: "2024-01-03", points: 200 },
        { date: "2024-01-04", points: 180 },
        { date: "2024-01-05", points: 250 },
      ],
      wrongQuestions: [
        {
          id: "1",
          question: "What is the past simple form of 'go'?",
          userAnswer: "gone",
          correctAnswer: "went",
          date: "2024-01-05",
        },
        {
          id: "2",
          question: "Which sentence uses the past simple tense correctly?",
          userAnswer: "I am going to the store yesterday",
          correctAnswer: "I went to the store yesterday",
          date: "2024-01-04",
        },
      ],
    };

    return NextResponse.json(mockData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
} 