import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import suburbanImage from "@/assets/portfolio-suburban.jpg";
import rooftopImage from "@/assets/portfolio-rooftop.jpg";
import heroImage from "@/assets/hero-garden.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";

// Sample gallery images
const galleryImages = [
  { id: 1, src: heroImage, alt: "Modern evening garden with lighting", category: "Lighting" },
  { id: 2, src: suburbanImage, alt: "Suburban backyard transformation", category: "Residential" },
  { id: 3, src: rooftopImage, alt: "Urban rooftop garden", category: "Urban" },
  { id: 4, src: maintenanceImage, alt: "Professional garden maintenance", category: "Maintenance" },
  { id: 5, src: heroImage, alt: "Contemporary landscape design", category: "Design" },
  { id: 6, src: suburbanImage, alt: "Lush garden with flowers", category: "Planting" },
  { id: 7, src: rooftopImage, alt: "Rooftop terrace design", category: "Urban" },
  { id: 8, src: maintenanceImage, alt: "Seasonal garden care", category: "Maintenance" },
  { id: 9, src: heroImage, alt: "Elegant garden pathway", category: "Hardscape" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through our completed projects and beautiful gardens
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors",
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                    View
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <span className="text-white text-lg">{selectedImage.alt}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;