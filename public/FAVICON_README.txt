# Favicon Generation

The favicon files (favicon-32x32.png, favicon-16x16.png) need to be generated from logo.svg.

You can:
1. Use an online tool: https://realfavicongenerator.net/
2. Use ImageMagick: convert -background none -resize 32x32 logo.svg favicon-32x32.png
3. Use rsvg-convert: rsvg-convert -w 32 -h 32 logo.svg -o favicon-32x32.png

For now, the SVG favicon will work in modern browsers.
