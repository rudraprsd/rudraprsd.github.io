import type { GalleryItem } from './types';

// Import all gallery items dynamically
const galleryModules = import.meta.glob<{ default: GalleryItem }>('./*.ts', { 
  eager: true 
});

// Filter out index.ts and types.ts
export const galleryItems: GalleryItem[] = Object.entries(galleryModules)
  .filter(([path]) => !path.includes('index.ts') && !path.includes('types.ts'))
  .map(([, module]) => module.default)
  .sort((a, b) => {
    // Sort by date descending (newest first)
    const dateA = new Date(a.date.split('-').reverse().join('-'));
    const dateB = new Date(b.date.split('-').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });

// Re-export types
export type { GalleryItem, GalleryImage } from './types';
