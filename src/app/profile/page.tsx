import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";



export default function ProfilePage() {
  const readingHistory = [
    { id: 1, title: "Title of the story", genre: "Genre", progress: 85 },
    { id: 2, title: "Title of the story", genre: "Genre", progress: 92 },
    { id: 3, title: "Title of the story", genre: "Genre", progress: 67 },
    { id: 4, title: "Title of the story", genre: "Genre", progress: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-4xl mx-auto p-6">
        {/* Profile Header - Wireframe */}
        <div className="border border-gray-300 p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-200 border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
              <User className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-semibold mb-2">User Name</h1>
              <p className="text-sm text-gray-600 mb-3">
                User bio and description goes here
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>127 Stories Read</span>
                <span>4.8 Rating</span>
                <span>Member since March 2024</span>
              </div>
            </div>
            <Link href="/profile/edit">
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Button size="sm" className="bg-gray-800 text-white">
            Reading History
          </Button>
          <Link href="/profile/coin-balance">
            <Button variant="outline" size="sm">
              Coin Balance
            </Button>
          </Link>
          <Link href="/profile/bookmarks">
            <Button variant="outline" size="sm">
              Bookmarks
            </Button>
          </Link>
          <Link href="/profile/settings">
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </Link>
        </div>

        {/* Reading History - Wireframe */}
        <div className="border border-gray-300">
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Reading History</h2>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {readingHistory.map((story) => (
              <Link key={story.id} href={`/story/${story.id}`}>
                <div className="border border-gray-300 p-3">
                  <div className="h-24 bg-gray-100 border border-gray-300 mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Cover</span>
                  </div>
                  <h3 className="text-sm font-medium truncate mb-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{story.genre}</p>
                  <div className="w-full bg-gray-200 h-1 rounded mb-1">
                    <div
                      className="bg-gray-400 h-1 rounded"
                      style={{ width: `${story.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">
                    {story.progress}% Complete
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
