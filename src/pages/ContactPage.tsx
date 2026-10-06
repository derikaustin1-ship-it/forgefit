import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { MetaTitle } from '../components/MetaTitle';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProgram = searchParams.get('program') || searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: preselectedProgram || 'general',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate standard demo submission delay
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      program: 'general',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <>
      <MetaTitle
        title="Forge Fitness | Contact & Enquiry"
        description="Contact Forge Fitness in Coimbatore. Send an enquiry for strength training, personal training, or membership details."
      />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#121519] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block border-l-2 border-[#CCFF00] pl-3 mb-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CCFF00]">
                ENQUIRIES & VISIT BOOKINGS
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
              LET'S GET STARTED.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-4">
              Have a question about our programs, membership options, or coaching? Send us an enquiry below.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0B0D0F] border border-[#242933] px-3.5 py-1.5 rounded text-xs font-mono text-gray-400">
              <AlertCircle className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Demo business — fictional portfolio concept</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content & Form Grid */}
      <section className="py-20 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading font-extrabold text-2xl uppercase text-white mb-4">
                  STUDIO LOCATION
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Visit our studio for a walkthrough or schedule an initial consultation with one of our coaches.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-[#121519] border border-[#242933] rounded-sm">
                    <MapPin className="w-6 h-6 text-[#CCFF00] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white uppercase">ADDRESS</h3>
                      <p className="text-sm text-gray-300">Forge Fitness Studio</p>
                      <p className="text-sm text-gray-400">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#121519] border border-[#242933] rounded-sm">
                    <Phone className="w-6 h-6 text-[#CCFF00] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white uppercase">PHONE</h3>
                      <p className="text-sm text-gray-300">+91 90000 00000</p>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">Demo phone number</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#121519] border border-[#242933] rounded-sm">
                    <Mail className="w-6 h-6 text-[#CCFF00] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white uppercase">EMAIL</h3>
                      <p className="text-sm text-gray-300">hello@forgefitness.demo</p>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">Fictional email address</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours / Info card */}
              <div className="p-6 bg-[#121519] border-l-4 border-[#CCFF00] rounded-r-sm space-y-2">
                <h4 className="font-heading font-bold text-sm text-white uppercase">HOURS OF OPERATION (DEMO)</h4>
                <p className="text-xs text-gray-300">Monday – Saturday: 5:30 AM – 9:30 PM</p>
                <p className="text-xs text-gray-300">Sunday: 6:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#121519] border border-[#242933] p-8 sm:p-10 rounded-sm">
                
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white mb-2">
                  SEND AN ENQUIRY
                </h2>
                <p className="text-sm text-gray-400 mb-8">
                  Fill out the details below to request program details or schedule a walkthrough.
                </p>

                {status === 'success' ? (
                  <div className="bg-[#0B0D0F] border border-[#CCFF00] p-8 rounded text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#CCFF00] mx-auto" />
                    <h3 className="font-heading font-black text-2xl uppercase text-white">
                      ENQUIRY SENT!
                    </h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Thank you for testing the Forge Fitness demo. In a live deployment, your enquiry would be instantly routed to the gym's administration team.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 bg-[#CCFF00] hover:bg-[#D8FF33] text-black font-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all"
                    >
                      SUBMIT ANOTHER ENQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Ram"
                          className="w-full bg-[#0B0D0F] border border-[#242933] focus:border-[#CCFF00] text-white text-sm rounded-sm px-4 py-3 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#0B0D0F] border border-[#242933] focus:border-[#CCFF00] text-white text-sm rounded-sm px-4 py-3 focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#0B0D0F] border border-[#242933] focus:border-[#CCFF00] text-white text-sm rounded-sm px-4 py-3 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Program selection */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                          INTERESTED PROGRAM
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full bg-[#0B0D0F] border border-[#242933] focus:border-[#CCFF00] text-white text-sm rounded-sm px-4 py-3 focus:outline-none transition-colors"
                        >
                          <option value="general">General Gym Enquiry</option>
                          <option value="strength-training">Strength Training</option>
                          <option value="personal-training">Personal Training (1-on-1)</option>
                          <option value="functional-fitness">Functional Fitness</option>
                          <option value="group-training">Group Training</option>
                          <option value="starter">Starter Membership Plan</option>
                          <option value="performance">Performance Membership Plan</option>
                          <option value="personal">Personal Membership Plan</option>
                        </select>
                      </div>

                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-2">
                        MESSAGE / SPECIFIC QUESTIONS
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your fitness goals or preferred time to visit..."
                        className="w-full bg-[#0B0D0F] border border-[#242933] focus:border-[#CCFF00] text-white text-sm rounded-sm px-4 py-3 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#D8FF33] disabled:opacity-50 text-black font-heading font-extrabold text-xs uppercase tracking-widest py-4 rounded-sm transition-all duration-200 shadow-lg shadow-[#CCFF00]/10"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>PROCESSING ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT ENQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
