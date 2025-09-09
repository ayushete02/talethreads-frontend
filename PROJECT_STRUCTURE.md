# 🏗️ Professional Next.js Project Structure Guide

This document outlines the recommended professional file structure for our Next.js project with TypeScript and Tailwind CSS.

## 📁 Complete Project Structure

```
src/
├── app/                          # App Router (Next.js 13+)
│   ├── (auth)/                   # Route groups for authentication
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx            # Auth-specific layout
│   ├── (dashboard)/              # Route groups for dashboard
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx            # Dashboard-specific layout
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── logout/
│   │   │       └── route.ts
│   │   ├── users/
│   │   │   ├── route.ts          # GET /api/users, POST /api/users
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET /api/users/[id], PUT /api/users/[id]
│   │   └── health/
│   │       └── route.ts
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Global loading UI
│   ├── error.tsx                 # Global error UI
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI components (shadcn/ui style)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── modal.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── dropdown.tsx
│   │   └── index.ts              # Re-export all UI components
│   ├── forms/                    # Form components
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   ├── contact-form.tsx
│   │   └── profile-form.tsx
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   ├── navigation.tsx
│   │   └── breadcrumb.tsx
│   └── features/                 # Feature-specific components
│       ├── auth/
│       │   ├── auth-provider.tsx
│       │   ├── login-button.tsx
│       │   └── logout-button.tsx
│       ├── dashboard/
│       │   ├── dashboard-stats.tsx
│       │   ├── dashboard-chart.tsx
│       │   └── dashboard-table.tsx
│       └── profile/
│           ├── profile-avatar.tsx
│           ├── profile-settings.tsx
│           └── profile-security.tsx
├── lib/                          # Utility libraries and configurations
│   ├── utils.ts                  # General utilities (cn, formatDate, etc.)
│   ├── validations.ts            # Zod validation schemas
│   ├── auth.ts                   # Authentication logic
│   ├── db.ts                     # Database connection/ORM setup
│   ├── api.ts                    # API client configurations
│   ├── constants.ts              # App-wide constants
│   └── email.ts                  # Email utilities
├── hooks/                        # Custom React hooks
│   ├── use-auth.ts               # Authentication hook
│   ├── use-local-storage.ts      # Local storage hook
│   ├── use-debounce.ts           # Debounce hook
│   ├── use-fetch.ts              # Data fetching hook
│   └── use-form.ts               # Form handling hook
├── types/                        # TypeScript type definitions
│   ├── auth.ts                   # Authentication types
│   ├── api.ts                    # API response types
│   ├── database.ts               # Database model types
│   └── globals.ts                # Global type definitions
├── styles/                       # Additional styling files
│   ├── components.css            # Component-specific styles
│   ├── utilities.css             # Custom utility classes
│   └── animations.css            # Custom animations
├── store/                        # State management (Zustand/Redux)
│   ├── auth-store.ts             # Authentication state
│   ├── user-store.ts             # User data state
│   ├── ui-store.ts               # UI state (modals, etc.)
│   └── index.ts                  # Store exports
└── config/                       # Configuration files
    ├── database.ts               # Database configuration
    ├── auth.ts                   # Auth configuration (NextAuth, etc.)
    ├── site.ts                   # Site metadata and navigation
    └── env.ts                    # Environment variables validation
```

## 🎯 Directory Purpose and Guidelines

### `/src/app` - App Router Structure
- **Route Groups**: Use `(folder)` for grouping routes without affecting URL structure
- **Special Files**: 
  - `layout.tsx` - Shared UI for route segments
  - `page.tsx` - Route UI
  - `loading.tsx` - Loading UI
  - `error.tsx` - Error UI
  - `not-found.tsx` - 404 UI

### `/src/components` - Component Organization

#### `/ui` - Base UI Components
- Reusable, unstyled base components
- Follow consistent API patterns
- Use forwardRef for DOM components
- Export through index.ts for clean imports

```typescript
// Good
import { Button, Input, Modal } from '@/components/ui';

// Avoid
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
```

#### `/forms` - Form Components
- Complete form implementations
- Include validation logic
- Handle form state internally

