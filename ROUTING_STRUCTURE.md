# 🚀 TaleThreads - Complete Routing Structure

This document outlines the complete routing structure for the TaleThreads story platform, based on the wireframes and production requirements.

## 📁 Complete App Structure

```
src/app/
├── page.tsx                          # Landing page (redirects to login)
├── layout.tsx                        # Root layout
├── globals.css                       # Global styles
├── loading.tsx                       # Global loading UI
├── error.tsx                         # Global error UI
├── not-found.tsx                     # 404 page
│
├── (auth)/                           # Authentication routes
│   ├── layout.tsx                    # Auth-specific layout
│   ├── login/
│   │   └── page.tsx                  # Login page (Screen 1)
│   └── signup/
│       └── page.tsx                  # Signup page
│
├── onboarding/                       # User onboarding flow
│   ├── persona/
│   │   └── page.tsx                  # Persona setup (Screens 2-3)
│   └── reading-preference/
│       └── page.tsx                  # Reading experience choice (Screen 3)
│
├── home/
│   └── page.tsx                      # Main home feed (Screen 4)
│
├── categories/
│   └── page.tsx                      # Categories page (Screen 4.1)
│
├── ranking/
│   └── page.tsx                      # Rankings page (Screen 4.2)
│
├── for-you/
│   └── page.tsx                      # Personalized recommendations
│
├── search/
│   └── page.tsx                      # Search functionality
│
├── story/
│   └── [id]/
│       ├── page.tsx                  # Story preview/details (Screen 5)
│       ├── read/
│       │   └── page.tsx              # Reading interface (Screen 6)
│       └── chapter/
│           └── [chapterId]/
│               └── page.tsx          # Individual chapter reading
│
├── profile/
│   ├── page.tsx                      # Profile page (Screen 7)
│   ├── edit/
│   │   └── page.tsx                  # Edit profile (Screen 7 Edit)
│   ├── coin-balance/
│   │   └── page.tsx                  # Coin balance page
│   ├── bookmarks/
│   │   └── page.tsx                  # Bookmarked stories
│   ├── library/
│   │   └── page.tsx                  # Personal library
│   └── settings/
│       └── page.tsx                  # User settings
│
├── author/
│   └── [id]/
│       └── page.tsx                  # Author profile page
│
├── notifications/
│   └── page.tsx                      # Notifications page
│
├── create/
│   ├── story/
│   │   └── page.tsx                  # Create new story
│   └── chapter/
│       └── page.tsx                  # Create new chapter
│
├── dashboard/                        # Author dashboard
│   ├── page.tsx                      # Dashboard overview
│   ├── stories/
│   │   └── page.tsx                  # Manage stories
│   └── analytics/
│       └── page.tsx                  # Story analytics
│
├── admin/                            # Admin panel (future)
│   ├── page.tsx                      # Admin dashboard
│   ├── users/
│   │   └── page.tsx                  # User management
│   └── content/
│       └── page.tsx                  # Content moderation
│
└── api/                              # API routes
    ├── auth/
    │   ├── login/
    │   │   └── route.ts              # POST /api/auth/login
    │   ├── logout/
    │   │   └── route.ts              # POST /api/auth/logout
    │   ├── register/
    │   │   └── route.ts              # POST /api/auth/register
    │   └── me/
    │       └── route.ts              # GET /api/auth/me
    ├── stories/
    │   ├── route.ts                  # GET, POST /api/stories
    │   ├── [id]/
    │   │   ├── route.ts              # GET, PUT, DELETE /api/stories/[id]
    │   │   └── chapters/
    │   │       ├── route.ts          # GET, POST /api/stories/[id]/chapters
    │   │       └── [chapterId]/
    │   │           └── route.ts      # GET, PUT, DELETE /api/stories/[id]/chapters/[chapterId]
    │   ├── trending/
    │   │   └── route.ts              # GET /api/stories/trending
    │   ├── recommendations/
    │   │   └── route.ts              # GET /api/stories/recommendations
    │   └── search/
    │       └── route.ts              # GET /api/stories/search
    ├── users/
    │   ├── route.ts                  # GET, POST /api/users
    │   ├── [id]/
    │   │   └── route.ts              # GET, PUT /api/users/[id]
    │   └── preferences/
    │       └── route.ts              # GET, PUT /api/users/preferences
    ├── genres/
    │   └── route.ts                  # GET /api/genres
    ├── notifications/
    │   └── route.ts                  # GET, POST /api/notifications
    ├── bookmarks/
    │   └── route.ts                  # GET, POST, DELETE /api/bookmarks
    ├── reading-progress/
    │   └── route.ts                  # GET, POST, PUT /api/reading-progress
    ├── coins/
    │   ├── route.ts                  # GET /api/coins (balance)
    │   ├── purchase/
    │   │   └── route.ts              # POST /api/coins/purchase
    │   └── transactions/
    │       └── route.ts              # GET /api/coins/transactions
    └── ai/
        ├── generate-story/
        │   └── route.ts              # POST /api/ai/generate-story
        ├── recommendations/
        │   └── route.ts              # POST /api/ai/recommendations
        └── persona-analysis/
            └── route.ts              # POST /api/ai/persona-analysis
```

## 🛣️ Route Descriptions

### Public Routes (No Authentication Required)
- `/` - Landing page with redirect to login
- `/login` - User login (Screen 1)
- `/signup` - User registration

### Protected Routes (Authentication Required)
- `/onboarding/*` - First-time user setup
- `/home` - Main application dashboard (Screen 4)
- `/categories` - Browse by genre (Screen 4.1)
- `/ranking` - Story rankings (Screen 4.2)
- `/for-you` - AI-powered recommendations
- `/search` - Search stories and authors
- `/story/[id]` - Story details (Screen 5)
- `/story/[id]/read` - Reading interface (Screen 6)
- `/profile/*` - User profile management (Screen 7)

### Dynamic Routes
- `[id]` - Story ID parameter
- `[chapterId]` - Chapter ID parameter
- `[authorId]` - Author ID parameter

### Route Groups
- `(auth)` - Authentication layouts without affecting URL structure

## 🔐 Authentication Flow
1. User visits `/` → redirected to `/login`
2. After login → redirected to `/home`
3. First-time users → redirected to `/onboarding/persona`
4. Onboarding complete → redirected to `/home`

## 📱 Mobile-First Responsive Design
All routes are designed with mobile-first approach:
- Touch-friendly interfaces
- Swipe gestures for reading
- Optimized for various screen sizes
- PWA capabilities for app-like experience

## 🤖 AI Integration Points
- `/onboarding/persona` - Collect user preferences
- `/for-you` - AI-powered recommendations
- `/api/ai/*` - AI services for story generation and analysis

## 🔔 Real-time Features
- Notifications system
- Reading progress sync
- Live recommendations update

## 📊 Analytics & Monitoring
- User reading behavior tracking
- Story performance metrics
- Recommendation effectiveness analysis

## 🚀 Future Enhancements
- Social features (comments, discussions)
- Story collaboration tools
- Advanced AI story generation
- Multi-language support
- Voice reading capabilities

This routing structure provides a solid foundation for the TaleThreads platform while maintaining scalability for future features.
