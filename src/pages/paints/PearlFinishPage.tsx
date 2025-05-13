
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
          title: "Luxury Dressing Rooms",
          description: "The light-enhancing qualities create the perfect environment for dressing areas, providing accurate color rendering and a flattering glow.",
          image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Formal Dining Areas",
          description: "Adds sophistication and warmth to dining spaces, creating an atmosphere of elegant refinement that enhances the dining experience.",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Reception Rooms",
          description: "Creates an atmosphere of refined luxury in spaces designed to receive and impress guests, with walls that subtly change appearance as light conditions shift throughout the day.",
          image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
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
    />
  );
};

export default PearlFinishPage;
