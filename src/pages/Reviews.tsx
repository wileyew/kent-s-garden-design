import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Google Business Profile share link
const GOOGLE_SHARE_URL = "https://share.google/opwchVqysDXmRrPLd";
const GOOGLE_REVIEW_LINK = GOOGLE_SHARE_URL;

const Reviews = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We value your feedback! Share your experience and help others discover our services.
          </p>
        </div>
      </section>

      {/* Help Others Find Us on Google Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Help Others Find Us on Google
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your Google review helps potential customers discover our services. 
              It only takes a minute and means the world to us!
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

      {/* View Google Reviews */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Read what our customers have to say about their experience with us on Google.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                View All Google Reviews
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

