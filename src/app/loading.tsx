import { BookOpen, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <Sparkles className="w-6 h-6 text-purple-500 absolute -top-2 -right-2 animate-bounce" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Your Stories...</h2>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Fun Loading Messages */}
        <div className="text-gray-600 animate-pulse">
          <p>Preparing magical tales just for you...</p>
        </div>
      </div>
    </div>
  );
}
