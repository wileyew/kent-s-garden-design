/**
 * GALLERY IMAGES CONFIGURATION
 * 
 * To add images from your Google Drive folder:
 * 1. Download the images from Google Drive
 * 2. Place them in the /public/gallery/ folder
 * 3. Add entries below following this format:
 * 
 * {
 *   id: unique_number,
 *   src: "/gallery/your-image-name.jpg",
 *   alt: "Description of the image",
 *   category: "Category Name"
 * }
 */

// Placeholder - Replace with your actual images
// After downloading images from Google Drive, add them here
export const galleryImages = [
  // Add your images here
  // Example format:
  // { id: 1, src: "/gallery/image1.jpg", alt: "Beautiful garden design", category: "Landscaping" },
  // { id: 2, src: "/gallery/image2.jpg", alt: "Hardscaping project", category: "Hardscaping" },
];

// Gallery categories - will be auto-generated from images, but you can customize
export const galleryCategories = [
  "All",
  "Landscaping",
  "Hardscaping",
  "Commercial",
  "Residential",
  "Lighting",
  "Maintenance",
];

