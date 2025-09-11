import { TrendingUp, TrendingDown, Crown, Star, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";
import StoryCard from "@/components/ui/story-card";



const rankings = [
  {
    rank: 1,
    title: "The Last Echo",
    author: "Sarah Mitchell",
    views: "234K",
    score: 9.8,
    change: 2,
  },
  {
    rank: 2,
    title: "Digital Dreams",
    author: "Alex Chen",
    views: "189K",
    score: 9.6,
    change: -1,
  },
  {
    rank: 3,
    title: "Beyond the Veil",
    author: "Emma Rodriguez",
    views: "156K",
    score: 9.5,
    change: 1,
  },
  {
    rank: 4,
    title: "Quantum Hearts",
    author: "David Park",
    views: "134K",
    score: 9.4,
    change: 0,
  },
  {
    rank: 5,
    title: "Silent Storm",
    author: "Lisa Wong",
    views: "112K",
    score: 9.3,
    change: -2,
  },
];

const categories = [
  { name: "Sci-Fi", count: 1234, trending: true },
  { name: "Fantasy", count: 987, trending: false },
  { name: "Romance", count: 876, trending: true },
  { name: "Thriller", count: 654, trending: false },
  { name: "Horror", count: 432, trending: true },
];

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Story Rankings</h1>
          <p className="text-gray-600">Popular stories by category</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="border border-gray-300 p-4 text-center">
            <p className="text-xl font-bold">2,543</p>
            <p className="text-sm text-gray-600">Total Stories</p>
          </div>

          <div className="border border-gray-300 p-4 text-center">
            <p className="text-xl font-bold">1.2M</p>
            <p className="text-sm text-gray-600">Total Views</p>
          </div>

          <div className="border border-gray-300 p-4 text-center">
            <p className="text-xl font-bold">45K</p>
            <p className="text-sm text-gray-600">Active Readers</p>
          </div>

          <div className="border border-gray-300 p-4 text-center">
            <p className="text-xl font-bold">8.9</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>

        <Tabs defaultValue="overall" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overall" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Rankings List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      Top Stories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {rankings.map((story) => (
                        <div
                          key={story.rank}
                          className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              story.rank <= 3
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {story.rank}
                          </div>

                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">
                              {story.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              by {story.author}
                            </p>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="font-medium">{story.score}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Eye className="h-4 w-4" />
                              <span>{story.views}</span>
                            </div>
                          </div>

                          <div
                            className={`flex items-center gap-1 text-sm ${
                              story.change > 0
                                ? "text-green-600"
                                : story.change < 0
                                ? "text-red-600"
                                : "text-gray-600"
                            }`}
                          >
                            {story.change > 0 && (
                              <TrendingUp className="h-4 w-4" />
                            )}
                            {story.change < 0 && (
                              <TrendingDown className="h-4 w-4" />
                            )}
                            {story.change !== 0 && Math.abs(story.change)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trending Categories */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Trending Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{category.name}</span>
                            {category.trending && (
                              <Badge variant="secondary" className="text-xs">
                                Trending
                              </Badge>
                            )}
                          </div>
                          <span className="text-gray-600">
                            {category.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rankings.slice(0, 6).map((story) => (
                <StoryCard
                  key={story.title}
                  id={story.rank}
                  title={story.title}
                  genre="Popular"
                  author={story.author}
                  rating={story.score}
                  views={story.views}
                  variant="featured"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rankings.map((story) => (
                <StoryCard
                  key={story.title}
                  id={story.rank}
                  title={story.title}
                  genre="Monthly Top"
                  author={story.author}
                  rating={story.score}
                  views={story.views}
                  variant="compact"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      {category.trending && (
                        <Badge className="bg-green-100 text-green-800">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{category.count} stories</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
