export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface UserAnswer {
  id: string;
  userId: string;
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timestamp: Date;
}

export interface UserWrongdoingQuestion {
  id: string;
  userId: string;
  questionId: string;
  retestedCorrectly: boolean;
  lastAttempted: Date;
}

export interface UserDashboardData {
  userId: string;
  totalPoints: number;
  previousSessionPoints: number;
  pointsHistory: {
    date: Date;
    points: number;
  }[];
} 