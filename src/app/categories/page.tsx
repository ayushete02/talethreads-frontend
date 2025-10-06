"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import StoryCard from "@/components/features/StoryCard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");

  const [activeCategory, setActiveCategory] = useState(
    categoryParam || "romance"
  );

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = [
    { id: "romance", name: "Romance", icon: "❤️" },
    { id: "thriller", name: "Thriller", icon: "🖌️" },
    { id: "sci-fi", name: "Sci-Fi", icon: "🚀" },
    { id: "drama", name: "Drama", icon: "🎭" },
    { id: "horror", name: "Horror", icon: "👻" },
    { id: "comedy", name: "Comedy", icon: "😄" },
    { id: "fantasy", name: "Fantasy", icon: "🎭" },
    { id: "adventure", name: "Adventure", icon: "⛑️" },
  ];

  const stories = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: "Title of the story",
    genre: filterParam === "new" ? "New Release" : "Genre",
    author: "Author Name",
    rating: 4.8,
    views: "1.2k",
    coverImage: [
      "/assets/reding-preference/scott-piligrim.png",
      "/assets/reding-preference/bravest-warriors.png",
      "/assets/reding-preference/peanuts.png",
    ][i % 3],
  }));

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AppHeader currentPage="categories" />

        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          {/* Category Pills */}
          <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-black"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {stories.map((story) => (
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
