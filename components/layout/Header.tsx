import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header(){
  return (
    <header className="backdrop-blur-sm sticky top-0 z-40 bg-white/60 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif">TH</div>
          <div>
            <div className="text-sm font-serif">The Heaven Connection</div>
            <div className="text-xs text-gray-600">By Monika Saraswat</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/courses" className="text-sm">Courses</Link>
          <Link href="/bakery-orders" className="text-sm">Bakery</Link>
          <Link href="/gallery" className="text-sm">Gallery</Link>
          <Link href="/blog" className="text-sm">Blog</Link>
          <Link href="/contact" className="text-sm font-semibold text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
