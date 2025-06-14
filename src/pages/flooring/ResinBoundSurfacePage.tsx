import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Sun, Droplet, Layers, Paintbrush } from 'lucide-react';

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
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
      heroImage="/public/textures/concrete-texture.jpg"
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
      applications={[
        {
          title: "Pool Decks",
          description: "Create beautiful, safe surfaces around swimming pools that remain cool underfoot and provide appropriate slip resistance for wet areas.",
          image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Outdoor Terraces",
          description: "Transform exterior living spaces with elegant, durable surfaces that stand up to Dubai's climate while providing visual continuity with interior spaces.",
          image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Bathrooms",
          description: "Create sophisticated, seamless surfaces that are inherently waterproof and can flow continuously from floors up walls for truly distinctive spaces.",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
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
      inProgressTitles={inProgressTitles}
    />
  );
};

export default ResinBoundSurfacePage;
