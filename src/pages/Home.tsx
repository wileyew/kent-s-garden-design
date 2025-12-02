import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Calendar, Leaf, Heart, ArrowRight, Quote, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/siteContent";
import { galleryImages } from "@/data/galleryImages";
import heroImage from "@/assets/hero-garden.jpg";
import suburbanImage from "@/assets/portfolio-suburban.jpg";
import rooftopImage from "@/assets/portfolio-rooftop.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const iconMap = {
  Palette,
  Calendar,
  Leaf,
  Heart,
};

const Home = () => {
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setShowQuoteButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 container px-4 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            {siteConfig.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 max-w-2xl mx-auto">
            {siteConfig.home.hero.subtitle}
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            {siteConfig.home.hero.description}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto">
            <Link to={siteConfig.home.hero.ctaLink}>
              {siteConfig.home.hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>


      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive garden services designed to create and maintain beautiful outdoor spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.home.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={suburbanImage}
                alt="Modern landscaping and hardscaping visions"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-serif font-bold mb-2">Modern landscaping and hardscaping visions</h3>
                  <p className="opacity-90">Contemporary design meets natural beauty</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={rooftopImage}
                alt="Commercial maintenance"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-serif font-bold mb-2">Commercial maintenance</h3>
                  <p className="opacity-90">Efficiently maintaining commercial properties to the utmost degree.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Gallery Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our completed projects and beautiful garden designs
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages
                  .filter(img => 
                    !img.alt.toLowerCase().includes('patio') && 
                    !img.alt.toLowerCase().includes('mulch') &&
                    !img.alt.toLowerCase().includes('paver')
                  )
                  .map((image) => (
                    <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 bg-muted">
                        <div className="relative w-full aspect-square">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={cn(
                              "w-full h-full object-cover transition-transform duration-700",
                              "group-hover:scale-110"
                            )}
                            loading="lazy"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Hover Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm font-medium drop-shadow-lg line-clamp-2">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 hidden md:flex" />
              <CarouselNext className="right-2 md:right-4 hidden md:flex" />
            </Carousel>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">
                  View Full Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase - Patio & Mulch */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See examples of our professional patio installations and landscaping services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryImages
              .filter(img => 
                img.alt.toLowerCase().includes('patio') || 
                img.alt.toLowerCase().includes('mulch') ||
                img.alt.toLowerCase().includes('paver')
              )
              .slice(0, 3)
              .map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 h-auto">
              <Link to="/services">
                See our services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent-light">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              Why choose Kent's garden
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.home.whyChooseUs.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="h-10 w-10" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Request Your Free Quote Today
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get a competitive quote for your landscaping or hardscaping project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-xl">
              <Link to="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-xl">
              <a href={`tel:${siteConfig.company.phone}`}>
                Call {siteConfig.company.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Quote Button - Chatbot Style */}
      {showQuoteButton && (
        <div className="fixed bottom-6 right-6 z-50">
          {isExpanded ? (
            <div className="bg-primary text-primary-foreground rounded-2xl shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-semibold text-sm">Get a Free Quote</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Ready to transform your outdoor space? Get a competitive quote today.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Link to="/contact" onClick={() => setIsExpanded(false)}>
                    Request Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <a href={`tel:${siteConfig.company.phone}`} onClick={() => setIsExpanded(false)}>
                    Call {siteConfig.company.phone}
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
              aria-label="Request a quote"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                !
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;