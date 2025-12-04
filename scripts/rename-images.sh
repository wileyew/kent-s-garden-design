#!/bin/bash

# Script to rename gallery images based on the rename-map.json
cd "$(dirname "$0")/../public/gallery" || exit

# Read rename map and rename files
if [ -f "rename-map.json" ]; then
    echo "Renaming images based on rename-map.json..."
    
    # Use node to parse JSON and rename files
    node -e "
    const fs = require('fs');
    const path = require('path');
    const map = JSON.parse(fs.readFileSync('rename-map.json', 'utf8'));
    
    map.forEach(({from, to}) => {
        if (fs.existsSync(from)) {
            // For HEIC files, we'll rename but note they need conversion
            if (from.toLowerCase().endsWith('.heic')) {
                console.log(\`Note: \${from} is HEIC format - consider converting to JPG\`);
            }
            // Rename the file
            try {
                fs.renameSync(from, to);
                console.log(\`Renamed: \${from} -> \${to}\`);
            } catch (err) {
                console.error(\`Error renaming \${from}: \${err.message}\`);
            }
        } else {
            console.log(\`File not found: \${from}\`);
        }
    });
    "
else
    echo "rename-map.json not found. Run setup-gallery.js first."
    exit 1
fi

echo "Done!"




