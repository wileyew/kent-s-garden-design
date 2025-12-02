import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Google Business Profile share link
const GOOGLE_SHARE_URL = "https://share.google/opwchVqysDXmRrPLd";
const GOOGLE_REVIEW_LINK = GOOGLE_SHARE_URL;

// Google Maps embed URL - Shows the map with reviews in the sidebar
// This is the src URL from the iframe embed code
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795261.1456090629!2d-77.58631455!3d38.867056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1acf9c4fa113dbb%3A0xaeb7daa33678311f!2sKent%27s%20Garden%2C%20LLC!5e0!3m2!1sen!2sus!4v1764701232150!5m2!1sen!2sus";

const Reviews = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Customer Reviews</h1>
        </div>
      </section>

      {/* Help Others Find Us on Google Section */}
      <section className="pt-8 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Help Others Find Us on Google
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We value your feedback! Your Google review helps potential customers discover our services.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                Leave a Google Review
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Clicking this link will take you to our Google Business Profile
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps iframe - Shows map with reviews in sidebar */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-6">
              Want to see what others say? Click on review section in the map view below.
            </p>
            <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border-2">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Kent's Garden Reviews"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

