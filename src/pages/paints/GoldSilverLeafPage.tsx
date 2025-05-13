
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Star, Paintbrush, Layers, Shield } from 'lucide-react';

const GoldSilverLeafPage = () => {
  useEffect(() => {
    document.title = "Gold & Silver Leaf | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Gold & Silver Leaf"
      heroTitle="Ultimate Luxury Metallic Surfaces"
      heroDescription="Exquisite hand-applied metallic finishes that transform ordinary surfaces into extraordinary statements of opulence and refined taste."
      heroImage="/public/textures/marble-texture.jpg"
      benefits={[
        {
          title: "Ultimate Luxury",
          description: "The pinnacle of decorative finishing, creating surfaces with unparalleled opulence and visual impact.",
          icon: <Star className="h-8 w-8" />
        },
        {
          title: "Artisanal Application",
          description: "Meticulously hand-crafted by our master artisans using time-honored traditional techniques.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Finish Versatility",
          description: "Available in brilliant, antique, or protected finishes to achieve your specific aesthetic vision.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Custom Patterns",
          description: "Can be applied in custom patterns, designs, and artistic motifs for truly bespoke installations.",
          icon: <Shield className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Ceiling Treatments",
          description: "Transform ceilings into breathtaking features that draw the eye upward and create a sense of grandeur and expansiveness in the space.",
          image: "https://images.unsplash.com/photo-1561893836-adad6e53bc72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Nightclubs",
          description: "Create dramatic, unforgettable environments where the interplay of light on metallic surfaces enhances the energy and atmosphere of entertainment spaces.",
          image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "VIP Residential Areas",
          description: "Designate special areas within luxury residences with the unmistakable opulence of gold or silver leaf, creating spaces that feel exclusive and extraordinary.",
          image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Material Options", value: "Genuine gold (23K, 22K), white gold, silver, imitation metals" },
        { label: "Substrate Preparation", value: "Ultra-smooth preparation with specialized sealers" },
        { label: "Application Method", value: "Traditional hand application with sizing adhesive" },
        { label: "Leaf Size", value: "Standard 8x8cm sheets" },
        { label: "Pattern Options", value: "Full coverage, partial, geometric, artistic designs" },
        { label: "Finish Options", value: "Brilliant (sealed), distressed antique, protected matte" },
        { label: "Environmental Control", value: "Climate control recommended during application" },
        { label: "Sealing Options", value: "Clear acrylic or traditional shellac options" }
      ]}
      maintenance={[
        {
          title: "Preservation Techniques",
          description: "Genuine gold leaf requires minimal maintenance as it will not tarnish. Silver leaf should be properly sealed to prevent oxidation, especially in Dubai's variable humidity conditions."
        },
        {
          title: "Environmental Controls",
          description: "Maintain stable humidity levels to preserve the adhesion and appearance of metallic leaf surfaces. Excessive fluctuations can affect the longevity of the finish."
        },
        {
          title: "Cleaning Protocol",
          description: "Dust only with very soft, natural fiber brushes or microfiber cloths. Never use liquids or chemicals of any kind unless specifically recommended by our maintenance specialists."
        },
        {
          title: "Professional Services",
          description: "We offer specialized restoration and maintenance services for metallic leaf finishes to ensure their beauty is preserved for generations, including resealing and touch-ups as needed."
        }
      ]}
    />
  );
};

export default GoldSilverLeafPage;
