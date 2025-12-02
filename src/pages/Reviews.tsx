import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ExternalLink, MessageSquare, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { fetchGoogleReviews, GoogleReview } from "@/lib/googleReviewsService";

// Google Business Profile share link
const GOOGLE_SHARE_URL = "https://share.google/nnvoXXlJlLOG2bc2K";
const GOOGLE_REVIEW_LINK = GOOGLE_SHARE_URL; // Using the share link for now

const Reviews = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xkgdgvez"); // Using same form ID or create a new one for reviews
  const [rating, setRating] = useState<number>(5);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    review: "",
  });
  
  // Google Reviews state
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState<string | null>(null);
  
  // Fetch Google reviews on component mount
  useEffect(() => {
    const loadReviews = async () => {
      setIsLoadingReviews(true);
      setReviewsError(null);
      
      try {
        const reviews = await fetchGoogleReviews();
        setGoogleReviews(reviews);
        
        if (reviews.length === 0) {
          setReviewsError("No reviews found. Please check the Google Business Profile link.");
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
        setReviewsError("Unable to load reviews at this time. Please try again later.");
      } finally {
        setIsLoadingReviews(false);
      }
    };
    
    loadReviews();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Formspree with review data
    const formDataToSubmit = {
      ...formData,
      rating,
      type: "Review Submission",
    };

    // You can also store locally or send to your backend
    const existingReviews = JSON.parse(localStorage.getItem("websiteReviews") || "[]");
    const newReview = {
      id: Date.now(),
      ...formDataToSubmit,
      date: new Date().toISOString(),
      approved: false, // Reviews need approval before showing
    };
    existingReviews.push(newReview);
    localStorage.setItem("websiteReviews", JSON.stringify(existingReviews));

    // Show success message
    toast({
      title: "Review Submitted!",
      description: "Thank you for your review. Please also post it on Google to help others find us!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      location: "",
      review: "",
    });
    setRating(5);
  };

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

      {/* Review Form Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  <h2 className="text-3xl font-serif font-bold">Write a Review</h2>
                </div>
                
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <p className="text-xl font-semibold text-green-600 mb-2">Thank you for your review!</p>
                    <p className="text-muted-foreground mb-6">
                      Your review has been submitted. Please also share it on Google to help others find us!
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
                      <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                        Post on Google
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Rating */}
                    <div className="space-y-2">
                      <Label>Your Rating *</Label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              className={cn(
                                "h-8 w-8 transition-colors",
                                (hoveredRating || rating) >= star
                                  ? "fill-accent text-accent"
                                  : "fill-muted text-muted-foreground"
                              )}
                            />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {rating} {rating === 1 ? "star" : "stars"}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="review-name">Your Name *</Label>
                      <Input
                        id="review-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="review-email">Your Email *</Label>
                      <Input
                        id="review-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="review-location">Location (Optional)</Label>
                      <Input
                        id="review-location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="City, State"
                      />
                    </div>

                    {/* Review Text */}
                    <div className="space-y-2">
                      <Label htmlFor="review-text">Your Review *</Label>
                      <Textarea
                        id="review-text"
                        name="review"
                        required
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                        placeholder="Tell us about your experience..."
                        rows={6}
                      />
                      <ValidationError prefix="Review" field="review" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-hover"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Submitting..." : "Submit Review"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting, you agree to have your review displayed on our website. 
                      We encourage you to also post your review on{" "}
                      <a
                        href={GOOGLE_REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Google
                      </a>{" "}
                      to help others find us!
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-16 bg-muted/30">
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

      {/* Display Google Reviews */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            
            {/* Loading State */}
            {isLoadingReviews && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-accent mb-4" />
                <p className="text-muted-foreground">Loading reviews...</p>
              </div>
            )}
            
            {/* Error State */}
            {reviewsError && !isLoadingReviews && (
              <div className="flex flex-col items-center justify-center py-12">
                <AlertCircle className="h-8 w-8 text-destructive mb-4" />
                <p className="text-muted-foreground mb-4">{reviewsError}</p>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </Button>
              </div>
            )}
            
            {/* Google Reviews Display */}
            {!isLoadingReviews && !reviewsError && (
              <>
                {googleReviews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {googleReviews.map((review) => (
                      <Card key={review.id} className="border-2">
                        <CardContent className="pt-6">
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-5 w-5",
                                  i < review.rating
                                    ? "fill-accent text-accent"
                                    : "fill-muted text-muted-foreground"
                                )}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-4 italic">
                            "{review.text}"
                          </p>
                          <div className="font-semibold">{review.author}</div>
                          {review.relativeTime && (
                            <div className="text-sm text-muted-foreground">
                              {review.relativeTime}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-6">
                      No reviews found. Be the first to leave a review!
                    </p>
                  </div>
                )}
                
                {/* Link to Google Reviews */}
                <div className="text-center mt-8">
                  <Button asChild variant="outline" size="lg">
                    <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                      View All Google Reviews
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

