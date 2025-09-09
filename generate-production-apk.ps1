# TaleThreads Production APK Generator for talethreads.xyz

Write-Host "🚀 TaleThreads Production APK Generator" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green
Write-Host "Domain: https://talethreads.xyz" -ForegroundColor Blue
Write-Host ""

Write-Host "📋 Choose your APK generation method:" -ForegroundColor Cyan
Write-Host "1. PWA Builder (Easiest - Online Tool)" -ForegroundColor White
Write-Host "2. Bubblewrap TWA (Google Recommended)" -ForegroundColor White  
Write-Host "3. Capacitor (Current Setup)" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-3)"

switch ($choice) {
    "1" {
        Write-Host "🌐 PWA Builder Method Selected" -ForegroundColor Green
        Write-Host ""
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Go to https://www.pwabuilder.com/" -ForegroundColor White
        Write-Host "2. Enter: https://talethreads.xyz" -ForegroundColor White
        Write-Host "3. Click 'Start' to analyze your PWA" -ForegroundColor White
        Write-Host "4. Click 'Package for Stores' → Android" -ForegroundColor White
        Write-Host "5. Download your APK!" -ForegroundColor White
        Write-Host ""
        Write-Host "⚡ This is the fastest method!" -ForegroundColor Green
    }
    
    "2" {
        Write-Host "🔧 Bubblewrap TWA Method Selected" -ForegroundColor Green
        Write-Host ""
        Write-Host "Installing Bubblewrap CLI..." -ForegroundColor Blue
        npm install -g @bubblewrap/cli
        
        Write-Host "Creating TWA project..." -ForegroundColor Blue
        if (Test-Path "twa-project") {
            Remove-Item -Recurse -Force "twa-project"
        }
        mkdir twa-project
        cd twa-project
        
        bubblewrap init --manifest https://talethreads.xyz/manifest.json
        
        Write-Host "✅ TWA project created!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. cd twa-project" -ForegroundColor White
        Write-Host "2. bubblewrap build" -ForegroundColor White
        Write-Host "3. Find APK at: app/build/outputs/apk/" -ForegroundColor White
    }
    
    "3" {
        Write-Host "📱 Capacitor Method Selected" -ForegroundColor Green
        Write-Host ""
        Write-Host "Building production version..." -ForegroundColor Blue
        npm run build
        
        Write-Host "Copying to Android project..." -ForegroundColor Blue
        npx cap copy
        
        Write-Host "Syncing configuration..." -ForegroundColor Blue
        npx cap sync
        
        Write-Host "✅ Ready to build APK!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. npx cap open android (opens Android Studio)" -ForegroundColor White
        Write-Host "2. Build → Build Bundle(s) / APK(s) → Build APK(s)" -ForegroundColor White
        Write-Host "3. Find APK at: android/app/build/outputs/apk/" -ForegroundColor White
    }
    
    default {
        Write-Host "❌ Invalid choice. Please run the script again." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🎉 Your APK will be ready for Google Play Store!" -ForegroundColor Green
Write-Host "📱 Domain configured: https://talethreads.xyz" -ForegroundColor Blue
