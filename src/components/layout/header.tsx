import Link from 'next/link';
import { Search, Bell, User } from 'lucide-react';

interface HeaderProps {
  currentPage?: 'categories' | 'ranking' | 'for-you' | 'home';
}

export default function Header({ currentPage }: HeaderProps) {
  const getNavLinkClass = (page: string) => {
    return currentPage === page 
      ? 'text-blue-400 font-semibold' 
      : 'hover:text-gray-300 transition-colors';
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/home" className="font-bold text-xl">
            TaleThreads
          </Link>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link href="/categories" className={getNavLinkClass('categories')}>
            CATEGORIES
          </Link>
          <Link href="/ranking" className={getNavLinkClass('ranking')}>
            RANKING
          </Link>
          <Link href="/for-you" className={getNavLinkClass('for-you')}>
            FOR YOU
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/search">
            <div className="inline-flex items-center justify-center h-9 w-9 text-white hover:text-gray-300 rounded-md transition-colors">
              <Search className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/notifications">
            <div className="inline-flex items-center justify-center h-9 w-9 text-white hover:text-gray-300 rounded-md transition-colors">
              <Bell className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/profile">
            <div className="inline-flex items-center justify-center h-9 w-9 text-white hover:text-gray-300 rounded-md transition-colors">
              <User className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
