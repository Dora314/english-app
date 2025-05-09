"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface WrongQuestion {
  id: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  date: string;
}

interface PointsData {
  date: string;
  points: number;
}

interface DashboardData {
  totalPoints: number;
  previousSessionPoints: number;
  pointsHistory: Array<{ date: string; points: number }>;
  wrongQuestions: Array<{
    id: string;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    date: string;
  }>;
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      if (!response.ok) throw new Error("Failed to fetch dashboard data");
      
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetData = async () => {
    try {
      const response = await fetch("/api/dashboard/reset", {
        method: "POST",
      });
      
      if (!response.ok) throw new Error("Failed to reset dashboard data");
      
      // Refresh dashboard data
      await fetchDashboardData();
      setIsResetModalOpen(false);
    } catch (error) {
      console.error("Error resetting dashboard data:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">Loading...</div>
        </main>
      </div>
    );
  }

  if (!data) {
    return <div>Error loading dashboard</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="space-x-4">
            <button
              onClick={() => setIsResetModalOpen(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Reset Dashboard Data
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Return to Main Page
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Points Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Points Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Total Points</p>
                <p className="text-3xl font-bold">{data.totalPoints}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Session</p>
                <p className="text-2xl font-bold">{data.previousSessionPoints}</p>
              </div>
            </div>
          </div>

          {/* Points History */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Points History</h2>
            <div className="space-y-2">
              {data.pointsHistory.map((entry, index) => (
                <div key={index} className="flex justify-between">
                  <span>{new Date(entry.date).toLocaleDateString()}</span>
                  <span className="font-bold">{entry.points}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wrong Questions */}
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Questions to Review</h2>
            <div className="space-y-4">
              {data.wrongQuestions.map((question) => (
                <div key={question.id} className="border-b pb-4">
                  <p className="font-semibold">{question.question}</p>
                  <div className="mt-2 text-sm">
                    <p className="text-red-500">Your answer: {question.userAnswer}</p>
                    <p className="text-green-500">Correct answer: {question.correctAnswer}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(question.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {isResetModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md">
              <h2 className="text-xl font-bold mb-4">Reset Dashboard Data</h2>
              <p className="mb-4">
                Are you sure you want to reset all your dashboard data? This action cannot be undone.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleResetData}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsResetModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 