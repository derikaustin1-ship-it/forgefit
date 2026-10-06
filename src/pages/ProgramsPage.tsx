import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Dumbbell, UserCheck, Zap, Users } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';
import { PROGRAMS } from '../data/gymData';

export const ProgramsPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-7 h-7 text-[#CCFF00]" />,
    UserCheck: <UserCheck className="w-7 h-7 text-[#CCFF00]" />,
    Zap: <Zap className="w-7 h-7 text-[#CCFF00]" />,
    Users: <Users className="w-7 h-7 text-[#CCFF00]" />,
  };

  return (
    <>
      <MetaTitle
        title="Forge Fitness | Training Programs"
        description="Explore Forge Fitness training programs in Coimbatore: Strength Training, Personal Training, Functional Fitness, and Group Training."
      />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#121519] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                STRUCTURED PATHWAYS
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
              TRAIN YOUR WAY.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
              Every body is different. Our 4 specialized programs give you clear structure, continuous feedback, and purposeful coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detailed List */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PROGRAMS.map((program, idx) => (
            <div
              key={program.id}
              className={`bg-[#121519] border border-[#242933] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Program Visual */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-6 left-6 p-3 bg-[#0B0D0F]/90 rounded border border-[#242933] backdrop-blur-md">
                  {iconMap[program.iconName]}
                </div>
              </div>

              {/* Program Content */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-heading font-bold text-[#CCFF00] tracking-widest mb-2">
                    PROGRAM 0{idx + 1}
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed mb-6 font-normal">
                    {program.fullDesc}
                  </p>

                  {/* Who it is for */}
                  <div className="bg-[#0B0D0F] p-4 rounded border border-[#242933] mb-6">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      WHO IT IS FOR:
                    </span>
                    <p className="text-sm text-gray-300">{program.whoItIsFor}</p>
                  </div>

                  {/* Key Focus Points */}
                  <div className="mb-8">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#CCFF00] block mb-3">
                      KEY FOCUS AREAS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {program.keyFocus.map((focus) => (
                        <div key={focus} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-[#242933]">
                  <Link
                    to={`/contact?program=${program.id}`}
                    className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all shadow-md"
                  >
                    <span>ENQUIRE ABOUT {program.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
