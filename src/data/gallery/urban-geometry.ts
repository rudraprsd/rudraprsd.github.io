import type { GalleryItem } from './types';

const urbanGeometry: GalleryItem = {
  id: 'urban-geometry',
  title: 'Urban Geometry',
  description: 'Modern architecture creating striking geometric patterns against the sky.',
  date: '15-12-2024',
  category: 'photography',
  type: 'single',
  coverImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop',
  images: [
    {
      id: 'building-1',
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop',
      alt: 'Modern building with geometric patterns',
      caption: 'Lines and angles converging towards infinity'
    }
  ],
  tags: ['architecture', 'urban', 'geometry', 'minimal']
};

export default urbanGeometry;
