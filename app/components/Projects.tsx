'use client';

import { projects } from '@/data/projects';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type ProjectsProps = {
  preview?: boolean;
};

export default function Projects({ preview = false }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const visibleProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-14 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
              Our Work
            </p>
            <h2 className="section-title text-primary">Research Projects</h2>
            <p className="section-subtitle">
              Cutting-edge research and development in machine tool technology, industrial robotics, and precision manufacturing.
            </p>
          </div>
          
          {/* Carousel Navigation Arrows */}
          <div className="flex gap-2 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all shadow-md border border-gray-200"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all shadow-md border border-gray-200"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.imageLabel}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              )}
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                {/* Arrow Button */}
                <button
                  className="w-10 h-10 rounded bg-secondary hover:bg-secondary/90 flex items-center justify-center transition-all"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {preview && projects.length > itemsPerPage && (
          <div className="text-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}