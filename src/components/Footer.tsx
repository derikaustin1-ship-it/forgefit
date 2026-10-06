import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090B] border-t border-[#242933] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#242933]/60">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="font-heading font-bold text-white text-base tracking-wider pt-1">
              "BUILD STRONG. LIVE STRONG."
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Premium fitness studio in Coimbatore designed for purposeful training, expert coaching, and continuous physical progression.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-widest text-white border-l-2 border-[#CCFF00] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Programs', 'Trainers', 'Membership', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="hover:text-[#CCFF00] transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Location & Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-widest text-white border-l-2 border-[#CCFF00] pl-3">
              Location & Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CCFF00] shrink-0" />
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CCFF00] shrink-0" />
                <span>hello@forgefitness.demo</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Demo Notice & Dgrab Attribution */}
          <div className="space-y-4 bg-[#121519] p-5 rounded-lg border border-[#242933]">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#CCFF00]">
              Portfolio Concept Notice
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fictional demo website created by Dgrab to showcase capabilities for gyms, fitness studios, and local business web design.
            </p>
            <div className="pt-2">
              <a
                href="https://dgrab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#181C22] hover:bg-[#CCFF00] hover:text-black px-3.5 py-2 rounded border border-[#242933] transition-all duration-200 group"
              >
                <span>Created by Dgrab</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#CCFF00] group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Forge Fitness. Fictional portfolio concept.</p>
          <div className="flex items-center gap-6">
            <span>Coimbatore, Tamil Nadu</span>
            <span>•</span>
            <a
              href="https://dgrab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCFF00] hover:underline"
            >
              Dgrab Web Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
