//src/components/Header.tsx
'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
          <img src="/packlitelogo.png" alt="Pack Lite logo" className="h-16 w-18" />
          <span className="text-xl font-bold">Pack Lite</span>
        </div>
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-purple-600 transition">Home</Link>
        <Link href="/shop" className="hover:text-purple-600 transition">Shop</Link>
        <Link href="/about" className="hover:text-purple-600 transition">About</Link>
        <li><a href="mailto:wgreaney0405@gmail.com">Contact</a></li>
        </nav>
    </header>
  );
};

export default Header;
