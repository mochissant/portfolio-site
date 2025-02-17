
'use client';

import { usePathname } from 'next/navigation';

export default function PathProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
