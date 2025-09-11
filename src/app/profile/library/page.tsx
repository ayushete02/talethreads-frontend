import Link from "next/link";
import { Book, Clock, Star, Filter, Search, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/components/layout/footer";

// Force dynamic rendering to avoid pre-rendering issues
export const dynamic = 'force-dynamic';

export default function LibraryPage() {
  const readingList = [
    {
      id: 1,
      title: "The Last Echo",
      author: "Sarah Mitchell",
      genre: "Sci-Fi",
      progress: 75,
      totalChapters: 12,
      currentChapter: 9,
      rating: 4.8,
      addedDate: "2024-03-15",
      lastRead: "2 hours ago",
    },
    {
      id: 2,
      title: "Digital Dreams",
      author: "Alex Chen",
      genre: "Romance",
      progress: 30,
      totalChapters: 15,
      currentChapter: 4,
      rating: 4.6,
      addedDate: "2024-03-20",
      lastRead: "1 day ago",
    },
    {
      id: 3,
      title: "Beyond the Veil",
      author: "Emma Rodriguez",
      genre: "Fantasy",
      progress: 100,
      totalChapters: 8,
      currentChapter: 8,
      rating: 4.9,
      addedDate: "2024-02-28",
      lastRead: "1 week ago",
    },
  ];

  const favorites = [
    {
      id: 4,
      title: "Quantum Hearts",
      author: "David Park",
      genre: "Sci-Fi",
      rating: 4.7,
      chapters: 10,
      status: "Completed",
    },
    {
      id: 5,
      title: "Silent Storm",
      author: "Lisa Wong",
      genre: "Thriller",
      rating: 4.5,
      chapters: 6,
      status: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader currentPage="profile" />

      <main className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Library</h1>
            <p className="text-gray-600 mt-2">
              Your personal collection of stories
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Book className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold">23</p>
              <p className="text-sm text-gray-600">Stories in Library</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-gray-600">Currently Reading</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-8 w-8 mx-auto mb-2 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">â™¥</span>
              </div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-gray-600">Favorites</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reading" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="reading">Currently Reading</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Stories</TabsTrigger>
            </TabsList>

            {/* Search and Filter */}
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search library..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <TabsContent value="reading" className="space-y-4">
            {readingList.map((story) => (
              <Card
                key={story.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Story Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {story.title}
                          </h3>
                          <p className="text-gray-600">by {story.author}</p>
                        </div>
                        <Badge variant="outline">{story.genre}</Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {story.rating}
                        </span>
                        <span>
                          Chapter {story.currentChapter} of{" "}
                          {story.totalChapters}
                        </span>
                        <span>Last read: {story.lastRead}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Reading Progress</span>
                          <span>{story.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${story.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <Link href={`/story/${story.id}/read`}>
                        <Button className="w-full md:w-32">
                          Continue Reading
                        </Button>
                      </Link>
                      <Link href={`/story/${story.id}`}>
                        <Button variant="outline" className="w-full md:w-32">
                          Story Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((story) => (
                <Card
                  key={story.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg line-clamp-2">
                        {story.title}
                      </CardTitle>
                      <div className="text-red-500">
                        <span className="text-lg">â™¥</span>
                      </div>
                    </div>
                    <p className="text-gray-600">by {story.author}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{story.genre}</Badge>
                        <Badge
                          variant={
                            story.status === "Completed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {story.status}
                        </Badge>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {story.rating}
                        </span>
                        <span>{story.chapters} chapters</span>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Link href={`/story/${story.id}`} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            Read
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="px-2">
                          <span className="text-red-500">â™¥</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="text-center py-12">
              <Book className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No completed stories yet
              </h3>
              <p className="text-gray-600 mb-4">
                Finish reading some stories to see them here
              </p>
              <Link href="/home">
                <Button>Browse Stories</Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <div className="text-center py-12">
              <Book className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                All your stories in one place
              </h3>
              <p className="text-gray-600">
                Combined view of all your library stories
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
