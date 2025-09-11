'use client';

import { OfflineRetryButton } from '@/components/offline-retry-button';


export default function Offline() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5v6.5M12 15v6.5"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            You&apos;re Offline
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            It looks like you&apos;re not connected to the internet. Don&apos;t worry, you can still use some features of the app.
          </p>
          <OfflineRetryButton />
        </div>
      </div>
    </div>
  );
}
