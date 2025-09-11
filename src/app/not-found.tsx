import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <Search className="w-16 h-16 text-white opacity-50" />
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Story Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Oops! The story you&apos;re looking for seems to have wandered off
            into another dimension. Let&apos;s help you find your way back to
            the magical world of stories.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/home">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </Link>

          <Link href="/search">
            <Button variant="outline" size="lg" className="w-full">
              <Search className="w-5 h-5 mr-2" />
              Search Stories
            </Button>
          </Link>

          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link
              href="/categories"
              className="text-blue-600 hover:text-blue-700"
            >
              Browse Categories
            </Link>
            <Link href="/ranking" className="text-blue-600 hover:text-blue-700">
              Top Stories
            </Link>
            <Link href="/for-you" className="text-blue-600 hover:text-blue-700">
              For You
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
