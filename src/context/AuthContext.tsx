'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  redirectPath: string | null;
  setRedirectPath: (path: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Pages that don't require authentication
const publicRoutes = ['/', '/login', '/signup', '/about', '/help'];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Add a small delay to ensure all components are mounted
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Skip authentication check while loading or not mounted
    if (isLoading || !hasMounted) return;

    // Debug logging
    console.log('AuthContext - Current pathname:', pathname);
    console.log('AuthContext - Is connected:', isConnected);
    console.log('AuthContext - Public routes:', publicRoutes);

    const isPublicRoute = publicRoutes.includes(pathname) || 
                          pathname.startsWith('/help/') || 
                          pathname.startsWith('/about/') ||
                          pathname === '/signup' || // Explicit check
                          pathname === '/login';   // Explicit check
    
    const isOnboardingRoute = pathname.startsWith('/onboarding/');
    
    console.log('AuthContext - Is public route:', isPublicRoute);
    console.log('AuthContext - Is onboarding route:', isOnboardingRoute);
    
    // If user is on a public route (login, signup, etc.), allow access
    if (isPublicRoute) {
      console.log('AuthContext - On public route, allowing access');
      // Only redirect authenticated users away from auth pages
      if (isConnected && (pathname === '/login' || pathname === '/signup')) {
        let targetPath;
        if (pathname === '/signup') {
          targetPath = '/onboarding/persona'; // New users go to onboarding
        } else {
          targetPath = redirectPath || '/home'; // Existing users go to home
        }
        console.log('AuthContext - Redirecting authenticated user to:', targetPath);
        setRedirectPath(null);
        router.push(targetPath);
      }
      return; // Always return here for public routes, don't continue with auth checks
    }
    
    // If user is on an onboarding route and authenticated, allow access
    if (isOnboardingRoute && isConnected) {
      console.log('AuthContext - On onboarding route and authenticated, allowing access');
      return;
    }
    
    console.log('AuthContext - Not on public/onboarding route, checking auth...');
    
    // Only redirect to login if user is not connected AND trying to access a protected route
    if (!isConnected) {
      console.log('AuthContext - Not connected, redirecting to login');
      setRedirectPath(pathname);
      router.push('/login');
      return;
    }
  }, [isConnected, pathname, router, isLoading, redirectPath, hasMounted]);

  const value: AuthContextType = {
    isAuthenticated: isConnected,
    isLoading,
    redirectPath,
    setRedirectPath,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
