import React from 'react';
import { TrendingUp, Users, Globe, Award, Target, Map } from 'lucide-react';
import { servicesData } from '../data/mock';

const iconMap = {
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
  Map,
};

const Services = () => {
  return (
    <section className="py-24 lg:py-32 relative" id="services">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="metallic-text">Strategic Solutions</span>
          </h2>
          <p className="text-lg text-[#a1a1a6] leading-relaxed">
            Comprehensive business development services tailored to drive growth, 
            build teams, and position your organization for long-term success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card group">
                <div className="service-icon">
                  {IconComponent && (
                    <IconComponent 
                      size={24} 
                      className="text-[#a1a1a6] group-hover:text-white transition-colors duration-300" 
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
