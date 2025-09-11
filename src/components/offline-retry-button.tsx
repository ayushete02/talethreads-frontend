'use client';

export function OfflineRetryButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
    >
      Try Again
    </button>
  );
}
