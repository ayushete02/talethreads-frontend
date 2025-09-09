#!/bin/bash

echo "🚀 Building TaleThreads Android APK..."
echo "======================================"

# Step 1: Build the PWA
echo "📦 Building PWA..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ PWA build failed"
    exit 1
fi

# Step 2: Copy web assets to Capacitor
echo "📱 Copying to Android project..."
npx cap copy

if [ $? -ne 0 ]; then
    echo "❌ Copy failed"
    exit 1
fi

# Step 3: Sync Capacitor
echo "🔄 Syncing Capacitor..."
npx cap sync

if [ $? -ne 0 ]; then
    echo "❌ Sync failed"
    exit 1
fi

echo ""
echo "✅ Ready to build APK!"
echo ""
echo "Next steps:"
echo "1. Run: npx cap open android (opens Android Studio)"
echo "2. In Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)"
echo "3. Find APK at: android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "🎉 Your PWA is ready to become an Android app!"