#### `/layout` - Layout Components
- Navigation, headers, footers
- Sidebar and layout containers
- Should be stateless when possible

#### `/features` - Feature-Specific Components
- Group components by business feature
- Can include their own state management
- May include multiple related components

### `/src/lib` - Utilities and Configurations

#### Key Files:
- **`utils.ts`**: General utility functions (cn, formatDate, etc.)
- **`validations.ts`**: Zod schemas for data validation
- **`auth.ts`**: Authentication logic and helpers
- **`constants.ts`**: App-wide constants and enums

### `/src/hooks` - Custom React Hooks
- Reusable stateful logic
- Follow `use` naming convention
- Include TypeScript types for parameters and return values

### `/src/types` - TypeScript Definitions
- Global type definitions
- API response types
- Database model types
- Organize by domain/feature

### `/src/config` - Configuration Files
- Environment-specific settings
- External service configurations
- Site metadata and navigation structure

## 🔧 Implementation Guidelines

### 1. File Naming Conventions
```
PascalCase:     Components (Button.tsx, UserProfile.tsx)
kebab-case:     Pages and routes (user-profile/, api/user-settings/)
camelCase:      Hooks (useAuth.ts, useLocalStorage.ts)
lowercase:      Utilities and configs (utils.ts, auth.ts)
```

### 2. Import Organization
```typescript
// 1. React and Next.js imports
import React from 'react';
import { NextRequest } from 'next/server';

// 2. Third-party libraries
import { z } from 'zod';
import { clsx } from 'clsx';

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

// 4. Relative imports
import './component.css';
```

### 3. Component Structure Template
```typescript
'use client'; // Only if needed

import { useState } from 'react';
import { ComponentProps } from '@/types/component';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  // Props definition
}

export default function ComponentName({ 
  className,
  ...props 
}: ComponentNameProps) {
  // Component logic

  return (
    <div className={cn('base-styles', className)}>
      {/* Component JSX */}
    </div>
  );
}
```

### 4. API Route Structure
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Implementation
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', success: false },
      { status: 500 }
    );
  }
}
```

## 📦 Required Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "next": "^15.5.0",
    "typescript": "^5.0.0"
  }
}
```

### Utility Dependencies
```bash
npm install clsx tailwind-merge zod
npm install lucide-react # For icons
npm install @hookform/resolvers react-hook-form # For forms
npm install zustand # For state management (optional)
```

### Development Dependencies
```bash
npm install -D @types/node @types/react @types/react-dom
npm install -D eslint eslint-config-next
npm install -D prettier eslint-config-prettier
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install clsx tailwind-merge zod lucide-react
   ```

2. **Create Directory Structure**:
   ```bash
   mkdir -p src/{components/{ui,forms,layout,features},lib,hooks,types,styles,store,config}
   ```

3. **Set up Path Mapping** (already configured in tsconfig.json):
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

4. **Start Development**:
   ```bash
   npm run dev
   ```

## 🎨 Styling Conventions

### Tailwind CSS Organization
```css
/* Component styles in order of: */
/* 1. Layout (flex, grid, position) */
/* 2. Box model (w, h, p, m) */
/* 3. Typography (text, font) */
/* 4. Visual (bg, border, shadow) */
/* 5. Interactive (hover, focus) */

.btn-primary {
  @apply inline-flex items-center justify-center
         px-4 py-2 rounded-md
         text-sm font-medium
         bg-blue-600 text-white
         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
```

## 🔍 Best Practices

### Component Design
- ✅ Single responsibility principle
- ✅ Consistent prop interfaces
- ✅ Proper TypeScript typing
- ✅ Accessible by default
- ✅ Composable and reusable

### State Management
- ✅ Local state for component-specific data
- ✅ Context for shared component state
- ✅ External store (Zustand) for global app state
- ✅ Server state management with proper caching

### Performance
- ✅ Use React.memo for expensive components
- ✅ Implement proper loading states
- ✅ Optimize images with Next.js Image component
- ✅ Code splitting with dynamic imports

### Testing Structure
```
__tests__/
├── components/
├── hooks/
├── lib/
└── pages/
```

This structure provides a solid foundation for scalable, maintainable Next.js applications. Follow these guidelines to ensure consistency across your codebase.
