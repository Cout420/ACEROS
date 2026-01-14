
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/icons';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

// Estrutura de tipo mais específica para as traduções necessárias.
export type EngineeringTranslations = {
  qualifications: {
    alloy_tables_title: string;
    alloy_tables_subtitle: string;
    steel_classes_title: string;
    steel_classes_subtitle: string;
    machining_gallery_title: string;
    machining_gallery_subtitle: string;
    structural_analysis_title: string;
    structural_analysis_subtitle: string;
    process_optimization_title: string;
    process_optimization_subtitle: string;
  };
  manufacturing_history: {
    title: string;
    subtitle: string;
  };
};

// A estrutura dos dados que a página do servidor irá passar.
export type EngineeringPageData = {
  sector: {
    title: string;
    description: string;
    solutions: {
      [key: string]: {
        title: string;
        description: string;
        icon: 'Component' | 'Zap' | 'Lightbulb';
      };
    };
  };
  translations: EngineeringTranslations; // Usa o tipo específico
  images: {
    heroImage?: ImagePlaceholder;
    featureImage?: ImagePlaceholder;
    alloyTableFull?: ImagePlaceholder;
    steelClassChart?: ImagePlaceholder;
    engineeringGalleryImages: ImagePlaceholder[];
    machiningImages: ImagePlaceholder[];
    structuralAnalysisImage?: ImagePlaceholder;
    processFlowchartImage?: ImagePlaceholder;
    isoCertificateImage?: ImagePlaceholder;
    calibrationCertificateImage?: ImagePlaceholder;
    structuralCalculationImage?: ImagePlaceholder;
    rolosAplicacoesImage?: ImagePlaceholder;
    engineeringNewSectionImage?: ImagePlaceholder;
  };
};

