import Link from 'next/link';
import { BookOpen, Heart, Users, Target, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto p-6 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">About TaleThreads</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-6">Weaving Stories, Connecting Hearts</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            TaleThreads is where storytellers and readers come together to create, share, and discover 
            extraordinary narratives that span every genre and imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2024, TaleThreads emerged from a simple belief: everyone has a story worth telling, 
                and every story deserves an audience. We started as a small team of literature enthusiasts 
                and tech innovators who saw the potential of digital storytelling.
              </p>
              <p>
                What began as a passion project to democratize storytelling has grown into a thriving 
                community of millions of writers and readers from around the world. We&apos;ve created a 
                platform where creativity knows no bounds and where every voice can find its audience.
              </p>
              <p>
                Today, TaleThreads hosts millions of stories across countless genres, from romance and 
                fantasy to mystery and science fiction. Our community continues to grow, united by a 
                shared love for the written word and the magic of storytelling.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-green-600" />
              Our Mission
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To democratize storytelling by providing a platform where anyone can share their stories 
                and connect with readers who appreciate their unique voice and perspective.
              </p>
              <p>
                We believe in the power of stories to:
              </p>
              <ul className="space-y-2 pl-6">
                <li>â€¢ Build empathy and understanding across cultures</li>
                <li>â€¢ Provide escapism and entertainment</li>
                <li>â€¢ Foster creativity and self-expression</li>
                <li>â€¢ Create meaningful connections between people</li>
                <li>â€¢ Preserve and share diverse narratives</li>
              </ul>
              <p>
                Our goal is to make storytelling accessible, rewarding, and enjoyable for everyone, 
                whether you&apos;re a seasoned author or someone sharing their first story.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Creativity</h4>
              <p className="text-gray-600 leading-relaxed">
                We celebrate unique voices and encourage creative expression in all its forms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Community</h4>
              <p className="text-gray-600 leading-relaxed">
                We foster a supportive environment where writers and readers can connect and grow together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Inclusivity</h4>
              <p className="text-gray-600 leading-relaxed">
                We welcome stories from all backgrounds and ensure everyone feels valued and heard.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                We continuously improve our platform to provide the best experience for our community.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">What Makes Us Special</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Easy Publishing</h4>
              <p className="text-gray-600 leading-relaxed">
                Intuitive writing tools that make it easy to create, format, and publish your stories 
                with just a few clicks.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Reader Engagement</h4>
              <p className="text-gray-600 leading-relaxed">
                Connect with readers through comments, ratings, and direct messages. Build a loyal 
                fanbase for your stories.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Personalized Discovery</h4>
              <p className="text-gray-600 leading-relaxed">
                Advanced recommendation algorithms help readers discover stories they&apos;ll love based 
                on their preferences.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Mobile Reading</h4>
              <p className="text-gray-600 leading-relaxed">
                Optimized mobile experience with offline reading, customizable fonts, and reading 
                progress tracking.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Creator Rewards</h4>
              <p className="text-gray-600 leading-relaxed">
                Authors can earn coins through reader engagement and unlock monetization opportunities 
                for their content.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Global Community</h4>
              <p className="text-gray-600 leading-relaxed">
                Connect with writers and readers from around the world, discover diverse stories and 
                perspectives.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Our Community by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-lg opacity-90">Published Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">Chapters Read</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">180+</div>
              <div className="text-lg opacity-90">Countries</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">General Inquiries</h4>
              <p className="text-gray-600 mb-2">hello@talethreads.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Support</h4>
              <p className="text-gray-600 mb-2">support@talethreads.com</p>
              <Link href="/help">
                <Button variant="outline" size="sm" className="mt-2">
                  Visit Help Center
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Business</h4>
              <p className="text-gray-600 mb-2">business@talethreads.com</p>
              <p className="text-gray-600">Partnership & Press</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Story</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re here to write your first story or discover your next favorite read, 
            TaleThreads is your home for storytelling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="px-8">
                Start Writing Today
              </Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline" size="lg" className="px-8">
                Explore Stories
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-gray-800 text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">TaleThreads</span>
          </div>
          <p className="text-gray-400 mb-6">
            Connecting storytellers and readers worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/help/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/help/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
              Help Center
            </Link>
            <Link href="mailto:hello@talethreads.com" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
