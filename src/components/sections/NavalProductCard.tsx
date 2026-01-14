'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function NavalProductCard() {
  const product = {
    name: "Buzina de Reboque Triangular",
    description: "Buzina de reboque triangular para montagem em antepara.",
    imageId: "naval-triangular-towing-horn",
  };

  const image = PlaceHolderImages.find(img => img.id === product.imageId);

  if (!image) return null;

  return (
    <section className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card className="group w-[377px] max-w-full overflow-hidden rounded-2xl shadow-lg bg-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-0">
              <div
                style={{ width: 377, height: 373 }}
                className="relative max-w-full"
              >
                <Image
                  src={image.imageUrl}
                  alt={product.name}
                  width={377}
                  height={373}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CardContent>
            <CardHeader className="p-6">
              <CardTitle className="font-headline text-lg font-bold text-foreground">
                {product.name}
              </CardTitle>
              <p className="text-muted-foreground pt-2">
                {product.description}
              </p>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
