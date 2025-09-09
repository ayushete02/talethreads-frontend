# PowerShell script to build Android APK

Write-Host "🚀 Building TaleThreads Android APK..." -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# Step 1: Build the PWA
Write-Host "📦 Building PWA..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ PWA build failed" -ForegroundColor Red
    exit 1
}

# Step 2: Copy web assets to Capacitor
Write-Host "📱 Copying to Android project..." -ForegroundColor Blue
npx cap copy

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Copy failed" -ForegroundColor Red
    exit 1
}

# Step 3: Sync Capacitor
Write-Host "🔄 Syncing Capacitor..." -ForegroundColor Blue
npx cap sync

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Sync failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Ready to build APK!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npx cap open android (opens Android Studio)" -ForegroundColor White
Write-Host "2. In Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)" -ForegroundColor White
Write-Host "3. Find APK at: android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Your PWA is ready to become an Android app!" -ForegroundColor Green
