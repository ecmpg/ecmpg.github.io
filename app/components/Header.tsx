'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import SiteLogo from './SiteLogo';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  const normalizePath = (value: string) => {
    if (!value) {
      return '/';
    }

    if (value === '/') {
      return '/';
    }

    return value.endsWith('/') ? value.slice(0, -1) : value;
  };

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, currentHash]);

  const isItemActive = (href: string) => {
    const normalizedPathname = normalizePath(pathname || '/');

    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      return normalizedPathname === normalizePath(pathPart) && currentHash === `#${hashPart}`;
    }

    return normalizedPathname === normalizePath(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 float-up">
            <SiteLogo size={44} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">University of Huddersfield</p>
              <p className="text-lg md:text-xl font-display font-semibold text-dark">ECMPG</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-primary ${isItemActive(item.href) ? 'text-primary font-semibold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="mt-4 md:hidden rounded-2xl border border-gray-300 bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isItemActive(item.href) ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
