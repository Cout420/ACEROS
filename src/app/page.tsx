
'use client';
import { Hero } from '@/components/sections/hero';
import { QualityCta } from '@/components/sections/home-quality-cta';
import { LocationMap } from '@/components/sections/location-map';
import { About } from '@/components/sections/about';
import { Clients } from '@/components/sections/clients';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { MainGallery } from '@/components/sections/main-gallery';
import { Sectors } from '@/components/sections/sectors';
import { ManufacturingHistory } from '@/components/sections/manufacturing-history';
import { ClientLogos } from '@/components/sections/client-logos';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pt-8 sm:pt-0">
        <About />
      </div>
      <Sectors />
      <MainGallery />
      <QualityCta />
      <Clients />
      <ManufacturingHistory />
      <ClientLogos />
      <LocationMap />
      <WhatsAppCta />
    </>
  );
}
