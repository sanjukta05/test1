
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Droplet, Wind, Clock, Paintbrush } from 'lucide-react';

const MarmolinoPage = () => {
  useEffect(() => {
    document.title = "Marmorino Polished Plaster | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Marmorino"
      heroTitle="Marmorino Polished Plaster"
      heroDescription="Classical Italian-inspired luxury surfaces with an authentic limestone appearance that adds depth, texture, and timeless elegance to your walls."
      heroImage="/lovable-uploads/d1d8cfca-a7f5-4e28-bf52-0a7d78330467.png"
      benefits={[
        {
          title: "Breathable Surface",
          description: "Ideal for Dubai's climate, allowing walls to naturally regulate humidity and prevent mold growth.",
          icon: <Wind className="h-8 w-8" />
        },
        {
          title: "Timeless Elegance",
          description: "Authentic Mediterranean aesthetic that creates sophisticated spaces with enduring appeal.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Seamless Application",
          description: "Perfect for large surfaces with no visible seams, creating continuous, flawless expanses of texture.",
          icon: <Droplet className="h-8 w-8" />
        },
        {
          title: "Custom Coloration",
          description: "Bespoke color mixing capabilities to perfectly match your design vision and existing decor.",
          icon: <Paintbrush className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Contemporary Majlis Lounge",
          description: "A sophisticated gathering space featuring organic forms, plush seating, and a statement metallic wall sculpture, perfectly complemented by the textured depth of Marmorino.",
          image: "/lovable-uploads/5b3e87c4-9227-40a3-b7bd-242d5ffad0f0.png"
        },
        {
          title: "Sculptural Powder Room",
          description: "The refined, stone-like finish of Marmorino pairs elegantly with architectural curves and soft, indirect lighting to transform this powder room into an artful retreat.",
          image: "/lovable-uploads/76db8c79-7818-4b64-b792-f7a16589875b.png"
        },
        {
          title: "Grand Entrance with Blue Feature Wall",
          description: "An opulent entrance hall where the dramatic blue Marmorino accent wall becomes the focal point, setting a tone of luxury and modernity for the entire home.",
          image: "/lovable-uploads/eb72038b-7745-4158-b34b-b4f94b22595d.png"
        }
      ]}
      techSpecs={[
        { label: "Coverage Rate", value: "4-5 sq. meters per kg (varies by finish)" },
        { label: "Cure Time", value: "24-48 hours initial, 30 days full cure in Dubai climate" },
        { label: "Thickness", value: "2-3mm typical application" },
        { label: "Base Material", value: "Natural lime plaster with marble dust" },
        { label: "Finish Options", value: "Matte, semi-polished, highly polished" },
        { label: "HVAC Compatibility", value: "Excellent with all modern cooling systems" },
        { label: "VOC Content", value: "Extremely low (<5g/L)" },
        { label: "Substrate Compatibility", value: "Concrete, gypsum board, existing plaster, wood (with primer)" }
      ]}
      maintenance={[
        {
          title: "Desert Climate Care",
          description: "In Dubai's dry climate, occasional light misting with distilled water can help maintain the optimal appearance of Marmorino surfaces, especially during peak summer months."
        },
        {
          title: "Cleaning Protocol",
          description: "Clean with a soft, dry microfiber cloth for regular dust removal. For deeper cleaning, lightly dampen cloth with pH-neutral cleaner diluted in water, never use acidic or abrasive products."
        },
        {
          title: "Touch-Up Guide",
          description: "Minor imperfections can be addressed with specialized touch-up kits available from DecoPaints. Our artisans can also provide professional touch-ups that seamlessly blend with existing finishes."
        },
        {
          title: "Long-Term Preservation",
          description: "Every 3-5 years, consider a professional maintenance treatment with specialized wax to refresh the surface and enhance protection, especially for high-traffic areas."
        }
      ]}
      inProgressProjects={[
        "/lovable-uploads/cd423463-f33a-4d7f-9f02-6f32d28763e5.png", // Ceiling Painting in Progress
        "/lovable-uploads/dd0c2755-a141-4c68-9b6b-ff315a0f4f42.png", // Trowel Finish Application
        "/lovable-uploads/a1f15039-2870-44e2-b79d-51e0913c3dc7.png", // Detail Work on Upper Molding
        "/lovable-uploads/138f4aa9-0c70-48f1-8aba-a208cf2c0039.png", // Niche Feature Preparation
        "/lovable-uploads/2d68aef8-ae6a-41e5-b2dc-be292b244a70.png", // Wall Painting Application
        "/lovable-uploads/62e227a4-f4ef-4fd0-b233-aabb1884d31e.png", // Doorway Masking and Prep
      ]}
    />
  );
};

export default MarmolinoPage;
