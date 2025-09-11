import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

// Mock data - in production, this would come from your database
const stories = [
  {
    id: 1,
    title: "The Crimson Adventure",
    description: "A tale of daring adventure and heroism",
    genre: "Fantasy",
    author: "Jane Doe",
    chapters: 12,
    rating: 4.8,
    views: 1200,
    image: "/api/placeholder/story/1",
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20",
  },
  {
    id: 2,
    title: "Mystery of the Lost Kingdom",
    description: "An intriguing mystery in an ancient kingdom",
    genre: "Mystery",
    author: "John Smith",
    chapters: 8,
    rating: 4.6,
    views: 890,
    image: "/api/placeholder/story/2",
    createdAt: "2024-02-10",
    updatedAt: "2024-03-18",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const genre = searchParams.get("genre");
    const search = searchParams.get("search");

    let filteredStories = [...stories];

    // Filter by genre
    if (genre && genre !== "all") {
      filteredStories = filteredStories.filter(
        (story) => story.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    // Filter by search term
    if (search) {
      filteredStories = filteredStories.filter(
        (story) =>
          story.title.toLowerCase().includes(search.toLowerCase()) ||
          story.description.toLowerCase().includes(search.toLowerCase()) ||
          story.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const paginatedStories = filteredStories.slice(
      startIndex,
      startIndex + limit
    );

    return NextResponse.json({
      success: true,
      data: {
        stories: paginatedStories,
        pagination: {
          page,
          limit,
          total: filteredStories.length,
          totalPages: Math.ceil(filteredStories.length / limit),
        },
      },
    });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { title, description, genre, author } = body;
    if (!title || !description || !genre || !author) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, save to database
    const newStory = {
      id: stories.length + 1,
      title,
      description,
      genre,
      author,
      chapters: 0,
      rating: 0,
      views: 0,
      image: "/api/placeholder/story/new",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    stories.push(newStory);

    return NextResponse.json(
      {
        success: true,
        data: newStory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating story:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create story" },
      { status: 500 }
    );
  }
}
