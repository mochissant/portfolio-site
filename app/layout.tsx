
import type { Metadata } from "next";
import Header from "./components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PathProvider from "./components/PathProvider";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        <PathProvider>
          <Header />
        </PathProvider>
        {children}
      </body>
    </html>
  );
}
