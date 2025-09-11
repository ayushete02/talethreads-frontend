import Link from 'next/link';
import { User, BookOpen, Star, Eye, Users, Calendar, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/app-header';

interface AuthorPageProps {
  params: Promise<{
    id: string;
  }>;
}



export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id: authorId } = await params;
  
  // Mock author data
  const author = {
    id: authorId,
    name: 'Sarah Johnson',
    bio: 'Fantasy author with a passion for magical worlds and epic adventures. Writing stories that transport readers to realms where anything is possible.',
    avatar: '/placeholder-avatar.jpg',
    joinDate: 'March 2023',
    location: 'Portland, Oregon',
    website: 'https://sarahjohnson.com',
    social: {
      twitter: '@sarahjwriter',
      instagram: '@sarahjohnsonbooks'
    },
    stats: {
      stories: 12,
      followers: 15800,
      totalViews: 2400000,
      avgRating: 4.7,
      totalChapters: 245
    },
    badges: [
      { name: 'Rising Star', icon: Award, color: 'yellow' },
      { name: 'Fan Favorite', icon: Heart, color: 'red' },
      { name: 'Prolific Writer', icon: BookOpen, color: 'blue' }
    ]
  };

  const stories = [
    {
      id: 1,
      title: 'The Magical Quest of Eldoria',
      genre: 'Fantasy',
      status: 'Ongoing',
      chapters: 25,
      views: 567000,
      rating: 4.8,
      lastUpdated: '2 days ago',
      description: 'A young mage discovers her true power in a world where magic is forbidden...'
    },
    {
      id: 2,
      title: 'Chronicles of the Crystal Kingdom',
      genre: 'Fantasy',
      status: 'Completed',
      chapters: 30,
      views: 890000,
      rating: 4.9,
      lastUpdated: '1 week ago',
      description: 'An epic tale of friendship, betrayal, and the fight for a magical realm...'
    },
    {
      id: 3,
      title: 'The Shadow Realm Prophecy',
      genre: 'Fantasy',
      status: 'Ongoing',
      chapters: 18,
      views: 345000,
      rating: 4.6,
      lastUpdated: '4 days ago',
      description: 'When darkness threatens to consume all, only one prophecy holds the key...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-6xl mx-auto p-6">
        {/* Author Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          
          {/* Profile Info */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="relative -mt-16 md:-mt-20">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              {/* Author Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{author.name}</h1>
                    <p className="text-gray-600 mb-4 max-w-2xl">{author.bio}</p>
                    
                    {/* Author Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {author.joinDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {author.location}
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.badges.map((badge, index) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div key={index} className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-${badge.color}-100 text-${badge.color}-700`}>
                            <BadgeIcon className="w-3 h-3" />
                            {badge.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button>
                      <Users className="w-4 h-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline">
                      <Heart className="w-4 h-4 mr-2" />
                      Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{author.stats.stories}</div>
            <div className="text-sm text-gray-600">Stories</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{author.stats.followers.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{(author.stats.totalViews / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-1">{author.stats.avgRating}</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">{author.stats.totalChapters}</div>
            <div className="text-sm text-gray-600">Chapters</div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">Stories by {author.name}</h2>
            <div className="flex items-center gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Stories</option>
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div key={story.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
                  
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                      {story.genre}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      story.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {story.status}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{story.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {story.chapters} chapters
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {(story.views / 1000).toFixed(0)}K
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {story.rating}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    Updated {story.lastUpdated}
                  </div>
                  
                  <Link href={`/story/${story.id}`}>
                    <Button size="sm" className="w-full">
                      Read Story
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Support {author.name}</h3>
          <p className="mb-6 opacity-90">
            Show your appreciation for this author&apos;s amazing work by sending coins or following their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Heart className="w-5 h-5 mr-2" />
              Send Coins
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Users className="w-5 h-5 mr-2" />
              Follow Author
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
