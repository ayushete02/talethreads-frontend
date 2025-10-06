import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import StoryCard from "@/components/features/StoryCard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ForYouPage() {
  const personalizedStories = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: "Title of the story",
    genre: "Genre",
    matchPercentage: Math.floor(Math.random() * 30) + 70,
    coverImage: [
      "/assets/reding-preference/scott-piligrim.png",
      "/assets/reding-preference/bravest-warriors.png",
      "/assets/reding-preference/peanuts.png",
    ][i % 3],
  }));

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AppHeader currentPage="for-you" />

        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-black font-benrock mb-2">
              Top Picks For You
            </h1>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {personalizedStories.map((story) => (
              <StoryCard
                key={story.id}
                id={story.id}
                title={story.title}
                genre={story.genre}
                coverImage={story.coverImage}
                cardInfo={true}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
