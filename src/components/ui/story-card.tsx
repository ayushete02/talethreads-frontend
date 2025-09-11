import Link from 'next/link';
import { Eye, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StoryCardProps {
  id: number;
  title: string;
  genre: string;
  author?: string;
  rating?: number;
  views?: string;
  progress?: number;
  matchPercentage?: number;
  reason?: string;
  variant?: 'default' | 'compact' | 'featured';
  rank?: number;
}

export default function StoryCard({
  id,
  title,
  genre,
  author,
  rating,
  views,
  progress,
  matchPercentage,
  reason,
  variant = 'default',
  rank
}: StoryCardProps) {
  const getCardContent = () => {
    switch (variant) {
      case 'compact':
        return (
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-gray-300 rounded relative flex-shrink-0">
                  {rank && (
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {rank}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1 truncate">{title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{genre}</p>
                  {author && <p className="text-sm text-gray-500 mb-2">by {author}</p>}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {views && (
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {views}
                      </span>
                    )}
                    {rating && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {rating}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'featured':
        return (
          <Card className="hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-64 bg-gray-300 relative">
              {matchPercentage && (
                <Badge 
                  className={`absolute top-4 right-4 ${
                    matchPercentage >= 90 ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                >
                  {matchPercentage}% match
                </Badge>
              )}
              {rank && (
                <div className="absolute top-4 left-4 w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  {rank}
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 mb-2">{genre}</p>
              {author && <p className="text-sm text-gray-500 mb-2">by {author}</p>}
              {reason && <p className="text-xs text-blue-600">{reason}</p>}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                {views && (
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {views}
                  </span>
                )}
                {rating && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {rating}
                  </span>
                )}
              </div>
              {progress !== undefined && (
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{progress}% Complete</p>
                </div>
              )}
            </CardContent>
          </Card>
        );

      default:
        return (
          <Card className="hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-300 rounded-t-lg"></div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1 text-sm">{title}</h3>
              <p className="text-xs text-gray-600 mb-2">{genre}</p>
              {author && <p className="text-xs text-gray-500">{author}</p>}
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <Link href={`/story/${id}`} className="block">
      {getCardContent()}
    </Link>
  );
}
