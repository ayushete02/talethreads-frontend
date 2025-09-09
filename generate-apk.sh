#!/bin/bash

# TaleThreads PWA to Android APK Generator
# This script helps convert your PWA to an Android APK

echo "🚀 TaleThreads PWA to Android APK Generator"
echo "==========================================="

# Check if required tools are installed
command -v bubblewrap >/dev/null 2>&1 || { 
    echo "❌ Bubblewrap CLI not found. Installing..."
    npm install -g @bubblewrap/cli
}

# Check if Android SDK is available
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME not set. Please install Android Studio and set ANDROID_HOME"
    echo "   Example: export ANDROID_HOME=/path/to/Android/Sdk"
fi

echo ""
echo "📋 Before proceeding, ensure:"
echo "   1. ✅ Your PWA is deployed to HTTPS"
echo "   2. ✅ Android Studio is installed"
echo "   3. ✅ Java JDK 8+ is installed"
echo ""

read -p "Enter your PWA URL (https://yourdomain.com): " PWA_URL

if [ -z "$PWA_URL" ]; then
    echo "❌ PWA URL is required"
    exit 1
fi

echo ""
echo "🔧 Initializing TWA project..."

# Create android directory if it doesn't exist
mkdir -p android
cd android

# Initialize TWA project
bubblewrap init --manifest "$PWA_URL/manifest.json"

echo ""
echo "✅ TWA project initialized!"
echo ""
echo "📝 Next steps:"
echo "   1. Edit twa-manifest.json to customize your app"
echo "   2. Run: bubblewrap build (for debug APK)"
echo "   3. Run: bubblewrap build --release (for release APK)"
echo ""
echo "📱 Your APK will be generated in: android/app/build/outputs/apk/"
echo ""
echo "🎉 Happy building!"
