import { LocationMap } from '@/components/sections/location-map';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export default function LigasPage() {
  return (
    <div className="pt-20">
      <LocationMap />
      <WhatsAppCta />
    </div>
  );
}
