import { Play } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export function OldSocialProofSection() {
  const posts = [
    { type: 'video', tag: 'MAGNET TEST', label: '[INSTAGRAM REEL — MAGNET TEST]' },
    { type: 'video', tag: 'SCRATCH TEST', label: '[INSTAGRAM REEL — SCRATCH TEST]' },
    { type: 'video', tag: 'REAL NEGOTIATION', label: '[INSTAGRAM REEL — REAL NEGOTIATION]' },
    { type: 'image', tag: '4.2KG SILVER BAR', label: '[INSTAGRAM REEL — 4.2KG SILVER BAR]' },
    { type: 'video', tag: 'SCAM ALERT', label: '[INSTAGRAM REEL — SCAM ALERT]' },
  ];

  return (
    <section className="py-24 bg-[#111] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">Real Transactions. Real Proof.</h2>
        <p className="text-[#999] text-sm max-w-2xl mx-auto mb-16">
          See exactly how we test, evaluate, and negotiate at the booth.
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 justify-start lg:justify-center">
          {posts.map((post, i) => (
            <div key={i} className="min-w-[240px] w-[240px] aspect-[9/16] bg-[#1A1A1A] rounded-xl border border-[#222] snap-center flex flex-col overflow-hidden relative group hover:border-[#D4AF37] transition-colors cursor-pointer">
              <div className="absolute top-4 left-4 z-10 bg-[#0B0B0A]/80 backdrop-blur-sm px-3 py-1 rounded text-[8px] uppercase tracking-widest text-white font-bold">
                {post.tag}
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <span className="text-[#444] text-[10px] uppercase tracking-widest">{post.label}</span>
              </div>
              {post.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-[#0B0B0A]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#333]">
                    <Play className="text-white" size={24} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="outline" href={siteConfig.links.instagram} target="_blank">
            Follow Orelle Gold on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ShippingSection() {
  return (
    <section id="shipping" className="py-24 bg-[#0B0B0A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-serif text-white mb-6">Outside NYC? Ship Your Precious Metals Directly.</h2>
        <p className="text-[#999] text-sm mb-12">
          While walking into booth 5 is the fastest way to get paid, we also offer insured shipping across the United States.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="bg-[#151514] p-6 rounded-lg border border-[#222]">
            <div className="text-[#D4AF37] text-sm font-bold mb-2">01</div>
            <h4 className="text-white text-sm font-bold mb-2">Request Pack</h4>
            <p className="text-[#77736A] text-xs">We send you an insured prepaid shipping label and secure box.</p>
          </div>
          <div className="bg-[#151514] p-6 rounded-lg border border-[#222]">
            <div className="text-[#D4AF37] text-sm font-bold mb-2">02</div>
            <h4 className="text-white text-sm font-bold mb-2">Ship Items</h4>
            <p className="text-[#77736A] text-xs">Drop it off with tracking and full insurance coverage.</p>
          </div>
          <div className="bg-[#151514] p-6 rounded-lg border border-[#222]">
            <div className="text-[#D4AF37] text-sm font-bold mb-2">03</div>
            <h4 className="text-white text-sm font-bold mb-2">Live Testing</h4>
            <p className="text-[#77736A] text-xs">We test purity and weigh the items immediately on video or phone call.</p>
          </div>
          <div className="bg-[#151514] p-6 rounded-lg border border-[#222]">
            <div className="text-[#D4AF37] text-sm font-bold mb-2">04</div>
            <h4 className="text-white text-sm font-bold mb-2">Immediate Wire</h4>
            <p className="text-[#77736A] text-xs">Accept the offer for same day payout, or we return the package free.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="py-32 bg-[#151514] border-t border-[#222] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Find Out What Your Gold Is Really Worth.<br/>Visit Nathan at Booth 5.</h2>
        <p className="text-[#D4AF37] text-lg font-serif italic mb-10">
          Walk in today for an honest in person valuation.
        </p>
        
        <div className="bg-[#0B0B0A] border border-[#222] rounded-2xl p-8 mb-10 max-w-xl mx-auto">
          <p className="text-white font-medium text-lg mb-2">45 West 47th Street, Booth #5</p>
          <p className="text-[#E5E5E5] mb-2">New York, NY 10036</p>
          <p className="text-[#999] text-sm">{siteConfig.hours}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={siteConfig.links.googleMaps} target="_blank" className="w-full sm:w-auto">
            Get Directions
          </Button>
          <Button variant="outline" href="https://web.whatsapp.com/send?text=I+need+help+about...&phone=19296257536" target="_blank" className="w-full sm:w-auto flex gap-2 items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
