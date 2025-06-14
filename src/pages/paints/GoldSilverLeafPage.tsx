
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
      heroImage="/lovable-uploads/1f50b99c-3f66-4a3d-8860-1de4242d9631.png"
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
          title: "Majlis Lounge",
          description: "Elevate social gatherings and hospitality with statement feature walls and ceilings in luxury majlis and living areas.",
          image: "/lovable-uploads/6f450b70-f192-427c-b3c9-09f1dbf4f796.png"
        },
        {
          title: "Luxury Feature Wall",
          description: "Accentuate your interiors with bespoke gold and silver leaf feature walls and artistic designs, expertly applied for dramatic impact.",
          image: "/lovable-uploads/a88c2925-5bf0-4625-953c-48cbc84a21cc.png"
        },
        {
          title: "Suite Bedroom Art Panel",
          description: "Bring opulence into private retreats with custom hand-applied metallic wall art panels for a refined and exclusive ambiance.",
          image: "/lovable-uploads/59ff62f7-695b-498c-9a5a-3b6eff322330.png"
        }
      ]}
      finishedProjects={[
        "/lovable-uploads/3158a955-677d-4971-b79f-e25615328ffb.png",
        "/lovable-uploads/e0b8b982-6daf-4551-8e3e-4b5af100504c.png",
        "/lovable-uploads/4b4dc7fd-61a5-4944-b903-515d094e493b.png",
        "/lovable-uploads/e1a12c37-f6e3-4f04-9857-ce9215800419.png",
        "/lovable-uploads/0576a66c-32b2-440b-9b9c-71791a02d04c.png",
        "/lovable-uploads/391273d1-ce6e-4f5d-b4d4-d4aefb1d6812.png",
        "/lovable-uploads/a8350f85-1af1-4e99-94f6-a25faf367da5.png"
      ]}
      inProgressProjects={[
        "/lovable-uploads/bf849df1-f600-4ea1-a83f-edcfadc3b808.png",
        "/lovable-uploads/b68f0479-cf54-400c-92f6-6aab82663502.png",
        "/lovable-uploads/97f95f0d-0cb2-4bf3-b627-fb61b100cc90.png",
        "/lovable-uploads/1f405b5b-d8c8-4a7d-a22e-848727fc635d.png",
        "/lovable-uploads/098e4ced-7419-40e9-a639-c736ee5dc2e2.png",
        "/lovable-uploads/0c9caccd-3198-4043-9618-351e4864ca3d.png"
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
