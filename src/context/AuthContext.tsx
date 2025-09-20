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
const publicRoutes = ['/', '/login', '/signup'];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Skip authentication check while loading or not mounted
    if (isLoading || !hasMounted) return;

    const isPublicRoute = publicRoutes.includes(pathname);
    
    // If user is not connected and trying to access a protected route
    if (!isConnected && !isPublicRoute) {
      setRedirectPath(pathname);
      router.push('/login');
      return;
    }

    // If user is connected and on login/signup page, redirect appropriately
    if (isConnected && (pathname === '/login' || pathname === '/signup')) {
      const targetPath = redirectPath || '/home';
      setRedirectPath(null);
      router.push(targetPath);
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
