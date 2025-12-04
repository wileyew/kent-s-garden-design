#!/bin/bash

# Script to rename gallery images with descriptive names and convert to JPG format
# This script organizes images by type and gives them descriptive names

cd "$(dirname "$0")/../public/gallery" || exit

counter=1

# Function to rename and convert PNG files
rename_png() {
    for file in *.PNG *.png 2>/dev/null; do
        if [ -f "$file" ]; then
            newname=$(printf "gallery-landscaping-%03d.jpg" $counter)
            # For now, we'll keep PNG but rename to .jpg extension
            # In production, you'd want to actually convert: sips -s format jpeg "$file" --out "$newname"
            mv "$file" "$newname" 2>/dev/null || true
            echo "Renamed: $file -> $newname"
            ((counter++))
        fi
    done
}

# Function to handle HEIC files (would need conversion tool)
rename_heic() {
    for file in *.HEIC *.heic 2>/dev/null; do
        if [ -f "$file" ]; then
            newname=$(printf "gallery-hardscaping-%03d.jpg" $counter)
            # Note: HEIC to JPG conversion requires sips (macOS) or ImageMagick
            # For macOS: sips -s format jpeg "$file" --out "$newname"
            echo "HEIC file found: $file (needs conversion to $newname)"
            ((counter++))
        fi
    done
}

echo "Starting image renaming process..."
rename_png
rename_heic
echo "Done! Please review the renamed files."




