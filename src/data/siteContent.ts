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
    tagline: "Competitive rate, high quality work",
    phone: "(703)-677-2808",
    email: "Lancecadle4@gmail.com",
    address: "",
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
      title: "Transform your outdoor living space",
      subtitle: "Thoughtfully designed Landscaping and Hardscaping in the Northern Virginia area.",
      description: "Ambitiously constructed and meticulously maintained. Competitive rate, high quality work.",
      ctaText: "Request Free Consultation",
      ctaLink: "/contact",
    },
    
    features: [
      {
        title: "Expert design",
        description: "Custom garden designs tailored to your space, style, and lifestyle.",
        icon: "Palette",
      },
      {
        title: "Year round care",
        description: "Comprehensive maintenance to keep your garden beautiful every season.",
        icon: "Calendar",
      },
      {
        title: "Integrity and honest work",
        description: "Professional craftsmanship with honest processes and installation. Licensed and insured.",
        icon: "Leaf",
      },
      {
        title: "Local and family owned",
        description: "Proudly serving the Northern Virginia area with personalized service and attention to detail.",
        icon: "Heart",
      },
    ],

    testimonials: [
      {
        text: "Kent's Garden transformed our backyard into an absolute paradise. The attention to detail is incredible!",
        author: "Sarah Johnson",
        location: "Northern Virginia area",
        rating: 5,
      },
      {
        text: "Professional, reliable, and truly passionate about gardens. Our outdoor space has never looked better.",
        author: "Michael Chen",
        location: "Northern Virginia area",
        rating: 5,
      },
      {
        text: "From design to installation to ongoing care, Kent's Garden exceeded all our expectations.",
        author: "Emily Rodriguez",
        location: "Northern Virginia area",
        rating: 5,
      },
    ],

    whyChooseUs: [
      {
        title: "Quality craftsmanship",
        description: "With over 30+ years of experience between the members of our team. We take pride in every detail of the individual projects process. From design to installation to ongoing care, you will be satisfied.",
      },
      {
        title: "Personal service",
        description: "Every client receives customized solutions and dedicated attention. If you (the client) aren't happy, then we aren't happy. Communication is one of our founding principles",
      },
      {
        title: "Sustainability",
        description: "We prioritize native plants, professional services and durable, modern products. We install project's that are built to last the test of time. Schedule an estimate and see for yourself!",
      },
      {
        title: "Community",
        description: "We're committed to supporting local growers, stone vendors and clients. We prioritize helping our community every single chance we get. We even recommend small local contractors like ourselves for other construction projects that aren't in the landscaping/hardscaping realm.",
      },
    ],

    featuredProducts: [
      {
        title: "Modern landscaping and hardscaping visions",
        description: "Contemporary design meets natural beauty",
        image: "/images/featured-1.jpg",
      },
      {
        title: "Commercial maintenance",
        description: "Efficiently maintaining commercial properties to the utmost degree.",
        image: "/images/featured-2.jpg",
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
      id: "hardscaping",
      title: "Hardscaping Design and Installation",
      shortDescription: "Our team can design, walk through and install any hardscaping need or want you may have.",
      fullDescription: "Our team can design, walk through and install any hardscaping need or want you may have. From smart leveling, consultation, design, to pricing. We design and install aesthetically pleasing and lasting hardscaping projects.",
      features: [
        "Free professional consultation",
        "Potential designs using our softwares",
        "Smart level grading if it's necessary",
        "Code certified and zoning ordination",
        "Modern products with potential warranty that will last for years to come",
        "Patios, walkways, retaining walls, decks, front porches, pergolas, gazebos, etc.",
      ],
      image: "/images/service-hardscaping.jpg",
    },
    {
      id: "lighting",
      title: "Outdoor Lighting",
      shortDescription: "Illuminate your garden's beauty and extend your outdoor living hours.",
      fullDescription: "Thoughtfully designed lighting transforms you garden into an enchanting evening retreat while improving safety and security. Kent's Garden has a certified, journeyman electrician on staff to carefully and professionally install lighting. Whether it's low voltage with a basic outlet or high voltage with a heavy duty transformer. We can take care of ALL your landscaping lighting.",
      features: [
        "Landscape lighting design",
        "Path and safety lighting",
        "Accent and feature lighting",
        "Low voltage and high voltage options",
        "Certified journeyman electrician on staff",
        "Professional installation",
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

  // SERVICE AREAS
  serviceAreas: [
    "Manassas",
    "Manassas Park",
    "Bristow",
    "Haymarket",
    "Warrenton",
    "Nokesville",
    "Woodbridge",
    "Fairfax",
    "Centreville",
    "Arlington",
    "Alexandria",
    "Springfield",
    "Annandale",
    "Leesburg",
    "Ashburn",
    "Reston",
    "Herndon",
    "Vienna",
    "Middleburg",
    "Purcellville",
    "The Plains",
    "Culpeper",
    "New Baltimore",
  ],

  // ABOUT PAGE
  about: {
    story: "Kent's Garden LLC was founded in March of 2022 by Lance Cadle. The company name comes from Lance's little brother Kent who tragically passed away on April 16th, 2020. At the time of his passing, Kent was working as a laborer/crew lead assistant on the same crew as his elder brother Lance. Together, for several years, they were working and learning the landscaping/hardscaping industry from residential to commercial application and services. Kent had an eye for installation, especially with blooming flowering patterns and how they beautifully changed throughout the seasons, all the way to paver and retaining wall designs. He really enjoyed beautifying people's outdoor living spaces. Kent's Garden was started as a family owned LLC to help keep the memory of Kent alive. As of November 2025, Kent's Garden LLC now employees 4 expert landscape project managers and operators with a combined experience of over 30+ years. If you live in the Northern Virginia area and you want top notch landscaping/hardscaping designs/installations at a competitive rate. Look no further, schedule a consultation or reach out to Lancecadle4@gmail.com or call 703-677-2808.",
    mission: "",
    values: [
      {
        title: "Integrity",
        description: "Our word and work is all that we have. We WILL NOT be happy until you (the client) are happy.",
      },
      {
        title: "Quality craftsmanship",
        description: "Every person in our company has at least 7 years of experience in the field. We take pride in every detail, from to design to installation to ongoing care.",
      },
      {
        title: "Honesty",
        description: "Kent's Garden does every single thing the right way. Whether it's following code, pricing projects fairly or pulling permits, you are working with absolute professionals who will help you achieve whatever goal or dream landscaping vision that you may have.",
      },
      {
        title: "Community",
        description: "All of our vendors who supply our material are locally owned small businesses. We have helped many clients going through trying times with a variety of projects at a discounted rate. We strive to make the world a better place, day by day.",
      },
      {
        title: "Sustainability",
        description: "We install landscapes/hardscapes that are built to last. With new age products, our experienced team knows exactly what to install to sustain beauty for years to come. We also offer warranty for up to a year on plantings unless otherwise specified by the client.",
      },
      {
        title: "Military friendly",
        description: "Anybody who lives in the Northern Virginia area knows that we are blessed to have many military members as our neighbors. Kent's Garden works with veterans and active military personnel frequently. Depending on the size of the project, a discounted percentage for all military will be applied to the overall cost of the job.",
      },
    ],
  },
};