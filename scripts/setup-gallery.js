import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, '../public/gallery');
const outputFile = path.join(__dirname, '../src/data/galleryImages.ts');

// Get all image files
const files = fs.readdirSync(galleryDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.heic', '.jpg', '.jpeg'].includes(ext) && file !== 'README.md';
  })
  .sort();

console.log(`Found ${files.length} images to process`);

// Create gallery entries
const galleryEntries = files.map((file, index) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  
  // Create descriptive name based on original filename
  const newName = `kents-garden-project-${String(index + 1).padStart(3, '0')}.jpg`;
  const oldPath = path.join(galleryDir, file);
  const newPath = path.join(galleryDir, newName);
  
  // Determine category based on file type/name patterns
  let category = 'Landscaping';
  if (ext === '.heic') {
    category = 'Hardscaping'; // HEIC files might be hardscaping projects
  } else if (baseName.includes('401') || baseName.includes('436') || baseName.includes('456')) {
    category = 'Commercial';
  }
  
  // Rename file (keeping original extension for now, but updating reference)
  // Note: Actual conversion from HEIC/PNG to JPG would require image processing
  const srcPath = `/gallery/${newName}`;
  
  return {
    id: index + 1,
    src: srcPath,
    alt: `Kent's Garden ${category.toLowerCase()} project ${index + 1}`,
    category: category,
    originalFile: file,
    newFileName: newName
  };
});

// Generate TypeScript content
const tsContent = `/**
 * GALLERY IMAGES CONFIGURATION
 * 
 * Auto-generated from gallery images
 * Last updated: ${new Date().toISOString()}
 */

export const galleryImages = [
${galleryEntries.map(entry => `  {
    id: ${entry.id},
    src: "${entry.src}",
    alt: "${entry.alt}",
    category: "${entry.category}"
  }`).join(',\n')}
];

// Gallery categories - auto-generated from images
export const galleryCategories = [
  "All",
  ${[...new Set(galleryEntries.map(e => e.category))].map(cat => `"${cat}"`).join(',\n  ')}
];
`;

// Write the configuration file
fs.writeFileSync(outputFile, tsContent, 'utf8');
console.log(`✅ Generated gallery configuration with ${galleryEntries.length} images`);

// Create rename mapping file for reference
const renameMap = galleryEntries.map(e => ({
  from: e.originalFile,
  to: e.newFileName
}));

fs.writeFileSync(
  path.join(__dirname, '../public/gallery/rename-map.json'),
  JSON.stringify(renameMap, null, 2),
  'utf8'
);
console.log('✅ Created rename mapping file at public/gallery/rename-map.json');

console.log('\n📝 Next steps:');
console.log('1. Review the generated galleryImages.ts file');
console.log('2. Rename the actual image files to match (or update src paths)');
console.log('3. Convert HEIC files to JPG format if needed');

