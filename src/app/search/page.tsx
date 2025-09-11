'use client';

import { useState } from 'react';
import { Search, Filter, Clock, Star, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppHeader from '@/components/layout/app-header';
import Footer from '@/components/layout/footer';
import StoryCard from '@/components/ui/story-card';



const trendingSearches = [
  'AI companions',
  'Time travel',
  'Magic academy',
  'Space exploration',
  'Superhero origin',
];

const recentSearches = [
  'Dragon riders',
  'Cyberpunk noir',
  'Medieval fantasy',
];

const searchResults = [
  {
    title: 'The Last Starfighter',
    author: 'Alex Chen',
    genre: 'Sci-Fi',
    rating: 4.8,
    views: '234K',
    readTime: '12 min',
    tags: ['Space', 'Adventure'],
    description: 'A young pilot discovers an ancient alien technology...',
  },
  {
    title: 'Whispers in the Dark',
    author: 'Sarah Mitchell',
    genre: 'Horror',
    rating: 4.6,
    views: '189K',
    readTime: '8 min',
    tags: ['Mystery', 'Supernatural'],
    description: 'Strange sounds echo through the abandoned mansion...',
  },
  {
    title: 'Digital Hearts',
    author: 'Emma Rodriguez',
    genre: 'Romance',
    rating: 4.9,
    views: '156K',
    readTime: '15 min',
    tags: ['AI', 'Future'],
    description: 'When artificial intelligence learns to love...',
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <div className="max-w-6xl mx-auto p-6">
        {/* Search Header */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for stories, authors, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              className="pl-10 pr-4 py-3 text-lg"
            />
            <Button 
              onClick={() => handleSearch(searchQuery)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size="sm"
            >
              Search
            </Button>
          </div>
        </div>

        {!searchQuery && (
          <>
            {/* Search Suggestions */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Trending Searches</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {trendingSearches.map((search, index) => (
                  <Card 
                    key={index}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleSearch(search)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{search}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {['Sci-Fi', 'Fantasy', 'Romance', 'Thriller', 'Horror', 'Mystery', 'Adventure'].map((category) => (
                  <Badge 
                    key={category}
                    variant="outline"
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    onClick={() => handleSearch(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Searches</h2>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleSearch(search)}
                    >
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{search}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {searchQuery && (
          <div className="max-w-6xl mx-auto">
            {/* Search Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Search Results for &ldquo;{searchQuery}&rdquo;
                </h2>
                <p className="text-gray-600 mt-1">
                  {isSearching ? 'Searching...' : `Found ${searchResults.length} results`}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <Tabs defaultValue="stories" className="w-full">
              <TabsList>
                <TabsTrigger value="stories">Stories</TabsTrigger>
                <TabsTrigger value="authors">Authors</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
              </TabsList>

              <TabsContent value="stories" className="space-y-6">
                {isSearching ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                        <div className="bg-gray-200 rounded h-4 mb-2"></div>
                        <div className="bg-gray-200 rounded h-3 w-2/3"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {searchResults.map((story, index) => (
                      <StoryCard
                        key={index}
                        id={index + 1}
                        title={story.title}
                        author={story.author}
                        genre={story.genre}
                        rating={story.rating}
                        views={story.views}
                        variant="featured"
                      />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="authors" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {['Alex Chen', 'Sarah Mitchell', 'Emma Rodriguez'].map((author, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{author}</h3>
                            <p className="text-sm text-gray-600">12 stories â€¢ 1.2M views</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="series" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {['The Chronicles of Tomorrow', 'Dark Magic Academy'].map((series, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{series}</h3>
                        <p className="text-gray-600 mb-4">A thrilling series spanning multiple dimensions...</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>8 parts</span>
                          <span>â€¢</span>
                          <span>234K views</span>
                          <span>â€¢</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span>4.8</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
