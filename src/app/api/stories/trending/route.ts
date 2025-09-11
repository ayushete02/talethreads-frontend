import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    // For static export, return default values
    const limit = 10;
    const offset = 0;

    // Mock trending stories data
    const allTrendingStories = [
      {
        id: 1,
        title: "The Last Echo",
        author: "Sarah Mitchell",
        genre: "Sci-Fi",
        rating: 4.8,
        views: 15420,
        chapters: 12,
        description:
          "In a world where memories can be extracted and stored, one woman discovers a conspiracy that threatens the very fabric of reality.",
        coverImage: "/images/story-1.jpg",
        tags: ["sci-fi", "thriller", "mystery"],
        createdAt: "2024-03-15T10:00:00Z",
        updatedAt: "2024-03-20T15:30:00Z",
      },
      {
        id: 2,
        title: "Digital Dreams",
        author: "Alex Chen",
        genre: "Romance",
        rating: 4.6,
        views: 12890,
        chapters: 8,
        description:
          "When a virtual reality designer falls in love with an AI, the boundaries between digital and real become blurred.",
        coverImage: "/images/story-2.jpg",
        tags: ["romance", "sci-fi", "drama"],
        createdAt: "2024-03-10T08:00:00Z",
        updatedAt: "2024-03-18T12:00:00Z",
      },
      {
        id: 3,
        title: "Beyond the Veil",
        author: "Emma Rodriguez",
        genre: "Fantasy",
        rating: 4.9,
        views: 18750,
        chapters: 15,
        description:
          "A young mage discovers an ancient prophecy that could either save or destroy the magical realm.",
        coverImage: "/images/story-3.jpg",
        tags: ["fantasy", "magic", "adventure"],
        createdAt: "2024-02-28T14:00:00Z",
        updatedAt: "2024-03-19T09:45:00Z",
      },
      {
        id: 4,
        title: "Quantum Hearts",
        author: "David Park",
        genre: "Sci-Fi",
        rating: 4.7,
        views: 9340,
        chapters: 6,
        description:
          "Two physicists from parallel universes find a way to communicate across dimensions.",
        coverImage: "/images/story-4.jpg",
        tags: ["sci-fi", "romance", "physics"],
        createdAt: "2024-03-05T11:30:00Z",
        updatedAt: "2024-03-17T16:20:00Z",
      },
      {
        id: 5,
        title: "Silent Storm",
        author: "Lisa Wong",
        genre: "Thriller",
        rating: 4.5,
        views: 7890,
        chapters: 10,
        description:
          "A detective investigates a series of murders that seem to be connected to an ancient cult.",
        coverImage: "/images/story-5.jpg",
        tags: ["thriller", "mystery", "crime"],
        createdAt: "2024-03-01T13:15:00Z",
        updatedAt: "2024-03-16T10:30:00Z",
      },
    ];

    // Sort by views (trending logic)
    const sortedStories = allTrendingStories.sort((a, b) => b.views - a.views);

    // Apply pagination
    const paginatedStories = sortedStories.slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedStories,
      pagination: {
        total: allTrendingStories.length,
        limit,
        offset,
        hasMore: offset + limit < allTrendingStories.length,
      },
    });
  } catch (error) {
    console.error("Trending stories error:", error);
    return NextResponse.json(
      { error: "Failed to fetch trending stories" },
      { status: 500 }
    );
  }
}
