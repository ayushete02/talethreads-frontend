# TaleThreads PWA to Android APK Generator (PowerShell)
# This script helps convert your PWA to an Android APK

Write-Host "🚀 TaleThreads PWA to Android APK Generator" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green

# Check if required tools are installed
try {
    bubblewrap --version | Out-Null
    Write-Host "✅ Bubblewrap CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Bubblewrap CLI not found. Installing..." -ForegroundColor Red
    npm install -g @bubblewrap/cli
}

# Check if Android SDK is available
if (-not $env:ANDROID_HOME) {
    Write-Host "⚠️  ANDROID_HOME not set. Please install Android Studio and set ANDROID_HOME" -ForegroundColor Yellow
    Write-Host "   Example: `$env:ANDROID_HOME = 'C:\Users\YourName\AppData\Local\Android\Sdk'" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Before proceeding, ensure:" -ForegroundColor Cyan
Write-Host "   1. ✅ Your PWA is deployed to HTTPS" -ForegroundColor White
Write-Host "   2. ✅ Android Studio is installed" -ForegroundColor White
Write-Host "   3. ✅ Java JDK 8+ is installed" -ForegroundColor White
Write-Host ""

# For demonstration, I'll show you how to set up for localhost testing
$PWA_URL = Read-Host "Enter your PWA URL (or press Enter for localhost:3000)"

if ([string]::IsNullOrEmpty($PWA_URL)) {
    $PWA_URL = "http://localhost:3000"
    Write-Host "⚠️  Using localhost for testing. For production, deploy to HTTPS first!" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔧 Setting up TWA project structure..." -ForegroundColor Blue

# Create android directory if it doesn't exist
if (-not (Test-Path "android")) {
    New-Item -ItemType Directory -Path "android"
}

# Create a sample TWA manifest for the project
$twaManifest = @{
    packageId = "com.talethreads.app"
    host = if ($PWA_URL -match "localhost") { "10.0.2.2:3000" } else { ($PWA_URL -replace "https?://", "") }
    name = "TaleThreads"
    launcherName = "TaleThreads"
    display = "standalone"
    themeColor = "#000000"
    navigationColor = "#000000" 
    backgroundColor = "#ffffff"
    enableNotifications = $true
    startUrl = "/"
    iconUrl = "$PWA_URL/icons/icon-512x512.png"
    maskableIconUrl = "$PWA_URL/icons/icon-512x512.png"
    shortcuts = @()
    signingKey = @{
        path = "./android.keystore"
        alias = "android"
    }
} | ConvertTo-Json -Depth 3

$twaManifest | Out-File -FilePath "android/twa-manifest.json" -Encoding UTF8

Write-Host ""
Write-Host "✅ TWA project structure created!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Deploy your PWA to HTTPS (required for production)" -ForegroundColor White
Write-Host "   2. Update android/twa-manifest.json with your domain" -ForegroundColor White
Write-Host "   3. Run: cd android; bubblewrap init --manifest https://yourdomain.com/manifest.json" -ForegroundColor White
Write-Host "   4. Run: bubblewrap build (for debug APK)" -ForegroundColor White
Write-Host "   5. Run: bubblewrap build --release (for production APK)" -ForegroundColor White
Write-Host ""
Write-Host "📱 Your APK will be generated in: android/app/build/outputs/apk/" -ForegroundColor Yellow
Write-Host ""
Write-Host "🎉 Happy building!" -ForegroundColor Green

# Additional helpful commands
Write-Host ""
Write-Host "💡 Helpful commands:" -ForegroundColor Magenta
Write-Host "   • Test PWA compliance: npm run lighthouse" -ForegroundColor White
Write-Host "   • Start dev server: npm run dev" -ForegroundColor White
Write-Host "   • Build production: npm run build && npm start" -ForegroundColor White
Write-Host "   • Generate signing key: keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000" -ForegroundColor White
