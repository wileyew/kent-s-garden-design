import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteContent";
import maintenanceImage from "@/assets/service-maintenance.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = siteConfig.services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${maintenanceImage})` }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 container px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{service.shortDescription}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed">{service.fullDescription}</p>
            </div>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-serif font-bold mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  All Services
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
                <Link to="/contact">
                  Request This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;