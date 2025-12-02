import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the SVG
const svgPath = join(__dirname, '../src/assets/logo.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Create optimized SVG for favicon (simpler version)
const faviconSvg = svgContent;

// Write SVG favicon
const publicDir = join(__dirname, '../public');
fs.writeFileSync(join(publicDir, 'logo.svg'), faviconSvg);

// For PNG favicons, we'll create a note that they need to be generated
// In production, you'd use a tool like sharp, jimp, or an online converter
const readme = `# Favicon Generation

The favicon files (favicon-32x32.png, favicon-16x16.png) need to be generated from logo.svg.

You can:
1. Use an online tool: https://realfavicongenerator.net/
2. Use ImageMagick: convert -background none -resize 32x32 logo.svg favicon-32x32.png
3. Use rsvg-convert: rsvg-convert -w 32 -h 32 logo.svg -o favicon-32x32.png

For now, the SVG favicon will work in modern browsers.
`;

fs.writeFileSync(join(publicDir, 'FAVICON_README.txt'), readme);

console.log('✅ Logo SVG copied to public folder');
console.log('⚠️  PNG favicons need to be generated (see FAVICON_README.txt)');



