import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DupeDetect AI - Automated product similarity monitoring for brands',
  description: 'Value Proposition: Helps e-commerce brands and designers protect their intellectual property by automatically identifying and alerting them to visually and descriptively similar "dupe" products sold across online marketplaces, preventing revenue loss and brand dilution (Signal 3).

Target Customer: D2C brands, fashion designers, furniture companies, luxury goods manufacturers, and their legal counsel seeking to protect their IP online.

---
Category: Micro-SaaS
Target Market: D2C brands, fashion designers, furniture companies, luxury goods manufacturers, and their legal counsel seeking to protect their IP online.
Source Hypothesis ID: 95366f5d-0ae8-4b57-9b86-a1b23793781b
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">DupeDetect AI - Automated product similarity monitoring for brands</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
