import Link from 'next/link';
import { Bookmark, Search, Filter, Grid, List, Eye, Star, Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/app-header';



export default function BookmarksPage() {
  const bookmarks = [
    {
      id: 1,
      storyId: 1,
      title: 'The Magical Quest of Eldoria',
      author: 'Sarah Johnson',
      genre: 'Fantasy',
      coverImage: '/placeholder-cover.jpg',
      progress: 65,
      lastRead: '2 days ago',
      rating: 4.8,
      totalChapters: 25,
      readChapters: 16,
      bookmark: 'Chapter 16: The Crystal Cave',
      addedDate: '2024-11-15'
    },
    {
      id: 2,
      storyId: 5,
      title: 'Cyberpunk Chronicles',
      author: 'Alex Chen',
      genre: 'Sci-Fi',
      coverImage: '/placeholder-cover.jpg',
      progress: 30,
      lastRead: '1 week ago',
      rating: 4.5,
      totalChapters: 20,
      readChapters: 6,
      bookmark: 'Chapter 6: Digital Shadows',
      addedDate: '2024-11-10'
    },
    {
      id: 3,
      storyId: 8,
      title: 'Romance in Paris',
      author: 'Emma Wilson',
      genre: 'Romance',
      coverImage: '/placeholder-cover.jpg',
      progress: 90,
      lastRead: '3 days ago',
      rating: 4.9,
      totalChapters: 15,
      readChapters: 14,
      bookmark: 'Chapter 14: The Proposal',
      addedDate: '2024-11-05'
    },
    {
      id: 4,
      storyId: 12,
      title: 'Mystery of the Lost Library',
      author: 'David Brown',
      genre: 'Mystery',
      coverImage: '/placeholder-cover.jpg',
      progress: 45,
      lastRead: '5 days ago',
      rating: 4.6,
      totalChapters: 18,
      readChapters: 8,
      bookmark: 'Chapter 8: Hidden Clues',
      addedDate: '2024-11-01'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-6xl mx-auto p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookmarks</h1>
            <p className="text-gray-600">
              {bookmarks.length} saved stories â€¢ Continue your reading journey
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bookmarks Grid */}
        {bookmarks.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookmarks Yet</h3>
            <p className="text-gray-500 mb-6">
              Start bookmarking your favorite stories to keep track of your reading progress.
            </p>
            <Link href="/home">
              <Button>
                Discover Stories
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Cover Image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-purple-500 relative">
                  <div className="absolute top-3 right-3">
                    <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {bookmark.progress}% Complete
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                      {bookmark.genre}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {bookmark.rating}
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                    {bookmark.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">by {bookmark.author}</p>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>{bookmark.readChapters}/{bookmark.totalChapters} chapters</span>
                      <span>{bookmark.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                        style={{ width: `${bookmark.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Bookmark Info */}
                  <div className="text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Bookmark className="w-3 h-3" />
                      <span className="truncate">{bookmark.bookmark}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Last read {bookmark.lastRead}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/story/${bookmark.storyId}/read`} className="flex-1">
                      <Button size="sm" className="w-full">
                        Continue Reading
                      </Button>
                    </Link>
                    <Link href={`/story/${bookmark.storyId}`}>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reading Statistics */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Reading Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {bookmarks.length}
              </div>
              <div className="text-sm text-gray-600">Bookmarked Stories</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {bookmarks.reduce((acc, b) => acc + b.readChapters, 0)}
              </div>
              <div className="text-sm text-gray-600">Chapters Read</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {Math.round(bookmarks.reduce((acc, b) => acc + b.progress, 0) / bookmarks.length)}%
              </div>
              <div className="text-sm text-gray-600">Average Progress</div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {(bookmarks.reduce((acc, b) => acc + b.rating, 0) / bookmarks.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
