import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function HomePage() {
  const stories = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Title of the story ${i + 1}`,
    genre: "Genre",
    author: "Author Name",
    rating: 4.8,
    views: "1.2k",
    progress: Math.floor(Math.random() * 100),
  }));

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <AppHeader currentPage="home" />

        <main className="max-w-6xl mx-auto p-6">
          {/* Featured Stories - Wireframe */}
          <section className="mb-8">
            <div className="border-2 border-dashed border-gray-300 p-6 mb-6">
              <div className="h-32 border border-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Featured Story Banner</p>
              </div>
            </div>
          </section>

        {/* Continue Reading Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Continue Reading</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stories.slice(0, 5).map((story) => (
              <div key={story.id} className="border border-gray-300 p-3">
                <div className="h-24 bg-gray-100 border mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Cover</span>
                </div>
                <h3 className="text-sm font-medium truncate">{story.title}</h3>
                <p className="text-xs text-gray-500">{story.author}</p>
                <div className="mt-2 bg-gray-200 h-1 rounded">
                  <div
                    className="bg-gray-400 h-1 rounded"
                    style={{ width: `${story.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Stories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recommended For You</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stories.slice(0, 10).map((story) => (
              <div key={story.id} className="border border-gray-300 p-3">
                <div className="h-32 bg-gray-100 border mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Cover</span>
                </div>
                <h3 className="text-sm font-medium truncate">{story.title}</h3>
                <p className="text-xs text-gray-500">{story.author}</p>
                <p className="text-xs text-gray-400">{story.genre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Trending Now</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stories.slice(0, 6).map((story) => (
              <div key={story.id} className="border border-gray-300 p-3">
                <div className="h-24 bg-gray-100 border mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Cover</span>
                </div>
                <h3 className="text-sm font-medium truncate">{story.title}</h3>
                <p className="text-xs text-gray-500">{story.author}</p>
                <p className="text-xs text-gray-400">{story.views} views</p>
              </div>
            ))}
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
