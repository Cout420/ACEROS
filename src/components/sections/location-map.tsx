'use client';

import { useLanguage } from '@/hooks/use-language';

export function LocationMap() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t.location.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
            {t.location.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-20 animate-zoom-in">
          <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3268953186254!2d-46.69639892550993!3d-23.59253456241042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce572f41e57c69%3A0x7769a7c973a95898!2sAv.%20Engenheiro%20Lu%C3%ADs%20Carlos%20Berrini%2C%201376%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004571-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1721758838384!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.location.map_title}
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div
            className="text-center mt-6 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <p className="text-muted-foreground text-lg">
              {t.footer.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
