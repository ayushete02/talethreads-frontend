import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Eye,
  Star,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export default function AnalyticsPage() {
  const stats = [
    { label: "Total Views", value: "24,352", change: "+12%", icon: Eye },
    { label: "New Readers", value: "1,247", change: "+23%", icon: Users },
    { label: "Avg Rating", value: "4.7", change: "+0.2", icon: Star },
    { label: "Stories Published", value: "3", change: "+1", icon: TrendingUp },
  ];

  const storyPerformance = [
    { title: "The Last Echo", views: 15420, rating: 4.8, trend: "+15%" },
    { title: "Beyond the Veil", views: 8932, rating: 4.6, trend: "+8%" },
    { title: "Digital Dreams", views: 2100, rating: 4.9, trend: "+45%" },
  ];

  const readerEngagement = [
    { metric: "Average Reading Time", value: "12 min", trend: "+5%" },
    { metric: "Completion Rate", value: "78%", trend: "+3%" },
    { metric: "Return Readers", value: "65%", trend: "+12%" },
    { metric: "Comments per Chapter", value: "8.3", trend: "+18%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
              <p className="text-gray-600">Track your story performance</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Overview Stats */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        {stat.change}
                      </p>
                    </div>
                    <stat.icon className="h-8 w-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Story Performance */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Story Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {storyPerformance.map((story, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {story.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {story.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {story.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-green-600">
                          {story.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Reader Engagement */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Reader Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {readerEngagement.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.metric}
                        </h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {item.value}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-green-600">
                          {item.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Charts Placeholder */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Views Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                  <p>Chart visualization would go here</p>
                  <p className="text-sm">
                    Integration with charts library needed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recent Activity */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      New reader started &quot;The Last Echo&quot;
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">
                      Chapter 12 received a 5-star rating
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">
                      &quot;Beyond the Veil&quot; reached 9k views
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">
                      New comment on &quot;Digital Dreams&quot; Chapter 3
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
