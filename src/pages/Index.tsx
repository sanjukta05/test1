
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BrandPromise from '../components/BrandPromise';
import FeaturedCollections from '../components/FeaturedCollections';
import Footer from '../components/Footer';
import { TextureGrid, GeometricDivider, GoldAccent } from '../components/TextureUtils';
import { Paintbrush, Droplet } from 'lucide-react';

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
        
        {/* Texture Section */}
        <section id="textures" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Distinctive Finishes</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Discover our exquisite range of decorative surfaces, each with a unique character and unparalleled elegance.
              </p>
            </div>
            
            <TextureGrid />
          </div>
        </section>
        
        <GeometricDivider />
        
        <FeaturedCollections />
        
        {/* Process Experience Section */}
        <section className="section bg-deco-beige relative overflow-hidden">
          {/* Subtle Geometric Pattern */}
          <div className="absolute inset-0 geometric-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Our Artisanal Process</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Every project is approached with meticulous attention to detail and executed with master craftsmanship.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { title: "Consultation", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "In-depth understanding of your vision and space requirements" },
                  { title: "Design", icon: <Droplet className="h-8 w-8 text-deco-plum" />, desc: "Custom color and finish recommendations for your project" },
                  { title: "Preparation", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "Meticulous surface preparation for flawless application" },
                  { title: "Application", icon: <Droplet className="h-8 w-8 text-deco-plum" />, desc: "Master artisans execute with precision techniques" },
                  { title: "Completion", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "Final inspection and maintenance guidance" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="z-10">
                      <div className="rounded-full bg-white p-4 shadow-md border-2 border-deco-gold/30 mb-6">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-parafina text-xl font-bold mb-2">{step.title}</h3>
                    <p className="font-grosa text-center text-sm text-deco-plum/80">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <a href="#" className="btn-cta inline-flex items-center gap-2">
                  <Paintbrush className="h-5 w-5" />
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Floating Get Estimate Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-deco-denim text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90 z-40 group flex items-center gap-2"
      >
        <Paintbrush className="h-5 w-5 group-hover:animate-pulse" />
        Get Estimate
      </a>
    </div>
  );
};

export default Index;
