
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Home, Paintbrush, Layers, Sun } from 'lucide-react';

const BrickFinishPage = () => {
  useEffect(() => {
    document.title = "Brick Finish | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  // Uploaded in-progress images in intended order for sequence/titles:
  const inProgressImages = [
    "/lovable-uploads/d60822d5-b85a-4c85-8ae3-d6218a4e820b.png",
    "/lovable-uploads/b83ec8e7-f5d4-4180-84f4-5c781886648c.png",
    "/lovable-uploads/e3461fb9-9d38-4b70-958e-03bb47c412b6.png",
    "/lovable-uploads/f34a443a-0b16-46fa-ba44-7bcd11a039ae.png",
    "/lovable-uploads/b7f86ae3-e813-475d-8a0f-62a3c7acbf5c.png",
    "/lovable-uploads/6ed14fd4-15ba-4b1e-965f-41576a21f9ce.png",
  ];
  const inProgressTitles = [
    "The Springs",
    "The Meadows",
    "Downtown Dubai",
    "Dubai Hills",
    "Palm Jumeirah",
    "Dubai Marina"
  ];

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
          title: "Modern Spa Retreat",
          description: "Relax in a contemporary spa environment with warm brick textures, natural wood accents, and an open rain shower concept.",
          image: "/lovable-uploads/55d3b4d7-0b37-44b5-a6c2-67c60c189aac.png"
        },
        {
          title: "Contemporary Bedroom",
          description: "A stylish bedroom featuring a neutral brick accent wall, modern furnishings, and ambient lighting for a cozy and elegant feel.",
          image: "/lovable-uploads/9da107ad-236e-4bcd-9e91-6ea4ba1c51ca.png"
        },
        {
          title: "Luxury Loft Living",
          description: "Expansive loft living with bold, dark brick walls and industrial vibes—perfect for both entertaining and unwinding.",
          image: "/lovable-uploads/0f4e3d55-48ca-4c85-bf26-f6daed5f938c.png"
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
        { image: "/lovable-uploads/facbc8bb-8349-446c-ba5d-d99d18221b5d.png", title: "Powder Room" },
        { image: "/lovable-uploads/a826b8b5-e9c8-40b6-8bbb-551811939e52.png", title: "Modern Washroom" },
        { image: "/lovable-uploads/cf38fd76-74fc-44d8-a8d5-279d9fc4ca11.png", title: "Living Area" },
        { image: "/lovable-uploads/f4850cfa-2a6f-43ff-b709-52e3e840e53d.png", title: "Villas" },
        { image: "/lovable-uploads/6f4bbde8-3a7c-4d1a-b5d6-da01e4b6bae6.png", title: "Featured Wall" },
        { image: "/lovable-uploads/c728d883-c979-430b-a82d-298168ede9ad.png", title: "Bedroom" },
      ]}
      inProgressProjects={inProgressImages}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default BrickFinishPage;
