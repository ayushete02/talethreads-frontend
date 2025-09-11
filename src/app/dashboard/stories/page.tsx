import Link from "next/link";
import { Plus, Eye, Edit3, Trash2, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



export default function StoriesManagementPage() {
  const stories = [
    {
      id: 1,
      title: "The Last Echo",
      status: "Published",
      chapters: 12,
      views: 15420,
      rating: 4.8,
      lastUpdated: "2 days ago",
      createdAt: "March 15, 2024",
    },
    {
      id: 2,
      title: "Digital Dreams",
      status: "Draft",
      chapters: 3,
      views: 0,
      rating: 0,
      lastUpdated: "1 week ago",
      createdAt: "April 2, 2024",
    },
    {
      id: 3,
      title: "Beyond the Veil",
      status: "Published",
      chapters: 8,
      views: 8932,
      rating: 4.6,
      lastUpdated: "5 days ago",
      createdAt: "February 28, 2024",
    },
    {
      id: 4,
      title: "Quantum Hearts",
      status: "Scheduled",
      chapters: 5,
      views: 0,
      rating: 0,
      lastUpdated: "3 days ago",
      createdAt: "April 10, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-700"
            >
              â† Dashboard
            </Link>
            <h1 className="text-2xl font-bold">My Stories</h1>
          </div>
          <Link href="/create/story">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Story
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search stories..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Scheduled</option>
            </select>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-2">
                    {story.title}
                  </CardTitle>
                  <Badge
                    variant={
                      story.status === "Published"
                        ? "default"
                        : story.status === "Draft"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {story.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {story.chapters}
                    </p>
                    <p className="text-xs text-gray-600">Chapters</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {story.views > 0
                        ? `${(story.views / 1000).toFixed(1)}k`
                        : "0"}
                    </p>
                    <p className="text-xs text-gray-600">Views</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {story.rating > 0 ? story.rating : "--"}
                    </p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>

                {/* Dates */}
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Created: {story.createdAt}</p>
                  <p>Updated: {story.lastUpdated}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link href={`/story/${story.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </Link>
                  <Link
                    href={`/dashboard/stories/${story.id}/edit`}
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit3 className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="px-2">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>

                {/* Progress for drafts */}
                {story.status === "Draft" && (
                  <div className="pt-2 border-t">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Add New Story Card */}
          <Link href="/create/story">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-dashed border-2 border-gray-300 hover:border-gray-400">
              <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-gray-500 hover:text-gray-600">
                <Plus className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-medium mb-2">Create New Story</h3>
                <p className="text-sm text-center">
                  Start writing your next masterpiece
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-600 text-white"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
