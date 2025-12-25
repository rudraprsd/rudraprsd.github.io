export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'photography' | 'events' | 'memories' | 'other';
  type: 'single' | 'collection'; // 'single' for individual photos, 'collection' for multiple photos
  coverImage: string;
  images: GalleryImage[];
  tags?: string[];
}
