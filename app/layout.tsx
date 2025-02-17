
import type { Metadata } from "next";
import Header from "./components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  console.log('Current pathname:', pathname);
  console.log('Is homepage:', isHomePage);

  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        {!isHomePage && <Header />}
        {children}
      </body>
    </html>
  );
}
