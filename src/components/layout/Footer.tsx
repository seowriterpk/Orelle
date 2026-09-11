import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 pb-16 border-b border-[#1A1A1A]">
          {/* CTA Section */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Orelle Gold" 
                className="h-14 w-auto object-contain mix-blend-lighten opacity-90" 
              />
            </Link>
            <h3 className="text-3xl font-serif text-white mb-4">Ready to Buy or Sell?<br/><span className="text-[#D4AF37] italic font-light">Let's Talk.</span></h3>
            <p className="text-[#999] text-sm leading-relaxed mb-8 max-w-sm">
              Our team is standing by to help you make informed decisions with real-time market guidance.
            </p>
            <div className="bg-[#111] p-6 rounded-sm border border-[#222] inline-block w-full max-w-sm">
              <div className="text-[10px] uppercase tracking-widest text-[#555] mb-2">Get In Touch</div>
              <p className="text-lg font-serif text-white leading-relaxed block mb-2">
                45 West 47th Street, Booth 5<br />
                New York, NY 10036
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#555] mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/sell-gold" className="text-[#999] hover:text-[#D4AF37] transition-colors">Sell Gold</Link>
              <Link to="/sell-silver" className="text-[#999] hover:text-[#D4AF37] transition-colors">Sell Silver</Link>
              <Link to="/diamonds-watches" className="text-[#999] hover:text-[#D4AF37] transition-colors">Diamonds & Watches</Link>
              <Link to="/about" className="text-[#999] hover:text-[#D4AF37] transition-colors">About Us</Link>
              <Link to="/contact" className="text-[#999] hover:text-[#D4AF37] transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Contact Info (Moved next to Quick Links) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#555] mb-6">Reach Out</h4>
            <div className="flex flex-col gap-6 text-sm">
              <div className="text-[#999] leading-relaxed">
                <span className="text-white block mb-1">Email:</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D4AF37] transition-colors">{siteConfig.email}</a>
              </div>
              <div className="text-[#999] leading-relaxed">
                <span className="text-white block mb-1">Call for a Direct Valuation:</span>
                <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="text-lg font-serif text-white hover:text-[#D4AF37] transition-colors block mb-1">
                  {siteConfig.phone}
                </a>
                <span className="text-xs text-[#77736A]">Monday to Friday, 9:00 AM to 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#555] mb-6">Let's Stay in Touch</h4>
            <p className="text-[#77736A] text-xs mb-4 leading-relaxed">Be the first to know about new collections and exclusive offers.</p>
            <form className="flex gap-2 w-full mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white w-full outline-none focus:border-[#D4AF37] transition-colors rounded-sm min-w-0"
                required
              />
              <button type="submit" className="bg-[#D4AF37] text-black px-4 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors rounded-sm whitespace-nowrap">
                Send
              </button>
            </form>

            <h4 className="text-[10px] uppercase tracking-widest text-[#555] mb-4">Social</h4>
            <div className="flex gap-6">
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#D4AF37] text-sm uppercase tracking-widest font-mono">Instagram</a>
              <a href={siteConfig.links.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#D4AF37] text-sm uppercase tracking-widest font-mono">Google</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] text-[#555] tracking-widest uppercase text-center md:text-left">
            Copyright © {new Date().getFullYear()} Orelle Gold | All rights are reserved
          </div>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest text-[#555]">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
