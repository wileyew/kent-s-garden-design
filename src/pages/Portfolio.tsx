import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteContent";
import suburbanImage from "@/assets/portfolio-suburban.jpg";
import rooftopImage from "@/assets/portfolio-rooftop.jpg";

// Sample portfolio projects
const portfolioProjects = [
  {
    id: 1,
    title: "Modern Suburban Transformation",
    category: "Suburban Backyards",
    location: "Lake Oswego",
    description: "Complete backyard redesign featuring native plants and modern hardscaping",
    image: suburbanImage,
  },
  {
    id: 2,
    title: "Urban Rooftop Oasis",
    category: "Rooftop & Small Spaces",
    location: "Pearl District, Portland",
    description: "Stunning rooftop garden with modular planters and sustainable irrigation",
    image: rooftopImage,
  },
  {
    id: 3,
    title: "Downtown Courtyard Garden",
    category: "City Gardens",
    location: "Downtown Portland",
    description: "Intimate city garden with vertical greening and water features",
    image: suburbanImage,
  },
  {
    id: 4,
    title: "Contemporary Residential Landscape",
    category: "Suburban Backyards",
    location: "West Linn",
    description: "Elegant design blending formal gardens with natural woodland edge",
    image: rooftopImage,
  },
  {
    id: 5,
    title: "Terrace Garden Renovation",
    category: "Rooftop & Small Spaces",
    location: "Beaverton",
    description: "Multi-level terrace with drought-tolerant plantings and outdoor living space",
    image: suburbanImage,
  },
  {
    id: 6,
    title: "Historic Garden Restoration",
    category: "City Gardens",
    location: "Irvington, Portland",
    description: "Sensitive restoration of period garden with modern amenities",
    image: rooftopImage,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of beautifully designed and expertly maintained gardens
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.portfolioCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  activeCategory === category && "bg-primary hover:bg-primary-hover"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium mb-2 opacity-90">{project.location}</div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;