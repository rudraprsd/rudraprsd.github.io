# Gallery Guide

This guide explains how to add your photography, events, and memories to the gallery section.

## Overview

The gallery supports two types of content:
1. **Single Photos**: Individual photos with captions (perfect for standalone moments or featured shots)
2. **Collections**: Sets of related photos (great for events, trips, or themed galleries)

## Adding a Single Photo

### Step 1: Create a New File

Create a new TypeScript file in `src/data/gallery/` with a descriptive name:

```
src/data/gallery/golden-sunset.ts
```

### Step 2: Define Your Single Photo

Use this template for a single photo:

```typescript
import type { GalleryItem } from './types';

const goldenSunset: GalleryItem = {
  id: 'golden-sunset',                      // Must be unique, use kebab-case
  title: 'Golden Sunset',                   // Display title
  description: 'A breathtaking sunset captured at the beach',
  date: '25-12-2024',                      // Format: DD-MM-YYYY
  category: 'photography',                  // Options: 'photography', 'events', 'memories', 'other'
  type: 'single',                          // Set to 'single' for individual photos
  coverImage: '/gallery/sunset.jpg',       // The photo itself
  images: [
    {
      id: 'sunset-1',                       // Must be unique
      src: '/gallery/sunset.jpg',          // Same as coverImage for single photos
      alt: 'Sunset at the beach',          // Alt text for accessibility
      caption: 'When the sky turns to gold' // Caption displayed on hover
    }
  ],
  tags: ['sunset', 'nature', 'beach']      // Optional: tags for organization
};

export default goldenSunset;
```

## Adding a Photo Collection

### Step 1: Create a New File

Create a new TypeScript file in `src/data/gallery/` with a descriptive name:

```
src/data/gallery/my-trip-to-mountains.ts
```

### Step 2: Define Your Collection

Use this template for a collection of photos:

```typescript
import type { GalleryItem } from './types';

const myTripToMountains: GalleryItem = {
  id: 'my-trip-to-mountains',              // Must be unique, use kebab-case
  title: 'Mountain Adventure 2024',         // Display title
  description: 'A memorable hiking trip through the rocky mountains',
  date: '25-12-2024',                      // Format: DD-MM-YYYY
  category: 'events',                       // Options: 'photography', 'events', 'memories', 'other'
  type: 'collection',                      // Set to 'collection' for multiple photos
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

## Adding Your Images

You have several options for hosting images:

### Option 1: Local Images (Recommended)
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

### Option 2: External URLs
Use image hosting services like Imgur, Cloudinary, or Unsplash:
```typescript
coverImage: 'https://images.unsplash.com/photo-123456789',
```

## Single vs Collection: When to Use Which?

### Use **Single Photo** when:
- You want to showcase one standout photo
- The photo tells a complete story on its own
- You want the caption visible immediately on the grid
- Perfect for: Featured shots, milestones, memorable moments

### Use **Collection** when:
- You have multiple related photos
- You want to tell a story through a series of images
- Great for: Events, trips, photo essays, themed galleries

## Display Differences

### Single Photos:
- Caption appears on the card (visible on hover)
- Opens to show the full photo with caption
- Clean, minimal presentation

### Collections:
- Shows photo count on hover
- Opens to an image carousel
- Navigate through multiple photos
- Each photo can have its own caption

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

### Example 1: Single Photo
```typescript
const goldenHour: GalleryItem = {
  id: 'golden-hour',
  title: 'Golden Hour Serenity',
  description: 'A stunning sunset captured during golden hour',
  date: '20-12-2024',
  category: 'photography',
  type: 'single',  // Single photo
  coverImage: '/gallery/sunset.jpg',
  images: [
    {
      id: 'sunset-1',
      src: '/gallery/sunset.jpg',
      alt: 'Golden hour sunset',
      caption: 'When the sky turns to gold and time stands still'
    }
  ],
  tags: ['sunset', 'golden-hour', 'landscape']
};

export default goldenHour;
```

### Example 2: Photo Collection
```typescript
const landscapePhotography: GalleryItem = {
  id: 'landscape-photography-2024',
  title: 'Landscape Photography',
  description: 'A collection of landscape photographs from my travels',
  date: '01-12-2024',
  category: 'photography',
  type: 'collection',  // Collection of photos
  coverImage: '/gallery/landscapes/cover.jpg',
  images: [
    {
      id: 'sunset-beach',
      src: '/gallery/landscapes/sunset.jpg',
      alt: 'Sunset at the beach',
      caption: 'Golden hour at Malibu Beach'
    },
    {
      id: 'mountain-peak',
      src: '/gallery/landscapes/mountain.jpg',
      alt: 'Mountain peak',
      caption: 'Summit views in the Rockies'
    }
  ],
  tags: ['landscape', 'nature', 'photography']
};

export default landscapePhotography;
```

### Example 3: Event Collection
```typescript
const birthdayParty: GalleryItem = {
  id: 'birthday-party-2024',
  title: 'My 25th Birthday',
  description: 'Celebrating with friends and family',
  date: '15-06-2024',
  category: 'events',
  type: 'collection',
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

### For Single Photos:
1. **Choose Impactful Images**: Select photos that stand on their own
2. **Write Compelling Captions**: The caption is key - make it meaningful
3. **High Quality**: Single photos get more attention, ensure they're crisp
4. **Perfect for**: Milestones, featured work, special moments

### For Collections:
1. **Tell a Story**: Organize photos chronologically or thematically
2. **Quality Over Quantity**: 5-10 great photos beat 20 mediocre ones
3. **Variety**: Mix wide shots, close-ups, and details
4. **Context**: Use captions to add what photos alone can't convey
5. **Consistency**: Keep editing style similar within a collection

### General Tips:
- **Optimize Images**: Compress before uploading for fast loading
- **Descriptive Alt Text**: Essential for accessibility
- **Thoughtful Tags**: Help with organization and discovery
- **Regular Updates**: Keep your gallery fresh with new content

## Need Help?

The gallery automatically:
- Sorts items by date (newest first)
- Filters by category
- Creates responsive layouts
- Handles image navigation and zoom for collections
- Displays captions beautifully for single photos

Just focus on adding your content!