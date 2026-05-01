'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  end: number;
  start: boolean;
  duration?: number;
};

function CountUp({ end, start, duration = 1400 }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId = 0;
    const startedAt = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(end * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [start, end, duration]);

  return <>{value}</>;
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 90, label: 'Research Outcomes' },
    { value: 50, label: 'Research Publications' },
    { value: 15, label: 'Industry Partners' },
  ];

  return (
    <section id="about" className="py-14 md:py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-auto">
            <div className="relative h-72 rounded-lg overflow-hidden">
              <Image
                src="/images/about-3.jpg"
                alt="Engineer working with precision machinery"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden mt-8">
              <Image
                src="/images/about-4.png"
                alt="Manufacturing equipment research"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden -mt-8">
              <Image
                src="/images/about-2.JPG"
                alt="CNC machine operation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden">
              <Image
                src="/images/about-1.JPG"
                alt="Industrial robotics development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
              ABOUT ECMPG
            </p>
            <h2 className="section-title text-primary">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Engineering Control and Machine Performance Group (ECMPG) at the University of Huddersfield is dedicated to advancing the field of precision manufacturing through cutting-edge research and innovation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our group specializes in machine tool technology, industrial robotics, and precision engineering, working closely with industry partners to develop practical solutions that address real-world manufacturing challenges.
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Statistics Section */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center bg-white relative overflow-hidden"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage:
                      'linear-gradient(white, white), linear-gradient(60deg, #289dfd -7.93%, #fdc243 114.63%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <h3 className="text-primary text-5xl font-bold text-gray-900 mb-2">
                    <CountUp end={stat.value} start={startCount} />+
                  </h3>
                  <p className="text-gray-700 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
