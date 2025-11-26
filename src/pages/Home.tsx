import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Calendar, Leaf, Heart, Star, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteContent";
import heroImage from "@/assets/hero-garden.jpg";
import suburbanImage from "@/assets/portfolio-suburban.jpg";
import rooftopImage from "@/assets/portfolio-rooftop.jpg";

const iconMap = {
  Palette,
  Calendar,
  Leaf,
  Heart,
};

const Home = () => {
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

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Transforming outdoor spaces into beautiful sanctuaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Link to="/portfolio" className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={suburbanImage}
                alt="Suburban backyard transformation"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-serif font-bold mb-2">Modern Suburban Oasis</h3>
                  <p className="opacity-90">Contemporary design meets natural beauty</p>
                </div>
              </div>
            </Link>

            <Link to="/portfolio" className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={rooftopImage}
                alt="Rooftop garden design"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-serif font-bold mb-2">Urban Rooftop Retreat</h3>
                  <p className="opacity-90">Maximizing small spaces with style</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/portfolio">
                View Full Portfolio
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
              Why Choose Kent's Garden LLC
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.about.values.map((value, index) => (
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by homeowners throughout the Portland area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.home.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom plan for your outdoor space.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto">
            <Link to="/contact">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;