import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryImages, galleryCategories } from "@/data/galleryImages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Get unique categories from images
  const categories = galleryImages.length > 0
    ? ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
    : galleryCategories;

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter);

  // Handle image load
  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  // Lightbox navigation
  const navigateImage = useCallback((direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages, navigateImage]);

  // If no images, show placeholder
  if (galleryImages.length === 0) {
    return (
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-to-b from-accent-light to-background">
          <div className="container px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A visual journey through our completed projects and beautiful gardens
            </p>
            <div className="max-w-2xl mx-auto bg-muted/30 rounded-lg p-12">
              <p className="text-lg text-muted-foreground">
                Gallery images will appear here once they are added. Please add images to the gallery configuration.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
                  "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"}
          </div>
        </div>
      </section>

      {/* Sliding Gallery Carousel */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredImages.map((image, index) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div
                      className={cn(
                        "relative group cursor-pointer overflow-hidden rounded-xl",
                        "shadow-md hover:shadow-2xl transition-all duration-500",
                        "bg-muted",
                        loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
                      )}
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative w-full aspect-[4/3]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-700",
                            "group-hover:scale-110"
                          )}
                          onLoad={() => handleImageLoad(image.id)}
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover Content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center text-white">
                            <ZoomIn className="h-12 w-12 mx-auto mb-2 drop-shadow-lg" />
                            <p className="text-sm font-medium drop-shadow-lg">Click to view</p>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
            
            {/* Image Counter */}
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Showing {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} • Use arrows to navigate
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent transition-colors p-3 rounded-full hover:bg-white/10 bg-black/30 backdrop-blur"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent transition-colors p-3 rounded-full hover:bg-white/10 bg-black/30 backdrop-blur"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Image Container with Sliding Animation */}
          <div 
            className="max-w-7xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 flex items-center justify-center overflow-hidden">
              <img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in fade-in slide-in-from-right-5 duration-300"
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <p className="text-white text-xl font-medium mb-2">{selectedImage.alt}</p>
              <div className="flex items-center justify-center gap-4 text-sm text-white/70">
                <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-full">
                  {selectedImage.category}
                </span>
                <span>
                  {filteredImages.findIndex((img) => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            Use arrow keys to navigate • ESC to close
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
