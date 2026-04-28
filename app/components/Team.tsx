'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, User2 } from 'lucide-react';
import { team } from '@/data/team';

type TeamProps = {
  preview?: boolean;
  eagerImages?: boolean;
};

export default function Team({ preview = false, eagerImages = false }: TeamProps) {
  const visibleTeam = preview ? team.slice(0, 3) : team;

  return (
    <section id="team" className="py-14 md:py-16 bg-white">
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
          Our Experts
        </p>
        <h2 className="section-title text-primary">Meet Our Team</h2>
        <p className="section-subtitle">
          A dedicated team of researchers and academics advancing the frontiers of precision manufacturing and industrial robotics.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleTeam.map((person, index) => (
            <article
              key={person.id}
              className={`glass-card rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition-all float-up delay-${Math.min(index + 1, 3)}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Image
                  src={person.image}
                  alt={`${person.name} profile photo`}
                  width={120}
                  height={120}
                  className="h-32 w-32 rounded-full border-4 border-primary/20 object-cover"
                  loading={eagerImages ? 'eager' : 'lazy'}
                  priority={eagerImages && index < 3}
                />
                <div>
                  <h3 className="text-lg font-display font-semibold text-dark">{person.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{person.designation}</p>
                  <div className="flex items-center justify-center gap-4 my-1"> 
                    <a
                      href={`mailto:${person.email}`}
                      title="Send an email"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent hover:underline"
                    >
                      <Mail aria-hidden="true" className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      title="View profile"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent hover:underline"
                    >
                      <User2 aria-hidden="true" className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {preview ? (
          <div className="mt-8 text-center">
            <Link href="/team" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all">
              View All Team Members
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
