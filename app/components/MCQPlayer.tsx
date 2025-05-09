import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  created_at: string;
}

interface MCQPlayerProps {
  questions: Question[];
}

export default function MCQPlayer({ questions }: MCQPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  const currentQuestion = questions[currentIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(answers[questions[currentIndex + 1].id] || null);
      setShowExplanation(false);
    } else {
      // Submit all answers
      try {
        // Submit each answer individually
        for (const [questionId, answer] of Object.entries(answers)) {
          const response = await fetch(
            `http://localhost:8000/api/mcqs/answer?question_id=${questionId}&selected_answer=${encodeURIComponent(answer)}`,
            {
              method: 'POST',
              headers: { 
                'Authorization': `Bearer ${session?.user?.accessToken}`
              }
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to submit answers');
          }
        }

        router.push('/dashboard');
      } catch (error) {
        console.error('Error submitting answers:', error);
        setError('Failed to submit answers. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full text-left p-3 rounded-md border ${
              selectedAnswer === option
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
          >
            {`${String.fromCharCode(65 + index)}. ${option}`}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div className="mt-6">
          <button
            onClick={() => setShowExplanation(true)}
            className="text-blue-600 hover:text-blue-800"
          >
            Show Explanation
          </button>

          {showExplanation && currentQuestion.explanation && (
            <div className="mt-2 p-4 bg-gray-50 rounded-md">
              {currentQuestion.explanation}
            </div>
          )}

          <button
            onClick={handleNext}
            className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}
