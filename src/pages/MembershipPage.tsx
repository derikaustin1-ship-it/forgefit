import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';
import { MEMBERSHIP_PLANS, FAQS } from '../data/gymData';

export const MembershipPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <MetaTitle
        title="Forge Fitness | Membership Options"
        description="View membership options and enquiry options for Forge Fitness in Coimbatore. Choose between Starter, Performance, and Personal plans."
      />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#121519] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                MEMBERSHIP OPTIONS
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
              CHOOSE YOUR COMMITMENT.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
              Transparent, flexible access paths designed for structured progression without misleading gimmick pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans Grid */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-[#121519] rounded-sm border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-[#CCFF00] ring-1 ring-[#CCFF00]/50 shadow-2xl shadow-[#CCFF00]/5'
                    : 'border-[#242933] hover:border-[#CCFF00]/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-heading font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="text-xs font-heading font-bold text-[#CCFF00] tracking-widest mb-1">
                    {plan.subtitle}
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white mb-3">
                    {plan.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3.5 mb-10 pt-6 border-t border-[#242933]">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold text-xs uppercase tracking-widest py-4 rounded-sm transition-all text-center ${
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

          {/* FAQ Accordion Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00] mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>QUESTIONS & ANSWERS</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={faq.question}
                  className="bg-[#121519] border border-[#242933] rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between font-heading font-bold text-base sm:text-lg text-white hover:text-[#CCFF00] transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#CCFF00] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#242933]/60 pt-4 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-400 mb-4">Have another question not answered here?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00] hover:underline"
              >
                <span>CONTACT OUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
