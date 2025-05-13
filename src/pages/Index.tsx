
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BrandPromise from '../components/BrandPromise';
import FeaturedCollections from '../components/FeaturedCollections';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "DecoPaints | Transforming Spaces, Elevating Lifestyles";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <BrandPromise />
        <FeaturedCollections />
        {/* Additional sections will be added in future iterations */}
      </main>
      <Footer />
      
      {/* Floating Get Estimate Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-deco-denim text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90 z-40 group"
      >
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Get Estimate
        </span>
      </a>
    </div>
  );
};

export default Index;
