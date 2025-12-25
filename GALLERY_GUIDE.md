# Gallery Guide

This guide explains how to add your photography, events, and memories to the gallery section.

## Overview

The gallery is organized into collections, where each collection represents a set of related photos (e.g., a trip, an event, or a theme).

## Adding a New Gallery Collection

### Step 1: Create a New File

Create a new TypeScript file in `src/data/gallery/` with a descriptive name:

```
src/data/gallery/my-trip-to-mountains.ts
```

### Step 2: Define Your Collection

Use this template structure:

```typescript
import type { GalleryItem } from './types';

const myTripToMountains: GalleryItem = {
  id: 'my-trip-to-mountains',              // Must be unique, use kebab-case
  title: 'Mountain Adventure 2024',         // Display title
  description: 'A memorable hiking trip through the rocky mountains',
  date: '25-12-2024',                      // Format: DD-MM-YYYY
  category: 'events',                       // Options: 'photography', 'events', 'memories', 'other'
  coverImage: '/path/to/cover-image.jpg',  // Main image shown in grid
  images: [
    {
      id: 'img-1',                          // Must be unique within this collection
      src: '/path/to/image1.jpg',          // Path to the image
      alt: 'Mountain peak at sunrise',     // Alt text for accessibility
      caption: 'First light on the summit' // Optional: caption shown below image
    },
    {
      id: 'img-2',
      src: '/path/to/image2.jpg',
      alt: 'Trail through forest',
      caption: 'The path less traveled'
    }
    // Add more images...
  ],
  tags: ['hiking', 'mountains', 'adventure', 'nature'] // Optional: tags for organization
};

export default myTripToMountains;
```

### Step 3: Add Your Images

You have several options for hosting images:

#### Option 1: Local Images (Recommended)
Place your images in the `public/` folder:
```
public/
  gallery/
    mountains/
      cover.jpg
      photo1.jpg
      photo2.jpg
```

Then reference them:
```typescript
coverImage: '/gallery/mountains/cover.jpg',
images: [
  {
    id: 'img-1',
    src: '/gallery/mountains/photo1.jpg',
    alt: 'Description',
    caption: 'Optional caption'
  }
]
```

#### Option 2: External URLs
Use image hosting services like Imgur, Cloudinary, or Unsplash:
```typescript
coverImage: 'https://images.unsplash.com/photo-123456789',
```

## Gallery Categories

Choose the most appropriate category:
- **photography**: Artistic photos, landscapes, portraits
- **events**: Conferences, parties, gatherings
- **memories**: Personal moments, family photos
- **other**: Anything that doesn't fit above

## Best Practices

### Image Specifications
- **Cover Image**: 800x600px or 16:9 aspect ratio
- **Gallery Images**: Minimum 1200px wide for best quality
- **File Format**: JPG for photos, PNG for graphics
- **File Size**: Optimize to under 500KB per image for fast loading

### Writing Descriptions
- Keep titles concise (3-7 words)
- Descriptions should be 1-2 sentences
- Captions are optional but add context

### Organizing Collections
- One collection per event/theme
- Group 3-10 related photos together
- Use consistent naming conventions

## Examples

### Example 1: Photography Collection
```typescript
const landscapePhotography: GalleryItem = {
  id: 'landscape-photography-2024',
  title: 'Landscape Photography',
  description: 'A collection of landscape photographs from my travels',
  date: '01-12-2024',
  category: 'photography',
  coverImage: '/gallery/landscapes/cover.jpg',
  images: [
    {
      id: 'sunset-beach',
      src: '/gallery/landscapes/sunset.jpg',
      alt: 'Sunset at the beach',
      caption: 'Golden hour at Malibu Beach'
    }
  ],
  tags: ['landscape', 'nature', 'photography']
};

export default landscapePhotography;
```

### Example 2: Event Collection
```typescript
const birthdayParty: GalleryItem = {
  id: 'birthday-party-2024',
  title: 'My 25th Birthday',
  description: 'Celebrating with friends and family',
  date: '15-06-2024',
  category: 'events',
  coverImage: '/gallery/birthday/group-photo.jpg',
  images: [
    {
      id: 'cake-cutting',
      src: '/gallery/birthday/cake.jpg',
      alt: 'Birthday cake',
      caption: 'Making a wish!'
    }
  ],
  tags: ['birthday', 'celebration', 'friends']
};

export default birthdayParty;
```

## Troubleshooting

### Images Not Showing
1. Check file paths are correct
2. Ensure images are in the `public/` folder for local files
3. Verify external URLs are accessible

### Gallery Not Loading
1. Make sure your file doesn't include `index.ts` or `types.ts` in the name
2. Verify you exported your collection as `export default`
3. Check the browser console for errors

## Tips for Great Galleries

1. **Tell a Story**: Organize photos chronologically or thematically
2. **Quality Over Quantity**: 5 great photos beat 20 mediocre ones
3. **Variety**: Mix wide shots, close-ups, and details
4. **Captions**: Add context that photos alone can't convey
5. **Optimize**: Compress images before uploading

## Need Help?

The gallery automatically:
- Sorts collections by date (newest first)
- Filters by category
- Creates responsive layouts
- Handles image navigation and zoom

Just focus on adding your content!
