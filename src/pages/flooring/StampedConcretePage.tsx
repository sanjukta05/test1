
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Sun, Paintbrush, Layers, Home } from 'lucide-react';

const inProgressProjects = [
  "/lovable-uploads/46dee5bb-41b5-47b3-83c5-ec809c487dd9.png",
  "/lovable-uploads/65835dc2-dcc6-459d-bba3-6005ef83056b.png",
  "/lovable-uploads/100c83ec-d191-4ed6-b450-d3b4a2d10161.png",
  "/lovable-uploads/56d316f2-e4b4-4e78-8b70-7c7e9aa31c0a.png",
  "/lovable-uploads/61ac847b-8114-4815-a91e-b9fceb60a443.png",
  "/lovable-uploads/76ae1d28-e912-4cf0-9751-4816ac539db4.png"
];

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
];

// NEW: Finished projects for this page, with descriptive titles
const finishedProjects = [
  {
    image: "/lovable-uploads/2547cb1e-efa3-4182-970f-ac12c5596b40.png",
    title: "Modern Patio with Water Feature"
  },
  {
    image: "/lovable-uploads/f38310ef-7427-498c-a0f1-d7e82d05c86b.png",
    title: "Geometric Stamped Walkway Entry"
  },
  {
    image: "/lovable-uploads/83d7d54e-1a52-4178-bec5-022d88c3d7e4.png",
    title: "Evening Garden Stamped Concrete Path"
  },
  {
    image: "/lovable-uploads/e91ff95f-be66-4817-a4be-937fbc5c9757.png",
    title: "Curved Waterfall with Textured Concrete"
  },
  {
    image: "/lovable-uploads/d66f408f-d0fe-4031-9be6-8d0f7982a5e2.png",
    title: "Luxury Indoor Pool Surround"
  },
  {
    image: "/lovable-uploads/8fd96d8c-d881-4eb7-9a28-9a2adde0b6d0.png",
    title: "Poolside Oasis with Textured Concrete"
  }
];

const StampedConcretePage = () => {
  useEffect(() => {
    document.title = "Stamped Concrete | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Stamped Concrete"
      heroTitle="Textured Decorative Concrete"
      heroDescription="Create beautiful outdoor surfaces that replicate natural materials with superior durability and design versatility for Dubai's climate."
      heroImage="/lovable-uploads/f08631ed-d661-4cb8-9fcc-58887b94ee1d.png"
      benefits={[
        {
          title: "Natural Material Replication",
          description: "Convincingly replicates the appearance of natural stone, slate, brick, or wood at a fraction of the cost and installation complexity.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Extreme Durability",
          description: "Engineered to withstand Dubai's harsh outdoor conditions including intense sun exposure and occasional heavy rains.",
          icon: <Sun className="h-8 w-8" />
        },
        {
          title: "Temperature Control",
          description: "Special formulations and coloring methods minimize heat absorption compared to traditional concrete, keeping surfaces cooler in summer.",
          icon: <Home className="h-8 w-8" />
        },
        {
          title: "Design Customization",
          description: "Endless combinations of patterns, colors, and textures allow for perfect coordination with architectural styles and landscaping.",
          icon: <Paintbrush className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Luxury Driveways",
          description: "Create grand entrances with durable, decorative surfaces that withstand vehicle traffic while providing sophisticated curb appeal for luxury properties.",
          image: "https://images.unsplash.com/photo-1610569244414-5e77776e3191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Outdoor Entertainment Areas",
          description: "Design cohesive entertaining spaces with beautiful, low-maintenance surfaces that connect multiple outdoor living zones while withstanding poolside conditions.",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Commercial Plazas",
          description: "Create inviting public spaces with decorative hardscaping that provides the perfect balance of aesthetics and practicality for high-traffic commercial environments.",
          image: "https://images.unsplash.com/photo-1604715984281-cf7fa4586c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Pattern Options", value: "Over 30 texturing skins including stone, tile, wood, and custom designs" },
        { label: "Coloring Methods", value: "Integral color, color hardener, release agents, stains" },
        { label: "Sealing Requirements", value: "UV-resistant, breathable sealers designed for desert climate" },
        { label: "Thickness", value: "10-15cm for vehicular areas, 7-10cm for pedestrian areas" },
        { label: "Compressive Strength", value: ">30 MPa for vehicular applications" },
        { label: "Joint Spacing", value: "Strategic control joints to prevent random cracking" },
        { label: "Color Stability", value: "Specialized UV-stable pigments for Dubai's intense sun" },
        { label: "Edge Treatment Options", value: "Beveled, rolled, or squared edges available" }
      ]}
      maintenance={[
        {
          title: "Sand and Dust Management",
          description: "In Dubai's desert environment, regular sweeping or blowing prevents abrasive sand buildup that can gradually wear down the surface texture over time."
        },
        {
          title: "Pressure Washing Guidelines",
          description: "Periodic gentle pressure washing (under 2500 PSI) helps maintain the original appearance. Always maintain a proper distance from the surface to avoid damaging the texture."
        },
        {
          title: "Stain Prevention",
          description: "Promptly clean any chemical spills, especially pool chemicals, fertilizers, or automotive fluids which can penetrate even sealed concrete if left unaddressed."
        },
        {
          title: "Resealing Schedule",
          description: "Due to Dubai's intense UV exposure, we recommend resealing exterior stamped concrete every 1-2 years to maintain color integrity and surface protection."
        }
      ]}
      finishedProjects={finishedProjects}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default StampedConcretePage;

