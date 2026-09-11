import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { GoogleReviewsSlider } from '../components/sections/GoogleReviewsSlider';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ValuationSection, NathanSection } from '../components/sections/ValuationNathanSections';
import { LivePricesSection, LocationSection } from '../components/sections/LivePricesLocationSections';
import { ShippingSection, FinalCTASection } from '../components/sections/RemainingSections';
import { InstagramReels } from '../components/sections/InstagramReels';

export function Home() {
  return (
    <>
      <SEO 
        title="Orelle Gold | NYC Diamond District Gold and Diamond Buyers" 
        description="Sell gold, silver, diamonds, and luxury watches at Booth 5 in the NYC Diamond District. Walk in for fair evaluations and immediate payouts."
        canonicalUrl="/"
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <LivePricesSection />
      <ValuationSection />
      <NathanSection />
      <ProcessSection />
      <InstagramReels />
      <GoogleReviewsSlider />
      <LocationSection />
      <ShippingSection />
      <FinalCTASection />
    </>
  );
}
