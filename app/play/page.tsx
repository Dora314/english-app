"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import MCQGenerator from '../components/MCQGenerator';
import MCQPlayer from '../components/MCQPlayer';

export default function PlayPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const questionsParam = searchParams.get('questions');
    if (questionsParam) {
      try {
        const parsedQuestions = JSON.parse(decodeURIComponent(questionsParam));
        if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
          setError('No questions available. Please generate new questions.');
          router.push('/play'); // Redirect back to generator
        } else {
          setQuestions(parsedQuestions);
        }
      } catch (error) {
        console.error('Error parsing questions:', error);
        setError('Error loading questions. Please try again.');
        router.push('/play'); // Redirect back to generator
      }
    }
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <p className="text-red-500">{error}</p>
          <MCQGenerator />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {questions.length > 0 ? (
        <MCQPlayer questions={questions} />
      ) : (
        <MCQGenerator />
      )}
    </div>
  );
}