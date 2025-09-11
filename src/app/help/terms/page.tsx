import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto p-6 flex items-center gap-4">
          <Link href="/help">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Terms of Service</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> November 1, 2024
            </p>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> November 1, 2024
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              By accessing and using TaleThreads (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Permission is granted to temporarily access the materials on TaleThreads for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ modify or copy the materials</li>
              <li>â€¢ use the materials for any commercial purpose or for any public display</li>
              <li>â€¢ attempt to reverse engineer any software contained on the website</li>
              <li>â€¢ remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Content and Conduct</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Users are responsible for all content they post, upload, or share on TaleThreads. You agree not to:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ Post content that is illegal, harmful, threatening, abusive, or defamatory</li>
              <li>â€¢ Share copyrighted material without proper authorization</li>
              <li>â€¢ Engage in harassment or bullying of other users</li>
              <li>â€¢ Share content that contains explicit violence or adult material without proper age restrictions</li>
              <li>â€¢ Attempt to gain unauthorized access to other user accounts or system resources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Accounts</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information. 
              You are responsible for safeguarding your password and for maintaining the confidentiality of your account. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Virtual Currency and Payments</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              TaleThreads may offer virtual currency (&quot;Coins&quot;) for purchase to access premium content. 
              By purchasing Coins:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ You acknowledge that Coins have no monetary value outside the platform</li>
              <li>â€¢ Coins are non-transferable and non-refundable except as required by law</li>
              <li>â€¢ We reserve the right to modify Coin values and pricing with notice</li>
              <li>â€¢ Unused Coins may expire according to our policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Content creators retain ownership of their original works posted on TaleThreads. 
              By posting content, you grant TaleThreads a worldwide, non-exclusive license to use, display, 
              reproduce, and distribute your content on the platform. TaleThreads respects intellectual property 
              rights and will respond to valid DMCA notices.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices regarding the collection and use of your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              for any reason, including if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Disclaimers</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              The information on this website is provided on an &apos;as is&apos; basis. To the fullest extent permitted by law, 
              this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Limitations of Liability</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              In no event shall TaleThreads or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on TaleThreads&apos; website, even if authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Terms</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              TaleThreads reserves the right to modify these terms at any time. We will notify users of significant changes 
              via email or platform notification. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Information</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> support@talethreads.com
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> TaleThreads Legal Department<br />
                123 Story Lane, Digital City, DC 12345
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                By using TaleThreads, you agree to these terms and conditions.
              </p>
              <div className="flex gap-4">
                <Link href="/help/privacy">
                  <Button variant="outline" size="sm">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/help">
                  <Button size="sm">
                    Back to Help
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
