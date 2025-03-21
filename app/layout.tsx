import './styles/globals.css';  // 追加

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PathProvider from "./components/PathProvider";
import Header from "./components/Header";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
  icons: {
    icon: '/logo/mochissant-circle-logo.svg',
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className={`${geist.className} ${geistMono.className}`}>
        <PathProvider>
          <Header />
        </PathProvider>
        {children}
      </body>
    </html>
  );
}
