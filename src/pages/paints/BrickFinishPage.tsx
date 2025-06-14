
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Home, Paintbrush, Layers, Sun } from 'lucide-react';

const BrickFinishPage = () => {
  useEffect(() => {
    document.title = "Brick Finish | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Brick Finish"
      heroTitle="Authentic Brick Texture"
      heroDescription="Create the perfect authentic-looking brick surfaces without the structural requirements of actual masonry, perfect for feature walls and themed environments."
      heroImage="/lovable-uploads/cfd03ba6-d524-4e1c-945c-5f2e8bee8d53.png"
      benefits={[
        {
          title: "Lightweight Alternative",
          description: "All the character and warmth of brick without the structural considerations or installation challenges.",
          icon: <Home className="h-8 w-8" />
        },
        {
          title: "Custom Aging",
          description: "Available with various aging and distressing techniques for authentic character and historical appeal.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Flexible Application",
          description: "Can be applied on curved and irregular surfaces where real brick installation would be impossible.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Temperature Regulation",
          description: "Offers visual warmth without the thermal mass of real brick, ideal for Dubai's climate-controlled environments.",
          icon: <Sun className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Restaurant Environments",
          description: "Create warm, inviting dining atmospheres with the character and texture of classic brick, perfect for establishing a specific ambiance or theme.",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Residential Feature Walls",
          description: "Transform ordinary walls into dramatic focal points that add architectural interest and natural texture to contemporary living spaces.",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Retail Environments",
          description: "Create distinctive retail experiences that stand out from competitors with atmospheric interiors that reinforce brand identity and create memorable shopping environments.",
          image: "https://images.unsplash.com/photo-1604176424472-9e9989bebe9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Pattern Options", value: "Traditional running bond, herringbone, stacked, circular" },
        { label: "Brick Size Options", value: "Standard, thin brick, custom dimensions" },
        { label: "Corner Solutions", value: "Seamless corners with specialized wrapping technique" },
        { label: "Color Variations", value: "Multi-tone color application for authentic appearance" },
        { label: "Sealer Options", value: "Matte, satin, or glossy protective finishes" },
        { label: "Base Requirements", value: "Sound, stable wall with proper primer" },
        { label: "Mortar Options", value: "Various colors and joint widths available" },
        { label: "Weight", value: "Approximately 3-5 kg per square meter" }
      ]}
      maintenance={[
        {
          title: "Desert Dust Management",
          description: "Our brick finishes are formulated with Dubai's environmental conditions in mind, with textures specifically designed to minimize dust collection in the desert environment."
        },
        {
          title: "Cleaning Protocol",
          description: "Regular dusting with a soft brush attachment on a vacuum. For deeper cleaning, use a slightly damp cloth with mild soap solution, followed by drying with a clean cloth."
        },
        {
          title: "Sealer Maintenance",
          description: "Depending on the sealer chosen, reapplication may be recommended every 5-7 years to maintain optimal protection, especially in high-traffic or high-touch areas."
        },
        {
          title: "Repair Options",
          description: "Minor damage can be professionally touched up without requiring complete refinishing. Our technicians can match the original color and texture for seamless repairs."
        }
      ]}
      finishedProjects={[
        { image: "/lovable-uploads/facbc8bb-8349-446c-ba5d-d99d18221b5d.png", title: "Vanity Bathroom" },
        { image: "/lovable-uploads/a826b8b5-e9c8-40b6-8bbb-551811939e52.png", title: "Modern Vanity" },
        { image: "/lovable-uploads/cf38fd76-74fc-44d8-a8d5-279d9fc4ca11.png", title: "Contemporary Living" },
        { image: "/lovable-uploads/f4850cfa-2a6f-43ff-b709-52e3e840e53d.png", title: "Spacious Living Room" },
        { image: "/lovable-uploads/6f4bbde8-3a7c-4d1a-b5d6-da01e4b6bae6.png", title: "Warm Living Room" },
        { image: "/lovable-uploads/c728d883-c979-430b-a82d-298168ede9ad.png", title: "Master Bedroom" },
      ]}
      inProgressTitles={[
        "The Springs",
        "The Meadows",
        "Downtown Dubai",
        "Dubai Hills",
        "Palm Jumeirah",
        "Dubai Marina"
      ]}
    />
  );
};

export default BrickFinishPage;
