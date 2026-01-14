
import { About } from '@/components/sections/about';
import { LocationMap } from '@/components/sections/location-map';
import { MainGallery } from '@/components/sections/main-gallery';
import { Testimonials } from '@/components/sections/testimonials';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export default function SobrePage() {
  return (
    <div className="pt-20 sm:pt-24">
      <About />
      <MainGallery />
      <Testimonials />
      <LocationMap />
      <WhatsAppCta />
    </div>
  );
}
