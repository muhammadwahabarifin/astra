import { Footer, Navbar } from '@/components';
import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import '@/styles/globals.css'
import { cn } from "@/lib/utils";

import { ThemeProvider } from '@/components';
import { SITE_CONFIG } from '@/config';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden',
          font.className
        )}
      >
        <ThemeProvider defaultTheme='dark' enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
