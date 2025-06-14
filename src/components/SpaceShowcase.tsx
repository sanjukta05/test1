import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';
interface SpaceProps {
  title: string;
  image: string;
  features: string[];
  className?: string;
}
const SpaceCard = ({
  title,
  image,
  features,
  className
}: SpaceProps) => {
  return <div className={cn("overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300", className)}>
      <AspectRatio ratio={16 / 9} className="bg-deco-plum/5">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </AspectRatio>
      <div className="p-6">
        <h3 className="font-parafina text-xl font-bold mb-3">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-deco-gold mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-deco-plum/80 text-sm">{feature}</span>
            </li>)}
        </ul>
      </div>
    </div>;
};
export default function SpaceShowcase() {
  const spaces = [{
    title: "Living Spaces",
    image: "/lovable-uploads/d2b0fdec-880c-41f9-84c7-e432d73393f7.png",
    features: ["Elegant wall finishes for statement walls", "Subtle textures for refined ambiance", "Durable surfaces for high-traffic areas"]
  }, {
    title: "Kitchen & Dining",
    image: "/lovable-uploads/2046ad05-0e3a-487a-af78-a4865db63b4e.png",
    features: ["Water-resistant decorative coatings", "Easy-clean surface technologies", "Heat and stain resistant finishes"]
  }, {
    title: "Bathrooms & Spa",
    image: "/lovable-uploads/d3674917-53b5-47b9-9aaa-c3f0eb623a7b.png",
    features: ["Seamless waterproof surfaces", "Humidity resistant decorative finishes", "Anti-slip flooring solutions"]
  }, {
    title: "Commercial Spaces",
    image: "/lovable-uploads/292be165-768b-4c98-a0be-143f7c6c3ebc.png",
    features: ["High-durability flooring systems", "Brand-aligned aesthetic solutions", "Low-maintenance premium finishes"]
  }];
  return <section className="section bg-deco-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="font-parafina text-3xl mb-4 font-normal md:text-5xl">Transforming Every Space</h2>
          <div className="h-0.5 bg-deco-gold mx-auto w-24 mb-6"></div>
          <p className="font-grosa text-lg text-deco-plum/80">
            Our finishes adapt to every environment, enhancing the unique character of each space while maintaining cohesive luxury throughout your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => <SpaceCard key={index} title={space.title} image={space.image} features={space.features} />)}
        </div>
      </div>
    </section>;
}