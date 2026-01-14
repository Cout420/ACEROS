'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const aboutImage = PlaceHolderImages.find(img => img.id === 'factory-floor');

export function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Target,
      title: t.about.mission_title,
      description: t.about.mission_description,
    },
    {
      icon: Eye,
      title: t.about.vision_title,
      description: t.about.vision_description,
    },
  ];

  return (
    <div>
      <section
        id="about-story"
        className="container mx-auto px-4 pt-20 sm:pt-32 pb-16"
      >
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center animate-slide-in-left">
            <h2 className="mb-6 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.about.title}
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground">
              {t.about.paragraph2}
            </p>
          </div>
          <div className="relative flex items-center justify-center h-[300px] sm:h-[500px] animate-slide-in-right">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover"
                  />
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section id="about-pillars" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="mx-auto max-w-4xl text-center animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h3 className="mb-12 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.about.pillars_title}
            </h3>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up bg-secondary/30"
                style={{
                  animationDelay: `${0.4 + index * 0.2}s`,
                  animationFillMode: 'both',
                }}
              >
                <CardHeader className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <pillar.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 text-center">
                  <p className="text-lg text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
