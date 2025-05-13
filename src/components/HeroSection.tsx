
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Show tagline after a delay
    const timer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deco-plum">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}
        aria-hidden="true"
      ></div>
      
      {/* Background Video Toggle (placeholder for now) */}
      <button 
        className="absolute bottom-8 right-8 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Toggle background video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            Elevate Every Surface
          </h1>
          
          <div 
            className={`overflow-hidden h-12 mb-8 transition-all duration-1000 ${showTagline ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Transforming Spaces, Elevating Lifestyles
            </p>
          </div>
          
          <a 
            href="#estimate" 
            className={`btn-cta inline-block text-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          >
            Get Estimate
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
