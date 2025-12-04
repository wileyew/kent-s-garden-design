import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import suburbanImage from "@/assets/portfolio-suburban.jpg";

// Sample blog posts with full content
const blogPosts = [
  {
    id: 1,
    title: "Spring Garden Preparation: A Complete Guide",
    excerpt: "Get your garden ready for the growing season with our comprehensive spring preparation checklist.",
    fullContent: "Spring is the perfect time to prepare your garden for a bountiful growing season. Start by clearing away winter debris, testing your soil pH, and amending it with compost. Prune dead branches from trees and shrubs, and divide perennials that have become overcrowded. Plan your planting schedule based on your local frost dates, and consider starting seeds indoors for a head start. Don't forget to clean and sharpen your gardening tools, and check your irrigation system for any needed repairs. With proper preparation, your garden will thrive throughout the growing season.",
    date: "March 15, 2024",
    category: "Seasonal Care",
    image: suburbanImage,
  },
  {
    id: 2,
    title: "Native Plants for Pacific Northwest Gardens",
    excerpt: "Discover the beauty and benefits of incorporating native plants into your landscape design.",
    fullContent: "Native plants are perfectly adapted to our local climate and soil conditions, making them an excellent choice for sustainable gardening. They require less water, resist local pests naturally, and provide essential habitat for native wildlife. Popular Pacific Northwest natives include salal, Oregon grape, sword ferns, and red-flowering currant. These plants create a sense of place and connect your garden to the natural landscape. They also reduce maintenance needs and support local ecosystems. Consider incorporating a mix of native trees, shrubs, and perennials for a beautiful, low-maintenance garden that celebrates our regional character.",
    date: "March 10, 2024",
    category: "Plant Selection",
    image: suburbanImage,
  },
  {
    id: 3,
    title: "Water-Wise Gardening: Tips for Conservation",
    excerpt: "Learn how to create a beautiful garden while reducing water consumption and costs.",
    fullContent: "Water conservation in the garden doesn't mean sacrificing beauty. Start by grouping plants with similar water needs together, a practice called hydrozoning. Choose drought-tolerant plants that are well-suited to your climate. Mulch generously around plants to retain soil moisture and reduce evaporation. Consider installing a drip irrigation system that delivers water directly to plant roots, minimizing waste. Water deeply but less frequently to encourage deep root growth. Collect rainwater in barrels for supplemental irrigation. Time your watering for early morning when evaporation is minimal. With these strategies, you can create a stunning garden that uses water efficiently and reduces your environmental footprint.",
    date: "March 5, 2024",
    category: "Sustainability",
    image: suburbanImage,
  },
  {
    id: 4,
    title: "Creating Year-Round Garden Interest",
    excerpt: "Design strategies for maintaining visual appeal throughout all four seasons.",
    fullContent: "A well-designed garden offers beauty and interest in every season. Start with a strong framework of evergreen trees and shrubs that provide structure year-round. Add plants with interesting bark, such as paperbark maple or river birch, for winter appeal. Include plants with colorful berries that persist into winter, like winterberry or cotoneaster. Plan for spring bulbs, summer perennials, and fall foliage color. Don't forget about ornamental grasses that add texture and movement, even in winter. Consider plants with interesting seed heads that provide visual interest after flowers fade. By carefully selecting plants for each season, you can create a garden that's always engaging, no matter the time of year.",
    date: "February 28, 2024",
    category: "Design",
    image: suburbanImage,
  },
  {
    id: 5,
    title: "Organic Pest Management Strategies",
    excerpt: "Effective, eco-friendly approaches to keeping your garden healthy without harsh chemicals.",
    fullContent: "Organic pest management focuses on prevention and natural solutions. Start by maintaining healthy soil, as strong plants are naturally more resistant to pests. Encourage beneficial insects like ladybugs, lacewings, and parasitic wasps by planting diverse flowers and avoiding broad-spectrum pesticides. Use physical barriers like row covers to protect vulnerable plants. Hand-pick larger pests like slugs and caterpillars. Create habitat for pest predators like birds and beneficial insects. Use organic sprays sparingly, such as neem oil or insecticidal soap, and only when necessary. Practice crop rotation to disrupt pest life cycles. By working with nature rather than against it, you can maintain a healthy, productive garden without harmful chemicals.",
    date: "February 20, 2024",
    category: "Garden Care",
    image: suburbanImage,
  },
  {
    id: 6,
    title: "Small Space Garden Solutions",
    excerpt: "Maximize your garden's potential even in limited urban spaces.",
    fullContent: "Small spaces offer unique opportunities for creative gardening. Vertical gardening maximizes growing space with trellises, wall planters, and hanging baskets. Choose compact or dwarf varieties of your favorite plants. Use containers of various sizes to create layers and depth. Consider multi-functional plants that provide both beauty and food. Raised beds can improve drainage and make gardening more accessible. Use mirrors strategically to create the illusion of more space. Select plants with interesting forms and textures to create visual interest in a small area. Don't forget about herbs and vegetables that can be grown in small spaces. With thoughtful design, even the smallest space can become a thriving, beautiful garden.",
    date: "February 15, 2024",
    category: "Design",
    image: suburbanImage,
  },
];

// Export blogPosts for use in BlogDetail
export { blogPosts };

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());
  const navigate = useNavigate();
  
  // Threshold for determining if content is "long" (characters)
  const LONG_CONTENT_THRESHOLD = 300;

  const toggleExpanded = (postId: number) => {
    setExpandedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleReadMore = (post: typeof blogPosts[0], e: React.MouseEvent) => {
    e.preventDefault();
    const isLongContent = post.fullContent.length > LONG_CONTENT_THRESHOLD;
    
    if (isLongContent) {
      // Navigate to detail page for long content
      navigate(`/blog/${post.id}`);
    } else {
      // Expand card for short content
      toggleExpanded(post.id);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Garden Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tips, seasonal guides, and inspiration for creating and maintaining beautiful gardens
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const isExpanded = expandedPosts.has(post.id);
              const isLongContent = post.fullContent.length > LONG_CONTENT_THRESHOLD;
              
              return (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-muted-foreground mb-4">
                      <p>{post.excerpt}</p>
                      {isExpanded && !isLongContent && (
                        <p className="mt-3 pt-3 border-t border-border">{post.fullContent}</p>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleReadMore(post, e)}
                      className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                    >
                      {isExpanded && !isLongContent ? (
                        <>
                          Read Less
                          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                        </>
                      ) : (
                        <>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;