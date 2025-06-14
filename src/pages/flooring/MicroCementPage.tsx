
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Droplet, Star, Home, Layers } from 'lucide-react';

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
];

// Finished project images with descriptive titles
const finishedProjects = [
  {
    image: "/lovable-uploads/28b12075-6eab-42c4-b635-55e7a3915811.png",
    title: "Luxury Bedroom Suite"
  },
  {
    image: "/lovable-uploads/aeb30724-ad30-49a3-9a59-41f24e5a9e97.png",
    title: "Modern Salon Interior"
  },
  {
    image: "/lovable-uploads/9cd90f96-2594-4fec-bbcd-27bec98fd6ec.png",
    title: "Designer Master Bedroom"
  },
  {
    image: "/lovable-uploads/0c88fedc-62e4-4e7d-b800-8cb9d34f3fe3.png",
    title: "Boutique Retail Store"
  },
  {
    image: "/lovable-uploads/9c370e18-45c1-4b82-ab00-5f1050d31f6d.png",
    title: "Minimalist Staircase & Living Space"
  },
  {
    image: "/lovable-uploads/ee44578a-fe20-4a3a-b08f-e58cd408e658.png",
    title: "Elegant Office Lounge"
  }
];

const MicroCementPage = () => {
  useEffect(() => {
    document.title = "Micro-Cement & Micro-Topping | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Micro-Cement & Micro-Topping"
      heroTitle="Seamless Contemporary Flooring"
      heroDescription="Modern, minimalist surfaces with subtle texture that create uninterrupted expanses of sophisticated flooring perfect for contemporary spaces."
      heroImage="/lovable-uploads/8dbe1205-3074-4563-b29e-0a2356d97437.png"
      heroImageClassName="bg-bottom"
      benefits={[
        {
          title: "Seamless Installation",
          description: "Applied directly over existing floors without demolition, creating perfect continuity without joints or grout lines.",
          icon: <Droplet className="h-8 w-8" />
        },
        {
          title: "Extreme Durability",
          description: "Formulated to withstand heavy foot traffic while maintaining its aesthetic appeal for years of beautiful performance.",
          icon: <Star className="h-8 w-8" />
        },
        {
          title: "Minimal Thickness",
          description: "Ultra-thin application (2-3mm) means no height adjustments to doors or existing transitions are needed.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Custom Colors",
          description: "Available in unlimited custom color options to perfectly match your design vision and complement interior elements.",
          icon: <Home className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Luxury Villas",
          description: "Create elegant, continuous flooring throughout living spaces that provides a sophisticated backdrop for high-end furnishings and architectural details.",
          image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Penthouse Apartments",
          description: "Deliver contemporary sophistication with floors that create visual continuity across open-concept living spaces, enhancing the sense of spaciousness.",
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA"
        },
        {
          title: "Boutique Retail",
          description: "Provide sophisticated, durable flooring that creates the perfect backdrop for merchandise display while withstanding the demands of commercial traffic.",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Thickness", value: "2-3mm standard application" },
        { label: "Substrate Requirements", value: "Sound, stable subfloor with appropriate primer" },
        { label: "Dubai Climate Adaptations", value: "Specialized formulation for high temperature stability" },
        { label: "Curing Time", value: "24-48 hours for foot traffic, 7 days for full cure" },
        { label: "Compressive Strength", value: ">50 N/mm²" },
        { label: "Finish Options", value: "Matte, satin, or gloss sealers available" },
        { label: "VOC Content", value: "Low VOC formulation (<50g/L)" },
        { label: "Slip Resistance", value: "R10-R12 available (application dependent)" }
      ]}
      maintenance={[
        {
          title: "Daily Cleaning",
          description: "Clean with pH-neutral cleaners specifically formulated for microcement surfaces. Avoid acidic or ammonia-based cleaners that can damage the protective sealer over time."
        },
        {
          title: "Sealer Maintenance",
          description: "Depending on traffic and usage, reapplication of sealer may be recommended every 3-5 years to maintain optimal protection and appearance."
        },
        {
          title: "Stain Protection",
          description: "While properly sealed microcement is highly stain resistant, promptly clean spills, especially from acidic substances like lemon juice or vinegar, to ensure long-term beauty."
        },
        {
          title: "Repair Options",
          description: "In the rare event of damage, localized repairs can be performed by our skilled technicians without requiring replacement of entire floor sections."
        }
      ]}
      inProgressTitles={inProgressTitles}
      finishedProjects={finishedProjects}
    />
  );
};

export default MicroCementPage;
