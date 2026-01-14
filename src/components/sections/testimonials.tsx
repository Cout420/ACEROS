'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';
import { testimonialsData, type Testimonial } from '@/lib/testimonials-data';
import { Languages, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '@/hooks/use-language';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isTranslated, setIsTranslated] = useState(false);
  const { t, language } = useLanguage();
  const isPortuguese = language === 'pt';

  // Determine the correct testimonial text to display
  const originalTestimonial = testimonial.testimonial;
  const translatedTestimonial = (testimonial as any)[`testimonial_${language}`] || testimonial.testimonial_pt;

  let currentTestimonial = originalTestimonial;
  let canBeTranslated = false;
  let targetLanguageName = 'Português';

  if (language !== testimonial.lang_code) {
    canBeTranslated = true;
    currentTestimonial = isTranslated ? translatedTestimonial : originalTestimonial;
  }
  
  const toggleTranslation = () => {
    if (canBeTranslated) {
      setIsTranslated(!isTranslated);
    }
  };


  return (
    <Card className="h-full flex flex-col justify-between bg-secondary/50 border-border/50 rounded-2xl shadow-lg">
      <CardHeader className="flex-row items-center gap-4 p-6">
        <Avatar className="h-16 w-16 border-2 border-primary/50">
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
        <div className="text-4xl">{testimonial.flag}</div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-6 pt-0">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-400'
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground flex-grow mb-4 text-base">
          &ldquo;{currentTestimonial}&rdquo;
        </p>
        {canBeTranslated && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTranslation}
            className="text-accent hover:bg-accent/10 hover:text-accent-foreground justify-start p-2 -ml-2 h-auto text-sm"
          >
            <Languages className="mr-2 h-4 w-4" />
            <span>
              {isTranslated ? t.testimonials.show_original : t.testimonials.translate}
            </span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const { t } = useLanguage();

  return (
    <section className="w-full bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 sm:mb-20 text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: 'start',
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-8" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-8" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
