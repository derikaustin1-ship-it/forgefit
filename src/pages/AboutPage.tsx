import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, HeartHandshake, ArrowRight } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';

export const AboutPage: React.FC = () => {
  return (
    <>
      <MetaTitle
        title="Forge Fitness | About Our Training Philosophy"
        description="Learn about Forge Fitness — a fictional premium gym and fitness studio concept designed for purposeful strength, athletic movement, and consistency in Coimbatore."
      />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#121519] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                ABOUT FORGE FITNESS
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
              BUILT FOR PEOPLE WHO WANT MORE.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
              Forge Fitness is a fictional premium fitness studio concept focused on purposeful training, expert guidance, and a welcoming training environment in Coimbatore, Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Mission Grid */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Visual */}
            <div className="relative rounded-sm overflow-hidden border border-[#242933] group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
                alt="Forge Fitness Gym Floor"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0B0D0F]/90 border border-[#242933] rounded backdrop-blur-md">
                <p className="text-xs font-heading font-bold text-[#CCFF00] uppercase tracking-wider">
                  DESIGNED FOR COIMBATORE
                </p>
                <p className="text-sm text-gray-300">
                  A modern facility tailored for purposeful strength and athletic progression.
                </p>
              </div>
            </div>

            {/* Right: Core Pillars */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-white mb-4">
                  OUR PURPOSE & VISION
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  We believe that fitness shouldn't be confusing, chaotic, or built on short-term fads. At Forge Fitness, every piece of equipment, every coaching cue, and every structured program is built around fundamental human movement and progressive physical development.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether your objective is raw compound strength, body transformation, functional mobility, or elevated daily energy, our studio provides the tools and environment to achieve it.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-4 pt-4 border-t border-[#242933]">
                <div className="flex gap-4">
                  <div className="p-2.5 bg-[#181C22] rounded border border-[#242933] h-fit">
                    <Target className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white uppercase">OUR MISSION</h3>
                    <p className="text-sm text-gray-400">To provide structured training, expert coaching, and a supportive culture for everyone who steps through our doors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-[#181C22] rounded border border-[#242933] h-fit">
                    <ShieldCheck className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white uppercase">TRAINING PHILOSOPHY</h3>
                    <p className="text-sm text-gray-400">Master movement mechanics first, progressively overload second, and build lifelong consistency third.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-[#181C22] rounded border border-[#242933] h-fit">
                    <HeartHandshake className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white uppercase">COMMUNITY ENVIRONMENT</h3>
                    <p className="text-sm text-gray-400">An inclusive, focused atmosphere free from intimidation, ego, or clutter.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Demo Notice */}
          <div className="bg-[#121519] border border-[#242933] p-8 rounded-sm text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest block mb-2">
              PORTFOLIO DEMONSTRATION NOTICE
            </span>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Forge Fitness is a fictional business concept created by <strong className="text-white">Dgrab Web Studio</strong> to demonstrate custom web application design for fitness centers, athletic clubs, and local businesses in India and worldwide.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all"
            >
              EXPLORE OUR PROGRAMS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
