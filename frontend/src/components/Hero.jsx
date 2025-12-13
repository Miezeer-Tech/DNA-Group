import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // Initialize floating particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(initialParticles);
  }, []);

  // Mouse tracking for interactive gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovered(true));
      heroElement.addEventListener('mouseleave', () => setIsHovered(false));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovered(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y <= -5 ? 105 : p.y - p.speed,
        x: p.x + Math.sin(Date.now() * 0.001 + p.id) * 0.1,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero" ref={heroRef}>
      {/* Interactive Mouse-Following Gradient */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered 
            ? `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(161, 161, 166, 0.15), transparent 50%)`
            : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white transition-all duration-1000"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: isHovered 
                ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
                : 'translate(0, 0)',
            }}
          />
        ))}
      </div>

      {/* Background Elements */}
      <div className="hero-bg-gradient" />
      <div 
        className="hero-orb hero-orb-1 transition-transform duration-700"
        style={{
          transform: isHovered 
            ? `translate(${(mousePosition.x - 50) * 0.3}px, ${(mousePosition.y - 50) * 0.3}px)`
            : 'translate(0, 0)',
        }}
      />
      <div 
        className="hero-orb hero-orb-2 transition-transform duration-700"
        style={{
          transform: isHovered 
            ? `translate(${(mousePosition.x - 50) * -0.2}px, ${(mousePosition.y - 50) * -0.2}px)`
            : 'translate(0, 0)',
        }}
      />
      
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
          {/* Founder Tag with pulse animation */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a1a1a6] to-[#f5f5f7] animate-pulse" />
            <span className="text-sm text-[#a1a1a6] font-medium group-hover:text-white transition-colors">
              {heroData.founder}
            </span>
          </div>

          {/* Main Headline with letter animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="metallic-text inline-block hover:scale-[1.02] transition-transform duration-300 cursor-default">
              {heroData.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#86868b] mb-6">
            {heroData.subtitle}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#a1a1a6] max-w-2xl mb-12 leading-relaxed">
            {heroData.tagline}
          </p>

          {/* CTA Buttons with enhanced hover effects */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn-primary-metallic group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary-metallic group"
            >
              <span className="group-hover:text-white transition-colors">Explore Services</span>
            </a>
          </div>

          {/* Interactive Stats Row */}
          <div className="mt-16 pt-16 border-t border-white/5">
            <div className="grid grid-cols-3 gap-8">
              <StatItem value="15+" label="Years Experience" delay={0} />
              <StatItem value="100+" label="Projects Delivered" delay={200} />
              <StatItem value="50+" label="Global Clients" delay={400} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#86868b] cursor-pointer hover:text-white transition-colors group">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
        </div>
      </div>
    </section>
  );
};

// Interactive Stat Item Component with count-up animation
const StatItem = ({ value, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible && count < numericValue) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + Math.ceil(numericValue / 20), numericValue));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count, numericValue]);

  return (
    <div 
      ref={ref}
      className="text-center group cursor-default"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
        <span className="metallic-text">
          {isVisible ? count : 0}{value.includes('+') ? '+' : ''}
        </span>
      </div>
      <div className="text-sm text-[#86868b] group-hover:text-[#a1a1a6] transition-colors">
        {label}
      </div>
    </div>
  );
};

export default Hero;
