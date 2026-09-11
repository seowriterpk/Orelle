import { SEO } from '../components/ui/SEO';
import { PageHero, CategoryGrid, ValuationProcess, WhyUsList, FourSteps, RequestKitCTA } from '../components/layout/ServicePageLayout';

export function SellSilver() {
  return (
    <>
      <SEO 
        title="Sell Silver NYC | Sterling & Silver Bullion Buyers | Orelle Gold" 
        description="Sell sterling silver flatware, 999 bullion bars, silver coins, and scrap. Get up to 80% of spot price directly from Booth 5 in NYC Diamond District."
        canonicalUrl="/sell-silver"
      />
      <PageHero 
        subtitle="NYC Diamond District"
        title={<>Sell Sterling and Bullion Silver <br/><span className="italic font-light text-[#D4AF37]">Top Dollar at Booth 5</span></>}
        description="While many refiners discount silver scrap heavily, we pay up to 80% of live spot value on sterling flatware, silver coins, and bullion bars."
      />
      <CategoryGrid 
        items={[
          { title: 'Sterling Jewelry', desc: '925 bracelets, necklaces, rings, and cuffs', img: 'https://static.vecteezy.com/system/resources/thumbnails/056/083/288/small/gemstone-jewelry-handdrawn-collection-vector.jpg' },
          { title: 'Silver Flatware', desc: 'Forks, spoons, trays, and tea sets', img: 'https://static.vecteezy.com/system/resources/thumbnails/069/631/386/small/stainless-steel-flatware-set-kitchen-utensils-arrangement-free-photo.jpg' },
          { title: 'Silver Coins', desc: 'Morgan dollars, Peace dollars, and Silver Eagles', img: 'https://globalbullionsuppliers.com/cdn/shop/articles/Image-of-a-pile-of-American-Silver-Eagle-Coins-showing-contenders-for-the-best-silver-coins.jpg' },
          { title: 'Silver Bars', desc: '10 oz, 100 oz, and 1 kilo 999 fine bullion', img: 'https://goldbulliondealers.co.uk/wp-content/uploads/2024/11/52569ee7thumbnail.jpeg.webp' },
          { title: 'Scrap Silver', desc: 'Broken silverware, damaged items, and melted lots', img: 'https://i.ebayimg.com/images/g/gxkAAeSwcJ1qhxuK/s-l1200.webp' },
        ]}
      />
      <ValuationProcess 
        title="How We Value Your Silver"
        desc={
          <>
            <p>We test silver fineness (.925 sterling, 90% US coin silver, or .999 pure fine silver) using acid and XRF verification, then weigh your entire lot on precision scales.</p>
            <p>You receive a clear calculation matched directly against the live London Silver spot price.</p>
          </>
        }
      />
      <WhyUsList 
        items={[
          "Top payouts up to 80% of silver spot price",
          "Accurate testing for all hallmarked and unmarked pieces",
          "No hidden refining deduction fees",
          "Instant cash, Zelle, or bank wire payout at the counter"
        ]}
      />
      <FourSteps 
        steps={[
          { title: 'Visit or Ship', desc: 'Bring your silver to Booth 5 at 45 W 47th St or use our prepaid insured shipping.' },
          { title: 'Purity Check', desc: 'We verify hallmarks, silver content, and total weight in front of you.' },
          { title: 'Spot Calculation', desc: 'We quote your payout based on active financial silver market rates.' },
          { title: 'Immediate Payment', desc: 'Collect your funds instantly before you leave the booth.' }
        ]}
      />
      <RequestKitCTA />
    </>
  );
}
