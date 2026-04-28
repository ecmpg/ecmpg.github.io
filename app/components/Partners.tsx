'use client';

import Image from 'next/image';
import { partners } from '@/data/partners';

export default function Partners() {
  return (
    <section id="partners" className="py-14 md:py-16 bg-white">
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
          Collaborations
        </p>
        <h2 className="section-title text-primary">Our Partners</h2>
        <p className="section-subtitle">
          We collaborate with leading organizations and research institutions to advance manufacturing innovation.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center min-h-[120px] mb-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.title} logo`}
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
