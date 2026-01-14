import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from './placeholder-images';

export const carouselImages: ImagePlaceholder[] =
  PlaceHolderImages.filter(img =>
    [
      'hero-carousel-1',
      'hero-carousel-2',
      'hero-carousel-3',
    ].includes(img.id)
  ) ?? [];