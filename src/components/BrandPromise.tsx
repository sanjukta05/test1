
import React, { useState } from 'react';
import { Droplet, Building, Paintbrush } from 'lucide-react';

const BrandPromise = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const brandValues = [
    {
      title: "Emirati Craftsmanship",
      description: "Techniques perfected in the heart of Dubai, our artisans blend traditional methods with modern innovation to create surfaces of unparalleled beauty and durability.",
      icon: <Paintbrush className="h-12 w-12 text-deco-plum" />,
    },
    {
      title: "Distinctive Materials",
      description: "Sourced globally, crafted locally. We select only the finest materials for our finishes, ensuring exceptional quality and a unique aesthetic for every project.",
      icon: <Droplet className="h-12 w-12 text-deco-plum" />,
    },
    {
      title: "Lifetime Elegance",
      description: "Surfaces that endure like the Emirates. Our commitment to quality ensures your investment maintains its beauty and integrity for generations to come.",
      icon: <Building className="h-12 w-12 text-deco-plum" />,
    },
  ];

  return (
    <section id="brand-promise" className="section bg-deco-beige relative overflow-hidden">
      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-parafina font-bold mb-4">Brand Promise</h2>
          <p className="text-lg font-grosa text-deco-plum/80">
            Our commitment to excellence is reflected in every project we undertake.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {brandValues.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Subtle Gold Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-deco-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className={`mb-6 transition-transform duration-300 ${activeIndex === index ? 'transform -translate-y-2' : ''}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-parafina font-bold mb-4">{value.title}</h3>
                <div className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-deco-plum/80 font-grosa">{value.description}</p>
                </div>
              </div>
              
              {/* Background Texture */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none ${index === 0 ? 'texture-limewash' : index === 1 ? 'texture-marble' : 'texture-concrete'}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Arch Shape */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full h-64 bg-white/10 rounded-full scale-[1.8] blur-xl"></div>
    </section>
  );
};

export default BrandPromise;
