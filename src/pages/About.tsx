import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteContent";
import heroImage from "@/assets/hero-garden.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 container px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating beautiful, sustainable gardens for over a decade
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-xl leading-relaxed">{siteConfig.about.story}</p>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl leading-relaxed">{siteConfig.about.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.about.values.map((value, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-serif font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Service Areas</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Proudly serving the Portland metro area and surrounding communities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {siteConfig.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 justify-center p-4 bg-accent-light rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              Don't see your area listed? <Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> to discuss service availability.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by homeowners throughout the Portland area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something beautiful for your outdoor space
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;