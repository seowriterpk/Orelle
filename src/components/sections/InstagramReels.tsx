import { useRef, useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { BadgeCheck, ArrowLeft, ArrowRight } from 'lucide-react';

const featuredReels = [
  { shortcode: "Dbuh1zjM39j" },
  { shortcode: "DbGVDWBMS8k" },
  { shortcode: "Da-jGVnhBqO" },
  { shortcode: "Da5YWLKxtAd" },
  { shortcode: "DaTnjqGpiSy" },
  { shortcode: "DaOWkXhMgtk" },
  { shortcode: "DaLqR4aJ3EL" },
  { shortcode: "DaDoQTPMtFd" },
  { shortcode: "DZ7oNMAs8Gj" },
  { shortcode: "DZ58bK4pr2b" },
  { shortcode: "DZ3jSQHp14u" },
  { shortcode: "DRyE8iiCZcZ" },
  { shortcode: "DQ2PS6XiT1d" },
  { shortcode: "DQMzfnGidul" },
  { shortcode: "DP_4KR4kY9r" }
];

export function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Instagram Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
             <div className="relative group flex-shrink-0">
                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584]">
                   <img 
                     src="/instagramdp.png" 
                     alt="Orelle Gold Instagram Profile" 
                     className="w-full h-full rounded-full border-2 border-[#0A0A0A] object-cover bg-[#111]"
                   />
                </div>
             </div>
             <div>
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors mb-2 flex items-center gap-2">
                  orellegold
                  <BadgeCheck className="text-[#4285F4]" size={18} />
                </a>
                <p className="text-[#999] text-xs leading-relaxed max-w-md">
                  <span className="text-white">By @natediam</span> <br/>
                  💍 Fine jewelry | 💎 Natural & Lab grown gems <br/>
                  ⚜️ Custom designs | 🛠️ Top craftsmanship <br/>
                  📍 45 W 47th St Booth # 5 NYC
                </p>
             </div>
          </div>
          
          <div className="flex gap-4 self-end">
            <button 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${canScrollLeft ? 'border-[#333] text-[#E5E5E5] hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer' : 'border-[#222] text-[#444] cursor-not-allowed'}`}
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${canScrollRight ? 'border-[#333] text-[#E5E5E5] hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer' : 'border-[#222] text-[#444] cursor-not-allowed'}`}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredReels.map((reel) => (
            <div 
              key={reel.shortcode} 
              className="flex-none w-[320px] aspect-[9/16] bg-[#000] rounded-sm overflow-hidden snap-center md:snap-start flex flex-col relative border border-[#222]"
            >
              <iframe
                src={`https://www.instagram.com/reel/${reel.shortcode}/embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                scrolling="no"
                className="absolute inset-0 w-full h-full scale-[1.01]" // Small scale to hide iframe borders
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37]/30 hover:border-white pb-1"
          >
            Follow on Instagram
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
