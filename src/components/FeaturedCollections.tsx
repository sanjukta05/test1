
import React, { useState, useRef } from 'react';

const collections = [
  {
    id: 1,
    name: "Venetian Marmorino",
    image: "lovable-uploads/9.png",
    description: "Timeless elegance with a smooth, stone-like finish reminiscent of classical Venetian architecture."
  },
  {
    id: 2,
    name: "Gold Leaf Accents",
    image: "lovable-uploads/goldleaf.png",
    description: "Luxurious metallic highlights that capture and reflect light, adding opulence to any space."
  },
  {
    id: 3,
    name: "Concrete Textures",
    image: "lovable-uploads/conwall.jpg",
    description: "Industrial-inspired finishes that bring raw, urban aesthetics into contemporary interiors."
  },
  {
    id: 4,
    name: "Pearl Finishes",
    image: "lovable-uploads/pearlfinish.png",
    description: "Subtle iridescent surfaces that change with light conditions, creating dynamic environments."
  },
  {
    id: 5,
    name: "Terrazzo Flooring",
    image: "lovable-uploads/terrazzo.png",
    description: "Contemporary interpretation of the classic Italian terrazzo, combining durability with artistry."
  }
];

const roomTypes = ["All", "Living Room", "Kitchen", "Bathroom", "Bedroom", "Office"];
const styles = ["All", "Contemporary", "Classic", "Industrial", "Minimalist", "Art Deco"];

const FeaturedCollections = () => {
  const [activeRoomType, setActiveRoomType] = useState("All");
  const [activeStyle, setActiveStyle] = useState("All");
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-lg text-deco-plum/80">
            Explore our curated selection of premium finishes designed to transform your space.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <div className="text-sm font-medium text-deco-plum/70 flex items-center mr-2">Room Type:</div>
            {roomTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeRoomType === type 
                    ? 'bg-deco-plum text-white' 
                    : 'bg-deco-beige text-deco-plum hover:bg-deco-lavender/20'
                }`}
                onClick={() => setActiveRoomType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <div className="text-sm font-medium text-deco-plum/70 flex items-center mr-2">Style:</div>
            {styles.map((style) => (
              <button
                key={style}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeStyle === style 
                    ? 'bg-deco-plum text-white' 
                    : 'bg-deco-beige text-deco-plum hover:bg-deco-lavender/20'
                }`}
                onClick={() => setActiveStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        
        {/* Collection Gallery */}
        <div className="relative">
          {/* Scroll Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-6 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collections.map((collection) => (
              <div 
                key={collection.id}
                className="min-w-[300px] md:min-w-[400px] snap-start mx-4 first:ml-0 last:mr-0 rounded-lg overflow-hidden shadow-sm"
                onMouseEnter={() => setHoveredCollection(collection.id)}
                onMouseLeave={() => setHoveredCollection(null)}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCollection === collection.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-deco-plum/80 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                    hoveredCollection === collection.id ? 'opacity-100' : 'opacity-90'
                  }`}>
                    <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
                    <p className={`text-white/90 mb-4 text-sm transition-all duration-500 ${
                      hoveredCollection === collection.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    }`}>
                      {collection.description}
                    </p>
                    <a 
                      href="#" 
                      className={`text-white bg-deco-denim/80 hover:bg-deco-denim px-4 py-2 rounded-full inline-block text-sm transition-all duration-300 ${
                        hoveredCollection === collection.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      Explore {collection.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
