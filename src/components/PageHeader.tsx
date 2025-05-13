
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, backgroundImage }) => {
  return (
    <section className="relative py-20 md:py-32 bg-deco-plum">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-deco-plum"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
