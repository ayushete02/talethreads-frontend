import Link from "next/link";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export default function CreateStoryPage() {
  const genres = [
    "Romance",
    "Thriller",
    "Sci-Fi",
    "Fantasy",
    "Horror",
    "Comedy",
    "Drama",
    "Mystery",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Create New Story</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Story Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Story Title
                  </label>
                  <Input placeholder="Enter your story title" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <Textarea
                    placeholder="Write a compelling description of your story..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Genre
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                      <Button
                        key={genre}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {genre}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>First Chapter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chapter Title
                  </label>
                  <Input placeholder="Chapter 1 - The Beginning" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Content
                  </label>
                  <Textarea
                    placeholder="Start writing your story here..."
                    rows={12}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publishing Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Visibility
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="visibility"
                        className="mr-2"
                        defaultChecked
                      />
                      <span className="text-sm">Public</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="visibility" className="mr-2" />
                      <span className="text-sm">Private</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="visibility" className="mr-2" />
                      <span className="text-sm">Unlisted</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Content Rating
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        className="mr-2"
                        defaultChecked
                      />
                      <span className="text-sm">Everyone</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="rating" className="mr-2" />
                      <span className="text-sm">Teen</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="rating" className="mr-2" />
                      <span className="text-sm">Mature</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Story Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Word Count:</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chapters:</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reading Time:</span>
                    <span>0 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
