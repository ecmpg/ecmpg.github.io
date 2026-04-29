'use client';

import Link from 'next/link';
import { Cpu, Cog, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-visible pb-10 md:pb-10">
      {/* Hero Image Section */}
      <div 
        className="relative min-h-[600px]"
        style={{
          backgroundImage: 'url(/images/hero.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/100 via-gray-900/85 to-gray-900/70"></div>
        <div className="relative z-10 pt-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                University of Huddersfield
              </p>
              <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl font-bold text-white">
                ECMPG <br/><span className="text-secondary">Reseach Group</span> 
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Leading research in machine tool technology, industrial robotics, and precision manufacturing.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition-all shadow-lg">
                  Explore Projects
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-all">
                  Learn More
                </Link>
                <Link href="/team" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent text-white border border-white/50 font-semibold hover:bg-white/10 transition-all">
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Focus Section - Overlapping */}
      <div className="relative -mt-28 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
              <div className="flex-shrink-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
                  FEATURES
                </p>
                <h2 className="section-title text-primary">
                  Research Focus
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-red-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Machine Tool Technology
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced research in CNC systems, precision machining, and intelligent manufacturing.
                </p>
              </div>

              <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                  <Cog className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Industrial <br/>Robotics
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Collaborative robots, automation systems, and advanced control strategies.
                </p>
              </div>

              <div className="group bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Precision Manufacturing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cutting-edge research in precision engineering and mechatronics systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
