'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter, usePathname } from 'next/navigation';

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

    const isPublicRoute = publicRoutes.includes(pathname) || 
                          pathname.startsWith('/help/') || 
                          pathname.startsWith('/about/');
    
    // If user is on a public route (login, signup, etc.), allow access
    if (isPublicRoute) {
      // Only redirect authenticated users away from auth pages
      // Don't redirect unauthenticated users from signup/login pages
      if (isConnected && (pathname === '/login' || pathname === '/signup')) {
        const targetPath = redirectPath || '/home';
        setRedirectPath(null);
        router.push(targetPath);
      }
      return; // Always return here for public routes, don't continue with auth checks
    }
    
    // Only redirect to login if user is not connected AND trying to access a protected route
    if (!isConnected) {
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
