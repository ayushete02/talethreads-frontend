import Link from 'next/link';
import {
  HelpCircle,
  Search, 
  BookOpen, 
  CreditCard, 
  Settings, 
  Shield, 
  Mail,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/app-header';



export default function HelpPage() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {
          q: 'How do I create an account?',
          a: 'You can create an account by clicking the "Sign Up" button on the login page. Fill in your email, create a password, and follow the onboarding process to set up your reading preferences.'
        },
        {
          q: 'How do I find stories to read?',
          a: 'Browse stories through the Categories section, check out trending stories in Rankings, or get personalized recommendations in the "For You" section. You can also use the search function to find specific stories or authors.'
        },
        {
          q: 'What is the onboarding process?',
          a: 'After signing up, you\'ll go through a quick setup where you choose your reading persona and preferences. This helps us recommend stories that match your interests.'
        }
      ]
    },
    {
      title: 'Reading Experience',
      icon: BookOpen,
      questions: [
        {
          q: 'How do I bookmark stories?',
          a: 'Click the bookmark icon on any story page to save it to your bookmarks. You can access all your bookmarked stories from the Profile > Bookmarks section.'
        },
        {
          q: 'Can I read stories offline?',
          a: 'Yes! Download stories for offline reading by clicking the download button on the story page. Downloaded stories will be available in your offline library.'
        },
        {
          q: 'How do I adjust reading settings?',
          a: 'Go to Profile > Settings > Reading Preferences to customize font size, line spacing, theme, and other reading options.'
        }
      ]
    },
    {
      title: 'Coins & Payment',
      icon: CreditCard,
      questions: [
        {
          q: 'What are coins used for?',
          a: 'Coins are used to unlock premium chapters, tip authors, and access exclusive content. You can earn coins through daily logins, completing reading milestones, or purchase them directly.'
        },
        {
          q: 'How do I earn free coins?',
          a: 'You can earn free coins by: logging in daily, completing stories, rating stories, referring friends, and participating in special events.'
        },
        {
          q: 'How do I purchase coins?',
          a: 'Go to Profile > Coin Balance and click "Purchase Coins". Choose from various coin packages and complete the payment through our secure payment system.'
        }
      ]
    },
    {
      title: 'Account & Privacy',
      icon: Shield,
      questions: [
        {
          q: 'How do I change my password?',
          a: 'Go to Profile > Settings > Privacy & Security to update your password. You\'ll need to verify your current password before setting a new one.'
        },
        {
          q: 'How do I manage notifications?',
          a: 'You can customize notification preferences in Profile > Settings > Notifications. Choose which types of notifications you want to receive via push notifications or email.'
        },
        {
          q: 'How do I delete my account?',
          a: 'To delete your account, go to Profile > Settings > Privacy & Security > Delete Account. Please note that this action is irreversible and will remove all your data.'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: Mail,
      href: '/help/contact',
      color: 'blue'
    },
    {
      title: 'Report a Bug',
      description: 'Found an issue? Let us know',
      icon: Settings,
      href: '/help/bug-report',
      color: 'red'
    },
    {
      title: 'Feature Request',
      description: 'Suggest new features',
      icon: HelpCircle,
      href: '/help/feature-request',
      color: 'green'
    },
    {
      title: 'Privacy Policy',
      description: 'Review our privacy practices',
      icon: Shield,
      href: '/help/privacy',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Help & Support</h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} href={action.href}>
                <div className={`p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-${action.color}-200 hover:shadow-md transition-all`}>
                  <div className={`w-12 h-12 bg-${action.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${action.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          {faqCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-800 pr-4">{faq.q}</h4>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
          <p className="mb-6 opacity-90">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/help/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </Link>
            <Link href="/help/community">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <HelpCircle className="w-5 h-5 mr-2" />
                Community Forum
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/help/terms" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
              Terms of Service <ChevronRight className="w-3 h-3" />
            </Link>
            <Link href="/help/privacy" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
              Privacy Policy <ChevronRight className="w-3 h-3" />
            </Link>
            <Link href="/help/about" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
              About TaleThreads <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
