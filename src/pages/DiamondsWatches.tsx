import { SEO } from '../components/ui/SEO';
import { PageHero, CategoryGrid, ValuationProcess, WhyUsList, FourSteps, RequestKitCTA } from '../components/layout/ServicePageLayout';

export function DiamondsWatches() {
  return (
    <>
      <SEO 
        title="Sell Diamonds & Luxury Watches NYC | Booth 5 Orelle Gold" 
        description="Sell loose diamonds, engagement rings, estate jewelry, and luxury watches like Rolex, Cartier, and Patek Philippe in NYC Diamond District."
        canonicalUrl="/diamonds-watches"
      />
      <PageHero 
        subtitle="NYC Diamond District"
        title={<>Sell Diamonds and Luxury Timepieces <br/><span className="italic font-light text-[#D4AF37]">Booth 5 Evaluation</span></>}
        description="From certified loose stones to Swiss luxury watches, Nathan evaluates true secondary market collector and dealer values."
      />
      <CategoryGrid 
        items={[
          { title: 'Loose Diamonds', desc: 'GIA, IGI, certified or uncertified stones', img: 'https://www.losangelesdiamondseller.com/blog/wp-content/uploads/2020/09/diamonds.jpg' },
          { title: 'Engagement Rings', desc: 'Solitaires, halos, platinum, and gold settings', img: 'https://www.rosecjewels.com/cdn/shop/articles/Top-10-Trending-Engagement-Rings-in-the-USA-Under-_1000_6cf31322-85f9-40da-af0a-61b7a71e29bb.jpg?v=1751520606&width=1600' },
          { title: 'Estate Jewelry', desc: 'Tennis bracelets, earrings, and heirloom pieces', img: 'https://cdn.shopify.com/s/files/1/0862/9413/5082/files/Sparkling-diamond-cluster-on-matte-surface.webp?v=1775636043' },
          { title: 'Luxury Watches', desc: 'Rolex, Cartier, Audemars Piguet, Omega, Patek', img: 'https://res.cloudinary.com/wc-photo/image/upload/c_fill,w_2300,h_1533,g_center/f_auto/q_auto/v1718609598/cms/Top-Luxury-Watch-Brands-Rolex-_7de496abdb?_a=BAVAfVDW0' },
          { title: 'Vintage Timepieces', desc: 'Gold watches, pocket watches, and chronographs', img: 'https://the1916company.imgix.net/cms/Group_Shot_Collectable_Pre_Owned_2_MOBILE_af37e86ba0.jpg?format=auto,compress&fit=crop&w=1200&h=630' },
        ]}
      />
      <ValuationProcess 
        title="How We Grade Diamonds and Timepieces"
        desc={
          <>
            <p>Diamonds are graded under gemological microscopes looking at the fundamental 4 Cs: cut, color, clarity, and carat weight. For luxury watches, we inspect reference numbers, serial records, movement health, and original box or papers.</p>
            <p>Every appraisal is straightforward, respectful, and clearly walked through with you.</p>
          </>
        }
      />
      <WhyUsList 
        items={[
          "Direct Diamond District dealer pricing without middlemen",
          "Thorough gemological appraisal in front of you",
          "Competitive valuation for both modern and vintage Swiss watches",
          "No pressure sales policy with free appraisal consultations"
        ]}
      />
      <FourSteps 
        steps={[
          { title: 'Walk in or Send', desc: 'Visit Booth 5 on 47th Street or request insured insured transit pack.' },
          { title: 'Gemological Grading', desc: 'We inspect stones under magnification and authenticate watch movements.' },
          { title: 'Clear Market Offer', desc: 'We provide an accurate appraisal reflecting active worldwide secondary trade values.' },
          { title: 'Instant Funds', desc: 'Choose cash, instant Zelle, or same day wire transfer on the spot.' }
        ]}
      />
      <RequestKitCTA />
    </>
  );
}
