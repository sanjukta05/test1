
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Paintbrush, Layers, Star, Home } from 'lucide-react';

const StencilPaintingPage = () => {
  useEffect(() => {
    document.title = "Stencil Painting | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  // Use the latest uploaded in-progress images for the correct sequence.
  const inProgressImages = [
    "/lovable-uploads/d60822d5-b85a-4c85-8ae3-d6218a4e820b.png",
    "/lovable-uploads/b83ec8e7-f5d4-4180-84f4-5c781886648c.png",
    "/lovable-uploads/e3461fb9-9d38-4b70-958e-03bb47c412b6.png",
    "/lovable-uploads/f34a443a-0b16-46fa-ba44-7bcd11a039ae.png",
    "/lovable-uploads/b7f86ae3-e813-475d-8a0f-62a3c7acbf5c.png",
    "/lovable-uploads/6ed14fd4-15ba-4b1e-965f-41576a21f9ce.png",
  ];
  const inProgressTitles = [
    "Downtown Dubai",
    "Dubai Hills",
    "Emirates Hills",
    "The Spring",
    "Palm Jumeirah",
    "Business Bay"
  ];

  // New Finished Projects with images and titles
  const finishedProjects = [
    { image: "/lovable-uploads/ce6d9530-ae6d-4152-a8e8-a42cf4c6c610.png", title: "Elegant Gold Damask Entrance" },
    { image: "/lovable-uploads/291523e5-e33d-4b35-809f-4e5cd69673f9.png", title: "Modern Botanical Mural Living Room" },
    { image: "/lovable-uploads/2f316cdb-2964-4825-9ea5-03c596f03346.png", title: "Sculptural Gold Leaf Hallway" },
    { image: "/lovable-uploads/140f0258-40dd-4453-ad84-3432c57c9d73.png", title: "Golden Aviary Dining Room" },
    { image: "/lovable-uploads/dd6bc815-ce5b-4551-a79a-20f8fa830370.png", title: "Geometric Blossom Bedroom" },
    { image: "/lovable-uploads/00978e55-6e6f-4a4c-807d-cfd950e2b0f7.png", title: "Classic Peony Arch Bedroom" },
  ];

  return (
    <ProductLayout
      type="paints"
      title="Stencil Painting"
      heroTitle="Custom Patterned Wall Finishes"
      heroDescription="Add dimension and visual interest to your spaces with precision-applied decorative patterns that transform ordinary surfaces into artistic statements."
      heroImage="/lovable-uploads/71dc2c70-fe01-4a10-a7e4-c0f2af1d57c7.png"
      benefits={[
        {
          title: "Customizable Designs",
          description: "Choose from our extensive library of patterns including traditional Arabic geometric designs and contemporary motifs.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Multi-Layer Depth",
          description: "Achieve remarkable visual depth through strategic layering of colors and metallic highlights.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Seamless Repeats",
          description: "Perfect pattern alignment across large areas creates cohesive, professional results even in expansive spaces.",
          icon: <Star className="h-8 w-8" />
        },
        {
          title: "Interior Coordination",
          description: "Custom color matching ensures perfect harmony with existing décor elements and architectural features.",
          icon: <Home className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Feature Ceilings",
          description: "Transform overlooked ceiling spaces into stunning design features that add unexpected visual interest and elevate the entire room.",
          image: "https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Accent Walls",
          description: "Create dramatic focal points in residential and commercial spaces with patterns that range from subtle tone-on-tone to bold statement designs.",
          image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Closets",
          description: "Elevate utilitarian storage spaces into luxurious dressing rooms with sophisticated stenciled patterns that create a sense of bespoke craftsmanship.",
          image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Stencil Creation", value: "Custom laser-cut precision stencils in mylar or other materials" },
        { label: "Color Layering", value: "Up to 5 color layers possible for complex designs" },
        { label: "Pattern Scaling", value: "Customizable to room dimensions for optimal visual impact" },
        { label: "Application Method", value: "Specialized stencil brushes, rollers, or spray application" },
        { label: "Base Requirements", value: "Smooth, properly prepared and painted surface" },
        { label: "Pattern Registry", value: "Precise alignment systems for perfect pattern continuity" },
        { label: "Finish Options", value: "Matte, satin, metallic, or mixed finishes" },
        { label: "Sealer Options", value: "Clear protective topcoats available for high-traffic areas" }
      ]}
      maintenance={[
        {
          title: "Gentle Cleaning",
          description: "Use only soft microfiber cloths for dusting. For cleaning, lightly dampen cloth with water and mild soap, being careful not to rub aggressively which could affect pattern edges."
        },
        {
          title: "Touch-Up Considerations",
          description: "We maintain digital records of all custom stencils and color formulations, allowing for precise matching if touch-ups are needed in the future."
        },
        {
          title: "Pattern Preservation",
          description: "Avoid placing adhesive items or hooks on stenciled surfaces, as removal may damage the intricate pattern work. Use removable adhesive products specifically designed for painted surfaces when necessary."
        },
        {
          title: "Professional Refreshing",
          description: "For areas that have experienced fading due to sun exposure or other environmental factors, our artisans can selectively refresh colors without requiring complete reapplication."
        }
      ]}
      finishedProjects={finishedProjects}
      inProgressProjects={inProgressImages}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default StencilPaintingPage;
