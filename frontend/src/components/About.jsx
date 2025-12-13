import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  return (
    <section className="py-24 lg:py-32 relative" id="about">
      {/* Section Divider Top */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Bio */}
          <div>
            <span className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="metallic-text">{aboutData.name}</span>
            </h2>
            <p className="text-xl text-[#a1a1a6] mb-8 font-light">
              {aboutData.role}
            </p>
            
            <div className="space-y-6">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index} className="text-[#86868b] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="lg:sticky lg:top-32">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Areas of Expertise
              </h3>
              <div className="space-y-1">
                {aboutData.expertise.map((item, index) => (
                  <div key={index} className="expertise-item">
                    <CheckCircle2 size={18} className="text-[#a1a1a6] flex-shrink-0" />
                    <span className="text-[#d1d1d6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-[#86868b]">Years Experience</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-[#86868b]">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
