import React, { useState, useEffect } from 'react';
import { ArrowDown, Paintbrush, Droplet, Building } from 'lucide-react';
interface HeroSectionProps {
  openEstimateForm?: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  openEstimateForm
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // Updated hero slides to use user-uploaded images
  const heroSlides = [{
    image: '/lovable-uploads/394a4a9c-b389-49d9-b662-9ecfcb213a23.png',
    heading: 'Elevate Every Surface',
    subheading: 'Transforming Spaces, Elevating Lifestyles'
  }, {
    image: '/lovable-uploads/67b298fb-1e2b-4587-bed1-fde91b74b433.png',
    heading: 'Artisan Craftsmanship',
    subheading: 'Techniques Perfected by Master Craftsmen'
  }, {
    image: '/lovable-uploads/25ef366b-9ad1-444b-9469-2fb1ec3065e4.png',
    heading: 'Luxury in Every Detail',
    subheading: 'Premium Materials, Extraordinary Results'
  }];
  useEffect(() => {
    setIsLoaded(true);

    // Show tagline after a delay
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    // Set up hero slider
    const sliderTimer = setInterval(() => {
      setActiveHero(prev => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => {
      clearTimeout(taglineTimer);
      clearInterval(sliderTimer);
    };
  }, []);
  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-deco-plum geometric-pattern font-circular">
      {/* Background Video or Image */}
      {isVideoPlaying ? <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="object-cover w-full h-full opacity-40">
            <source src="/videos/luxury-texture.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> : <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`} style={{
      backgroundImage: `url('${heroSlides[activeHero].image}')`
    }} aria-hidden="true"></div>}
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deco-plum/40 to-deco-plum/90"></div>
      
      {/* Subtle Gold Shimmer Overlay */}
      <div className="absolute inset-0 gold-shimmer opacity-20"></div>
      
      {/* Arch Motif */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-arch-gradient opacity-50"></div>

      {/* Hero Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {heroSlides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all ${activeHero === index ? 'bg-white scale-125' : 'bg-white/40'}`} onClick={() => setActiveHero(index)} aria-label={`Slide ${index + 1}`}></button>)}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-zinc-50 text-8xl font-normal font-distrampler">
            {heroSlides[activeHero].heading}
          </h1>
          
          <div className={`overflow-hidden h-12 mb-8 transition-all duration-1000 ${showTagline ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl text-white/90 animate-fade-in md:text-2xl font-circular">
              {heroSlides[activeHero].subheading}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#textures" className={`btn-outline inline-flex items-center gap-2 text-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} font-circular`}>
              <Building className="w-5 h-5" />
              Discover Our Finishes
            </a>
            <button type="button" className={`btn-cta inline-flex items-center gap-2 text-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} font-circular`} onClick={openEstimateForm}>
              <Paintbrush className="w-5 h-5" />
              Get Estimate
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce z-20">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>;
};
export default HeroSection;
