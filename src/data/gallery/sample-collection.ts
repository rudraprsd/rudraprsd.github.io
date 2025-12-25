import type { GalleryItem } from './types';

const sampleGallery: GalleryItem = {
  id: 'sample-collection',
  title: 'Sample Photo Collection',
  description: 'A beautiful collection of sample photographs demonstrating the gallery feature. Replace this with your own photos and memories!',
  date: '25-12-2024',
  category: 'photography',
  coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  images: [
    {
      id: 'img-1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Beautiful mountain landscape',
      caption: 'Majestic mountains at sunrise'
    },
    {
      id: 'img-2',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
      alt: 'Forest path',
      caption: 'Peaceful forest trail'
    },
    {
      id: 'img-3',
      src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&h=800&fit=crop',
      alt: 'Ocean waves',
      caption: 'Serene ocean view'
    },
    {
      id: 'img-4',
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
      alt: 'Desert landscape',
      caption: 'Golden hour in the desert'
    }
  ],
  tags: ['nature', 'landscape', 'outdoor', 'travel']
};

export default sampleGallery;
