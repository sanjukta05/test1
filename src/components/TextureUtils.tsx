import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
interface TextureSampleProps {
  name: string;
  textureClass: string;
  description: string;
}
const TextureSample: React.FC<TextureSampleProps> = ({
  name,
  textureClass,
  description
}) => {
  return <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="p-1">
        <AspectRatio ratio={16 / 9}>
          <div className={`w-full h-full ${textureClass}`}></div>
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="font-parafina text-lg font-bold text-deco-plum">{name}</h3>
        <p className="text-sm text-deco-plum/70 font-grosa mt-2">{description}</p>
      </div>
    </div>;
};
export const TextureGrid: React.FC = () => {
  const textures = [{
    name: "Marmorino",
    textureClass: "texture-marble",
    description: "Elegant, polished plaster with veined patterns inspired by Italian craftsmanship."
  }, {
    name: "Limewash",
    textureClass: "texture-limewash",
    description: "Soft, breathable finish with subtle movement and beautiful depth."
  }, {
    name: "Concrete",
    textureClass: "texture-concrete",
    description: "Modern, industrial aesthetic with smooth, tactile surfaces."
  }, {
    name: "Terrazzo",
    textureClass: "texture-terrazzo",
    description: "Timeless flooring composed of marble chips set in a seamless matrix."
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {textures.map(texture => <TextureSample key={texture.name} name={texture.name} textureClass={texture.textureClass} description={texture.description} />)}
    </div>;
};
export const ArchAccent: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className={`relative ${className}`}>
      <div className="w-full h-40 bg-deco-plum/10 rounded-t-full transform scale-[2] translate-y-1/2"></div>
    </div>;
};
export const GeometricDivider: React.FC = () => {
  return;
};
export const GoldAccent: React.FC<{
  width?: string;
  className?: string;
}> = ({
  width = "w-24",
  className = ""
}) => {
  return <div className={`h-0.5 bg-deco-gold mx-auto ${width} ${className}`}></div>;
};
export default {
  TextureGrid,
  ArchAccent,
  GeometricDivider,
  GoldAccent
};