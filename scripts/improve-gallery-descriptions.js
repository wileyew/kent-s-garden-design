import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configFile = path.join(__dirname, '../src/data/galleryImages.ts');
const config = fs.readFileSync(configFile, 'utf8');

// More descriptive alt text patterns based on categories
const descriptions = {
  Hardscaping: [
    "Professional patio installation with modern pavers",
    "Beautiful retaining wall construction project",
    "Custom walkway design and installation",
    "Elegant hardscaping with natural stone",
    "Patio and outdoor living space design",
    "Professional deck installation project",
    "Custom hardscaping with quality materials",
    "Retaining wall and landscape integration",
    "Modern paver patio installation",
    "Hardscaping project with attention to detail",
    "Professional stone work installation",
    "Custom outdoor hardscape design",
    "Quality hardscaping installation",
    "Beautiful patio and walkway project",
    "Professional hardscape construction",
  ],
  Landscaping: [
    "Beautiful garden design with seasonal plants",
    "Professional landscaping installation",
    "Lush garden with native plants",
    "Thoughtfully designed landscape project",
    "Garden design with year-round interest",
    "Professional plant installation and design",
    "Beautiful flower bed design",
    "Landscaping with native Virginia plants",
    "Garden design with seasonal color",
    "Professional landscape installation",
    "Beautiful garden transformation",
    "Thoughtfully designed outdoor space",
  ],
  Commercial: [
    "Commercial property landscaping maintenance",
    "Professional commercial landscape design",
    "Commercial property garden installation",
    "Commercial landscaping project",
    "Professional commercial maintenance",
    "Commercial property hardscaping",
    "Commercial landscape design and installation",
  ],
};

// Parse and improve descriptions
const lines = config.split('\n');
const improvedLines = [];
let inArray = false;
let entryCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('alt:')) {
    // Extract category from previous entry or current
    const categoryMatch = config.substring(0, config.indexOf(line)).match(/category:\s*"([^"]+)"/);
    const category = categoryMatch ? categoryMatch[1] : 'Landscaping';
    
    // Get description based on category and entry count
    const categoryDescs = descriptions[category] || descriptions.Landscaping;
    const descIndex = entryCount % categoryDescs.length;
    const newDesc = categoryDescs[descIndex];
    
    improvedLines.push(`    alt: "${newDesc}",`);
    entryCount++;
  } else {
    improvedLines.push(line);
  }
}

fs.writeFileSync(configFile, improvedLines.join('\n'), 'utf8');
console.log(`✅ Improved descriptions for ${entryCount} images`);

