'use client';

import { publications } from '@/data/publications';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type PublicationsProps = {
  preview?: boolean;
};

export default function Publications({ preview = false }: PublicationsProps) {
  const visiblePublications = preview ? publications.slice(0, 3) : publications;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visiblePublications.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, visiblePublications.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + visiblePublications.length) % visiblePublications.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % visiblePublications.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="publications" className="py-14 md:py-16 bg-gray-50">
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
          Research & Outputs
        </p>
        <h2 className="section-title text-primary">Publications</h2>
        <p className="section-subtitle">
          Academic publications, technical reports, and research outputs from our work in manufacturing and robotics.
        </p>

        {/* Carousel Container */}
        <div className="mt-10 relative">
           {/* Navigation Controls and Dot Indicators at Bottom */}
          <div className="flex items-center justify-start gap-8 mt-8 px-0">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white hover:border-secondary hover:bg-gray-100 hover:text-white transition-all shadow-md border border-gray-200"
              aria-label="Previous publication"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex justify-center gap-2">
              {visiblePublications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-secondary' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all shadow-md border border-gray-200"
              aria-label="Next publication"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Carousel Slides - Show 4 cards with last one highlighted */}
          <div className="relative overflow-hidden px-0">
            <div className="flex items-end gap-4 transition-transform duration-700 ease-in-out">
              {[...Array(4)].map((_, position) => {
                const index = (currentIndex + position) % visiblePublications.length;
                const pub = visiblePublications[index];
                const isMain = position === 3; // 4th card is the main one

                return (
                  <div
                    key={`${pub.id}-${position}`}
                    className={`transition-all duration-700 ${
                      isMain 
                        ? 'flex-shrink-0 w-[40%] opacity-100 scale-100' 
                        : 'flex-shrink-0 w-[18%] opacity-60 scale-90'
                    }`}
                  >
                    <div className={`rounded-2xl border p-6 transition-all duration-700 relative overflow-hidden bg-gradient-to-br ${
                      isMain 
                        ? 'from-primary/[0.08] via-white to-secondary/[0.14] border-secondary/70  h-[450px]' 
                        : 'from-primary/[0.04] via-white to-secondary/[0.08] border-gray-200 shadow-md h-[360px]'
                    }`}>
                      <p className={`font-semibold uppercase tracking-[0.18em] text-secondary mb-2 ${
                        isMain ? 'text-xs' : 'text-[10px]'
                      }`}>
                        {pub.type}
                      </p>
                      <h3 className={`font-display font-bold text-dark mb-3 ${
                        isMain ? 'text-xl' : 'text-sm line-clamp-2'
                      }`}>
                        {pub.title}
                      </h3>
                      
                      {/* Content section with blur for non-main cards */}
                      <div className={isMain ? '' : 'relative'}>
                        <p className={`text-gray-700 leading-relaxed mb-3 ${
                          isMain ? 'text-base' : 'text-xs'
                        }`}>
                          {pub.summary}
                        </p>
                        <div className="space-y-2">
                          <p className={`text-gray-600 italic ${
                            isMain ? 'text-sm' : 'text-[11px]'
                          }`}>
                            {pub.venue}
                          </p>
                          {pub.authors && isMain && (
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Authors:</span> {pub.authors}
                            </p>
                          )}
                        </div>
                        
                        {/* Blur overlay for non-main cards */}
                        {!isMain && (
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none"></div>
                        )}
                      </div>
                      
                      {pub.link && isMain ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-primary hover:text-white border border-primary hover:bg-primary rounded-lg transition-all"
                        >
                          {pub.linkLabel || 'View Publication'}
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View All Publications Button */}
          {preview && publications.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
              >
                View All Publications
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
