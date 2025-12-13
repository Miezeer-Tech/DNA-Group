import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <span className="text-xl font-semibold text-white tracking-tight">
                The DNA Group
              </span>
            </div>
            <p className="text-[#86868b] max-w-md leading-relaxed">
              A premier business development firm specializing in strategic growth, 
              team-building, and advanced marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About', 'Sectors', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#86868b] hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Business Development', 'Team Building', 'Digital Marketing', 'Brand Elevation'].map((service) => (
                <li key={service}>
                  <span className="text-[#86868b]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#86868b] text-sm">
            © {currentYear} The DNA Group. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-[#a1a1a6] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
