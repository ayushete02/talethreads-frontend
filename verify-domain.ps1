# TaleThreads PWA Domain Verification Script

Write-Host "🔍 TaleThreads PWA Verification for talethreads.xyz" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""

$domain = "https://talethreads.xyz"

Write-Host "Checking PWA requirements for: $domain" -ForegroundColor Blue
Write-Host ""

# Function to check URL
function Test-Url {
    param($url, $description)
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ $description - OK" -ForegroundColor Green
            return $true
        } else {
            Write-Host "❌ $description - Status: $($response.StatusCode)" -ForegroundColor Red
            return $false
        }
    }
    catch {
        Write-Host "❌ $description - Failed to connect" -ForegroundColor Red
        return $false
    }
}

# Check required files
$checks = @(
    @{ url = "$domain/"; desc = "Main site accessibility" },
    @{ url = "$domain/manifest.json"; desc = "Web App Manifest" },
    @{ url = "$domain/sw.js"; desc = "Service Worker" },
    @{ url = "$domain/icons/icon-192x192.png"; desc = "PWA Icon 192x192" },
    @{ url = "$domain/icons/icon-512x512.png"; desc = "PWA Icon 512x512" }
)

$allPassed = $true
foreach ($check in $checks) {
    $result = Test-Url -url $check.url -description $check.desc
    if (-not $result) { $allPassed = $false }
}

Write-Host ""
if ($allPassed) {
    Write-Host "🎉 All PWA requirements met! Your domain is ready for APK generation." -ForegroundColor Green
    Write-Host ""
    Write-Host "Ready for:" -ForegroundColor Cyan
    Write-Host "✅ PWA Builder (pwabuilder.com)" -ForegroundColor White
    Write-Host "✅ Bubblewrap TWA generation" -ForegroundColor White  
    Write-Host "✅ Google Play Store submission" -ForegroundColor White
    Write-Host ""
    Write-Host "🚀 Run: .\generate-production-apk.ps1 to create your APK" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  Some requirements not met. Please deploy your PWA to $domain first." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Deployment steps:" -ForegroundColor Cyan
    Write-Host "1. Run: npm run build" -ForegroundColor White
    Write-Host "2. Upload 'out' folder contents to $domain" -ForegroundColor White
    Write-Host "3. Ensure HTTPS is properly configured" -ForegroundColor White
    Write-Host "4. Run this script again to verify" -ForegroundColor White
}

Write-Host ""
Write-Host "📋 Quick Commands:" -ForegroundColor Magenta
Write-Host "• Build: npm run build" -ForegroundColor White
Write-Host "• Verify: .\verify-domain.ps1" -ForegroundColor White  
Write-Host "• APK: .\generate-production-apk.ps1" -ForegroundColor White
