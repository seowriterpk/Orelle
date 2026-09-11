import { SEO } from '../components/ui/SEO';
import { PageHero, RequestKitCTA } from '../components/layout/ServicePageLayout';

export function About() {
  return (
    <>
      <SEO 
        title="About Us | Orelle Gold NYC Diamond District" 
        description="Learn about Orelle Gold at Booth 5 in the NYC Diamond District. Honest evaluations, licensed NYC secondhand dealer, and immediate payouts."
        canonicalUrl="/about"
      />
      <PageHero 
        subtitle="Orelle Gold"
        title={<>Honest Appraisals. <br/><span className="italic font-light text-[#D4AF37]">Diamond District Transparency.</span></>}
        description="Located at Booth 5 on 47th Street. We buy gold, silver, diamonds, and watches with direct testing right in front of you."
      />
      
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="mb-24 text-center">
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">Our Core Promise</h2>
            <p className="text-xl lg:text-2xl text-white font-light leading-relaxed">
              Every seller deserves an honest assessment, verified scale weights, and immediate payout without the back and forth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">Who We Are</h2>
              <div className="text-[#999] space-y-4 text-sm leading-relaxed">
                <p>Orelle Gold operates right inside the Manhattan Diamond District at 45 West 47th Street, Booth 5.</p>
                <p>Run by Nathan, we focus on cutting through the confusing jargon of the jewelry exchange. We test your pieces using calibrated scales and electronic purity readers while you watch.</p>
                <p>Whether you bring in a broken gold chain, inherited estate silverware, a diamond solitaire, or a vintage Rolex, you get clear answers and live spot market prices.</p>
                <p className="pt-4 border-t border-[#222] font-medium text-[#E5E5E5]">We are a licensed secondhand dealer in New York City (DCWP License #2135661), guaranteeing lawful, secure, and professional transactions every single time.</p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-[#111] rounded-sm border border-[#222] relative overflow-hidden">
               <img 
                 src="https://scontent.fisb2-2.fna.fbcdn.net/v/t51.75761-15/469995995_18468553321003795_4021209251543542486_n.jpg?stp=dst-jpegr_tt6&cstp=mx1440x1365&ctp=s1440x1365&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFv-g6hzqWw0KI1_gfHTa9NBpLFSo357-UGksVKjfnv5QuGV6fEvhpckIg1KVvPBumeVVloNuhY8r0e7_hTy3J6&_nc_ohc=lR2FDxCFS9EQ7kNvwEcv_TG&_nc_oc=AdoelULteYa9o4cZsBoVjOsjz39wU6Qja65Wk90oau9ub3Zgi1yDeyFEUm0vWDESNnJ7pAIqilaCJfcbBr7nkAuy&_nc_zt=23&se=-1&_nc_ht=scontent.fisb2-2.fna&_nc_gid=USS-zFij-HR8sfv4jdG92A&_nc_ss=7b2a8&oh=00_AQHZ4oY9VZPafLtri6UpJtsIli_8TXlQBHtcwtQGG-5I9A&oe=6A954706" 
                 alt="Orelle Gold Storefront Booth 5" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity transition-all hover:grayscale-0 hover:opacity-100"
               />
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-serif text-white mb-12 text-center">Why People Sell to Orelle Gold</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-[#111] p-8 border border-[#222]">
                  <h3 className="text-white font-bold mb-2">Visible Testing</h3>
                  <p className="text-[#999] text-sm">We test karats and weigh items in front of you so you know the exact numbers.</p>
                </div>
                <div className="bg-[#111] p-8 border border-[#222]">
                  <h3 className="text-white font-bold mb-2">Live Spot Pricing</h3>
                  <p className="text-[#999] text-sm">Calculations are tied directly to active financial market rates.</p>
                </div>
                <div className="bg-[#111] p-8 border border-[#222]">
                  <h3 className="text-white font-bold mb-2">Zero Pressure</h3>
                  <p className="text-[#999] text-sm">Get your free appraisal. You always retain the final choice to sell or hold.</p>
                </div>
                <div className="bg-[#111] p-8 border border-[#222]">
                  <h3 className="text-white font-bold mb-2">Fast Payment</h3>
                  <p className="text-[#999] text-sm">Walk away with cash, Zelle transfer, or direct wire on the spot.</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      <RequestKitCTA />
    </>
  );
}
