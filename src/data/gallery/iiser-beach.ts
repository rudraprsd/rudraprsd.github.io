import type { GalleryItem } from './types';

const iiserBeach: GalleryItem = {
  id: 'iiser-beach',
  title: 'IISER Beach, Berhampur',
  description: 'Just another day here',
  date: '12-02-2026',
  category: 'memories',
  type: 'collection',
  coverImage: '/gallery/iiser_beach/iiser-beach-3.webp',
  images: [
    {
      id: 'iiser-beach-3',
      src: '/gallery/iiser_beach/iiser-beach-3.webp',
      alt: 'many boats',
      // caption: 'Lines and angles converging towards infinity'
    },
    {
      id: 'iiser-beach-2',
      src: '/gallery/iiser_beach/iiser-beach-2.webp',
      alt: 'single boat',
      // caption: 'Lines and angles converging towards infinity'
    },
    {
      id: 'iiser-beach-1',
      src: '/gallery/iiser_beach/iiser-beach-1.webp',
      alt: 'No boat',
      // caption: 'Lines and angles converging towards infinity'
    }
  ],
  tags: ['beach', 'iiser', 'berhampur']
};

export default iiserBeach;
