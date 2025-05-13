
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Sun, Paintbrush, Layers, Home } from 'lucide-react';

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
      heroImage="/public/textures/concrete-texture.jpg"
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
    />
  );
};

export default StampedConcretePage;
