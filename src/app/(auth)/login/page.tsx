'use client';

import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { isConnected } = useAccount();
  const { isLoading } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Handle wallet connection during login - redirect to home
    if (isConnected && isMounted && !isLoading) {
      router.push('/home');
    }
  }, [isConnected, isMounted, isLoading, router]);

  // Show loading spinner while checking authentication
  if (!isMounted || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2  border-[#FFAB36]"></div>
      </div>
    );
  }

  // If user is connected (authenticated), show loading state while redirecting
  if (isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFAB36]"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div className=" text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Tale Threads</h1>
      </div>
      
      <div className="space-y-3">
        <h2 className="text-lg mb-6 font-semibold text-gray-700">Welcome back 👋</h2>
        {/* Email Field */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FFAB36] focus:border-transparent"
            placeholder=""
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FFAB36] focus:border-transparent"
              placeholder=""
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="w-3.5 h-3.5 text-[#FFAB36] border-gray-300 rounded focus:ring-[#FFAB36]"
          />
          <label htmlFor="terms" className="text-xs text-gray-600">
            I understood the{' '}
            <Link href="/help/terms" className="text-[#FFAB36] hover:underline">
              terms & policy
            </Link>
          </label>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2.5 px-4 text-sm rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="w-full">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 text-sm border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          <span className="text-gray-700 font-medium">Continue with Wallet</span>
                        </button>
                      );
                    }

                    return (
                      <div className="flex gap-2">
                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm"
                        >
                          {account.displayName}
                        </button>
                        {chain.unsupported && (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm"
                          >
                            Wrong network
                          </button>
                        )}
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#FFAB36] hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
