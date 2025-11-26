import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import suburbanImage from "@/assets/portfolio-suburban.jpg";

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Spring Garden Preparation: A Complete Guide",
    excerpt: "Get your garden ready for the growing season with our comprehensive spring preparation checklist.",
    date: "March 15, 2024",
    category: "Seasonal Care",
    image: suburbanImage,
  },
  {
    id: 2,
    title: "Native Plants for Pacific Northwest Gardens",
    excerpt: "Discover the beauty and benefits of incorporating native plants into your landscape design.",
    date: "March 10, 2024",
    category: "Plant Selection",
    image: suburbanImage,
  },
  {
    id: 3,
    title: "Water-Wise Gardening: Tips for Conservation",
    excerpt: "Learn how to create a beautiful garden while reducing water consumption and costs.",
    date: "March 5, 2024",
    category: "Sustainability",
    image: suburbanImage,
  },
  {
    id: 4,
    title: "Creating Year-Round Garden Interest",
    excerpt: "Design strategies for maintaining visual appeal throughout all four seasons.",
    date: "February 28, 2024",
    category: "Design",
    image: suburbanImage,
  },
  {
    id: 5,
    title: "Organic Pest Management Strategies",
    excerpt: "Effective, eco-friendly approaches to keeping your garden healthy without harsh chemicals.",
    date: "February 20, 2024",
    category: "Garden Care",
    image: suburbanImage,
  },
  {
    id: 6,
    title: "Small Space Garden Solutions",
    excerpt: "Maximize your garden's potential even in limited urban spaces.",
    date: "February 15, 2024",
    category: "Design",
    image: suburbanImage,
  },
];

const Blog = () => {
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
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
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
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;