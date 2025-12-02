# Gallery Setup Instructions

## How to Add Images from Google Drive

### Step 1: Download Images from Google Drive

1. Open the Google Drive folder: https://drive.google.com/drive/folders/1EccF887lGB3ZZLnHRxxTKdKicuPFXIpk
2. Select all images you want to add (or download them individually)
3. Download the images to your computer
4. Make sure images are optimized (recommended size: 1200-2000px wide, JPG or WebP format)

### Step 2: Add Images to the Project

1. Copy the downloaded images to: `/public/gallery/` folder
2. Name them descriptively (e.g., `patio-installation-1.jpg`, `garden-design-2.jpg`)

### Step 3: Configure Images in Code

1. Open the file: `/src/data/galleryImages.ts`
2. Add entries for each image following this format:

```typescript
export const galleryImages = [
  {
    id: 1,
    src: "/gallery/patio-installation-1.jpg",
    alt: "Beautiful patio installation with modern pavers",
    category: "Hardscaping"
  },
  {
    id: 2,
    src: "/gallery/garden-design-2.jpg",
    alt: "Lush garden with seasonal flowers",
    category: "Landscaping"
  },
  {
    id: 3,
    src: "/gallery/commercial-maintenance.jpg",
    alt: "Professional commercial property maintenance",
    category: "Commercial"
  },
  // Add more images...
];
```

### Step 4: Categories

You can use these categories or create your own:
- **Landscaping** - Garden designs, plantings, flower beds
- **Hardscaping** - Patios, walkways, retaining walls, decks
- **Commercial** - Commercial property work
- **Residential** - Residential projects
- **Lighting** - Outdoor lighting installations
- **Maintenance** - Ongoing care and maintenance
- **Before & After** - Transformation projects

### Step 5: Test

1. Start your development server: `npm run dev` or `bun dev`
2. Navigate to the Gallery page
3. Verify all images load correctly
4. Test the lightbox and filtering features

## Gallery Features

The gallery includes:
- ✨ Beautiful masonry-style grid layout
- 🎨 Smooth hover animations and transitions
- 🔍 Full-screen lightbox with navigation
- 🏷️ Category filtering
- ⌨️ Keyboard navigation (arrow keys, ESC)
- 📱 Fully responsive design
- ⚡ Lazy loading for performance

## Tips

- **Image Optimization**: Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/) to compress images before adding them
- **Naming**: Use descriptive filenames that help you identify the image later
- **Alt Text**: Write descriptive alt text for accessibility and SEO
- **Categories**: Be consistent with category names for better filtering