// O componente cliente agora só se preocupa em renderizar os dados que recebe.
export function EngineeringClient({ pageData }: { pageData: EngineeringPageData }) {
  const { t: allTranslations } = useLanguage();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  
  const { sector, translations: t, images } = pageData;
  const { 
    heroImage, 
    featureImage, 
    alloyTableFull, 
    steelClassChart,
    engineeringGalleryImages,
    machiningImages,
    structuralAnalysisImage,
    processFlowchartImage,
    isoCertificateImage,
    calibrationCertificateImage,
    structuralCalculationImage,
    rolosAplicacoesImage,
    engineeringNewSectionImage,
  } = images;

  const solutions = Object.entries(sector.solutions).map(([id, data]) => ({
    id,
    ...data,
  }));
  
  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full animate-fade-in">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
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
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl uppercase">
              {sector.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
              {sector.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Nossas Soluções de Engenharia
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              Desenvolvemos projetos e análises para garantir a máxima performance e durabilidade dos seus componentes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up bg-secondary/30"
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                 <CardHeader className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon name={solution.icon} className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 text-center">
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Inovação em Cada Projeto
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Utilizamos as mais recentes tecnologias de simulação e análise para criar componentes que superam os desafios mais extremos da indústria.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="Lightbulb" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Design Otimizado
                  </h4>
                  <p className="text-muted-foreground">Projetos que maximizam a eficiência e a vida útil dos componentes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="ShieldCheck" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Validação por Simulação
                  </h4>
                  <p className="text-muted-foreground">Testes virtuais rigorosos que garantem a performance antes da produção.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="Handshake" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Parceria Contínua
                  </h4>
                   <p className="text-muted-foreground">Acompanhamento técnico para garantir os melhores resultados.</p>
                </div>
              </li>
            </ul>
          </div>
          {featureImage && (
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
              <Image
                src={featureImage.imageUrl}
                alt={featureImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={featureImage.imageHint}
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.qualifications.alloy_tables_title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              {t.qualifications.alloy_tables_subtitle}
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up">
            {alloyTableFull && (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <Image
                      src={alloyTableFull.imageUrl}
                      alt={alloyTableFull.description}
                      width={1200}
                      height={1600}
                      data-ai-hint={alloyTableFull.imageHint}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full h-[90vh] p-4 bg-background border-accent/20 flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {alloyTableFull.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative flex-grow w-full h-full my-4">
                    <Image
                      src={alloyTableFull.imageUrl}
                      alt={alloyTableFull.description}
                      fill
                      data-ai-hint={alloyTableFull.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              AÇOS - EXEMPLOS DE APLICAÇÕES DE ROLOS
            </h2>
          </div>
          {rolosAplicacoesImage && (
             <div className="relative w-full rounded-xl overflow-hidden shadow-lg border animate-fade-in-up">
              <Image
                src={rolosAplicacoesImage.imageUrl}
                alt={rolosAplicacoesImage.description}
                width={1200}
                height={800}
                data-ai-hint={rolosAplicacoesImage.imageHint}
                className="object-contain w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.qualifications.steel_classes_title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              {t.qualifications.steel_classes_subtitle}
            </p>
          </div>
          {steelClassChart && (
             <div className="relative w-full rounded-xl overflow-hidden shadow-lg border animate-fade-in-up">
              <Image
                src={steelClassChart.imageUrl}
                alt={steelClassChart.description}
                width={1200}
                height={800}
                data-ai-hint={steelClassChart.imageHint}
                className="object-contain w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {engineeringGalleryImages && engineeringGalleryImages.length > 0 && (
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in-up mb-12">
              <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t.manufacturing_history.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
                {t.manufacturing_history.subtitle}
              </p>
            </div>
            <Carousel
              className="w-full"
              opts={{ loop: true, align: 'start' }}
              plugins={[plugin.current]}
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.reset()}
            >
              <CarouselContent>
                {engineeringGalleryImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          data-ai-hint={image.imageHint}
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
        </section>
      )}

      <section className="bg-background py-20 sm:py-32">
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

      <section className="bg-secondary/50 py-20 sm:py-32" id="certificates">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
              <h2 className="mb-4 font-headline text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                ACEROS INOXIDÁVEIS PROCESSO DE CENTRIFUGAÇÃO
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>
                  <span className="font-bold">O que é fundição de aço centrifugado?</span>
                  <br />É um processo de fabricação de tubos mecânicos e buchas, onde o aço líquido é vazado em uma matriz de aço baixo carbono (coquilha) com revestimento interno. A matriz é pré-aquecida em movimento circular. Isso recebe o aço que irá se conformar nas paredes internas, em razão da força centrífuga (força inercial).
                </p>
                <p className="italic">
                  Fig. 1: Vazamento de um tubo, material ASTM A 297 Gr.HP.
                </p>
                <p>
                  <span className="font-bold">Como atua a força centrífuga (força inercial)?</span>
                  <br />A força centrífuga atua expulsando o metal (fuga do centro) para a extremidade interna da parede da matriz. Lá, o aço líquido é depositado a temperaturas entre 1.500 e 1.630 graus Celsius. Este processo forma peças tubulares com seus diâmetros interno e externo concêntricos, a partir do diâmetro exigido em cada projeto.
                </p>
                <p>
                  As rotações de trabalho são calculadas para cada diâmetro, para garantir uma boa união, controle de tamanho e forma dos grãos. Esse controle é calculado pela utilização da mesma relação de força G, cálculos complexos, visto que os diâmetros das matrizes e seus perímetros mudam, além da massa de cada tubo.
                </p>
                <p>
                  Outro processo de melhoria da qualidade do produto é a utilização após o processo centrifugação ou fundição estática, de processos de beneficiamento como a solubilização (envelhecimento).
                </p>
              </div>
            </div>
          </div>
          {calibrationCertificateImage && (
            <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
              <div className="animate-slide-in-left md:order-last">
                <h2 className="mb-6 font-headline text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  ACEROS – DIVISÃO DE AÇOS INOXIDÁVEIS – TUBOS
                </h2>
                <div className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Fig. 2: Exemplo da atuação da força centrífuga (Máquina com Rotação de com 1190 RPM).
                  </p>
                  <p>
                    Detalhe do tubo centrifugado após o processo de usinagem e polimento. A peça finalizada é um Rolo de Imersão (Sink Roll).
                  </p>
                  <p className="italic">
                    (Esta seção complementa a explicação anterior sobre o Processo de Centrifugação e mostra o produto final, como os rolos de imersão que foram detalhados na Seção 5.)
                  </p>
                </div>
              </div>
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
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {structuralCalculationImage && (
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left">
              <Image
                src={structuralCalculationImage.imageUrl}
                alt={structuralCalculationImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={structuralCalculationImage.imageHint}
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
          <div className="animate-slide-in-right">
            <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              CÁLCULO ESTRUTURAL
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Formamos uma equipe de engenheiros experientes nos mais diversos setores do mercado e utilizamos software específico para cada área.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="Star" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Matemática</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="Star" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">AutoCAD</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="Star" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">SolidWorks</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {processFlowchartImage && (
              <div className='animate-fade-in-up max-w-2xl w-full' style={{animationDelay: '0.2s'}}>
                 <div className="text-center mb-8">
                  <h3 className="font-headline text-2xl font-bold text-foreground">Cálculos Estruturais e simulações de testes com temperatura</h3>
                  <p className="text-muted-foreground max-w-md mx-auto"></p>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg border">
                  <Image
                    src={processFlowchartImage.imageUrl}
                    alt={processFlowchartImage.description}
                    width={1200}
                    height={800}
                    data-ai-hint={processFlowchartImage.imageHint}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {engineeringNewSectionImage && (
        <section className="py-10 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className='animate-fade-in-up max-w-4xl w-full' style={{animationDelay: '0.2s'}}>
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg border">
                  <Image
                    src={engineeringNewSectionImage.imageUrl}
                    alt={engineeringNewSectionImage.description}
                    width={1200}
                    height={800}
                    data-ai-hint={engineeringNewSectionImage.imageHint}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <WhatsAppCta />
    </div>
  );
}

    

    