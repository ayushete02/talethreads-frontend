import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/help", label: "Help" },
    { href: "/sitemap", label: "Site Map" },
    { href: "/help/privacy", label: "Privacy Policy" },
    { href: "/help/terms", label: "Terms of Services" },
    { href: "/help/content-ratings", label: "Content Ratings" },
    { href: "/help/copyrights", label: "Copyrights" },
    { href: "/help/community", label: "Community Guidelines" },
  ];

  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center gap-6 text-sm text-gray-600 flex-wrap">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-center mt-4 text-xs text-gray-500">
          © 2024 TaleThreads. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
