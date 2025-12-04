import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgdgvez");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consultation: false,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your garden vision. We're here to answer questions and provide expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-serif font-bold mb-6">Get a Quote</h2>
                  {state.succeeded ? (
                    <div className="text-center py-8">
                      <p className="text-xl font-semibold text-green-600 mb-2">Thanks for your message!</p>
                      <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Smith"
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                          <ValidationError 
                            prefix="Phone" 
                            field="phone"
                            errors={state.errors}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Type</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => setFormData({ ...formData, service: value })}
                          >
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {siteConfig.services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <input
                            type="hidden"
                            name="service"
                            value={formData.service}
                          />
                          <ValidationError 
                            prefix="Service" 
                            field="service"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project..."
                          rows={6}
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="consultation"
                          checked={formData.consultation}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, consultation: checked as boolean })
                          }
                        />
                        <input
                          type="hidden"
                          name="consultation"
                          value={formData.consultation ? "yes" : "no"}
                        />
                        <label
                          htmlFor="consultation"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I would like to request an on-site consultation
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary-hover"
                        disabled={state.submitting}
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Phone</div>
                        <a href={`tel:${siteConfig.company.phone}`} className="text-muted-foreground hover:text-primary">
                          {siteConfig.company.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <a href={`mailto:${siteConfig.company.email}`} className="text-muted-foreground hover:text-primary">
                          {siteConfig.company.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Address</div>
                        <p className="text-muted-foreground">{siteConfig.company.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Hours</div>
                        <p className="text-muted-foreground">{siteConfig.company.hours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-accent-light">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Service Areas</h3>
                  <p className="text-muted-foreground mb-3">
                    We proudly serve the Northern Virginia area including:
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {siteConfig.serviceAreas.join(", ")}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-96 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <p>Map Placeholder - Add your Google Maps embed here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;