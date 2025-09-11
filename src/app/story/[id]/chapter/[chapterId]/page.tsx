import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Settings } from "lucide-react";

interface ChapterPageProps {
  params: Promise<{
    id: string;
    chapterId: string;
  }>;
}



export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id: storyId, chapterId } = await params;

  // Mock chapter data
  const chapter = {
    id: parseInt(chapterId),
    title: `Chapter ${chapterId} - The Adventure Continues`,
    content: `This is the content of chapter ${chapterId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    wordCount: 150,
    readTime: 2,
  };

  const nextChapter = parseInt(chapterId) + 1;
  const prevChapter = parseInt(chapterId) - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Reading Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/story/${storyId}`}>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5" />
              </div>
            </Link>
            <div>
              <h1 className="font-semibold">{chapter.title}</h1>
              <p className="text-sm text-gray-600">
                {chapter.readTime} min read
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              <BookOpen className="h-4 w-4 mr-2" />
              Bookmark
            </div>
            <div className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              <Settings className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white border border-gray-300 p-8">
          <div className="prose max-w-none">
            {chapter.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <div>
            {prevChapter > 0 && (
              <Link href={`/story/${storyId}/chapter/${prevChapter}`}>
                <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Chapter
                </div>
              </Link>
            )}
          </div>

          <Link href={`/story/${storyId}`}>
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Back to Story
            </div>
          </Link>

          <div>
            <Link href={`/story/${storyId}/chapter/${nextChapter}`}>
              <div className="inline-flex items-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">
                Next Chapter
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Chapter Info */}
        <div className="mt-8 p-4 bg-gray-100 border border-gray-300">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Words: {chapter.wordCount}</span>
            <span>Reading time: {chapter.readTime} minutes</span>
            <span>Chapter {chapterId}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
