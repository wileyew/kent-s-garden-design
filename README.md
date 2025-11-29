# Kent's Garden LLC Website

A modern, mobile-responsive website for Kent's Garden LLC - a boutique landscaping company serving the Portland metro area.

## Features

- **Modern, Clean Design**: Sleek interface with earth tones and professional typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Easy Content Management**: All content stored in structured JSON for easy updates
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading structure
- **Multiple Pages**: Home, Services, About, Blog, Gallery, Licensing, Contact
- **Professional Navigation**: Sticky header with dropdown menus and mobile-friendly design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kents-garden
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Content Management

All website content is managed through the `src/data/siteContent.ts` file. This makes it easy for non-technical admins to update content without touching the code.

### How to Update Content

1. Open `src/data/siteContent.ts`
2. Find the section you want to update (company info, services, testimonials, etc.)
3. Edit the text between quotes
4. Save the file - changes will appear immediately in development mode

### Content Structure

The file is organized into sections:
- **Company Information**: Name, tagline, contact details
- **Home Page**: Hero section, features, testimonials
- **Services**: Full list of services with descriptions
- **About**: Company story, mission, values
- **Service Areas**: Cities and regions served

### Adding Images

Images are stored in `src/assets/` and imported in the pages. To add new images:

1. Place your image in `src/assets/`
2. Import it in the relevant page component:
```typescript
import myImage from "@/assets/my-image.jpg";
```
3. Use it in the JSX:
```jsx
<img src={myImage} alt="Description" />
```

### Adding New Services

1. Open `src/data/siteContent.ts`
2. Add a new service object to the `services` array:
```typescript
{
  id: "my-new-service",
  title: "My New Service",
  shortDescription: "Brief description here",
  fullDescription: "Longer description here",
  features: [
    "Feature 1",
    "Feature 2",
  ],
  image: "/images/service-image.jpg",
}
```

### Adding Blog Posts

Currently, blog posts are hardcoded in `src/pages/Blog.tsx`. For a production site, you may want to integrate a CMS like:
- **Contentful** (https://www.contentful.com)
- **Sanity** (https://www.sanity.io)
- **Strapi** (https://strapi.io)

## Deployment

### Deploying to Lovable

1. Click the "Publish" button in the top right of the Lovable editor
2. Follow the prompts to deploy your site

### Deploying to Other Platforms

**Netlify:**
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

**Vercel:**
```bash
npm run build
vercel --prod
```

**GitHub Pages:**
```bash
npm run build
# Configure GitHub Pages to serve from the 'dist' directory
```

## Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # Reusable React components
│   ├── ui/          # Shadcn UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── data/            # Content configuration
│   └── siteContent.ts
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Gallery.tsx
│   ├── Careers.tsx
│   └── Contact.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── index.css        # Global styles and design system
```

## Design System

The site uses a custom design system defined in `src/index.css` with:
- **Primary Color**: Deep forest green
- **Accent Color**: Fresh garden green  
- **Secondary**: Warm earth tones
- **Typography**: Inter (sans-serif), Playfair Display (serif headings)

All colors use HSL values and CSS custom properties for easy theming.

## Support

For questions or issues with the website:
- Email: info@kentsgarden.com
- Phone: (555) 123-4567

## License

Copyright © 2024 Kent's Garden LLC. All rights reserved.