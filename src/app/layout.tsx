<![CDATA[
import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <nav className="container mx-auto flex space-x-6 py-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/new-feature" className="text-gray-700 hover:text-gray-900">
              New Feature
            </Link>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-100 text-center py-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
]]>