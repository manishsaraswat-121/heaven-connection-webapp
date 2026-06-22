import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { SITE } from '../../constants/site';
import { whatsappLink } from '../../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-serif text-xl">{SITE.title}</div>
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
          <div className="mt-3 text-sm space-y-1.5">
            <div>Gurugram, Haryana — India</div>
            <div>
              <a href={whatsappLink('Hello The Heaven Connection, I would like to know more about your services.')}
                 className="hover:text-accent transition-colors">
                WhatsApp: {SITE.phone}
              </a>
            </div>
            <div>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                {SITE.email}
              </a>
            </div>
            <div>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"
                 className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4" />
                @theheaven_connection_baking
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} {SITE.title} — All rights reserved.
      </div>
    </footer>
  );
}
