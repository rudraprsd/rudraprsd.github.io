import type { GalleryItem } from './types';

const goldenHour: GalleryItem = {
  id: 'golden-hour',
  title: 'Golden Hour Serenity',
  description: 'A stunning sunset captured during golden hour, painting the sky in warm hues.',
  date: '20-12-2024',
  category: 'photography',
  type: 'single',
  coverImage: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1200&h=800&fit=crop',
  images: [
    {
      id: 'sunset-1',
      src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1200&h=800&fit=crop',
      alt: 'Golden hour sunset',
      caption: 'When the sky turns to gold and time stands still'
    }
  ],
  tags: ['sunset', 'golden-hour', 'landscape', 'nature']
};

export default goldenHour;
