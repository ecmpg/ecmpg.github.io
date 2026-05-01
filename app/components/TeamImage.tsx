'use client';

import { usePathname } from 'next/navigation';

export default function TeamImage() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) return null;

  return (
    <section id="partners" className="py-0">
      <div className="">
        {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
          Collaborations
        </p>
        <h2 className="section-title text-primary">Our Partners</h2>
        <p className="section-subtitle">
          We collaborate with leading organizations and research institutions to advance manufacturing innovation.
        </p> */}

        <div className="grid gap-0 md:grid-cols-1 lg:grid-cols-1 mt-0">
          <div className="relative">
            <div
              className="left-0 right-0 w-full h-[290px] md:h-[450px] rounded-t-6xl shadow-2xl mx-auto overflow-hidden z-10 parallax-bg bg-contain md:bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: 'url(/images/team.jpeg)' }}
              aria-label="ECMPG Team"
              role="img"
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
