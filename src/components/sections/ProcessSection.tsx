export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Walk In or Call Ahead',
      desc: 'Come directly to booth 5 in the diamond district or call us before heading over.'
    },
    {
      num: '02',
      title: 'Free In Person Appraisal',
      desc: 'We inspect, test the purity, and weigh your items right on the counter.'
    },
    {
      num: '03',
      title: 'Clear Price Breakdown',
      desc: 'We show you the exact purity, gram weight, and current live spot price.'
    },
    {
      num: '04',
      title: 'Get Paid on the Spot',
      desc: 'If you accept the offer, receive payment immediately by cash, Zelle, or bank wire.'
    }
  ];

  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">The Process</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">How Selling In Person Works</h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Honest, direct, and completely private. You watch every step of the testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector Line (hidden on mobile, visible on desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-[calc(100%-3rem)] h-px bg-[#222]"></div>
              )}
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#0B0B0A] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-serif text-lg font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3 font-serif">{step.title}</h3>
                  <p className="text-[#999] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#151514] border border-[#222] p-8 rounded-xl max-w-3xl mx-auto">
          <p className="text-[#E5E5E5] text-sm mb-4">Prefer to ship instead?</p>
          <a 
            href="#shipping" 
            className="text-[#D4AF37] hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold border-b border-[#D4AF37]/30 pb-1"
          >
            See our insured nationwide option below
          </a>
        </div>
      </div>
    </section>
  );
}
