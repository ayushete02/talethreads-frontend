import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Book,
  User,
  PenTool,
  Search,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export default function SitemapPage() {
  const routes = {
    "Main Pages": [
      { name: "Home", path: "/home", icon: Home },
      { name: "Categories", path: "/categories", icon: Book },
      { name: "Rankings", path: "/ranking", icon: Book },
      { name: "For You", path: "/for-you", icon: User },
      { name: "Search", path: "/search", icon: Search },
      { name: "About", path: "/about", icon: Book },
    ],
    Authentication: [
      { name: "Login", path: "/login", icon: User },
      { name: "Signup", path: "/signup", icon: User },
      { name: "Onboarding - Persona", path: "/onboarding/persona", icon: User },
      {
        name: "Onboarding - Reading Preference",
        path: "/onboarding/reading-preference",
        icon: User,
      },
    ],
    "Profile & User": [
      { name: "Profile", path: "/profile", icon: User },
      { name: "Profile - Edit", path: "/profile/edit", icon: Settings },
      { name: "Library", path: "/profile/library", icon: Book },
      { name: "Bookmarks", path: "/profile/bookmarks", icon: Book },
      { name: "Coin Balance", path: "/profile/coin-balance", icon: Settings },
      { name: "Settings", path: "/profile/settings", icon: Settings },
    ],
    Stories: [
      { name: "Story Detail", path: "/story/1", icon: Book },
      { name: "Story Reading", path: "/story/1/read", icon: Book },
      { name: "Chapter Reading", path: "/story/1/chapter/1", icon: Book },
      { name: "Author Profile", path: "/author/1", icon: User },
    ],
    "Author Dashboard": [
      { name: "Dashboard", path: "/dashboard", icon: PenTool },
      { name: "My Stories", path: "/dashboard/stories", icon: Book },
      { name: "Analytics", path: "/dashboard/analytics", icon: Settings },
      { name: "Create Story", path: "/create/story", icon: PenTool },
      { name: "Add Chapter", path: "/create/chapter", icon: PenTool },
    ],
    "Other Pages": [
      { name: "Notifications", path: "/notifications", icon: Settings },
      { name: "Help Center", path: "/help", icon: Settings },
      { name: "Privacy Policy", path: "/help/privacy", icon: Settings },
      { name: "Terms of Service", path: "/help/terms", icon: Settings },
      { name: "Offline", path: "/offline", icon: Settings },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/home">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Site Navigation</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-lg text-gray-600">
            All available pages and routes in the TaleThreads application
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(routes).map(([category, pages]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition-colors"
                    >
                      <page.icon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{page.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-12 p-6 bg-white border border-gray-300 rounded">
          <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/home">
              <Button variant="outline" size="sm" className="w-full">
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="w-full">
                Dashboard
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline" size="sm" className="w-full">
                Profile
              </Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline" size="sm" className="w-full">
                Categories
              </Button>
            </Link>
            <Link href="/create/story">
              <Button variant="outline" size="sm" className="w-full">
                Write
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline" size="sm" className="w-full">
                Search
              </Button>
            </Link>
          </div>
        </div>

        {/* API Routes Info */}
        <div className="mt-8 p-6 bg-gray-100 border border-gray-300 rounded">
          <h3 className="text-lg font-semibold mb-4">Available API Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Authentication</h4>
              <ul className="space-y-1 text-gray-600">
                <li>POST /api/auth/register</li>
                <li>POST /api/auth/login</li>
                <li>GET /api/auth/me</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Stories</h4>
              <ul className="space-y-1 text-gray-600">
                <li>GET /api/stories</li>
                <li>GET /api/stories/trending</li>
                <li>GET /api/stories/search</li>
                <li>GET /api/stories/[id]</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
