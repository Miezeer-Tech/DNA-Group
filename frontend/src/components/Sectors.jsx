import React from 'react';
import { Film, Heart, Building2, Crown } from 'lucide-react';
import { sectorsData } from '../data/mock';

const iconMap = {
  Film,
  Heart,
  Building2,
  Crown,
};

const Sectors = () => {
  return (
    <section className="py-24 lg:py-32 relative" id="sectors">
      {/* Section Divider Top */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-4 block">
            Industries
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="metallic-text">Sectors We Serve</span>
          </h2>
          <p className="text-lg text-[#a1a1a6] leading-relaxed">
            From entertainment to Fortune 500, we deliver tailored solutions 
            across diverse industries.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectorsData.map((sector) => {
            const IconComponent = iconMap[sector.icon];
            return (
              <div key={sector.id} className="sector-card group">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                  {IconComponent && (
                    <IconComponent 
                      size={28} 
                      className="text-[#a1a1a6] group-hover:text-white transition-colors duration-300" 
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {sector.title}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
