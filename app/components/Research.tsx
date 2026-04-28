'use client';

import { ChevronRight } from 'lucide-react';

export default function Research() {
  return (
    <section 
      id="research" 
      className="py-14 md:pt-8 md:pb-20 bg-white relative"
      style={{
        backgroundImage: 'url(/images/robot-arm.png)',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '40%',
      }}
    >
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 border-l-4 border-secondary pl-4">
            RESEARCH
        </p>
        <h2 className="section-title text-primary">Research Areas</h2>

        <div className="max-w-2xl">
          <ul className="space-y-4">
            {[
              'CNC machine tool calibration and optimization',
              'Industrial robotics and collaborative automation systems',
              'Precision engineering and mechatronics integration',
              'Advanced manufacturing processes and quality control',
              'IoT and smart manufacturing technologies',
              'Human-robot interaction and safety protocols',
            ].map((item, idx) => {
              const bgColors = ['bg-red-50', 'bg-gray-100', 'bg-blue-50'];
              const bgColor = bgColors[idx % 3];
              return (
                <li key={idx} className={`flex items-start gap-3 ${bgColor} rounded-lg p-3 hover:shadow-lg transition-all`}>
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-secondary"
                  />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
