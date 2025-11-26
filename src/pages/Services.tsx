import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteContent";
import maintenanceImage from "@/assets/service-maintenance.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive garden and landscape services to create and maintain your perfect outdoor sanctuary
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={maintenanceImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll assess your property and recommend the best solutions.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;