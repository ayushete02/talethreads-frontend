import Link from 'next/link';
import { Search, Bell, User, Camera, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function EditProfilePage() {
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
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Edit Profile</h1>

          <form className="space-y-6">
            {/* Profile Picture */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 relative">
                <Button 
                  size="icon"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-700"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="link" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Change Profile Picture
              </Button>
            </div>

            {/* User Name */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                User name
              </label>
              <input
                type="text"
                id="username"
                defaultValue="User name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Info
              </label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-600">user@example.com</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-6">
              <Link href="/profile">
                <button
                  type="button"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  Save
                </button>
              </Link>
              
              <Link href="/profile">
                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </Link>
            </div>

            {/* Delete Profile Section */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Danger Zone</h3>
              <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Delete Profile
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This primary profile cannot be deleted
              </p>
            </div>
          </form>
        </div>
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
