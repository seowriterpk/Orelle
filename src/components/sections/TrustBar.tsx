import { ShieldCheck, Gem, LineChart, Banknote } from 'lucide-react';

export function TrustBar() {
  const trustItems = [
    { icon: <ShieldCheck className="text-[#D4AF37] opacity-80" size={32} strokeWidth={1.5} />, text: 'Licensed NYC Secondhand Dealer' },
    { icon: <Gem className="text-[#D4AF37] opacity-80" size={32} strokeWidth={1.5} />, text: 'NYC Diamond District' },
    { icon: <LineChart className="text-[#D4AF37] opacity-80" size={32} strokeWidth={1.5} />, text: 'Live Spot Market Pricing' },
    { icon: <Banknote className="text-[#D4AF37] opacity-80" size={32} strokeWidth={1.5} />, text: 'Immediate Payment' },
  ];

  return (
    <section className="bg-[#151514] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 lg:py-10 gap-8 justify-start lg:justify-between items-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[200px] snap-center gap-3 text-center">
              {item.icon}
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#E5E5E5] max-w-[180px] leading-relaxed">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
