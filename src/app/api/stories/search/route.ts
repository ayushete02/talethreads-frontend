import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    // For static export, return all stories without filtering
    // In a real app, client-side filtering would handle search
    const query = "";
    const genre = "";
    const limit = 10;
    const offset = 0;

    // Mock stories data for search
    const allStories = [
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
        tags: ["sci-fi", "thriller", "mystery"],
        createdAt: "2024-03-15T10:00:00Z",
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
        tags: ["romance", "sci-fi", "drama"],
        createdAt: "2024-03-10T08:00:00Z",
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
        tags: ["fantasy", "magic", "adventure"],
        createdAt: "2024-02-28T14:00:00Z",
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
        tags: ["sci-fi", "romance", "physics"],
        createdAt: "2024-03-05T11:30:00Z",
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
        tags: ["thriller", "mystery", "crime"],
        createdAt: "2024-03-01T13:15:00Z",
      },
      {
        id: 6,
        title: "Whispers of Time",
        author: "Michael Johnson",
        genre: "Fantasy",
        rating: 4.4,
        views: 6780,
        chapters: 7,
        description:
          "A time traveler must fix the timeline before reality collapses.",
        tags: ["fantasy", "time-travel", "adventure"],
        createdAt: "2024-02-15T09:00:00Z",
      },
    ];

    // For static export, return all stories without filtering
    const filteredStories = allStories;

    // Sort by relevance (for now, by views)
    filteredStories.sort((a, b) => b.views - a.views);

    // Apply pagination
    const paginatedStories = filteredStories.slice(offset, offset + limit);

    // For static export, return default suggestions
    const suggestions = [
      "sci-fi stories",
      "fantasy adventures",
      "romance novels",
      "thriller mysteries",
      "time travel",
    ];

    return NextResponse.json({
      success: true,
      data: paginatedStories,
      suggestions,
      filters: {
        query,
        genre,
        totalResults: filteredStories.length,
      },
      pagination: {
        total: filteredStories.length,
        limit,
        offset,
        hasMore: offset + limit < filteredStories.length,
      },
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to search stories" },
      { status: 500 }
    );
  }
}
