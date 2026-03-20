import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Shondhikkhon | Wedding Photography & Cinematography',
  description:
    'Shondhikkhon — capturing timeless moments of love through creative wedding photography and cinematography in Bangladesh. Available worldwide.',
  keywords: 'wedding photography, cinematography, Bangladesh, Dhaka, holud, nikkah, wedding videography',
  openGraph: {
    title: 'Shondhikkhon | Wedding Photography & Cinematography',
    description: 'Capturing timeless moments of love through creative wedding photography and cinematography.',
    type: 'website',
    locale: 'en_BD',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
