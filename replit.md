# Forever Living Products Landing Page

## Overview

This is a full-stack web application built as a landing page for a Forever Living Products independent manager. The application features a modern React frontend with a Node.js/Express backend, designed to showcase health and wellness products and capture lead information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reload with tsx

## Key Components

### Frontend Components
- **Landing Page**: Complete marketing page with hero section, product showcase, testimonials, and contact form
- **UI Library**: Comprehensive set of reusable components (buttons, cards, forms, modals, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system

### Backend Components
- **API Routes**: RESTful API structure (currently minimal, ready for expansion)
- **Database Layer**: Drizzle ORM with PostgreSQL schema
- **Storage Interface**: Abstracted storage layer supporting both memory and database storage
- **Development Server**: Vite integration for seamless full-stack development

## Data Flow

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Extensible Design**: Schema can be easily extended for leads, products, orders, etc.

### API Structure
- **Base Path**: All API routes prefixed with `/api`
- **Current Routes**: Minimal setup, ready for lead capture and product management endpoints
- **Storage Pattern**: Interface-based storage allowing easy switching between implementations

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database toolkit
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting (implied by setup)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles Node.js application to `dist/index.js`
- **Database**: Drizzle migrations stored in `./migrations` directory

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: Automatic detection with NODE_ENV
- **Production Ready**: Single command deployment with `npm start`

### Key Features
- **Full-stack TypeScript**: Type safety from database to UI
- **Hot Reload**: Development server with instant updates
- **Database Migrations**: Version-controlled schema changes
- **Responsive Design**: Mobile-first approach with professional styling
- **Lead Generation**: Contact form ready for business inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### Business Context
The application serves as a digital storefront for a Forever Living Products manager, featuring:
- Product showcase with health benefits
- Lead capture through contact forms
- Professional branding with natural/wellness color scheme
- Integration points for e-commerce functionality
- Social proof and testimonial sections

### Recent Updates (January 2025)
- Enhanced Best Seller buttons with advanced animations (glow, bounce, shimmer effects)
- Integrated QR codes for quick product access
- Added "Join Our Forever Family" business opportunity sections
- Updated promotional messaging to "15% discount on all orders"
- Configured specific product links (https://thealoeveraco.shop/p9UXGNcC)
- Added business opportunity links (https://thealoeveraco.shop/CDUSJPbt)
- Implemented responsive design with mobile-first approach
- Added call-to-action elements with urgency messaging
- Updated tagline with authentic Hippocrates quote: "A wise man should consider that health is the greatest of human blessings"
- Replaced About section photo with professional presentation image from Forever Living Products event
- Created custom SVG image with authentic Hippocrates quote to avoid copyright issues
- Created custom "1stHealth" logo with colorful design and red/yellow outlines to replace FOREVER branding
- Added recognition badge overlay to presentation image showcasing manager credentials
- Updated navigation by removing Home tab and positioning About tab as first navigation item
- Restored Home tab as first navigation item with smooth scroll to top functionality
- Created carousel gallery with health education images above presentation photo
- Fixed carousel transition issues and layering problems for clean image sliding
- Streamlined page content by removing Featured Products, Product Gallery, testimonials, and footer sections
- Simplified contact section to display only email address (judemarfa@gmail.com)
- Centered "Start Your Journey Today!" button and updated link to https://thealoeveraco.shop/51mqp
- Added YouTube channel image below the button linking to https://www.youtube.com/channel/UCY1yrwk__0cJN6E5qHGGxdA
- Added interactive play button overlay and descriptive text to indicate clickable YouTube channel image
- Fixed YouTube channel image click functionality by moving click handler to container div
- Removed "Ready to Transform Your Health?" contact section for cleaner page ending
- Added footer section with email address (judemarfa@gmail.com) for Contact tab access
- Fixed Contact tab navigation by adding id="contact" to footer section
- Final footer design with non-clickable email address (judemarfa@gmail.com) for easy copy/paste functionality
- Removed 1stHealth logo from navigation bar for cleaner header appearance
- Added original health regeneration timeline image as logo with bold golden yellow outline
- Set health regeneration timeline logo as website favicon for browser tab display
- Focused page content on business opportunity with clean ending after business opportunity section
- Updated logo styling from square border to perfect hexagonal golden yellow outline using CSS clip-path