//src/components/Footer.tsx
'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 bg-gray-100 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1">
            <li><Link href="/disclosure">Disclosure</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/refunds-returns">Refund & Returns</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li><a href="mailto:wgreaney0405@gmail.com">Email Support</a></li>
          </ul>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 Pack Lite – Built with ❤️ in Next.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
