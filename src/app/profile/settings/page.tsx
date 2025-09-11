import Link from "next/link";
import {
  Settings,
  Bell,
  Moon,
  Globe,
  Shield,
  Download,
  Smartphone,
  Volume2,
  Eye,
  User,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import AppHeader from "@/components/layout/app-header";

// SettingsItem interface removed as it's not used



export default function SettingsPage() {
  const settingsGroups = [
    {
      title: "Account",
      items: [
        {
          icon: User,
          label: "Profile Information",
          description: "Update your personal details",
          href: "/profile/edit",
          action: null,
        },
        {
          icon: Shield,
          label: "Privacy & Security",
          description: "Manage your privacy settings",
          href: "/profile/privacy",
          action: null,
        },
        {
          icon: LogOut,
          label: "Sign Out",
          description: "Sign out of your account",
          href: null,
          action: "logout",
          danger: true,
        },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          icon: Bell,
          label: "Push Notifications",
          description: "New chapters, recommendations",
          href: null,
          action: "toggle",
          enabled: true,
        },
        {
          icon: Bell,
          label: "Email Notifications",
          description: "Weekly digest, updates",
          href: null,
          action: "toggle",
          enabled: false,
        },
      ],
    },
    {
      title: "Reading Experience",
      items: [
        {
          icon: Moon,
          label: "Dark Mode",
          description: "Switch to dark theme",
          href: null,
          action: "toggle",
          enabled: false,
        },
        {
          icon: Eye,
          label: "Reading Preferences",
          description: "Font size, line spacing, colors",
          href: "/profile/reading-preferences",
          action: null,
        },
        {
          icon: Volume2,
          label: "Audio Settings",
          description: "Text-to-speech options",
          href: "/profile/audio-settings",
          action: null,
        },
        {
          icon: Download,
          label: "Offline Reading",
          description: "Download stories for offline access",
          href: "/profile/offline",
          action: null,
        },
      ],
    },
    {
      title: "App Settings",
      items: [
        {
          icon: Globe,
          label: "Language",
          description: "English (US)",
          href: "/profile/language",
          action: null,
        },
        {
          icon: Smartphone,
          label: "App Version",
          description: "v2.1.0 - Up to date",
          href: null,
          action: null,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help & FAQ",
          description: "Get help with common questions",
          href: "/help",
          action: null,
        },
        {
          icon: HelpCircle,
          label: "Contact Support",
          description: "Reach out to our support team",
          href: "/help/contact",
          action: null,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Customize your TaleThreads experience</p>
        </div>

        {/* Settings Groups */}
        <div className="space-y-8">
          {settingsGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  {group.title}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {group.items.map((item, index) => {
                  const IconComponent = item.icon;

                  if (item.action === "toggle") {
                    return (
                      <div
                        key={index}
                        className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {item.label}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={
                              "enabled" in item ? item.enabled : false
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    );
                  }

                  if (item.action === "logout") {
                    return (
                      <button
                        key={index}
                        className="w-full p-6 flex items-center justify-between hover:bg-red-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-red-600">
                              {item.label}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    );
                  }

                  if (item.href) {
                    return (
                      <Link key={index} href={item.href} className="block">
                        <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800">
                                {item.label}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="p-6 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            TaleThreads
          </h3>
          <p className="text-gray-600 mb-4">Version 2.1.0</p>
          <div className="flex justify-center gap-4 text-sm">
            <Link
              href="/help/terms"
              className="text-blue-600 hover:text-blue-700"
            >
              Terms of Service
            </Link>
            <Link
              href="/help/privacy"
              className="text-blue-600 hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/help/about"
              className="text-blue-600 hover:text-blue-700"
            >
              About
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
