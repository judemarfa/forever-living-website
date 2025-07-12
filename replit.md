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