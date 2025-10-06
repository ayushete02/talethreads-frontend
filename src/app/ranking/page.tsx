import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import StoryCard from "@/components/features/StoryCard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const rankings = [
  {
    rank: 1,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "234K",
    score: 9.8,
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  },
  {
    rank: 2,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "189K",
    score: 9.6,
    coverImage: "/assets/reding-preference/bravest-warriors.png",
  },
  {
    rank: 3,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "156K",
    score: 9.5,
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  },
  {
    rank: 4,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "134K",
    score: 9.4,
    coverImage: "/assets/reding-preference/peanuts.png",
  },
  {
    rank: 5,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "112K",
    score: 9.3,
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  },
  {
    rank: 6,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "98K",
    score: 9.2,
    coverImage: "/assets/reding-preference/bravest-warriors.png",
  },
  {
    rank: 7,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "87K",
    score: 9.1,
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  },
  {
    rank: 8,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "76K",
    score: 9.0,
    coverImage: "/assets/reding-preference/peanuts.png",
  },
  {
    rank: 9,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "65K",
    score: 8.9,
    coverImage: "/assets/reding-preference/scott-piligrim.png",
  },
  {
    rank: 10,
    title: "Title of the story",
    genre: "Genre",
    author: "Author Name",
    views: "54K",
    score: 8.8,
    coverImage: "/assets/reding-preference/bravest-warriors.png",
  },
];

export default function RankingPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AppHeader currentPage="ranking" />

        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-black font-benrock mb-2">
              Trending
            </h1>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {rankings.map((story) => (
              <StoryCard
                key={story.rank}
                id={story.rank}
                title={story.title}
                genre={story.genre}
                coverImage={story.coverImage}
                rank={story.rank}
                showRank={true}
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
