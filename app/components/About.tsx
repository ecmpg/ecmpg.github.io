'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-14 md:py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/about-3.jpg"
                alt="Engineer working with precision machinery"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/about-1.JPG"
                alt="Manufacturing equipment research"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/about-4.JPG"
                alt="CNC machine operation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/about-2.JPG"
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
              href="/about" 
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
