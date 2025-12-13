import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Background Elements */}
      <div className="hero-bg-gradient" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Founder Tag */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a1a1a6] to-[#f5f5f7]" />
            <span className="text-sm text-[#a1a1a6] font-medium">{heroData.founder}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="metallic-text">{heroData.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#86868b] mb-6">
            {heroData.subtitle}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#a1a1a6] max-w-2xl mb-12 leading-relaxed">
            {heroData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary-metallic">
              Start a Conversation
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary-metallic">
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#86868b]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
