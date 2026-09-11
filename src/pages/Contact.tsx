import { Mail, Phone, Clock, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isKitModalOpen, setIsKitModalOpen] = useState(false);
  const [kitSubmitted, setKitSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itemType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', itemType: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-[#0B0B0A] min-h-screen text-white">
      <SEO 
        title="Contact Orelle Gold | Booth 5 NYC Diamond District" 
        description="Visit Booth 5 at 45 W 47th St in New York or contact Nathan directly for appraisals, walk in valuations, or mail in inquiries."
        canonicalUrl="/contact"
      />
      
      {/* 2. Hero Section Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-black border-b border-[#222]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2000&auto=format&fit=crop" 
            alt="Gold Bullion Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/70 to-[#0B0B0A]/50"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Booth 5 NYC Diamond District
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 tracking-tight">
            Get in Touch <span className="text-[#D4AF37] italic font-light">With Nathan</span>
          </h1>
          <p className="text-[#BBB] text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Have gold, silver, diamonds, or luxury watches to sell? Message us directly or walk into Booth 5 on 47th Street for an appraisal.
          </p>
        </div>
      </section>

      {/* 3. Contact Form & Details Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-[#121211] hover:bg-[#181817] p-8 rounded-sm border border-[#262624] transition-all duration-300 group shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1E1E1C] group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-black rounded-sm flex items-center justify-center shrink-0 border border-[#333] transition-colors duration-300">
                  <Mail className="text-current" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    Email
                  </h3>
                  <a 
                    href={`mailto:${siteConfig.email}`} 
                    className="text-[#DDD] text-sm hover:underline font-mono block break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-[#777] text-xs mt-2">
                    Send photos of jewelry, diamond certificates, or general questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#121211] hover:bg-[#181817] p-8 rounded-sm border border-[#262624] transition-all duration-300 group shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1E1E1C] group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-black rounded-sm flex items-center justify-center shrink-0 border border-[#333] transition-colors duration-300">
                  <Phone className="text-current" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    Phone & SMS
                  </h3>
                  <a 
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-[#DDD] text-base font-mono font-bold hover:underline block"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-[#777] text-xs mt-2">
                    Direct call or text Nathan for live pricing checks at Booth 5.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#121211] hover:bg-[#181817] p-8 rounded-sm border border-[#262624] transition-all duration-300 group shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1E1E1C] group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-black rounded-sm flex items-center justify-center shrink-0 border border-[#333] transition-colors duration-300">
                  <Clock className="text-current" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    Booth Hours
                  </h3>
                  <p className="text-[#DDD] text-sm font-medium">
                    {siteConfig.hours}
                  </p>
                  <p className="text-[#777] text-xs mt-2">
                    Open Monday to Friday. Walk ins welcome anytime during business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Summary */}
            <div className="p-6 bg-[#161614] border border-[#2A2A28] rounded-sm text-center">
              <div className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">BOOTH LOCATION</div>
              <div className="text-white font-serif text-base font-bold">{siteConfig.address}</div>
              <div className="text-[#888] text-xs mt-1">NYC Diamond District • Walk ins Welcome</div>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 bg-[#121211] p-8 sm:p-12 rounded-sm border border-[#262624] shadow-2xl relative">
            
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#D4AF37] mb-3">
                Send Us a Message
              </h2>
              <p className="text-[#888] text-sm">
                Fill out the form below for a quote or to let us know when you plan to stop by.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-8 text-center rounded-sm text-emerald-200">
                <CheckCircle2 className="text-emerald-400 mb-3 mx-auto" size={40} />
                <h3 className="text-xl font-serif font-bold text-white mb-2">Message Sent</h3>
                <p className="text-sm text-emerald-300">
                  Thank you for reaching out. Nathan will review your note and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#AAA] mb-2 font-bold">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#1A1A18] border border-[#333] focus:border-[#D4AF37] rounded-sm px-4 py-3.5 text-white placeholder-[#555] text-sm outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#AAA] mb-2 font-bold">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#1A1A18] border border-[#333] focus:border-[#D4AF37] rounded-sm px-4 py-3.5 text-white placeholder-[#555] text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#AAA] mb-2 font-bold">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+1 (212) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#1A1A18] border border-[#333] focus:border-[#D4AF37] rounded-sm px-4 py-3.5 text-white placeholder-[#555] text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#AAA] mb-2 font-bold">
                    Select Item Type
                  </label>
                  <select 
                    required
                    value={formData.itemType}
                    onChange={(e) => setFormData({...formData, itemType: e.target.value})}
                    className="w-full bg-[#1A1A18] border border-[#333] focus:border-[#D4AF37] rounded-sm px-4 py-3.5 text-white text-sm outline-none transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-[#555]">Select Item Category...</option>
                    <option value="Gold Jewelry / Bullion">Gold Jewelry or Bullion</option>
                    <option value="Silver Items / Coins">Silver Items, Coins or Flatware</option>
                    <option value="Diamonds & Fine Gems">Diamonds & Fine Gemstones</option>
                    <option value="Luxury Watches (Rolex, Patek, etc.)">Luxury Watches (Rolex, Cartier, Patek)</option>
                    <option value="Estate / Inherited Collection">Estate or Inherited Collection</option>
                    <option value="General Inquiry / Appointment">General Inquiry / Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#AAA] mb-2 font-bold">
                    Message / Item Details
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your items (weight, karat, brand, condition, or when you plan to visit)..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#1A1A18] border border-[#333] focus:border-[#D4AF37] rounded-sm px-4 py-3.5 text-white placeholder-[#555] text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-white text-black font-bold py-4 px-8 text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="text-current" size={16} />
                </button>

                <p className="text-[10px] text-center text-[#666] uppercase tracking-widest">
                  Strictly Confidential • Your information is never shared
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 4. Google Maps Location Section */}
      <section className="py-12 bg-[#080808] border-t border-[#1D1D1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold block mb-1">Interactive Map</span>
              <h3 className="text-2xl font-serif text-white">Find Us in the Diamond District</h3>
            </div>
            <a 
              href={siteConfig.links.googleMaps} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1C1C1A] hover:bg-[#D4AF37] hover:text-black border border-[#333] px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest text-white transition-colors"
            >
              <ExternalLink className="text-current" size={14} />
              Open in Google Maps
            </a>
          </div>

          <div className="h-[450px] w-full rounded-sm border border-[#222] overflow-hidden relative shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2177501377885!2d-73.98401312346294!3d40.75704907138682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585551d5fbc9%3A0x6d9f123f1f7d792b!2s45%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 5. Need a Quote Instead? Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#D4AF37] via-[#E8C860] to-[#B89035] text-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4 tracking-tight">
            Outside NYC? Request an Insured Mailer
          </h2>
          <p className="text-black/80 text-base sm:text-xl font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            We provide insured shipping labels and secure packaging so you can send items directly to Booth 5 for testing.
          </p>
          <button 
            onClick={() => setIsKitModalOpen(true)}
            className="bg-black hover:bg-white text-white hover:text-black px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-2xl"
          >
            Request Insured Mailer Pack
          </button>
        </div>
      </section>

      {/* Shipping Kit Modal */}
      {isKitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#121211] border border-[#333] p-8 rounded-sm shadow-2xl">
            <button 
              onClick={() => { setIsKitModalOpen(false); setKitSubmitted(false); }}
              className="absolute top-4 right-4 text-[#888] hover:text-white text-xl"
            >
              ✕
            </button>
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold block mb-2">Fully Insured Transit</span>
            <h3 className="text-2xl font-serif text-white mb-4">Request Mailer Pack</h3>
            {kitSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 text-center rounded-sm text-emerald-200">
                <CheckCircle2 className="text-emerald-400 mb-2 mx-auto" size={32} />
                <h4 className="text-lg font-serif font-bold text-white mb-1">Request Received</h4>
                <p className="text-xs text-emerald-300">
                  We are preparing your insured shipping label and will email you the tracking confirmation shortly.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[#888] text-xs mb-6 leading-relaxed">
                  We send you a prepaid, trackable FedEx shipping pack insured for full market value. Send your jewelry or coins for a zero obligation evaluation.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setKitSubmitted(true); }} className="space-y-4">
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name" 
                    className="w-full bg-[#1A1A18] border border-[#333] px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37]" 
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address" 
                    className="w-full bg-[#1A1A18] border border-[#333] px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37]" 
                  />
                  <input 
                    type="text" 
                    required 
                    placeholder="Mailing Address for Shipping Pack" 
                    className="w-full bg-[#1A1A18] border border-[#333] px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37]" 
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-[#D4AF37] text-black font-bold py-3.5 text-xs uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    Send Me The Mailer Pack
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
