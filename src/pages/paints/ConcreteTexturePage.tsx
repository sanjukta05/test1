
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Home, Building, Layers, Paintbrush } from 'lucide-react';

const ConcreteTexturePage = () => {
  useEffect(() => {
    document.title = "Concrete Texture | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Concrete Texture"
      heroTitle="Sophisticated Concrete Finishes"
      heroDescription="Contemporary industrial-inspired surfaces that bring urban sophistication to interior and exterior spaces with remarkable versatility and elegance."
      heroImage="/public/textures/concrete-texture.jpg"
      benefits={[
        {
          title: "Urban Aesthetic",
          description: "Contemporary, sophisticated look that works in modern architectural contexts while softening industrial elements.",
          icon: <Building className="h-8 w-8" />
        },
        {
          title: "Seamless Application",
          description: "Can be applied to virtually any prepared surface including curves, creating continuous uninterrupted finishes.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Custom Aggregates",
          description: "Various aggregate options allow for customization of texture, from ultra-smooth to more tactile finishes.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Heat Resistant",
          description: "Formulated for Dubai's climate with exceptional heat-resistant properties perfect for interior and exterior applications.",
          icon: <Home className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Modern Lofts",
          description: "Create authentic industrial-inspired living spaces with the sophistication of expertly applied concrete finishes that add character without overwhelming the space.",
          image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Commercial Spaces",
          description: "Provide durability and contemporary style for retail environments, offices, and hospitality spaces that require both aesthetic appeal and practical performance.",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Retail",
          description: "Create sophisticated backdrops for high-end retail displays where the subtle texture of concrete complements product presentations without competing for attention.",
          image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Thickness Options", value: "1mm micro finish to 3mm textured application" },
        { label: "Substrate Requirements", value: "Sound, stable surface with appropriate primer" },
        { label: "Curing Specifications", value: "72 hours for functional cure, 28 days for complete cure" },
        { label: "Finish Options", value: "Matte, satin, polished" },
        { label: "Color Options", value: "Full custom color matching available" },
        { label: "Heat Resistance", value: "Excellent thermal stability (-20°C to 80°C)" },
        { label: "VOC Content", value: "Low VOC (<10g/L)" },
        { label: "Water Resistance", value: "Excellent when sealed properly" }
      ]}
      maintenance={[
        {
          title: "Sealing Requirements",
          description: "For optimal performance in Dubai's climate, we recommend our specialized penetrating sealer that maintains the natural look while providing protection from stains and minor abrasions."
        },
        {
          title: "Stain Prevention",
          description: "Wipe spills promptly, especially acidic substances. Use coasters under glasses and protective pads under decorative items to prevent marks and staining on horizontal surfaces."
        },
        {
          title: "Routine Cleaning",
          description: "Clean with pH-neutral cleaners specifically formulated for concrete surfaces. Avoid acidic, ammonia-based, or abrasive cleaning agents that can damage the surface."
        },
        {
          title: "Repair Options",
          description: "Minor damage can be professionally repaired without requiring complete refinishing. Our technicians can match existing textures and colors for seamless repairs."
        }
      ]}
    />
  );
};

export default ConcreteTexturePage;
