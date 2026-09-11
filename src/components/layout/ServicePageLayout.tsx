import { CheckCircle2, Gem } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function PageHero({ 
  title, 
  subtitle, 
  description 
}: { 
  title: React.ReactNode, 
  subtitle?: string, 
  description?: string 
}) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#050505] overflow-hidden border-b border-[#1A1A1A]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#050505] to-[#050505]"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {subtitle && (
          <span className="inline-flex items-center gap-2 justify-center text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
            <Gem size={11} className="text-[#D4AF37] stroke-[2.2]" />
            {subtitle}
            <Gem size={11} className="text-[#D4AF37] stroke-[2.2]" />
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 text-white">
          {title}
        </h1>
        {description && (
          <p className="text-[#999] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function CategoryGrid({ items }: { items: { title: string, desc: string, img?: string }[] }) {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white">What We Buy</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <Link key={i} to="/contact" className="group relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden border border-[#222] hover:border-[#D4AF37] transition-colors cursor-pointer block">
              {item.img ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              ) : (
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-[#999] text-xs uppercase tracking-widest">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuationProcess({ title, desc }: { title: string, desc: React.ReactNode }) {
  return (
    <section className="py-24 bg-[#111] border-y border-[#222]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">{title}</h2>
        <div className="text-[#999] text-base leading-relaxed space-y-6">
          {desc}
        </div>
      </div>
    </section>
  );
}

export function WhyUsList({ items }: { items: string[] }) {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white">Why Choose Orelle Gold</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
             <div key={i} className="flex items-start gap-4 bg-[#111] p-6 rounded-sm border border-[#222]">
               <CheckCircle2 className="text-[#D4AF37]" size={24} />
               <p className="text-[#E5E5E5] text-sm leading-relaxed pt-0.5">{item}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FourSteps({ steps, subtitle = "The Process" }: { steps: { title: string, desc: string }[], subtitle?: string }) {
  return (
    <section className="py-24 bg-[#050505] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold block">{subtitle}</span>
          <h2 className="text-3xl font-serif text-white">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-[calc(100%-2rem)] h-[1px] bg-gradient-to-r from-[#333] to-transparent"></div>
              )}
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-serif text-lg font-bold shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-3">{step.title}</h3>
                  <p className="text-[#77736A] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RequestKitCTA() {
  return (
    <section className="py-24 bg-[#111] border-t border-[#222] text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-serif text-white mb-4">Want an Appraisal or Quote?</h2>
        <p className="text-[#999] text-base mb-10">
          <strong className="text-white">Walk into Booth 5</strong> or contact us directly to request an insured prepaid mailer pack.
        </p>
        <Button href="/contact" size="lg">
          Contact Booth 5
        </Button>
      </div>
    </section>
  );
}
