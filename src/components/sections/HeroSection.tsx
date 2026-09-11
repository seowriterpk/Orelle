import { Gem } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden py-24">
      {/* Deep luxury background with radial subtle gold glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#050505] to-[#050505]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="inline-flex items-center gap-2 justify-center lg:justify-start text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">
              <Gem size={13} className="text-[#D4AF37] stroke-[2.2]" />
              Diamond District Buyer
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.05] mb-8 text-white">
              Sell Your Gold in NYC. <br className="hidden lg:block" />
              <span className="italic font-light text-[#D4AF37]">Get Paid on the Spot.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#999] leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0 font-light">
              <strong className="text-[#E5E5E5] font-medium block mb-2">45 West 47th Street, Booth #5, New York, NY 10036</strong>
              Visit booth 5 on 47th Street for an honest in person appraisal. We test and weigh everything right before your eyes, quote you the live spot rate, and hand you payment without the back and forth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button href={siteConfig.links.googleMaps} target="_blank" className="w-full sm:w-auto px-10 py-5 text-[11px] hover:bg-white transition-colors">
                Get Directions
              </Button>
              <Button variant="outline" href="https://web.whatsapp.com/send?text=I+need+help+about...&phone=19296257536" target="_blank" className="w-full sm:w-auto px-10 py-5 text-[11px] flex gap-2 items-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </Button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
             <div className="relative w-full max-w-md aspect-[4/5] bg-[#0B0B0B] rounded-sm border border-[#1A1A1A] p-2">
                <div className="absolute inset-0 border border-[#222] m-4 rounded-sm z-0"></div>
                <div className="relative z-10 h-full w-full bg-[#111] overflow-hidden flex flex-col group">
                  <div className="absolute inset-0 bg-[url('/inspection.png')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="mt-auto p-8 relative z-20">
                    <div className="flex gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#050505]">
                        <Gem className="text-[#D4AF37]" size={14} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Direct Evaluation</h3>
                    <p className="text-[#999] text-xs leading-relaxed max-w-xs">
                      Calibrated scales and immediate purity testing right on the counter to give you the honest market price.
                    </p>
                  </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
