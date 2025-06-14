
import React from 'react';
import { GoldAccent } from './TextureUtils';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage: string;
  centered?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  backgroundImage,
  centered = true
}) => {
  return (
    <section className="relative py-20 md:py-32 bg-deco-plum overflow-hidden">
      {/* Background Image with Texture Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      ></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-deco-plum"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : 'ml-0 text-left'}`}>
          <h1 className="font-distrampler text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {/* Gold Accent Line */}
          <GoldAccent className={`mb-6 ${centered ? 'mx-auto' : 'ml-0'}`} />
          
          {description && (
            <p className="font-grosa text-xl md:text-2xl text-white/90">{description}</p>
          )}
        </div>
      </div>
      
      {/* Dubai Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-contain bg-repeat-x bg-bottom opacity-20" style={{ backgroundImage: 'url(/images/dubai-skyline.svg)' }}></div>
    </section>
  );
};

export default PageHeader;
