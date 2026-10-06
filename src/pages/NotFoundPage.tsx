import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertOctagon } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaTitle
        title="Forge Fitness | 404 - Page Not Found"
        description="The page you are looking for does not exist on Forge Fitness."
      />

      <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#0B0D0F]">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#181C22] border border-[#242933] rounded-full flex items-center justify-center mx-auto mb-6 text-[#CCFF00]">
            <AlertOctagon className="w-8 h-8" />
          </div>

          <span className="text-xs font-heading font-extrabold tracking-widest text-[#CCFF00] uppercase block mb-2">
            ERROR 404
          </span>

          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white mb-4">
            LOOKS LIKE YOU MISSED THE SET.
          </h1>

          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been relocated.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>BACK TO HOME</span>
          </Link>
        </div>
      </section>
    </>
  );
};
