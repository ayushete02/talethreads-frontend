import Link from "next/link";
import { Search, Bell, User, PenTool, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentPage?: "categories" | "ranking" | "for-you" | "home" | "profile";
}

export default function AppHeader({ currentPage }: HeaderProps) {
  const getNavLinkClass = (page: string) => {
    return currentPage === page
      ? "text-blue-400 font-semibold"
      : "hover:text-gray-300 transition-colors";
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/home" className="font-bold text-xl">
            TaleThreads
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div className="relative group">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
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
              </div>
            </div>
          </div>
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

          {/* Profile Menu */}
          <div className="relative group">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
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
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
