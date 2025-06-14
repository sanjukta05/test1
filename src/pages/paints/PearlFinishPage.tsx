
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Sun, Star, Layers, Paintbrush } from 'lucide-react';

const PearlFinishPage = () => {
  useEffect(() => {
    document.title = "Pearl Finish | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Pearl Finish"
      heroTitle="Light-Reflective Pearl Finish"
      heroDescription="Exquisite reflective surfaces that capture and play with light, adding subtle shimmer and sophisticated dimension to your walls and ceilings."
      heroImage="/public/textures/marble-texture.jpg"
      benefits={[
        {
          title: "Enhanced Lighting",
          description: "Unique light-reflective qualities that enhance both natural daylight and artificial lighting for brighter spaces.",
          icon: <Sun className="h-8 w-8" />
        },
        {
          title: "Dimensional Effect",
          description: "Creates visual depth in monochromatic spaces through subtle play of light across textured surfaces.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Luxurious Appeal",
          description: "Complements sophisticated design sensibilities with its refined, elegant appearance.",
          icon: <Star className="h-8 w-8" />
        },
        {
          title: "Custom Tinting",
          description: "Available in a wide range of custom tint options from subtle neutrals to bold statement colors.",
          icon: <Paintbrush className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Luxury Dressing Room",
          description: "The light-enhancing qualities create the perfect environment for dressing areas, providing accurate color rendering and a flattering glow.",
          image: "/lovable-uploads/b2198335-5b4b-4126-8b47-88900589b988.png"
        },
        {
          title: "Formal Dining Area",
          description: "Adds sophistication and warmth to dining spaces, creating an atmosphere of elegant refinement that enhances the dining experience.",
          image: "/lovable-uploads/77629d79-d7e9-4530-9dd4-bd24aee82b28.png"
        },
        {
          title: "Elegant Reception Room",
          description: "Creates an atmosphere of refined luxury in spaces designed to receive and impress guests, with walls that subtly change appearance as light conditions shift throughout the day.",
          image: "/lovable-uploads/952428ba-942d-4a78-af90-82ea97a08880.png"
        }
      ]}
      techSpecs={[
        { label: "Light Reflectivity", value: "30-60% increased light reflection (finish dependent)" },
        { label: "Base Requirements", value: "Ultra-smooth base preparation essential" },
        { label: "Application Techniques", value: "Proprietary multi-layer application with specialized tools" },
        { label: "Curing Time", value: "24 hours between coats, 7 days for full cure" },
        { label: "Pearl Content", value: "Natural and synthetic pearl essence" },
        { label: "Finish Options", value: "Subtle sheen to high luster" },
        { label: "VOC Content", value: "Low VOC (<25g/L)" },
        { label: "Durability Rating", value: "Premium residential/light commercial" }
      ]}
      finishedProjects={[
        "/lovable-uploads/6fb4e594-07d2-475a-8064-acedaf9e13ec.png",
        "/lovable-uploads/d8c5c2cc-c2a0-4e4a-b4c5-22875adaa8b8.png",
        "/lovable-uploads/dc78d120-27df-4a05-a962-a623b21bae43.png",
        "/lovable-uploads/ae2d232a-3ee5-4ece-b8bd-844c9c90c9e7.png",
        "/lovable-uploads/331c09b7-784e-4b2f-ad0c-e37a949644d4.png",
        "/lovable-uploads/68c2bffa-1300-46ac-8063-dd99717262f9.png"
      ]}
      maintenance={[
        {
          title: "Preserving Luster",
          description: "To maintain the distinctive pearl luster, dust regularly with a soft microfiber cloth. For areas with more significant dust accumulation, use a gentle vacuum with soft brush attachment."
        },
        {
          title: "Cleaning Methods",
          description: "Clean with soft cloth dampened with mild soapy water, then immediately dry with clean soft cloth. Never use abrasives or harsh chemicals that could damage the delicate finish."
        },
        {
          title: "Stain Handling",
          description: "Address any marks promptly. For persistent stains, consult our maintenance team rather than attempting aggressive cleaning that might damage the finish."
        },
        {
          title: "Touch-Up Protocol",
          description: "Keep a small amount of the original finish for any future touch-ups. Our specially trained artisans can also perform touch-ups that blend seamlessly with the existing finish."
        }
      ]}
      // ensuring the section title uses the default "Featured Applications"
      // ("Pearl Finish Spaces: Luxury Dressing, Dining & Reception" is only used 
      // if title === "Pearl Finish", but now it will be forced to "Featured Applications")
    />
  );
};

export default PearlFinishPage;
