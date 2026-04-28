'use client';

import Link from 'next/link';
import { Copyright, Mail, Phone, MapPin } from 'lucide-react';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-gray-100 py-14">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SiteLogo size={34} className="rounded-lg" />
              <span className="font-bold text-lg">ECMPG</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Engineering Control and Machine Performance Group at the University of Huddersfield.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/team" className="hover:text-secondary transition-colors">Team</Link></li>
              <li><Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
              <li><Link href="/publications" className="hover:text-secondary transition-colors">Publications</Link></li>
              <li><Link href="/partners" className="hover:text-secondary transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                <span>University of Huddersfield<br/>Queensgate, Huddersfield<br/>HD1 3DH, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary" />
                <span>+44 (0)1484 422288</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary" />
                <a href="mailto:ecmpg@hud.ac.uk" className="hover:text-secondary transition-colors">
                  ecmpg@hud.ac.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-300 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Copyright aria-hidden="true" className="h-4 w-4" />
            <span>{new Date().getFullYear()} <a href='https://www.hud.ac.uk/' className="hover:text-secondary transition-colors" target='_blank' rel='noopener noreferrer'>University of Huddersfield</a> - ECMPG Research Group.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
