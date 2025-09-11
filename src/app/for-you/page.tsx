import Link from 'next/link';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function ForYouPage() {
  const personalizedStories = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: 'Title of the story',
    genre: 'Genre',
    matchPercentage: Math.floor(Math.random() * 30) + 70, // 70-100%
    reason: ['Based on your genre preferences', 'Similar to stories you liked', 'Recommended by readers like you'][i % 3]
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-xl">
              TaleThreads Logo
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/categories" className="hover:text-gray-300">CATEGORIES</Link>
            <Link href="/ranking" className="hover:text-gray-300">RANKING</Link>
            <Link href="/for-you" className="text-blue-400 font-semibold">FOR YOU</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Stories Just For You</h1>
          <p className="text-xl text-gray-600">Personalized recommendations based on your reading history and preferences</p>
        </div>

        {/* AI Recommendation Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">ðŸ¤– AI-Powered Recommendations</h2>
              <p className="opacity-90">Our AI analyzed your preferences and found stories you&apos;ll love</p>
            </div>
            <Link href="/onboarding/persona">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Update Preferences
              </button>
            </Link>
          </div>
        </section>

        {/* Perfect Matches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Perfect Matches (90%+ compatibility)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalizedStories.filter(story => story.matchPercentage >= 90).map((story) => (
              <Link key={story.id} href={`/story/${story.id}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gray-300 relative">
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {story.matchPercentage}% match
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{story.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{story.genre}</p>
                    <p className="text-xs text-blue-600">{story.reason}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Good Matches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {personalizedStories.filter(story => story.matchPercentage < 90).map((story) => (
              <Link key={story.id} href={`/story/${story.id}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-40 bg-gray-300 relative">
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {story.matchPercentage}%
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">{story.title}</h3>
                    <p className="text-xs text-gray-600 mb-1">{story.genre}</p>
                    <p className="text-xs text-blue-600">{story.reason}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Help Us Improve Your Recommendations</h2>
          <p className="text-gray-600 mb-6">Rate the stories you&apos;ve read to get better personalized suggestions</p>
          <Link href="/profile">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Rate Your Reading History
            </button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">Help</a>
            <a href="#" className="hover:text-gray-800">News and Events</a>
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Services</a>
            <a href="#" className="hover:text-gray-800">Content Ratings</a>
            <a href="#" className="hover:text-gray-800">Copyrights</a>
            <a href="#" className="hover:text-gray-800">Community Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
