"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  previousUserAnswer: string;
}

export default function RetestPage() {
  const router = useRouter();
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleStartRetest = async () => {
    if (!questionCount || questionCount < 1) return;
    
    setIsLoading(true);
    try {
      const response = await fetch("/api/retest/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: questionCount }),
      });
      
      if (!response.ok) throw new Error("Failed to fetch questions");
      
      const data = await response.json();
      setQuestions(data.questions);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
    } catch (error) {
      console.error("Error fetching questions:", error);
      // Handle error (show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questions[currentQuestionIndex].id]: answer
    }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Submit all answers
      try {
        const response = await fetch("/api/retest/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers: selectedAnswers
          }),
        });
        
        if (!response.ok) throw new Error("Failed to submit answers");
        
        router.push("/"); // Redirect to main page after successful submission
      } catch (error) {
        console.error("Error submitting answers:", error);
        // Handle error (show error message to user)
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {questions.length === 0 ? (
          // Step 1: Question Count Input
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Retest Wrong Questions</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="questionCount" className="block text-sm font-medium text-gray-700">
                  How many wrong questions would you like to retest?
                </label>
                <input
                  type="number"
                  id="questionCount"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value) || 0)}
                  min="1"
                  max="20"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Enter a number between 1 and 20
                </p>
              </div>
              <button
                onClick={handleStartRetest}
                disabled={isLoading || !questionCount || questionCount < 1}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isLoading ? "Loading..." : "Start Retest"}
              </button>
            </div>
          </div>
        ) : (
          // Step 2: Question Display
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              {questions[currentQuestionIndex].previousUserAnswer && (
                <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    Your previous answer: {questions[currentQuestionIndex].previousUserAnswer}
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">
                {questions[currentQuestionIndex].text}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedAnswers[questions[currentQuestionIndex].id] === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between pt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswers[questions[currentQuestionIndex].id]}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 