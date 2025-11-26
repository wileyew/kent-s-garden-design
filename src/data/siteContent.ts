/**
 * SITE CONTENT CONFIGURATION
 * 
 * This file contains all editable content for the Kent's Garden LLC website.
 * Non-technical admins can edit this file to update text, images, and links.
 * 
 * INSTRUCTIONS:
 * - Text: Simply change the text between quotes
 * - Images: Replace image paths with your own (use /images/your-file.jpg)
 * - Arrays: Add or remove items in brackets []
 * - Keep all punctuation (commas, quotes, brackets) intact
 */

export const siteConfig = {
  // COMPANY INFORMATION
  company: {
    name: "Kent's Garden LLC",
    tagline: "Thoughtfully Designed Gardens. Meticulously Maintained.",
    phone: "(555) 123-4567",
    email: "info@kentsgarden.com",
    address: "123 Green Street, Portland, OR 97201",
    hours: "Monday - Saturday: 8AM - 6PM",
  },

  // SOCIAL MEDIA LINKS
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },

  // HOME PAGE CONTENT
  home: {
    hero: {
      title: "Transform Your Outdoor Space",
      subtitle: "Thoughtfully Designed Gardens. Meticulously Maintained.",
      description: "Expert garden design and maintenance services for discerning homeowners in the Portland metro area.",
      ctaText: "Request Free Consultation",
      ctaLink: "/contact",
    },
    
    features: [
      {
        title: "Expert Design",
        description: "Custom garden designs tailored to your space, style, and lifestyle.",
        icon: "Palette",
      },
      {
        title: "Year-Round Care",
        description: "Comprehensive maintenance to keep your garden beautiful every season.",
        icon: "Calendar",
      },
      {
        title: "Eco-Friendly",
        description: "Sustainable practices that enhance beauty while protecting the environment.",
        icon: "Leaf",
      },
      {
        title: "Local & Family-Owned",
        description: "Proudly serving Portland with personalized service and attention to detail.",
        icon: "Heart",
      },
    ],

    testimonials: [
      {
        text: "Kent's Garden transformed our backyard into an absolute paradise. The attention to detail is incredible!",
        author: "Sarah Johnson",
        location: "Pearl District, Portland",
        rating: 5,
      },
      {
        text: "Professional, reliable, and truly passionate about gardens. Our outdoor space has never looked better.",
        author: "Michael Chen",
        location: "Lake Oswego",
        rating: 5,
      },
      {
        text: "From design to installation to ongoing care, Kent's Garden exceeded all our expectations.",
        author: "Emily Rodriguez",
        location: "Beaverton",
        rating: 5,
      },
    ],
  },

  // SERVICES
  services: [
    {
      id: "design-installation",
      title: "Garden Design & Installation",
      shortDescription: "Custom garden designs that reflect your vision and enhance your property's natural beauty.",
      fullDescription: "Our design process begins with understanding your vision, lifestyle, and property's unique characteristics. We create comprehensive plans that balance aesthetics, functionality, and sustainability.",
      features: [
        "Initial site assessment and consultation",
        "Custom design plans with 3D renderings",
        "Plant selection and sourcing",
        "Professional installation",
        "Hardscape integration (paths, patios, walls)",
        "Lighting design and installation",
      ],
      image: "/images/service-design.jpg",
    },
    {
      id: "maintenance",
      title: "Garden Maintenance",
      shortDescription: "Keep your garden pristine with our comprehensive maintenance programs.",
      fullDescription: "Regular maintenance is essential to preserving your garden's beauty. We offer flexible programs tailored to your garden's needs and your schedule.",
      features: [
        "Weekly or bi-weekly maintenance visits",
        "Pruning and deadheading",
        "Weeding and mulching",
        "Lawn care and edging",
        "Seasonal cleanups",
        "Pest and disease management",
      ],
      image: "/images/service-maintenance.jpg",
    },
    {
      id: "seasonal-planting",
      title: "Seasonal Planting & Enhancements",
      shortDescription: "Refresh your garden with seasonal color and texture throughout the year.",
      fullDescription: "Keep your garden vibrant and exciting with seasonal updates. We plan and install seasonal displays that complement your existing landscape.",
      features: [
        "Spring bulb displays",
        "Summer annual installations",
        "Fall color transitions",
        "Winter interest plantings",
        "Container garden design",
        "Seasonal pruning and shaping",
      ],
      image: "/images/service-seasonal.jpg",
    },
    {
      id: "irrigation",
      title: "Irrigation & Watering Solutions",
      shortDescription: "Smart watering systems that keep your garden healthy while conserving water.",
      fullDescription: "Proper irrigation is crucial for garden health. We design and install efficient systems that deliver water where it's needed while minimizing waste.",
      features: [
        "Drip irrigation systems",
        "Smart controller installation",
        "Rainwater harvesting",
        "System maintenance and repairs",
        "Seasonal adjustments",
        "Water conservation consultation",
      ],
      image: "/images/service-irrigation.jpg",
    },
    {
      id: "lighting",
      title: "Outdoor Lighting",
      shortDescription: "Illuminate your garden's beauty and extend your outdoor living hours.",
      fullDescription: "Thoughtfully designed lighting transforms your garden into an enchanting evening retreat while improving safety and security.",
      features: [
        "Landscape lighting design",
        "Path and safety lighting",
        "Accent and feature lighting",
        "LED and solar options",
        "Automated systems",
        "Seasonal adjustments",
      ],
      image: "/images/service-lighting.jpg",
    },
    {
      id: "snow-ice",
      title: "Snow & Ice Management",
      shortDescription: "Keep your property safe and accessible throughout winter months.",
      fullDescription: "Winter weather shouldn't limit your enjoyment of outdoor spaces. We provide reliable snow removal and ice management services.",
      features: [
        "Snow removal and plowing",
        "Ice treatment and prevention",
        "Path and driveway clearing",
        "Emergency services available",
        "Seasonal contracts",
        "Garden protection services",
      ],
      image: "/images/service-snow.jpg",
    },
  ],

  // PORTFOLIO CATEGORIES
  portfolioCategories: [
    "All Projects",
    "City Gardens",
    "Suburban Backyards",
    "Rooftop & Small Spaces",
    "Before & After",
  ],

  // SERVICE AREAS
  serviceAreas: [
    "Portland",
    "Beaverton",
    "Lake Oswego",
    "West Linn",
    "Tigard",
    "Hillsboro",
    "Oregon City",
    "Milwaukie",
  ],

  // ABOUT PAGE
  about: {
    story: "Founded by Kent Thompson in 2010, Kent's Garden LLC began with a simple mission: to create beautiful, sustainable gardens that bring joy to people's daily lives. What started as a one-person operation has grown into a trusted team of garden professionals, but our commitment to personalized service and exceptional quality remains unchanged.",
    mission: "We believe that every outdoor space has the potential to become a personal sanctuary. Our mission is to transform ordinary yards into extraordinary gardens that enhance property value, support local ecosystems, and provide spaces for relaxation and connection with nature.",
    values: [
      {
        title: "Quality Craftsmanship",
        description: "We take pride in every detail, from design to installation to ongoing care.",
      },
      {
        title: "Sustainability",
        description: "We prioritize native plants, water conservation, and eco-friendly practices.",
      },
      {
        title: "Personal Service",
        description: "Every client receives customized solutions and dedicated attention.",
      },
      {
        title: "Community",
        description: "We're committed to supporting local growers and giving back to our community.",
      },
    ],
  },
};