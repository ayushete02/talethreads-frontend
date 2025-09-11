import Link from 'next/link';
import { Search, Bell, User, BookOpen, FileText, Clock, Eye } from 'lucide-react';

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}



export default async function StoryPage({ params }: StoryPageProps) {
  const { id: storyId } = await params;
  
  const chapters = [
    { id: 1, title: 'Chapter 1 - The beginning of something great', views: 247, date: 'Nov 1, 2024', isNew: true },
    { id: 2, title: 'Chapter 2 - A turn in the story', views: 200, date: 'Oct 28, 2024', isNew: false },
    { id: 3, title: 'Chapter 3 - Plot development', views: 180, date: 'Oct 25, 2024', isNew: false },
    { id: 4, title: 'Chapter 4 - Character focus', views: 165, date: 'Oct 22, 2024', isNew: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/home" className="font-bold text-xl">
              TaleThreads Logo
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/categories" className="hover:text-gray-300">CATEGORIES</Link>
            <Link href="/ranking" className="hover:text-gray-300">RANKING</Link>
            <Link href="/for-you" className="hover:text-gray-300">FOR YOU</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-gray-300 cursor-pointer">
              <Search className="w-4 h-4" />
            </div>
            <div className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-gray-300 cursor-pointer">
              <Bell className="w-4 h-4" />
            </div>
            <Link href="/profile">
              <div className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-gray-300">
                <User className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {/* Story Hero Section */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-80 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </section>

        {/* Story Details */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">TITLE OF STORY</h1>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  40 Reads
                </span>
                <span className="flex items-center gap-1">
                  ⭐ 4.8 Stars
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  4 Pages
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Est. 15 Min
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-md text-sm font-medium cursor-pointer">
                Bookmark
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium cursor-pointer">
                Fantasy
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">SUMMARY</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Diam mauris mattis non vestibulum neque facilibus faucibus semam varius consequat auctor vestibulum nulla quis ultricies diam volutpat sit. Nec lorem eget nam sagittis ipsum. Rhoncus lectus morbi sagittis quam tincidunt ut habitasse nibh ut. Purus orci neque lectus tempus. Sit in vulputate prpris scelerisque leo et maecenas. Nunc scelerisque tincidunt est aliquam sed velit lorem phasellus tristique molestie nec tortor eros porta vestibulum dictum arcu dignissim pede.
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Link href={`/story/${storyId}/read`}>
              <div className="inline-flex items-center h-10 px-6 bg-gray-800 text-white hover:bg-gray-900 rounded-md text-sm font-medium">
                Read Now
              </div>
            </Link>
            <div className="inline-flex items-center h-10 px-6 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium cursor-pointer">
              Add to Library
            </div>
          </div>
        </section>

        {/* Chapter List */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">CHAPTER LIST</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {chapters.map((chapter) => (
              <Link key={chapter.id} href={`/story/${storyId}/chapter/${chapter.id}`}>
                <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-gray-300 rounded"></div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800">#{chapter.id.toString().padStart(2, '0')}</h3>
                        {chapter.isNew && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">NEW</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{chapter.title}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {chapter.views}
                        </span>
                        <span>{chapter.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">Help</a>
            <a href="#" className="hover:text-gray-800">News and Events</a>
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Services</a>
            <a href="#" className="hover:text-gray-800">Content Ratings</a>
            <a href="#" className="hover:text-gray-800">Copyrights</a>
            <a href="#" className="hover:text-gray-800">Community Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
