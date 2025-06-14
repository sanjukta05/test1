
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
      heroImage="/lovable-uploads/concrete/6.png"
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
          image: "/lovable-uploads/d8b65986-406f-4890-a2bd-807e06515cff.png"
        },
        {
          title: "Luxury Bathrooms & Spas",
          description: "Transform bathrooms and relaxation spaces with moisture-resistant concrete textures for a refined, spa-like atmosphere.",
          image: "/lovable-uploads/0826e6b7-0bb6-44d1-82e0-a01bf84d3f12.png"
        },
        {
          title: "Contemporary Bedrooms",
          description: "Use sophisticated concrete textures as feature walls in bedrooms to enhance modern design and create a serene, cohesive environment.",
          image: "/lovable-uploads/18d7b529-e483-43a7-b1bb-6f1913778706.png"
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
      finishedProjects={[
        "/lovable-uploads/a2fbec00-f91c-416f-89eb-78cf2e9caaff.png",
        "/lovable-uploads/b575e31a-99cc-4c7c-bafd-f7144792ddc9.png",
        "/lovable-uploads/9b7f0826-ba57-4957-8917-f57eab16106d.png",
        "/lovable-uploads/108645d9-ddd9-464a-894b-53d7415a4f97.png",
        "/lovable-uploads/8f8ed56e-9757-4f21-9967-74540153d516.png",
        "/lovable-uploads/0bed9588-f10a-4f11-ba76-eb3f47a2bba0.png"
      ]}
      inProgressProjects={[
        "/lovable-uploads/93803875-40dc-4965-92f2-c4f1b4b5e697.png",
        "/lovable-uploads/f68759a2-a052-40f4-9070-a999bf30d9ee.png",
        "/lovable-uploads/8793995d-b1d9-4dee-bf3e-6727fa72fddc.png",
        "/lovable-uploads/60996304-0f8f-4079-8fb7-af891718b418.png",
        "/lovable-uploads/a295b12f-a3c2-475e-8414-9650496a6343.png",
        "/lovable-uploads/c51787c6-ca5d-482e-8690-c05d084e6ee1.png"
      ]}
    />
  );
};

export default ConcreteTexturePage;
