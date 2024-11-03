import type { Metadata } from 'next';
import { Playfair_Display, Cormorant } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const cormorant = Cormorant({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'P2',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
