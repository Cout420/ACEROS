import { CertificatesCta } from '@/components/sections/certificates-cta';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export default function CertificadosPage() {
  return (
    <div className="pt-20">
      <CertificatesCta />
      <WhatsAppCta />
    </div>
  );
}
