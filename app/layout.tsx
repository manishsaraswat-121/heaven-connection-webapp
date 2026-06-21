import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

export const metadata = {
  title: 'The Heaven Connection — Luxury Baking & Courses',
  description: 'Transform your passion for baking into art with Monika Saraswat. Premium online and offline baking courses in Gurugram.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
