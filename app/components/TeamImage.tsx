'use client';

import { usePathname } from 'next/navigation';

export default function TeamImage() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) return null;

  return (
    <div className="relative pb-5">
      <div className="absolute -top-64 left-0 right-0 w-full max-w-5xl h-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-10">              
        <img src="/images/team.jpeg" alt="ECMPG Team" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}
