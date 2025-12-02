#!/bin/bash

# Script to create favicon from SVG logo
cd "$(dirname "$0")/.." || exit

SVG_FILE="src/assets/logo.svg"
FAVICON_DIR="public"
FAVICON_FILE="$FAVICON_DIR/favicon.ico"

echo "Creating favicon from logo..."

# Check if we have ImageMagick or sips
if command -v convert &> /dev/null; then
    # Use ImageMagick
    echo "Using ImageMagick to create favicon..."
    convert -background none -resize 32x32 "$SVG_FILE" "$FAVICON_DIR/favicon-32x32.png"
    convert -background none -resize 16x16 "$SVG_FILE" "$FAVICON_DIR/favicon-16x16.png"
    convert "$FAVICON_DIR/favicon-16x16.png" "$FAVICON_DIR/favicon-32x32.png" "$FAVICON_FILE"
    echo "✅ Favicon created using ImageMagick"
elif command -v sips &> /dev/null; then
    # Use sips (macOS) - first convert SVG to PNG, then to ICO
    echo "Using sips to create favicon..."
    # Create temporary PNG files
    qlmanage -t -s 32 -o "$FAVICON_DIR" "$SVG_FILE" 2>/dev/null || {
        # Alternative: use rsvg-convert if available
        if command -v rsvg-convert &> /dev/null; then
            rsvg-convert -w 32 -h 32 "$SVG_FILE" -o "$FAVICON_DIR/favicon-32x32.png"
            rsvg-convert -w 16 -h 16 "$SVG_FILE" -o "$FAVICON_DIR/favicon-16x16.png"
        else
            echo "⚠️  Need ImageMagick, rsvg-convert, or online tool to convert SVG to ICO"
            echo "Creating PNG versions instead..."
            # Just create PNG versions
            if command -v rsvg-convert &> /dev/null; then
                rsvg-convert -w 32 -h 32 "$SVG_FILE" -o "$FAVICON_DIR/favicon.png"
            fi
        fi
    }
else
    echo "⚠️  No image conversion tool found. Please install ImageMagick or use an online tool."
    echo "You can convert the SVG manually at: https://convertio.co/svg-ico/"
fi



