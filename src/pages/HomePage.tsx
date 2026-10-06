import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, UserCheck, Zap, Users, Shield, Compass, Flame, CheckCircle2 } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';
import { PROGRAMS, TRAINERS, MEMBERSHIP_PLANS } from '../data/gymData';

export const HomePage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-6 h-6 text-[#CCFF00]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#CCFF00]" />,
    Zap: <Zap className="w-6 h-6 text-[#CCFF00]" />,
    Users: <Users className="w-6 h-6 text-[#CCFF00]" />,
  };

  const whyForgeItems = [
    {
      number: '01',
      title: 'EXPERT GUIDANCE',
      description: 'Structured training with clear direction and practical coaching.',
      icon: <Compass className="w-5 h-5 text-[#CCFF00]" />
    },
    {
      number: '02',
      title: 'MODERN TRAINING',
      description: 'A focused environment designed for strength, conditioning and movement.',
      icon: <Flame className="w-5 h-5 text-[#CCFF00]" />
    },
    {
      number: '03',
      title: 'REAL CONSISTENCY',
      description: 'Build sustainable habits instead of chasing short-term motivation.',
      icon: <Shield className="w-5 h-5 text-[#CCFF00]" />
    },
    {
      number: '04',
      title: 'COMMUNITY',
      description: 'Train around people who are working toward becoming better.',
      icon: <Users className="w-5 h-5 text-[#CCFF00]" />
    },
  ];

  return (
    <>
      <MetaTitle
        title="Forge Fitness | Premium Gym & Fitness Studio in Coimbatore"
        description="Forge Fitness is a fictional premium gym and fitness studio concept offering strength training, personal training, functional fitness and group training in Coimbatore."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="Forge Fitness Cinematic Gym Training Floor"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/80 via-transparent to-[#0B0D0F]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Supporting Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181C22]/80 border border-[#242933] backdrop-blur-md mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-gray-300">
              PREMIUM FITNESS STUDIO • COIMBATORE
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none mb-4">
            FORGE FITNESS
          </h1>

          <div className="font-heading font-extrabold text-xl sm:text-3xl md:text-4xl text-[#CCFF00] uppercase tracking-wider mb-6">
            BUILD STRONG. LIVE STRONG.
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
            Premium training, expert coaching, and a community built to help you become stronger every day.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-sm uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 shadow-xl shadow-[#CCFF00]/10 hover:shadow-[#CCFF00]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </Link>

            <Link
              to="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121519]/80 hover:bg-[#181C22] text-white hover:text-[#CCFF00] font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm border border-[#242933] hover:border-[#CCFF00]/50 backdrop-blur-sm transition-all duration-200"
            >
              VIEW PROGRAMS
            </Link>
          </div>

        </div>
      </section>

      {/* 2. QUICK VALUE STRIP */}
      <section className="bg-[#121519] border-y border-[#242933] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4 text-center">
            {['STRENGTH', 'CONDITIONING', 'COACHING', 'COMMUNITY'].map((item, idx, arr) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#CCFF00] rotate-45" />
                  <span className="font-heading font-extrabold text-sm sm:text-base tracking-[0.2em] text-white uppercase">
                    {item}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <span className="hidden md:inline-block text-gray-700 font-bold">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHORT INTRO SECTION */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3 text-left">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
              OUR PHILOSOPHY
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-6">
            MORE THAN A GYM.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            Forge Fitness is built for people who are ready to train with purpose. Whether you're starting from zero or pushing toward your next personal milestone, our programs are designed around strength, movement and consistency.
          </p>
          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#181C22] hover:bg-[#242933] text-white hover:text-[#CCFF00] font-heading font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm border border-[#242933] transition-colors"
            >
              ABOUT FORGE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRAINING PROGRAMS SECTION */}
      <section className="py-20 bg-[#121519] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="border-l-2 border-[#CCFF00] pl-3 mb-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                  PROGRAMS
                </span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
                TRAIN YOUR WAY.
              </h2>
            </div>
            <Link
              to="/programs"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00] hover:text-white transition-colors"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="group bg-[#0B0D0F] border border-[#242933] hover:border-[#CCFF00]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CCFF00]/5"
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-2 bg-[#0B0D0F]/90 rounded-sm border border-[#242933] backdrop-blur-sm">
                    {iconMap[program.iconName]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl uppercase text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {program.shortDesc}
                    </p>
                  </div>

                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-gray-300 group-hover:text-[#CCFF00] transition-colors pt-4 border-t border-[#242933]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY FORGE SECTION */}
      <section className="py-20 bg-[#0B0D0F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                THE FORGE ADVANTAGE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
              TRAIN WITH PURPOSE.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              We cut through fitness fluff and focus strictly on what drives real, long-lasting progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyForgeItems.map((item) => (
              <div
                key={item.number}
                className="bg-[#121519] p-7 rounded-sm border border-[#242933] hover:border-[#CCFF00]/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-3xl text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors">
                    {item.number}
                  </span>
                  <div className="p-2 bg-[#181C22] rounded border border-[#242933]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-lg uppercase text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TRAINERS SECTION */}
      <section className="py-20 bg-[#121519] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="border-l-2 border-[#CCFF00] pl-3 mb-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                  EXPERTISE
                </span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
                MEET THE COACHES.
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-xs font-mono text-gray-500 bg-[#0B0D0F] px-3 py-1 rounded border border-[#242933]">
                Demo profiles — for illustration
              </span>
              <Link
                to="/trainers"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00] hover:text-white transition-colors"
              >
                <span>All Coaches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="group bg-[#0B0D0F] border border-[#242933] hover:border-[#CCFF00]/50 rounded-sm overflow-hidden transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-widest text-[#CCFF00] bg-[#0B0D0F]/90 px-2.5 py-1 rounded border border-[#242933] mb-1">
                      {trainer.role}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl uppercase text-white">
                      {trainer.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {trainer.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#242933]">
                    {trainer.trainingFocus.map((focus) => (
                      <span
                        key={focus}
                        className="text-[10px] font-semibold text-gray-300 bg-[#181C22] px-2 py-0.5 rounded border border-[#242933]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. MEMBERSHIP SECTION */}
      <section className="py-20 bg-[#0B0D0F] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                MEMBERSHIP
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
              CHOOSE YOUR COMMITMENT.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Clear training paths designed around your goals. Enquire today for personalized trial and membership details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-[#121519] rounded-sm border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-[#CCFF00] ring-1 ring-[#CCFF00]/50 shadow-xl shadow-[#CCFF00]/5'
                    : 'border-[#242933] hover:border-[#CCFF00]/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="text-xs font-heading font-bold text-[#CCFF00] tracking-widest mb-1">
                    {plan.subtitle}
                  </div>
                  <h3 className="font-heading font-black text-3xl uppercase text-white mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-8 min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-6 border-t border-[#242933]">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-sm transition-all text-center ${
                    plan.popular
                      ? 'bg-[#CCFF00] hover:bg-[#D8FF33] text-black shadow-lg shadow-[#CCFF00]/20'
                      : 'bg-[#181C22] hover:bg-[#CCFF00] text-white hover:text-black border border-[#242933]'
                  }`}
                >
                  ENQUIRE FOR DETAILS
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL CONTACT CTA SECTION */}
      <section className="py-24 bg-[#121519] border-t border-[#242933] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            READY TO GET STRONGER?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Take the first step toward training with purpose.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-sm uppercase tracking-widest px-9 py-4.5 rounded-sm transition-all duration-200 shadow-2xl shadow-[#CCFF00]/20 hover:scale-[1.03]"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </>
  );
};
