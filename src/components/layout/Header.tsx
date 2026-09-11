import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../config/site';
import { TopMarquee } from '../ui/TopMarquee';
import { MetalTicker } from '../ui/MetalTicker';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sell Gold', path: '/sell-gold' },
    { name: 'Sell Silver', path: '/sell-silver' },
    { name: 'Diamonds & Watches', path: '/diamonds-watches' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col w-full shadow-2xl">
        <MetalTicker />
        <TopMarquee />
        <div className="bg-[#0B0B0A]/95 backdrop-blur-md border-b border-[#222]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/logo.png" 
                alt="Orelle Gold" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-lighten bg-white/5 p-1 rounded-sm"
                fetchpriority="high"
                loading="eager"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-[#D4AF37] ${
                    location.pathname === link.path ? 'text-[#D4AF37] underline underline-offset-8 decoration-[#D4AF37]/30' : 'text-[#E5E5E5]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Get Directions
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#E5E5E5] hover:text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-6.5rem)] bg-[#0B0B0A] flex flex-col p-6 overflow-y-auto z-40 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <nav className="flex flex-col gap-6 text-sm uppercase tracking-[0.2em] font-medium mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-[#D4AF37] py-4 border-b border-[#1A1A1A] ${
                    location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#E5E5E5]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 mb-12 flex flex-col gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
                className="bg-[#D4AF37] text-black text-center py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#E7D7A5] transition-all"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4AF37] text-[#D4AF37] text-center py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
