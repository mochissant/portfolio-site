
'use client';

import { usePathname } from 'next/navigation';

export default function PathProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <>
      {!isHomePage && children}
    </>
  );
}
