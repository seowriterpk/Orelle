import { Clock, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export function LivePricesSection() {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    let isMounted = true;
    
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/metal-prices');
        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType || !contentType.includes("application/json")) {
            throw new Error('Failed to fetch valid prices');
        }
        const data = await response.json();
        
        if (isMounted) {
          if (Array.isArray(data)) {
            setPrices(data);
          } else if (data && data.success && Array.isArray(data.data)) {
            setPrices(data.data);
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch live prices", error);
        }
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 300000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const formatMetal = (code: string) => {
    switch(code) {
      case 'XAU': return 'Gold';
      case 'XAG': return 'Silver';
      case 'XPT': return 'Platinum';
      case 'XPD': return 'Palladium';
      default: return code;
    }
  };

  return (
    <section className="py-24 bg-[#111111] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Market Rates</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4">Live Precious Metals</h2>
          <p className="text-[#999] text-sm lg:text-base max-w-2xl mx-auto">
            Live precious metal spot rates. Your final payout is determined by these rates combined with our in person evaluation.
          </p>
        </div>

        {prices && prices.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {prices.map((item: any) => (
                <div key={item.metal} className="bg-[#050505] border border-[#222] rounded-xl p-8 lg:p-10 flex flex-col items-center justify-center text-center hover:border-[#D4AF37]/50 transition-colors duration-500 group relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <h3 className="text-lg lg:text-xl font-serif text-[#E5E5E5] mb-3 tracking-wide group-hover:text-white transition-colors relative z-10">{formatMetal(item.metal)}</h3>
                  <div className="text-2xl lg:text-3xl font-mono text-[#D4AF37] font-light relative z-10">
                    ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<span className="text-[10px] lg:text-xs text-[#77736A] tracking-widest ml-1 align-top uppercase font-sans">/oz</span>
                  </div>
                </div>
              ))
            }
          </div>
        )}
        
        <p className="text-center text-[#77736A] text-xs italic mt-8 max-w-2xl mx-auto leading-relaxed">
          Prices update from live market feeds. Your final offer is based on testing purity and exact weight at our NYC Diamond District booth.
        </p>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="py-24 bg-[#0B0B0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Location</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8">Visit Our Diamond District Booth</h2>
            
            <div className="bg-[#151514] border border-[#222] rounded-xl p-8 mb-10">
              <h3 className="text-xl font-serif text-white mb-2">Orelle Gold</h3>
              <p className="text-[#E5E5E5] mb-6 font-medium">45 West 47th Street, Booth #5<br/>New York, NY 10036</p>
              
              <div className="space-y-4 mb-8 text-[#999] text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="text-[#D4AF37]" size={18} />
                  {siteConfig.hours}
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="text-[#D4AF37]" size={18} />
                  {siteConfig.phone}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.links.googleMaps} target="_blank" className="w-full sm:w-auto">
                  Get Directions
                </Button>
                <Button variant="outline" href="https://web.whatsapp.com/send?text=I+need+help+about...&phone=19296257536" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
            
            <p className="text-[#77736A] text-sm italic">
              Located in the heart of the NYC Diamond District. Walk ins are always welcome, or you can call ahead to speak with Nathan.
            </p>
          </div>
          
          <div className="h-[400px] lg:h-[600px] bg-[#1A1A1A] rounded-sm border border-[#222] overflow-hidden flex flex-col order-1 lg:order-2">
             <div className="flex-grow w-full h-full relative">
               <iframe 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }}
                 allowFullScreen={false}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2177501377885!2d-73.98401312346294!3d40.75704907138682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585551d5fbc9%3A0x6d9f123f1f7d792b!2s45%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                 className="absolute inset-0 w-full h-full"
               ></iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
