import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import StoryCard from "@/components/features/StoryCard";
import ScrollableSection from "@/components/features/ScrollableSection";

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
          <ScrollableSection title="Continue Reading">
            {stories.slice(0, 10).map((story) => (
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
          </ScrollableSection>

          {/* Recommended Stories */}
          <ScrollableSection title="Trending" showAllLink="/ranking">
            {stories.slice(0, 9).map((story, index) => (
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
          </ScrollableSection>

          {/* Top Picks For You Section */}
          <ScrollableSection title="Top Picks For You" showAllLink="/for-you">
            {stories.slice(0, 9).map((story) => (
              <StoryCard
                key={story.id}
                id={story.id}
                title={story.title}
                genre={story.genre}
                coverImage={story.coverImage}
              />
            ))}
          </ScrollableSection>

          {/* Newly Released Section */}
          <ScrollableSection
            title="Newly Released"
            showAllLink="/categories?filter=new"
          >
            {stories.slice(0, 9).map((story) => (
              <StoryCard
                key={story.id}
                id={story.id}
                title={story.title}
                genre={story.genre}
                coverImage={story.coverImage}
                size="large"
              />
            ))}
          </ScrollableSection>

          {/* Categories Section */}
          <section className="mb-12 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black font-benrock">
                Categories
              </h2>
              <button className="text-primary font-semibold text-sm hover:underline">
                See more
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {[
                { name: "ROMANCE", icon: "❤️" },
                { name: "COMEDY", icon: "😄" },
                { name: "FANTASY", icon: "🎭" },
                { name: "DRAMA", icon: "🎭" },
                { name: "SCI FI", icon: "🚀" },
                { name: "HORROR", icon: "👻" },
                { name: "THRILLER", icon: "🖌️" },
                { name: "ADVENTURE", icon: "⛑️" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="flex flex-col items-center min-w-[100px] cursor-pointer group"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-2 group-hover:bg-primary/80 transition-colors">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-black text-center">
                    {category.name}
                  </span>
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
