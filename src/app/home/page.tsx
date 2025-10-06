import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import StoryCard from "@/components/features/StoryCard";

export default function HomePage() {
  const stories = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Title of the story`,
    genre: "Genre",
    author: "Author Name",
    rating: 4.8,
    views: "1.2k",
    progress: Math.floor(Math.random() * 100),
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  }));

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AppHeader currentPage="home" />

        <main className="">
          {/* Featured Stories Banner */}
          <section className="mb-8">
            <div
              className="relative h-[85vh] overflow-hidden bg-cover bg-center "
              style={{ backgroundImage: "url(/assets/home/banner.jpg)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/100 via-background/30 to-transparent">
                <div className="absolute bottom-6 left-8">
                  <h1 className="text-9xl font-bold mb-4 text-black font-benrock tracking-wider">
                    STORY NAME
                  </h1>
                  <Button className="bg-[#FF9500] hover:bg-[#FF9500]/90 text-black font-bold px-8 py-3 rounded-md transition-colors uppercase text-sm">
                    START READING
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Continue Reading Section */}
          <section className="mb-12 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black font-benrock">
                Continue Reading
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stories.slice(0, 5).map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  genre={story.genre}
                  coverImage={story.coverImage}
                  progress={story.progress}
                  showProgress={true}
                  cardInfo={false}
                />
              ))}
            </div>
          </section>

          {/* Recommended Stories */}
          <section className="mb-12 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black font-benrock">
                Trending
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stories.slice(0, 5).map((story, index) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  genre={story.genre}
                  coverImage={story.coverImage}
                  rank={index + 1}
                  showRank={true}
                  cardInfo={true}
                />
              ))}
            </div>
          </section>

          {/* Top Picks For You Section */}
          <section className="mb-12 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black font-benrock">
                Top Picks For You
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stories.slice(0, 5).map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  genre={story.genre}
                  coverImage={story.coverImage}
                />
              ))}
            </div>
          </section>

          {/* Newly Released Section */}
          <section className="mb-12 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black font-benrock">
                Newly Released
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stories.slice(0, 5).map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  genre={story.genre}
                  coverImage={story.coverImage}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
