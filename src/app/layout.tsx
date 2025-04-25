import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'German Learning App',
  description: 'Learn German with our interactive app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}