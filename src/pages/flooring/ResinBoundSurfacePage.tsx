
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Sun, Droplet, Layers, Paintbrush } from 'lucide-react';

const inProgressProjects = [
  "/lovable-uploads/49dc218a-718d-4e39-82d9-0f07641515c0.png",
  "/lovable-uploads/38e9d705-cef5-48dc-b152-a95eb6be2e5f.png",
  "/lovable-uploads/b1ac2bdf-2fe4-4725-a8fa-758fe89f943b.png",
  "/lovable-uploads/842364ee-16c7-48c3-ab91-96d46f801324.png",
  "/lovable-uploads/47724a80-587c-4269-b77d-7fbd0ef02fe7.png",
  "/lovable-uploads/049c4502-bba1-4d59-ad87-df6167ff50eb.png"
];

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
];

// NEW: Finished projects with images & titles
const finishedProjects = [
  {
    image: "/lovable-uploads/d518970f-b692-4147-8b1d-3806e336a47c.png",
    title: "Black & White Striped Driveway"
  },
  {
    image: "/lovable-uploads/e0fc2780-2058-49b0-8033-45bcaffb0289.png",
    title: "Pool Lounge with Seamless Resin Flooring"
  },
  {
    image: "/lovable-uploads/2c4e50a1-d541-4e5f-acb0-dd0127c48877.png",
    title: "Modern Villa Entrance with Grey Resin Bound"
  },
  {
    image: "/lovable-uploads/ba27fd41-1cc2-465c-88a9-35e7b90ac2da.png",
    title: "Natural Stone Pool Retreat"
  },
  {
    image: "/lovable-uploads/063e919a-fdef-4e15-800d-8c1fa98a717c.png",
    title: "Red Carport Resin Driveway"
  },
  {
    image: "/lovable-uploads/0cb4482e-d607-4344-9444-37573530f64c.png",
    title: "Elegant Home with Cream Resin Bound Entrance"
  }
];

// UPDATED featured application images and titles
const resinBoundApplications = [
  {
    title: "Palm-Lined Walkway – Atlantis, The Palm",
    description: "A sunlit, seamless resin bound pathway winding through lush, palm-filled gardens in front of Atlantis, The Palm—showcasing luxury and natural integration.",
    image: "/lovable-uploads/7ac94f5a-29ed-4f80-af60-54801cdb39ef.png"
  },
  {
    title: "Luxury Villa Entrance – Emirates Hills",
    description: "A sophisticated resin bound driveway at the entrance of a lavish villa, exemplifying stately architecture and refined outdoor surfacing.",
    image: "/lovable-uploads/bf866bdc-2dfb-4dea-bb8a-11670bf9d96a.png"
  },
  {
    title: "Serpentine Garden Path",
    description: "A beautiful, curved resin bound path blending into a manicured garden—ideal for high-end residential landscapes and tranquil retreats.",
    image: "/lovable-uploads/0d1d7ce7-d9f6-499b-a647-27daac08e3fe.png"
  }
];

const ResinBoundSurfacePage = () => {
  useEffect(() => {
    document.title = "Resin Bound Surface | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Resin Bound Surface"
      heroTitle="Seamless Resin Bound Surfaces"
      heroDescription="Smooth, seamless surfaces with exceptional depth and clarity, perfect for creating continuous indoor/outdoor transitions in luxury properties."
      heroImage="/lovable-uploads/0ffb8111-8f10-40fe-b858-41b1c937f504.png"
      benefits={[
        {
          title: "UV Resistance",
          description: "Specially formulated with UV inhibitors to maintain color stability and clarity despite Dubai's intense sun exposure.",
          icon: <Sun className="h-8 w-8" />
        },
        {
          title: "Seamless Transitions",
          description: "Create continuous flowing surfaces from indoor to outdoor spaces without visual interruptions.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Custom Color Options",
          description: "Extensive color palette with custom blending available to perfectly complement your architectural vision.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Anti-Slip Formulations",
          description: "Various texture options available to provide appropriate slip resistance for specific applications, particularly around pools.",
          icon: <Droplet className="h-8 w-8" />
        }
      ]}
      // UPDATED applications to new set
      applications={resinBoundApplications}
      techSpecs={[
        { label: "Thickness Options", value: "4mm standard application, up to 10mm for specialized applications" },
        { label: "Substrate Preparation", value: "Sound, dry base with appropriate primer system" },
        { label: "UV Protection Rating", value: "High - specialized UV inhibitor system for Dubai climate" },
        { label: "Cure Time", value: "24-48 hours for foot traffic, 7 days for full chemical cure" },
        { label: "Water Resistance", value: "100% waterproof when properly installed" },
        { label: "Temperature Stability", value: "-30°C to 60°C without degradation" },
        { label: "System Components", value: "Primer, body coat, aggregate blend, topcoat sealer" },
        { label: "Slip Resistance", value: "R9-R13 available based on application requirements" }
      ]}
      maintenance={[
        {
          title: "Desert Dust Protocol",
          description: "In Dubai's environment, regular cleaning with a soft broom or leaf blower helps prevent fine sand particles from abrading the surface over time."
        },
        {
          title: "Pressure Washing",
          description: "Periodic gentle pressure washing (max 2000 PSI) with appropriate distance from surface helps maintain appearance in exterior applications."
        },
        {
          title: "Stain Management",
          description: "While highly stain resistant, promptly clean any chemical spills, especially pool chemicals or solvents, to prevent potential surface damage."
        },
        {
          title: "Sealer Maintenance",
          description: "Depending on traffic and sun exposure, a maintenance coat may be recommended every 3-5 years to maintain optimal appearance and protection."
        }
      ]}
      finishedProjects={finishedProjects}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default ResinBoundSurfacePage;
