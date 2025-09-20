# Web3 Integration with RainbowKit

This project now includes Web3 authentication using RainbowKit for wallet connections.

## Setup Instructions

### 1. Environment Variables

Copy the example environment file and add your WalletConnect Project ID:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your WalletConnect Project ID:

```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_actual_project_id
```

**Get your Project ID:**
1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy the Project ID from your dashboard

### 2. Authentication Flow

The app now uses Web3 wallet authentication:

- **Public Routes**: `/`, `/login`, `/signup` - accessible without wallet connection
- **Protected Routes**: All other routes require wallet connection
- **Auto-redirect**: When accessing protected routes without authentication, users are redirected to `/login`
- **Return to intended page**: After connecting wallet, users are redirected to their originally intended page

### 3. How it Works

1. **Login/Signup Pages**: Include RainbowKit connect buttons alongside traditional forms
2. **Protected Routes**: Automatically check wallet connection status
3. **Auth Context**: Manages authentication state and redirects across the app
4. **Route Protection**: `ProtectedRoute` component wraps protected pages

### 4. Supported Wallets

RainbowKit supports popular wallets including:
- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- And many more

### 5. Supported Networks

The app is configured to work with:
- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base
- Sepolia (development only)

### 6. Usage Example

```tsx
// Protected page example
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function MyProtectedPage() {
  return (
    <ProtectedRoute>
      <div>Your protected content here</div>
    </ProtectedRoute>
  );
}
```

## Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Important Notes

- Users must connect their wallet to access protected routes
- The app will remember the user's intended destination and redirect there after successful authentication
- All wallet interactions are handled securely through RainbowKit
- The authentication state persists across page refreshes
