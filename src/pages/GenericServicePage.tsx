import { Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';

export function GenericServicePage({ title, description }: { title: string, description: string }) {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 lg:px-12 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <SEO title={`${title} | Orelle Gold`} description={description} />
      <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6">{title}</h1>
      <p className="text-[#999] text-lg leading-relaxed mb-12">{description}</p>
      
      <div className="bg-[#151514] border border-[#222] rounded-xl p-8 mb-10 w-full max-w-xl">
         <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold mb-4">Visit Us for a Quote</p>
         <p className="text-white font-medium text-lg mb-2">{siteConfig.address}</p>
         <p className="text-[#999] text-sm mb-8">{siteConfig.hours}</p>
         
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={siteConfig.links.googleMaps} target="_blank" className="w-full sm:w-auto">
            Get Directions
          </Button>
          <Button variant="outline" href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="w-full sm:w-auto flex gap-2">
            <Phone className="text-current" size={14} />
            Call / Text
          </Button>
        </div>
      </div>
    </div>
  );
}
