import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { href: "/help", label: "Help" },
    { href: "/help", label: "News and Events" },
    { href: "/help/privacy", label: "Privacy Policy" },
    { href: "/help/terms", label: "Terms of Services" },
    { href: "/help/content-ratings", label: "Content Ratings" },
    { href: "/help/copyrights", label: "Copyrights" },
    { href: "/help/community", label: "Community Guidelines" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary/0 to-primary mt-12 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <span className="text-black font-bold text-sm">𝕏</span>
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <span className="text-black font-bold text-sm">f</span>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm text-black flex-wrap mb-6">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:underline transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs text-black leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Egestas eu sed et nulla ut
            ut vitae dolor non. In cursus sed a molestie justo. Turpis donec
            consequat magna pellentesque pharetra in nibh laoreet. Nibh molestie
            aliquam egestas sit et a felis.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-black">
          ©2025 TaleThreads. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
