import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "./Blog";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">View All Blog Posts</Link>
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
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        
        <div className="relative z-10 container px-4 text-center">
          <div className="mb-4">
            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{post.title}</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span className="text-lg">{post.date}</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
                {post.fullContent}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

