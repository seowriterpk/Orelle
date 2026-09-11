import { FlaskConical, Scale, LineChart, Play, ArrowRight, Gem } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../config/site';

export function ValuationSection() {
  return (
    <section className="py-24 bg-[#111] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Clear Valuation</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8">
            An Honest Offer Starts With Clear Testing.
          </h2>
          <div className="space-y-6 text-[#999] text-sm leading-relaxed">
            <p>
              We do not guess or give vague ballparks. We test your pieces right on the counter so you see the exact karat grade and gram weight before we talk numbers.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex gap-4">
                <FlaskConical className="text-[#D4AF37]" size={24} />
                <div>
                  <strong className="text-white block mb-1">Purity Testing</strong>
                  Electronic testing and traditional scratch stone verification to confirm true metal purity without damaging your jewelry.
                </div>
              </li>
              <li className="flex gap-4">
                <Scale className="text-[#D4AF37]" size={24} />
                <div>
                  <strong className="text-white block mb-1">Certified Scales</strong>
                  Everything sits on inspected, trade legal digital scales facing you so you can confirm every gram or pennyweight.
                </div>
              </li>
              <li className="flex gap-4">
                <LineChart className="text-[#D4AF37]" size={24} />
                <div>
                  <strong className="text-white block mb-1">Current Spot Rates</strong>
                  Offers calculate directly from live financial market prices for gold, silver, and platinum.
                </div>
              </li>
            </ul>
            <p className="pt-4 italic text-[#77736A] border-t border-[#222]">
              Zero pressure, zero hidden appraisal fees. You decide if you want to sell.
            </p>
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-[4/5] bg-[#1A1A1A] rounded-sm border border-[#222] overflow-hidden group order-1 lg:order-2">
          <img 
            src="/david-star.png" 
            alt="Gold and Diamond Appraisal at Orelle Gold" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            fetchpriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0A]/90 backdrop-blur-md border border-[#222] rounded-sm">
            <div className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">In Person Appraisal</div>
            <div className="text-white font-serif text-lg">45 W 47th St, Booth #5, NYC</div>
            <p className="text-[#999] text-xs mt-1">Walk ins always welcome or reach out to ask any question.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NathanSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const featuredReelCode = "Da-jGVnhBqO";

  return (
    <section className="py-24 bg-[#0B0B0A] relative overflow-hidden border-t border-[#1D1D1C]">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Image Column */}
        <div className="lg:col-span-5 order-1 lg:order-1 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-sm border border-[#333] p-3 bg-[#121212] group shadow-2xl">
             <div className="absolute inset-0 border border-[#D4AF37]/20 m-6 pointer-events-none z-20"></div>
             <div className="w-full h-full overflow-hidden relative">
               <img 
                 src="/nathan.png" 
                 alt="Nathan at Orelle Gold" 
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                 fetchpriority="high"
                 loading="eager"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-[#000]/80 backdrop-blur-md border border-[#333] p-4 text-center">
                 <div className="text-white font-serif font-bold text-lg">Nathan (@natediam)</div>
                 <div className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold mt-0.5">Jewelry and Precious Metal Buyer</div>
               </div>
             </div>
          </div>
        </div>
        
        {/* Text Bio Column */}
        <div className="lg:col-span-7 order-2 lg:order-2">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block flex items-center gap-2">
            <Gem size={13} className="text-[#D4AF37] stroke-[2.2]" />
            Your Diamond District Specialist
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
            Meet <span className="text-[#D4AF37] italic font-light">Nathan</span>
          </h2>

          <div className="space-y-4 text-[#AAA] text-sm leading-relaxed mb-8 font-light">
            <p className="text-base text-[#DDD] font-medium leading-relaxed">
              I am Nathan, running Orelle Gold out of Booth 5 on 47th Street.
            </p>
            <p>
              People usually walk onto 47th Street feeling a bit overwhelmed by the noise and the endless exchange booths. My approach is different. When you sit at my counter, we take our time. I show you how we test the karat, weigh every piece on certified scales, and multiply it by the real market price.
            </p>
            <p>
              We buy estate pieces, broken gold necklaces, bullion coins, natural diamonds, and watches from makers like Rolex and Cartier. If something is worth more as a finished piece of jewelry than scrap, I will tell you directly.
            </p>
            <p>
              No high pressure pitches and no confusing math. If the number makes sense to you, we pay you immediately by cash or wire. If you want to think about it, no hard feelings.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-[#222]">
            <div>
              <div className="text-white font-serif text-xl sm:text-2xl font-bold">10+ Yrs</div>
              <div className="text-[#777] text-[10px] uppercase tracking-wider">47th St Experience</div>
            </div>
            <div>
              <div className="text-white font-serif text-xl sm:text-2xl font-bold">5.0 ★★★★★</div>
              <div className="text-[#777] text-[10px] uppercase tracking-wider">Google Rating</div>
            </div>
            <div>
              <div className="text-white font-serif text-xl sm:text-2xl font-bold">Direct</div>
              <div className="text-[#777] text-[10px] uppercase tracking-wider">Immediate Payout</div>
            </div>
          </div>
          
          {/* Reel Video Card Trigger */}
          <div 
            onClick={() => setIsVideoOpen(true)}
            className="bg-[#141413] hover:bg-[#1C1C1A] p-5 rounded-sm border border-[#2A2A28] hover:border-[#D4AF37] transition-all duration-300 flex items-center gap-5 cursor-pointer group shadow-lg"
          >
             <div className="w-16 h-20 bg-[#000] rounded-sm flex flex-col items-center justify-center shrink-0 border border-[#333] relative overflow-hidden group-hover:border-[#D4AF37]">
                <img 
                  src="/thumbnail-watch-nathan.png" 
                  alt="Reel Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform"
                />
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={20} className="text-[#111] fill-current" />
                </div>
             </div>
             <div className="flex-grow">
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.2em] font-bold">Instagram Reel</span>
                 <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
               </div>
               <h4 className="text-white font-serif text-base font-bold group-hover:text-[#D4AF37] transition-colors">
                 Watch Nathan on Instagram
               </h4>
               <p className="text-xs text-[#888] mt-0.5">
                 Live appraisals and customer deals recorded at Booth 5.
               </p>
             </div>
             <div className="hidden sm:flex items-center text-[#D4AF37] text-xs font-bold uppercase tracking-widest gap-1 group-hover:translate-x-1 transition-transform">
               Play Reel
               <ArrowRight size={14} />
             </div>
          </div>

        </div>

      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsVideoOpen(false)}
          ></div>
          <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#0A0A0A] border border-[#333] rounded-md overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 bg-[#111] border-b border-[#222] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-white font-bold text-xs uppercase tracking-widest">Nathan in Action (@natediam)</span>
              </div>
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-[9/16] w-full bg-black">
              <iframe
                src={`https://www.instagram.com/reel/${featuredReelCode}/embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                scrolling="no"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-[#111] text-center border-t border-[#222]">
              <a 
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold hover:underline"
              >
                Follow @orellegold on Instagram →
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
