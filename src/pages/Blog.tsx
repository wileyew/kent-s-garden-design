import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import suburbanImage from "@/assets/portfolio-suburban.jpg";

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Spring garden preparation: a complete guide",
    excerpt: "Springtime is the ideal time to install, plant or maintain a beautiful landscaping. Kent's Garden offers expertise in plant knowledge for all seasons. With services from planting, mulching, weeding, trimming, etc. the list goes on. Design strategies for maintaining visual appeal throughout all four seasons. In the spring, grass starts to grow for the season. With commercial grade mowers, we are happy to add you onto the mowing schedule. Kent's Garden has worked with many residential and commercial clients over the years to maintain all aspects of the various properties landscaping. Schedule a consultation for the season that we are in and discover the varieties of plants that we can install into your garden!",
    date: "March 15, 2024",
    category: "Seasonal Care",
    image: suburbanImage,
  },
];

const hardscapingContent = `Message from Lance, the owner of Kent's Garden:

Kent's Garden specializes in any and all hardscaping projects. The state of Virginia requires certain codes/zoning needs to be met. As the owner, I have studied the Virginia construction and landscaping code vigorously. Over the span of 12 years that I've provided landscaping work for various companies… I have learned the codes and zoning ordinances like the back of my hand.

My team and I have installed beautiful patios, retaining walls, veneer, stacked stone, natural stone, walkways, brick/mortar, you name it, we have done it.

I have learned, throughout the years, a wealth of knowledge about pavers, concrete, brick and flagstone/natural fieldstone. The ways to install, reface or simply repair. My team and I can install all of the above, including stamped concrete, pavers both sealed and unsealed, brick varieties, flagstone varieties, etc.

If you are curious above pavers, I would be more than happy to discuss your wishes in person but in the meantime… I'd like to tell you a few things.

For pavers, there are 3 vendors that I consider top notch and absolutely beautiful. The 3 are Techo-Bloc, Unilock and Belgard. Now there are hundreds of stone vendors but if you want pavers, it's best to start browsing the catalogues of these 3 vendors. Schedule a consultation and I'll show you exactly what I mean!

Let's say you're curious about brick, look no further. My local brick vendor has one of the most knowledgeable men I have ever encountered when it comes to any type of stone or brick work on their staff. We can build structures using brick and mortar or we can install a patio/walkway with Garden Blend brick pavers, for example, in any type of pattern you wish!

My team and I have installed many different types of concrete. This includes broom finished and stamped. While stamp concrete has its cons, it also has a lot of pros. If you want it done the right way with ideal patterns/designs at a competitive rate, you've found the right company.

I have many, many clients who love the flagstone look. Flagstone requires a different installation process than say pavers do. Although, not much different, it still is a different process. Ultimately, flagstone can be just as beautiful as pavers or brick. I would love nothing more than to explain and show you in person what I mean!

While there are many different varieties of veneer, it's fairly simple to install. My team and I have installed both indoor and outdoor veneer, for many different purposes. There is actually a newer product out called Versetta stone that I encourage all of my clients to look into as well. All of the above are aesthetically pleasing and it's our pleasure installing them!

Feel free to reach out for a consult and we can schedule a time and place to discuss whatever you may need.`;

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Garden Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tips and inspiration for creating and maintaining beautiful gardens with or without hardscaping.
          </p>
        </div>
      </section>

      {/* Blog Posts with Tabs */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="hardscaping">Hardscaping Ideas and Thoughts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
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
            </TabsContent>
            
            <TabsContent value="hardscaping" className="mt-8">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-serif font-bold mb-6">Hardscaping Ideas and Thoughts</h2>
                  <div className="prose prose-lg max-w-none">
                    {hardscapingContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-lg leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Blog;