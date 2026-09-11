import { SEO } from '../components/ui/SEO';
import { PageHero, CategoryGrid, ValuationProcess, WhyUsList, FourSteps, RequestKitCTA } from '../components/layout/ServicePageLayout';

export function SellGold() {
  return (
    <>
      <SEO 
        title="Sell Gold in NYC | Top Spot Payouts | Orelle Gold" 
        description="Sell gold jewelry, coins, bullion, and scrap for live market rates. Walk into Booth 5 in Manhattan or mail securely with full insurance."
        canonicalUrl="/sell-gold"
      />
      <PageHero 
        subtitle="NYC Diamond District"
        title={<>Sell Gold at Current Market Spot Rates <br/><span className="italic font-light text-[#D4AF37]">Booth 5 Manhattan</span></>}
        description="Jewelry, coins, bullion bars, or scrap. Walk in for instant testing or request an insured mailer."
      />
      <CategoryGrid 
        items={[
          { title: 'Gold Jewelry', desc: 'Broken chains, rings, or intact items', img: 'https://www.goldmarket.fr/wp-content/uploads/2025/04/6760ddddthumbnail-1024x512.jpeg' },
          { title: 'Gold Coins', desc: 'Eagles, Krugerrands, Sovereigns, and foreign coins', img: 'https://jensenestatebuyers.com/jensenestatebuyers/wp-content/uploads/2024/04/Gold-Bullion-and-Coins.jpg' },
          { title: 'Gold Bars', desc: 'Mint bars and certified bullion', img: 'https://static.vecteezy.com/system/resources/previews/077/084/380/large_2x/gold-bullion-bars-gold-ingot-concept-of-business-on-gold-price-exchange-rate-of-world-gold-market-and-precious-metal-investment-as-a-store-of-value-horizontal-illustration-free-photo.jpg' },
          { title: 'Scrap Gold', desc: 'Dental gold, casting grain, and bench filings', img: 'https://thebullionbank.com//media/img/content/sNFkfjwc53kYQ34gRYJPhxU8iVhK3YbgO4KxcjER.png' },
          { title: 'All Karats', desc: '10k, 14k, 18k, 22k, and pure 24k', img: 'https://static.vecteezy.com/system/resources/thumbnails/072/545/854/large/close-up-of-golden-jewelry-on-a-dark-surface-with-soft-lighting-and-focus-photo.jpeg' },
        ]}
      />
      <ValuationProcess 
        title="How We Calculate Your Gold Value"
        desc={
          <>
            <p>We weigh your items on state certified legal for trade scales and check purity with precision spectrometers. Your offer reflects live precious metal spot prices, not arbitrary guess rates.</p>
            <p>You see every gram, every karat breakdown, and the exact spot calculation on the counter.</p>
          </>
        }
      />
      <WhyUsList 
        items={[
          "Live spot market payouts based on verified weight",
          "Walk in without appointment at 45 W 47th St Booth 5",
          "Fully insured mail in pack if you are outside NYC",
          "Free testing with zero obligation to sell",
          "Immediate payment via Cash, Zelle, Bank Wire, or Check"
        ]}
      />
      <FourSteps 
        steps={[
          { title: 'Bring or Send', desc: 'Visit Booth 5 directly in NYC or request a prepaid insured mailer kit.' },
          { title: 'Accurate Testing', desc: 'We test karat purity and weigh each piece on calibrated digital scales.' },
          { title: 'Instant Offer', desc: 'We quote you a straightforward number based on live gold market prices.' },
          { title: 'Get Paid on the Spot', desc: 'Pick your preferred payout: cash in hand, instant Zelle, or bank wire.' }
        ]}
      />
      <RequestKitCTA />
    </>
  );
}
