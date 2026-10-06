import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
      {/* Geometric SVG Icon */}
      <div className="w-8 h-8 md:w-9 md:h-9 bg-[#181C22] border border-[#242933] group-hover:border-[#CCFF00] rounded-sm flex items-center justify-center transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg className="w-5 h-5 text-[#CCFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4h12l-2 5H8L6 4z" fill="currentColor" fillOpacity="0.2" />
          <path d="M4 14h16" />
          <path d="M7 19h10" />
          <path d="M12 9v10" />
        </svg>
      </div>

      <div className={`font-heading font-extrabold uppercase tracking-wider text-white flex flex-col leading-tight ${sizeClasses[size]}`}>
        <span className="flex items-center gap-1.5">
          FORGE
          <span className="inline-block w-1.5 h-1.5 bg-[#CCFF00] rounded-full group-hover:scale-125 transition-transform" />
        </span>
        <span className="text-[0.65em] font-medium tracking-[0.25em] text-gray-400 group-hover:text-white transition-colors">
          FITNESS
        </span>
      </div>
    </Link>
  );
};
