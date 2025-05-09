import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Play MCQs Card */}
          <Link href="/play" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Play MCQs</h2>
              <p className="text-gray-600">Start practicing with personalized English MCQs</p>
            </div>
          </Link>

          {/* Dashboard Card */}
          <Link href="/dashboard" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">View Dashboard</h2>
              <p className="text-gray-600">Track your progress and performance</p>
            </div>
          </Link>

          {/* Retest Card */}
          <Link href="/retest" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Retest Wrong Questions</h2>
              <p className="text-gray-600">Review and practice questions you got wrong</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
