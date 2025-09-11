import AppHeader from '@/components/layout/app-header';
import Footer from '@/components/layout/footer';
import StoryCard from '@/components/ui/story-card';
import { Button } from '@/components/ui/button';

export default function CategoriesPage() {
  const categories = [
    { id: 'romance', name: 'Romance', active: true },
    { id: 'thriller', name: 'Thriller', active: false },
    { id: 'sci-fi', name: 'Sci-Fi', active: false },
    { id: 'drama', name: 'Drama', active: false },
    { id: 'horror', name: 'Horror', active: false },
    { id: 'comedy', name: 'Comedy', active: false },
    { id: 'fantasy', name: 'Fantasy', active: false },
  ];

  const stories = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: 'Title of the story',
    genre: 'Genre',
    author: 'Author Name',
    rating: 4.8,    
    views: '1.2k'
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader currentPage="categories" />

      <main className="max-w-6xl mx-auto p-6">
        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.active ? "default" : "outline"}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg">
            Load More Stories
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
