import Link from "next/link";
import {
  Plus,
  Eye,
  Edit3,
  TrendingUp,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  const stories = [
    {
      id: 1,
      title: "The Last Echo",
      status: "Published",
      chapters: 12,
      views: 15420,
      rating: 4.8,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      title: "Digital Dreams",
      status: "Draft",
      chapters: 3,
      views: 0,
      rating: 0,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      title: "Beyond the Veil",
      status: "Published",
      chapters: 8,
      views: 8932,
      rating: 4.6,
      lastUpdated: "5 days ago",
    },
  ];

  const stats = [
    { label: "Total Views", value: "24,352", icon: Eye, change: "+12%" },
    { label: "Total Stories", value: "3", icon: BookOpen, change: "+1" },
    { label: "Followers", value: "1,247", icon: Users, change: "+23" },
    { label: "Avg Rating", value: "4.7", icon: Star, change: "+0.2" },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <AppHeader />

        <main className="max-w-6xl mx-auto p-6">
          {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Author Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your stories and track your progress
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/create/story">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Story
              </Button>
            </Link>
            <Link href="/create/chapter">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Chapter
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <stat.icon className="h-6 w-6 text-gray-400 mb-2" />
                    <span className="text-xs text-green-600 font-medium">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Stories */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Stories</CardTitle>
                <Link href="/dashboard/stories">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stories.map((story) => (
                    <div
                      key={story.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {story.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span>{story.chapters} chapters</span>
                            <span>{story.views.toLocaleString()} views</span>
                            {story.rating > 0 && (
                              <span className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                {story.rating}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              story.status === "Published"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {story.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Updated {story.lastUpdated}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit3 className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/create/story">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Story
                  </Button>
                </Link>
                <Link href="/create/chapter">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Chapter
                  </Button>
                </Link>
                <Link href="/dashboard/analytics">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>New review on &quot;The Last Echo&quot;</span>
                    <span className="text-gray-500">2h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chapter 12 published</span>
                    <span className="text-gray-500">2d</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Story reached 15k views</span>
                    <span className="text-gray-500">3d</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New follower</span>
                    <span className="text-gray-500">1w</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Writing Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Monthly Words</span>
                      <span>7,500 / 10,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Stories this Year</span>
                      <span>3 / 5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
