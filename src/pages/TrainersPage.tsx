import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Dumbbell } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';
import { TRAINERS } from '../data/gymData';

export const TrainersPage: React.FC = () => {
  return (
    <>
      <MetaTitle
        title="Forge Fitness | Coaches & Trainers"
        description="Meet the fictional coaching staff at Forge Fitness Coimbatore — experts in strength training, performance coaching, and mobility."
      />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#121519] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                EXPERT COACHING
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
              COACHES & TRAINERS.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-4">
              Our fictional coaching team brings structured methodology, strict technical standards, and tailored accountability.
            </p>
            <div className="inline-block bg-[#0B0D0F] border border-[#242933] px-3.5 py-1.5 rounded text-xs font-mono text-gray-400">
              Fictional trainer profiles created for this portfolio demonstration.
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-[#121519] border border-[#242933] hover:border-[#CCFF00]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="inline-block text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00] bg-[#0B0D0F]/90 px-3 py-1 rounded border border-[#242933] mb-2">
                        {trainer.role}
                      </span>
                      <h2 className="font-heading font-black text-3xl uppercase text-white">
                        {trainer.name}
                      </h2>
                    </div>
                  </div>

                  {/* Bio & Focus */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {trainer.bio}
                    </p>

                    <div>
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#CCFF00] flex items-center gap-2 mb-3">
                        <Dumbbell className="w-4 h-4" />
                        SPECIALIZATION & FOCUS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {trainer.trainingFocus.map((focus) => (
                          <span
                            key={focus}
                            className="text-xs font-semibold text-gray-200 bg-[#181C22] px-3 py-1 rounded border border-[#242933]"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={`/contact?trainer=${trainer.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#181C22] hover:bg-[#CCFF00] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-widest py-3 rounded-sm border border-[#242933] transition-all"
                  >
                    <span>BOOK SESSION WITH {trainer.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center text-xs text-gray-400 bg-[#121519] p-4 rounded border border-[#242933] max-w-2xl mx-auto">
            <Award className="w-4 h-4 text-[#CCFF00] inline-block mr-2 -mt-0.5" />
            Note: All coach profiles on this page are fictional demo illustrations created for Dgrab's portfolio website.
          </div>

        </div>
      </section>
    </>
  );
};
