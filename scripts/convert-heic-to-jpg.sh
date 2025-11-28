#!/bin/bash

# Script to convert HEIC files to JPG format using sips (macOS built-in tool)
# This requires macOS with sips command available

cd "$(dirname "$0")/../public/gallery" || exit

echo "Converting HEIC files to JPG format..."

# Find all files that are actually HEIC (even if renamed to .jpg)
for file in kents-garden-project-*.jpg; do
    if [ -f "$file" ]; then
        # Check if file is actually HEIC format
        file_type=$(file -b --mime-type "$file" 2>/dev/null)
        
        if [[ "$file_type" == *"heic"* ]] || [[ "$file_type" == *"heif"* ]]; then
            echo "Converting: $file"
            # Use sips to convert HEIC to JPG (macOS only)
            if command -v sips &> /dev/null; then
                sips -s format jpeg "$file" --out "${file%.jpg}.jpg" 2>/dev/null
                if [ $? -eq 0 ]; then
                    echo "  ✅ Converted successfully"
                else
                    echo "  ⚠️  Conversion failed (may need manual conversion)"
                fi
            else
                echo "  ⚠️  sips not available - install ImageMagick or use online converter"
                echo "  Alternative: Use online tools like https://cloudconvert.com/heic-to-jpg"
            fi
        fi
    fi
done

echo "Done! Note: Some files may need manual conversion if sips is not available."

