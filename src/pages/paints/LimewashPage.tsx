
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
          title: "Heritage-Inspired Spaces",
          description: "Perfect for spaces that seek to honor architectural traditions while providing modern comfort, creating a sense of timelessness and connection to the past.",
          image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Boutique Hotels",
          description: "Creates signature spaces with character and warmth that provide a unique atmosphere, setting the property apart from standardized hospitality environments.",
          image: "https://images.unsplash.com/photo-1551632436-cbf6d9df0852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Residential Bedrooms",
          description: "The soft, calming effect of Limewash creates tranquil sanctuaries perfect for rest and relaxation, bringing subtle movement and organic textures to private spaces.",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
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
        "/lovable-uploads/limewash-inprogress-1.png",
        "/lovable-uploads/limewash-inprogress-2.png",
        "/lovable-uploads/limewash-inprogress-3.png",
        "/lovable-uploads/limewash-inprogress-4.png",
        "/lovable-uploads/limewash-inprogress-5.png",
        "/lovable-uploads/limewash-inprogress-6.png"
      ]}
    />
  );
};

export default LimewashPage;

