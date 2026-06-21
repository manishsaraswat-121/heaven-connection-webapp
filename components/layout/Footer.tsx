import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="mt-24 border-t bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-serif text-xl">The Heaven Connection</div>
          <div className="text-sm text-gray-700 mt-2">Monika Saraswat — Gurugram, Haryana</div>
        </div>
        <div>
          <div className="font-semibold">Explore</div>
          <ul className="mt-3 text-sm space-y-2">
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/bakery-orders">Bakery Orders</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-3 text-sm">Gurugram, Haryana — India</div>
          <div className="mt-2 text-sm">WhatsApp: +91 98765 43210</div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-600">© {new Date().getFullYear()} The Heaven Connection — All rights reserved.</div>
    </footer>
  );
}
