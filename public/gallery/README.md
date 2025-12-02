# Gallery Images Folder

## How to Add Images

1. **Download images from Google Drive:**
   - Go to: https://drive.google.com/drive/folders/1EccF887lGB3ZZLnHRxxTKdKicuPFXIpk
   - Download all the images you want to display in the gallery
   - Save them to this folder (`/public/gallery/`)

2. **Add images to the configuration:**
   - Open `/src/data/galleryImages.ts`
   - Add entries for each image following this format:
   ```typescript
   {
     id: 1,
     src: "/gallery/your-image-name.jpg",
     alt: "Description of what's in the image",
     category: "Landscaping" // or "Hardscaping", "Commercial", "Residential", etc.
   }
   ```

3. **Image Recommendations:**
   - Use high-quality images (at least 1200px wide for best results)
   - Optimize images before uploading (use tools like TinyPNG or ImageOptim)
   - Use descriptive filenames (e.g., `patio-installation-1.jpg`)
   - Supported formats: JPG, PNG, WebP

## Categories

You can use these categories or create your own:
- Landscaping
- Hardscaping
- Commercial
- Residential
- Lighting
- Maintenance
- Design
- Before & After



