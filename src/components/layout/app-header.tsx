"use client";

import Link from "next/link";
import {
  Search,
  Bell,
  User,
  PenTool,
  ChevronDown,
  Menu,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccount, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface HeaderProps {
  currentPage?: "categories" | "ranking" | "for-you" | "home" | "profile";
}

export default function AppHeader({ currentPage }: HeaderProps) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const getNavLinkClass = (page: string) => {
    return currentPage === page
      ? "text-blue-400 font-semibold"
      : "hover:text-gray-300 transition-colors";
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleLogout = () => {
    disconnect();
  };

  return (
    <header className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Link href="/home" className="font-bold text-xl">
              TaleThreads
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/categories" className={getNavLinkClass("categories")}>
              CATEGORIES
            </Link>
            <Link href="/ranking" className={getNavLinkClass("ranking")}>
              RANKING
            </Link>
            <Link href="/for-you" className={getNavLinkClass("for-you")}>
              FOR YOU
            </Link>
            <Link
              href="/profile/library"
              className="hover:text-gray-300 transition-colors"
            >
              LIBRARY
            </Link>
          </nav>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div className="relative group">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {isConnected && address && (
                  <>
                    <div className="px-4 py-2 text-xs text-gray-500 border-b">
                      Connected Wallet
                    </div>
                    <div className="px-4 py-2 text-sm font-mono text-gray-900 bg-gray-50 break-all">
                      {formatAddress(address)}
                    </div>
                    <hr className="my-1" />
                  </>
                )}
                <Link
                  href="/categories"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Categories
                </Link>
                <Link
                  href="/ranking"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Ranking
                </Link>
                <Link
                  href="/for-you"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  For You
                </Link>
                <Link
                  href="/profile/library"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Library
                </Link>
                <hr className="my-1" />
                <Link
                  href="/search"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Search
                </Link>
                <Link
                  href="/notifications"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </Link>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                {isConnected ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Disconnect Wallet
                  </button>
                ) : (
                  <div className="px-4 py-2">
                    <ConnectButton.Custom>
                      {({ openConnectModal }) => (
                        <Button
                          onClick={openConnectModal}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          Connect Wallet
                        </Button>
                      )}
                    </ConnectButton.Custom>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/search">
            <div className="inline-flex items-center justify-center h-9 w-9 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
              <Search className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/notifications">
            <div className="inline-flex items-center justify-center h-9 w-9 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
              <Bell className="h-5 w-5" />
            </div>
          </Link>

          {/* Author/Dashboard Menu */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Write</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/create/story"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  New Story
                </Link>
                <Link
                  href="/create/chapter"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Add Chapter
                </Link>
                <Link
                  href="/dashboard/stories"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Stories
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Menu / Wallet Connection */}
          {isConnected ? (
            <div className="relative group">
              <Button variant="ghost" className="flex items-center gap-2 px-3">
                <User className="h-4 w-4" />
                <span className="text-sm font-mono">
                  {address && formatAddress(address)}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs text-gray-500 border-b">
                    Connected Wallet
                  </div>
                  <div className="px-4 py-2 text-sm font-mono text-gray-900 bg-gray-50">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </div>
                  <hr className="my-1" />
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/profile/library"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Library
                  </Link>
                  <Link
                    href="/profile/bookmarks"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bookmarks
                  </Link>
                  <Link
                    href="/profile/coin-balance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Coin Balance
                  </Link>
                  <Link
                    href="/profile/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ConnectButton.Custom>
                {({ openConnectModal }) => (
                  <Button
                    onClick={openConnectModal}
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-gray-800"
                  >
                    Connect Wallet
                  </Button>
                )}
              </ConnectButton.Custom>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
