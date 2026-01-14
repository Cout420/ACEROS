
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { qualificationsData } from '@/lib/expertise-data';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/hooks/use-language';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

export function Qualifications() {
  const { t } = useLanguage();

  const qualificationsHeroImage = PlaceHolderImages.find(
    img => img.id === 'qualifications-hero'
  );
  const labImage = PlaceHolderImages.find(img => img.id === 'metallurgy-lab');
  const chartImage = PlaceHolderImages.find(img => img.id === 'alloy-chart');
  const alloyImage = PlaceHolderImages.find(img => img.id === 'alloy-3d-model');
  const isoCertificateImage = PlaceHolderImages.find(
    img => img.id === 'cert-iso-9001'
  );
  const calibrationCertificateImage = PlaceHolderImages.find(
    img => img.id === 'cert-calibration-2044'
  );
  const machiningImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('machining-gallery-')
  );
  const newQualificationImage1 = PlaceHolderImages.find(
    img => img.id === 'qualification-new-1'
  );
  const newQualificationImage2 = PlaceHolderImages.find(
    img => img.id === 'qualification-new-2'
  );
  const newQualificationImage3 = PlaceHolderImages.find(
    img => img.id === 'qualification-new-3'
  );
  const newQualificationGallery = PlaceHolderImages.filter(img =>
    ['qualification-new-4', 'qualification-new-5', 'qualification-new-6'].includes(
      img.id
    )
  );

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full animate-fade-in">
        {qualificationsHeroImage && (
          <Image
            src={qualificationsHeroImage.imageUrl}
            alt={qualificationsHeroImage.description}
            fill
            sizes="100vw"
            data-ai-hint={qualificationsHeroImage.imageHint}
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <div
            className="relative z-10 flex animate-fade-in-up flex-col items-center px-4"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              {t.qualifications.page_title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
              {t.qualifications.page_subtitle}
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-background py-20 sm:py-32"
        id="qualifications-details"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="animate-slide-in-left"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.qualifications.expertise_title}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                {t.qualifications.expertise_paragraph1}
              </p>
              <p className="text-lg text-muted-foreground">
                {t.qualifications.expertise_paragraph2}
              </p>
            </div>
            {labImage && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
                <Image
                  src={labImage.imageUrl}
                  alt={labImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={labImage.imageHint}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {qualificationsData(t).map((qual, index) => (
              <Card
                key={qual.title}
                className="group flex flex-col p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up text-center bg-white border-transparent"
                style={{
                  animationDelay: `${0.6 + index * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={qual.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-xl mb-2 text-foreground">
                  {qual.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {qual.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {newQualificationImage1 && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left bg-gray-100 p-4">
                <Image
                  src={newQualificationImage1.imageUrl}
                  alt={newQualificationImage1.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={newQualificationImage1.imageHint}
                  className="object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            {newQualificationImage2 && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right bg-gray-100 p-4">
                <Image
                  src={newQualificationImage2.imageUrl}
                  alt={newQualificationImage2.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={newQualificationImage2.imageHint}
                  className="object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-32" id="gallery">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {chartImage && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left">
              <Image
                src={chartImage.imageUrl}
                alt={chartImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={chartImage.imageHint}
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
          <div className="animate-slide-in-right">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.qualifications.control_title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.qualifications.control_description}
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="animate-slide-in-left">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.qualifications.innovation_title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.qualifications.innovation_description}
            </p>
          </div>
          {alloyImage && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
              <Image
                src={alloyImage.imageUrl}
                alt={alloyImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={alloyImage.imageHint}
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center mt-16">
          {isoCertificateImage && (
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left">
              <Image
                src={isoCertificateImage.imageUrl}
                alt={isoCertificateImage.description}
                width={962}
                height={722}
                data-ai-hint={isoCertificateImage.imageHint}
                className="object-cover w-full h-auto"
              />
            </div>
          )}
          <div className="animate-slide-in-right">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certificado ISO 9001:2015
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso compromisso com a qualidade é validado pela certificação
              ISO 9001:2015, garantindo que nossos processos e produtos atendem
              aos mais altos padrões internacionais de gestão da qualidade.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="animate-slide-in-left md:order-last">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certificado de Calibração
            </h2>
            <p className="text-lg text-muted-foreground">
              Certificado de revisão / calibração N° 2044 / 19 para o
              equipamento Spectrometro de Emissão Óptica, garantindo a precisão
              das nossas análises.
            </p>
          </div>
          {calibrationCertificateImage && (
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right md:order-first">
              <Image
                src={calibrationCertificateImage.imageUrl}
                alt={calibrationCertificateImage.description}
                width={961}
                height={717}
                data-ai-hint={calibrationCertificateImage.imageHint}
                className="object-cover w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up mb-12">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.qualifications.machining_gallery_title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              {t.qualifications.machining_gallery_subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machiningImages.map((image, index) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <Card className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-primary/20 cursor-pointer">
                      <div className="aspect-[4/3] w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          data-ai-hint={image.imageHint}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background border-accent/20">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {image.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-video w-full mt-4">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      data-ai-hint={image.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-center animate-fade-in-up">
            {newQualificationImage3 && (
              <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border">
                <Image
                  src={newQualificationImage3.imageUrl}
                  alt={newQualificationImage3.description}
                  width={1200}
                  height={1600}
                  data-ai-hint={newQualificationImage3.imageHint}
                  className="object-contain w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up mb-12">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Diagramas e Processos
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              Visualizações detalhadas de nossos processos e capacidades técnicas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newQualificationGallery.map((image, index) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <Card className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer bg-white">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] w-full relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            data-ai-hint={image.imageHint}
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                           <div className="p-4 bg-black/50 rounded-full">
                             <Eye className="h-8 w-8 text-white" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {image.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative flex-grow w-full h-full my-4">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      sizes="90vw"
                      data-ai-hint={image.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
