import Link from 'next/link';
import { Bell, User, BookOpen, Star, Clock, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/app-header';



export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'new_chapter',
      title: 'New Chapter Available!',
      message: 'Chapter 15 of "The Magical Quest" has been published',
      time: '2 hours ago',
      read: false,
      icon: BookOpen,
      actionUrl: '/story/1/read'
    },
    {
      id: 2,
      type: 'recommendation',
      title: 'New Story Recommendation',
      message: 'Based on your reading history, you might like "Shadow Realm Chronicles"',
      time: '5 hours ago',
      read: false,
      icon: Star,
      actionUrl: '/story/15'
    },
    {
      id: 3,
      type: 'milestone',
      title: 'Reading Milestone Achieved!',
      message: 'Congratulations! You\'ve read 50 stories this month',
      time: '1 day ago',
      read: true,
      icon: Star,
      actionUrl: '/profile'
    },
    {
      id: 4,
      type: 'author_update',
      title: 'Author Update',
      message: 'Your favorite author has announced a new series coming next week',
      time: '2 days ago',
      read: true,
      icon: User,
      actionUrl: '/author/5'
    },
    {
      id: 5,
      type: 'system',
      title: 'App Update Available',
      message: 'Version 2.1 is now available with new reading features',
      time: '3 days ago',
      read: true,
      icon: Bell,
      actionUrl: null
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h1>
            <p className="text-gray-600">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
            </p>
          </div>
          
          {unreadCount > 0 && (
            <Button variant="outline" className="text-blue-600">
              <Check className="w-4 h-4 mr-2" />
              Mark All as Read
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Notifications</h3>
              <p className="text-gray-500 mb-6">You&apos;re all caught up! New notifications will appear here.</p>
              <Link href="/home">
                <Button>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Discover Stories
                </Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-6 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        notification.type === 'new_chapter' ? 'bg-green-100 text-green-600' :
                        notification.type === 'recommendation' ? 'bg-purple-100 text-purple-600' :
                        notification.type === 'milestone' ? 'bg-yellow-100 text-yellow-600' :
                        notification.type === 'author_update' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {notification.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.time}
                              </span>
                              {!notification.read && (
                                <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 ml-4">
                            {notification.actionUrl && (
                              <Link href={notification.actionUrl}>
                                <Button size="sm" variant="outline">
                                  View
                                </Button>
                              </Link>
                            )}
                            <Button size="sm" variant="ghost">
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/profile/settings">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-800 mb-1">Notification Settings</h3>
                <p className="text-sm text-gray-600">Manage your notification preferences</p>
              </div>
            </Link>
            
            <Link href="/home">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <BookOpen className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-800 mb-1">Discover Stories</h3>
                <p className="text-sm text-gray-600">Find new stories to read</p>
              </div>
            </Link>
            
            <Link href="/profile">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <User className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-medium text-gray-800 mb-1">Profile</h3>
                <p className="text-sm text-gray-600">View your reading activity</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
