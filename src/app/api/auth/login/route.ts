import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // In production, verify credentials against database
    // This is a mock implementation
    const mockUser = {
      id: 1,
      email: email,
      name: "User Name",
      avatar: "/api/placeholder/avatar/1",
      preferences: {
        genres: ["fantasy", "sci-fi"],
        readingExperience: "stories",
      },
    };

    // In production, generate JWT token
    const mockToken = "mock-jwt-token-" + Date.now();

    // Create response with user data
    const response = NextResponse.json({
      success: true,
      data: {
        user: mockUser,
        message: "Login successful",
      },
    });

    // Set HTTP-only cookie for authentication
    response.cookies.set("auth-token", mockToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 }
    );
  }
}
