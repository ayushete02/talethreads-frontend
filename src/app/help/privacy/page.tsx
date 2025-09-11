import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';



export default function PrivacyPage() {
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
            <Shield className="w-6 h-6 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> November 1, 2024
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 1, 2024
            </p>
            <p className="text-gray-600 leading-relaxed">
              TaleThreads (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our platform 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ Account information (username, email address, password)</li>
              <li>â€¢ Profile information (bio, preferences, reading history)</li>
              <li>â€¢ Content you create (stories, comments, ratings)</li>
              <li>â€¢ Payment information (processed securely through third-party providers)</li>
              <li>â€¢ Communications with us (support requests, feedback)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ Device information (IP address, browser type, operating system)</li>
              <li>â€¢ Usage data (pages visited, time spent, features used)</li>
              <li>â€¢ Reading behavior (stories read, progress, bookmarks)</li>
              <li>â€¢ Location data (if you enable location services)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We use your information to:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ Provide and maintain our services</li>
              <li>â€¢ Personalize your experience and content recommendations</li>
              <li>â€¢ Process transactions and manage your account</li>
              <li>â€¢ Send you notifications and updates</li>
              <li>â€¢ Improve our platform and develop new features</li>
              <li>â€¢ Prevent fraud and ensure platform security</li>
              <li>â€¢ Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ <strong>With your consent:</strong> When you explicitly agree to share information</li>
              <li>â€¢ <strong>Service providers:</strong> Third parties who help us operate our platform</li>
              <li>â€¢ <strong>Legal compliance:</strong> When required by law or to protect our rights</li>
              <li>â€¢ <strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              <li>â€¢ <strong>Public content:</strong> Stories and comments you choose to make public</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits. 
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Privacy Rights</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ <strong>Access:</strong> Request access to your personal data</li>
              <li>â€¢ <strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li>â€¢ <strong>Erasure:</strong> Request deletion of your personal data</li>
              <li>â€¢ <strong>Portability:</strong> Request transfer of your data to another service</li>
              <li>â€¢ <strong>Restriction:</strong> Request limitation of processing your data</li>
              <li>â€¢ <strong>Objection:</strong> Object to processing of your data</li>
              <li>â€¢ <strong>Withdraw consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 pl-6">
              <li>â€¢ Remember your preferences and login status</li>
              <li>â€¢ Analyze platform usage and performance</li>
              <li>â€¢ Personalize content and advertisements</li>
              <li>â€¢ Provide social media features</li>
            </ul>
            <p className="mb-6 text-gray-600 leading-relaxed">
              You can control cookies through your browser settings. However, disabling cookies may affect platform functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Children&apos;s Privacy</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              TaleThreads is not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us, and we will delete such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. International Data Transfers</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data during international transfers, 
              in accordance with applicable data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Data Retention</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes 
              outlined in this privacy policy. We may also retain information to comply with legal obligations, 
              resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the &quot;Last Updated&quot; date. For significant changes, 
              we may also send you an email notification.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 mb-2">
                <strong>Privacy Officer:</strong> privacy@talethreads.com
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> TaleThreads Privacy Team<br />
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
                Your privacy is important to us. We are committed to protecting your personal information.
              </p>
              <div className="flex gap-4">
                <Link href="/help/terms">
                  <Button variant="outline" size="sm">
                    Terms of Service
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
