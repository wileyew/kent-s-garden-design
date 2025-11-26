import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/data/siteContent";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-primary">
              {siteConfig.company.name}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              {siteConfig.company.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Services Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View all our garden services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {siteConfig.services.slice(0, 5).map((service) => (
                      <li key={service.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/services/${service.id}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.shortDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Portfolio Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/portfolio"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">All Projects</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete portfolio
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {siteConfig.portfolioCategories.slice(1).map((category) => (
                      <li key={category}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/portfolio?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Our Story</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about#service-areas"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Service Areas</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about#testimonials"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Testimonials</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular Links */}
              <NavigationMenuItem>
                <Link to="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Gallery
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/careers" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Careers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="bg-primary hover:bg-primary-hover">
            <Link to="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <MobileMenuSection title="Services" items={[
              { label: "All Services", to: "/services" },
              ...siteConfig.services.map(s => ({ label: s.title, to: `/services/${s.id}` }))
            ]} />
            <MobileMenuSection title="Portfolio" items={[
              { label: "All Projects", to: "/portfolio" },
              ...siteConfig.portfolioCategories.slice(1).map(c => ({ 
                label: c, 
                to: `/portfolio?category=${c.toLowerCase().replace(/\s+/g, '-')}` 
              }))
            ]} />
            <MobileMenuSection title="About" items={[
              { label: "Our Story", to: "/about" },
              { label: "Service Areas", to: "/about#service-areas" },
              { label: "Testimonials", to: "/about#testimonials" },
            ]} />
            <Link to="/blog" className="block py-2 text-base font-medium">Blog</Link>
            <Link to="/gallery" className="block py-2 text-base font-medium">Gallery</Link>
            <Link to="/careers" className="block py-2 text-base font-medium">Careers</Link>
            <Button asChild className="w-full bg-primary hover:bg-primary-hover">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const MobileMenuSection = ({ title, items }: { title: string; items: { label: string; to: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-base font-medium"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 pt-2 space-y-2">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;