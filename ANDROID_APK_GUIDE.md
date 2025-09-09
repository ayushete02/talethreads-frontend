# Android APK Generation Guide for TaleThreads PWA

This guide shows you how to convert your PWA to an Android APK using multiple methods.

## Method 1: Trusted Web Activity (TWA) with Bubblewrap ⭐ RECOMMENDED

### Prerequisites:
1. **Android Studio** installed with SDK
2. **Java JDK 8+** installed
3. **Your PWA deployed to HTTPS** (required for TWA)

### Steps:

#### 1. Initialize TWA Project
```bash
# In your project directory
bubblewrap init --manifest https://yourdomain.com/manifest.json
```

#### 2. Configure the TWA
```bash
# Edit twa-manifest.json for customization
bubblewrap update
```

#### 3. Build APK
```bash
# Build debug APK
bubblewrap build

# Build release APK (requires signing)
bubblewrap build --release
```

### TWA Configuration Template (`twa-manifest.json`):
```json
{
  "packageId": "com.talethreads.app",
  "host": "yourdomain.com",
  "name": "TaleThreads",
  "launcherName": "TaleThreads",
  "display": "standalone",
  "themeColor": "#000000",
  "navigationColor": "#000000",
  "backgroundColor": "#ffffff",
  "enableNotifications": true,
  "startUrl": "/",
  "iconUrl": "https://yourdomain.com/icons/icon-512x512.png",
  "maskableIconUrl": "https://yourdomain.com/icons/icon-512x512.png",
  "shortcuts": [],
  "signingKey": {
    "path": "./android.keystore",
    "alias": "android"
  }
}
```

## Method 2: PWA Builder (Microsoft) 🚀 EASIEST

### Online Tool:
1. Visit: https://www.pwabuilder.com/
2. Enter your PWA URL: `https://yourdomain.com`
3. Click "Start" and let it analyze your PWA
4. Click "Package for Stores" → Android
5. Download the generated APK

### Local CLI:
```bash
npm install -g @pwabuilder/cli
pwa-build -p android -u https://yourdomain.com
```

## Method 3: Capacitor (Ionic) 🔧 FULL NATIVE ACCESS

### Setup:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init TaleThreads com.talethreads.app
npx cap add android
```

### Build:
```bash
npm run build
npx cap copy
npx cap open android
# Then build APK in Android Studio
```

## Method 4: Cordova/PhoneGap 📱 TRADITIONAL

### Setup:
```bash
npm install -g cordova
cordova create TaleThreadsApp com.talethreads.app TaleThreads
cd TaleThreadsApp
cordova platform add android
```

### Build:
```bash
# Copy your dist files to www/
cordova build android
```

## Quick Start Script

Here's a script to automate the TWA setup:
