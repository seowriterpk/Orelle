import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export function ServicesSection() {
  const services = [
    {
      title: 'Gold Jewelry and Scrap',
      items: ['Rings, Necklaces, Bracelets', 'Scrap Gold and Dental Gold', 'Broken Chains', 'All Karats (10k to 24k)'],
      ctaText: 'Get a Gold Quote',
      link: '/sell-gold',
      bgClass: 'from-[#1A1813] to-[#0A0A0A]',
      bgImg: 'https://prodiamondbuyers.com/wp-content/uploads/2025/07/WhatDoesGoldFilledMeaninJewelryClassification.jpg'
    },
    {
      title: 'Gold Coins and Bars',
      items: ['Bullion Bars', 'American Gold Eagles', 'Krugerrands and Maples', 'Old Estate Coins'],
      ctaText: 'Get a Gold Quote',
      link: '/sell-gold',
      bgClass: 'from-[#151515] to-[#0A0A0A]',
      bgImg: 'https://londongoldcentre.co.uk/wp-content/uploads/2026/03/Sell-Gold-or-Jewellery-Online-UK-Hero-Image.webp'
    },
    {
      title: 'Silver',
      items: ['Sterling Silverware and Tea Sets', 'Silver Flatware', 'Silver Eagles and Morgan Dollars', 'Bullion Bars and Scrap'],
      ctaText: 'Get a Silver Quote',
      link: '/sell-silver',
      bgClass: 'from-[#1A1A1C] to-[#0A0A0A]',
      bgImg: 'https://www.cash4goldtradingpost.com/images/sell-silver.webp'
    },
    {
      title: 'Diamonds and Watches',
      items: ['Loose Certified Diamonds', 'Diamond Engagement Rings', 'Rolex and Patek Philippe', 'Estate Luxury Timepieces'],
      ctaText: 'Get a Quote',
      link: '/diamonds-watches',
      bgClass: 'from-[#15171A] to-[#0A0A0A]',
      bgImg: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">What We Buy</h2>
          <p className="text-[#999] text-sm leading-relaxed max-w-2xl mx-auto">
            We buy precious metals, loose diamonds, estate jewelry, and luxury timepieces. 
            Every appraisal happens in full view so you see the exact weight and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className={`group relative p-8 lg:p-12 border border-[#222] rounded-2xl flex flex-col h-full overflow-hidden`}>
              {service.bgImg ? (
                <img 
                  src={service.bgImg}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgClass} opacity-80`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-serif text-white mb-8">{service.title}</h3>
                <ul className="space-y-4 mb-12 flex-grow">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#E5E5E5] text-sm">
                      <Check className="text-[#D4AF37]" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-[#333]">
                  <Button variant="outline" href={service.link} className="w-full">
                    {service.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
