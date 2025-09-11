import Link from "next/link";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function CreateChapterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/stories">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold">Add New Chapter</h1>
              <p className="text-sm text-gray-600">Story: The Last Echo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Chapter
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
                <CardTitle>Chapter Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chapter Title
                  </label>
                  <Input placeholder="Chapter 5 - The Revelation" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chapter Summary (Optional)
                  </label>
                  <Textarea
                    placeholder="Brief summary of what happens in this chapter..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chapter Content</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Write your chapter content here..."
                  rows={20}
                  className="min-h-[500px]"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chapter Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chapter Number
                  </label>
                  <Input type="number" placeholder="5" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        className="mr-2"
                        defaultChecked
                      />
                      <span className="text-sm">Draft</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="status" className="mr-2" />
                      <span className="text-sm">Published</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="status" className="mr-2" />
                      <span className="text-sm">Scheduled</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Publish Date
                  </label>
                  <Input type="datetime-local" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chapter Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Word Count:</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Character Count:</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reading Time:</span>
                    <span>0 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Story Chapters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Chapter 1</span>
                    <span className="text-green-600">Published</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Chapter 2</span>
                    <span className="text-green-600">Published</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Chapter 3</span>
                    <span className="text-green-600">Published</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Chapter 4</span>
                    <span className="text-yellow-600">Draft</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded border border-blue-200">
                    <span className="font-medium">Chapter 5</span>
                    <span className="text-blue-600">Current</span>
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
