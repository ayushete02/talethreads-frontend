'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-8">
            It looks like we encountered an unexpected error. Don&apos;t worry, our team of digital wizards 
            is working hard to fix this issue. Please try again or return to the home page.
          </p>
        </div>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
            <p className="font-semibold text-sm text-gray-700 mb-2">Error Details:</p>
            <code className="text-xs text-red-600 break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            onClick={reset}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <Link href="/home">
            <Button variant="outline" size="lg" className="w-full">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Still having trouble?</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/help" className="text-red-600 hover:text-red-700">
              Contact Support
            </Link>
            <Link href="/help/faq" className="text-red-600 hover:text-red-700">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
