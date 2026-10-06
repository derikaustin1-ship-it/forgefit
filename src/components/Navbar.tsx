import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D0F]/90 backdrop-blur-md border-b border-[#242933] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0D0F]/90 via-[#0B0D0F]/40 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-200 rounded-md relative ${
                  isActive
                    ? 'text-[#CCFF00] bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#CCFF00] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-[#CCFF00]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            JOIN NOW
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#CCFF00]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0B0D0F]/98 backdrop-blur-xl border-b border-[#242933] px-4 pt-4 pb-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#181C22] text-[#CCFF00] border-l-4 border-[#CCFF00]'
                      : 'text-gray-300 hover:bg-[#181C22] hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-[#242933]">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-sm uppercase tracking-widest px-5 py-3 rounded-sm transition-all shadow-lg text-center"
              >
                JOIN NOW
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
