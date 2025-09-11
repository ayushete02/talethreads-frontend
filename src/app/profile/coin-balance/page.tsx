import Link from 'next/link';
import { Search, Bell, User, ChevronDown, List, Settings, TrendingDown, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function CoinBalancePage() {
  const transactions = [
    { id: 1, type: 'earned', amount: 50, description: 'Daily login bonus', date: '2024-11-01' },
    { id: 2, type: 'spent', amount: -20, description: 'Premium chapter unlock', date: '2024-10-30' },
    { id: 3, type: 'earned', amount: 25, description: 'Story completion bonus', date: '2024-10-28' },
    { id: 4, type: 'purchased', amount: 100, description: 'Coin purchase', date: '2024-10-25' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/home" className="font-bold text-xl">
              TaleThreads Logo
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/categories" className="hover:text-gray-300">CATEGORIES</Link>
            <Link href="/ranking" className="hover:text-gray-300">RANKING</Link>
            <Link href="/for-you" className="hover:text-gray-300">FOR YOU</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="text-blue-400">
                <User className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {/* Profile Navigation */}
        <div className="flex gap-4 mb-8">
          <Link href="/profile">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Reading History
            </button>
          </Link>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium">
            Coin Balance
          </button>
        </div>

        {/* Coin Balance Overview */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Coin Balance</h1>
            <div className="text-6xl font-bold text-blue-600 mb-4">🪙 1,250</div>
            <p className="text-gray-600">Available coins to spend on premium content</p>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Buy More Coins
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Earn Free Coins
            </button>
          </div>
        </section>

        {/* Transaction History */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">Transaction History</h2>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <List className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earned' ? 'bg-green-100 text-green-600' :
                    transaction.type === 'spent' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {transaction.type === 'earned' ? <TrendingDown className="w-4 h-4 rotate-180" /> :
                     transaction.type === 'spent' ? <TrendingDown className="w-4 h-4" /> : 
                     <CreditCard className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{transaction.description}</h3>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount} 🪙
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 text-center border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Load More Transactions
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">Help</a>
            <a href="#" className="hover:text-gray-800">News and Events</a>
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Services</a>
            <a href="#" className="hover:text-gray-800">Content Ratings</a>
            <a href="#" className="hover:text-gray-800">Copyrights</a>
            <a href="#" className="hover:text-gray-800">Community Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
