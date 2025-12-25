import type { GalleryItem } from './types';

const coffeeMoment: GalleryItem = {
  id: 'coffee-moment',
  title: 'Morning Coffee',
  description: 'A quiet morning moment with perfectly brewed coffee.',
  date: '10-12-2024',
  category: 'memories',
  type: 'single',
  coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
  images: [
    {
      id: 'coffee-1',
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
      alt: 'Cup of coffee',
      caption: 'The perfect start to a productive day'
    }
  ],
  tags: ['coffee', 'morning', 'lifestyle', 'cozy']
};

export default coffeeMoment;
