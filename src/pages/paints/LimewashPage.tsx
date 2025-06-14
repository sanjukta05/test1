
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Shield, History, Layers, Wind } from 'lucide-react';

const LimewashPage = () => {
  useEffect(() => {
    document.title = "Limewash | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="paints"
      title="Limewash"
      heroTitle="Limewash Textured Finish"
      heroDescription="Soft, matte textured walls with subtle movement and an organic feel that brings warmth and character to contemporary and traditional spaces."
      heroImage="/public/textures/limewash-texture.jpg"
      benefits={[
        {
          title: "Antimicrobial Properties",
          description: "Natural antimicrobial and fungicidal properties make it an excellent choice for Dubai's coastal humidity.",
          icon: <Shield className="h-8 w-8" />
        },
        {
          title: "Historical Authenticity",
          description: "Traditional technique reimagined with modern execution for spaces that honor architectural heritage.",
          icon: <History className="h-8 w-8" />
        },
        {
          title: "Subtle Color Variations",
          description: "Creates remarkable depth and dimension through natural pigmentation and application techniques.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Breathable Surface",
          description: "Excellent breathability makes it perfect for coastal areas where moisture management is essential.",
          icon: <Wind className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Textured Modern Kitchen",
          description: "Limewash brings warmth and artisanal texture to this contemporary kitchen, balancing sleek surfaces and modern fixtures with an inviting, handcrafted wall finish.",
          image: "/lovable-uploads/bf315d03-438a-49b5-a0d0-35ba31c4d87c.png"
        },
        {
          title: "Blue Accent Majlis Lounge",
          description: "A striking blue limewash feature wall creates depth and a calming ambiance in this modern majlis, contrasting beautifully with neutral tones and soft furnishings.",
          image: "/lovable-uploads/7f11e469-de24-4335-879f-ba4fdba2936d.png"
        },
        {
          title: "Cocooned Living Area",
          description: "Subtle brown limewash brings a sense of coziness and sophistication to this living space, with organic movement and tonality enhancing the natural palette and tailored decor.",
          image: "/lovable-uploads/a82f708e-6d29-4e3e-b6a2-edf6208f2c58.png"
        }
      ]}
      techSpecs={[
        { label: "Application Technique", value: "Multi-step brush application with specialized tools" },
        { label: "Coverage Rate", value: "6-8 sq. meters per liter" },
        { label: "Specialized Brushwork", value: "Cross-hatching and feathering techniques" },
        { label: "Color Development", value: "24-48 hours for full color stabilization" },
        { label: "Base Material", value: "Slaked lime with natural minerals" },
        { label: "Finish Options", value: "Matte, subtly textured" },
        { label: "VOC Content", value: "Zero VOC" },
        { label: "Substrate Compatibility", value: "Mineral-based surfaces, properly primed drywall" }
      ]}
      maintenance={[
        {
          title: "Humidity Considerations",
          description: "In Dubai's coastal areas with higher humidity, limewash actually performs exceptionally well, as the material naturally regulates moisture exchange, contributing to healthier indoor environments."
        },
        {
          title: "Cleaning Recommendations",
          description: "Dust with soft, dry cloth only. Avoid water or cleaning products as they may affect the subtle patination that develops over time and contributes to the finish's character."
        },
        {
          title: "Color Evolution",
          description: "Limewash naturally develops a beautiful patina over time. This subtle evolution in appearance is part of its charm and authenticity, creating living surfaces that improve with age."
        },
        {
          title: "Long-Term Care",
          description: "Limewash is remarkably durable despite its soft appearance. If needed after many years, refreshing is simple with a new thin application that bonds seamlessly with the original finish."
        }
      ]}
      finishedProjects={[
        "/lovable-uploads/77846c41-588f-4d24-ab63-d65b10cffbef.png",
        "/lovable-uploads/a846e2ce-7fc7-4041-9b51-8ee9b33f7379.png",
        "/lovable-uploads/05be3b1d-6149-4264-9ecd-d0abf61558c4.png",
        "/lovable-uploads/faee09c5-816c-4b94-87a0-66d42a63a9be.png",
        "/lovable-uploads/5a7b46fd-8260-4993-8ca0-7db3cc056d17.png",
        "/lovable-uploads/d6d88a4a-9fd8-4ed8-96aa-433fd7230c54.png"
      ]}
      inProgressProjects={[
        "/lovable-uploads/18bca202-f1cd-4c32-8e91-9ea4e256d44e.png",
        "/lovable-uploads/5b6e9ab0-6ed1-4ac5-998a-389c6b470c0e.png",
        "/lovable-uploads/caaf0c5c-a183-43be-805b-9d32d268bebb.png",
        "/lovable-uploads/169ee6e6-b28a-425d-9060-49c07144252a.png",
        "/lovable-uploads/dc29ff06-cc0c-47c5-bc84-770fc9cb7639.png",
        "/lovable-uploads/d583d5f8-a3ad-4e53-a07c-c153f3282e42.png"
      ]}
    />
  );
};

export default LimewashPage;
