
import React, { useState, useEffect } from 'react';
import { ArrowDown, Paintbrush, Droplet, Building } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      heading: 'Elevate Every Surface',
      subheading: 'Transforming Spaces, Elevating Lifestyles'
    },
    {
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      heading: 'Artisan Craftsmanship',
      subheading: 'Techniques Perfected in the Heart of Dubai'
    },
    {
      image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      heading: 'Luxury in Every Detail',
      subheading: 'Premium Materials, Extraordinary Results'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Show tagline after a delay
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    // Set up hero slider
    const sliderTimer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => {
      clearTimeout(taglineTimer);
      clearInterval(sliderTimer);
    };
  }, []);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deco-plum geometric-pattern">
      {/* Background Video or Image */}
      {isVideoPlaying ? (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="object-cover w-full h-full opacity-40"
          >
            <source src="/videos/luxury-texture.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${heroSlides[activeHero].image}')` }}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deco-plum/40 to-deco-plum/90"></div>
      
      {/* Subtle Gold Shimmer Overlay */}
      <div className="absolute inset-0 gold-shimmer opacity-20"></div>
      
      {/* Background Video Toggle */}
      <button 
        className="absolute bottom-8 right-8 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Toggle background video"
        onClick={toggleVideo}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Arab-inspired Arch Motif */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-arch-gradient opacity-50"></div>

      {/* Hero Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${activeHero === index ? 'bg-white scale-125' : 'bg-white/40'}`}
            onClick={() => setActiveHero(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`font-parafina text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            {heroSlides[activeHero].heading}
          </h1>
          
          <div 
            className={`overflow-hidden h-12 mb-8 transition-all duration-1000 ${showTagline ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="font-grosa text-xl md:text-2xl text-white/90 animate-fade-in">
              {heroSlides[activeHero].subheading}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#discover" 
              className={`btn-outline inline-flex items-center gap-2 text-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
            >
              <Building className="w-5 h-5" />
              Discover Our Finishes
            </a>
            
            <a 
              href="#estimate" 
              className={`btn-cta inline-flex items-center gap-2 text-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
            >
              <Paintbrush className="w-5 h-5" />
              Get Estimate
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce z-20">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
