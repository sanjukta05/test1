import React, { useState, useEffect } from 'react';
import { Menu, X, Paintbrush, Droplet, Building } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Paintbrush className={`h-6 w-6 transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`} />
            <span className={`text-2xl font-parafina font-bold tracking-tighter transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
              DecoPaints
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative cursor-pointer">
              <span className={`flex items-center gap-1 link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                <Paintbrush className="h-4 w-4" />
                Paints
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['Marmorino', 'Limewash', 'Concrete Texture', 'Pearl Finish', 'Gold & Silver Leaf', 'Brick Finish', 'Stencil Painting'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`flex items-center gap-1 link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                <Droplet className="h-4 w-4" />
                Flooring
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['Micro-Topping & Micro-Cement', 'Terrazzo Flooring', 'Resin Bound Surface', 'Decorative Epoxy Flooring', 'Metallic Epoxy Flooring', 'Stamped Concrete'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`flex items-center gap-1 link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                <Building className="h-4 w-4" />
                Locations
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <a href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">UAE Emirates Hub</span>
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Dubai Districts</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                Company
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['About', 'Careers', 'Blog', 'Sustainability', 'Press & Media'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <span className={`text-sm transition-colors ${isScrolled ? 'text-deco-lavender' : 'text-white/70'}`}>
                <span className={isScrolled ? 'text-deco-gold' : 'text-deco-gold'}>العربية</span> | English
              </span>
            </div>
          </nav>

          {/* Get Estimate Button */}
          <a href="#" className="hidden md:flex items-center btn-cta">
            <Paintbrush className="mr-2 h-4 w-4" />
            Get Estimate
          </a>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="flex items-center gap-2">
              <Paintbrush className="h-6 w-6 text-deco-plum" />
              <span className="text-2xl font-parafina font-bold tracking-tighter text-deco-plum">
                DecoPaints
              </span>
            </a>
            
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X size={24} className="text-deco-plum" />
            </button>
          </div>
          
          <nav className="mt-10 flex flex-col space-y-6 font-grosa">
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4 flex items-center gap-2">
                <Paintbrush className="h-5 w-5 text-deco-plum" />
                <span className="text-deco-plum">Paints</span>
              </div>
              <div className="grid gap-3 pl-2">
                {['Marmorino', 'Limewash', 'Concrete Texture', 'Pearl Finish', 'Gold & Silver Leaf', 'Brick Finish', 'Stencil Painting'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4 flex items-center gap-2">
                <Droplet className="h-5 w-5 text-deco-plum" />
                <span className="text-deco-plum">Flooring</span>
              </div>
              <div className="grid gap-3 pl-2">
                {['Micro-Topping & Micro-Cement', 'Terrazzo Flooring', 'Resin Bound Surface', 'Decorative Epoxy Flooring', 'Metallic Epoxy Flooring', 'Stamped Concrete'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-deco-plum" />
                <span className="text-deco-plum">Locations</span>
              </div>
              <div className="grid gap-3 pl-2">
                <a href="#" className="text-deco-plum/80 hover:text-deco-plum">UAE Emirates Hub</a>
                <a href="#" className="text-deco-plum/80 hover:text-deco-plum">Dubai Districts</a>
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">
                <span className="text-deco-plum">Company</span>
              </div>
              <div className="grid gap-3 pl-2">
                {['About', 'Careers', 'Blog', 'Sustainability', 'Press & Media'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex justify-center border-b border-deco-beige pb-4">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-deco-gold">العربية</a>
                <span>|</span>
                <a href="#" className="text-deco-plum font-medium">English</a>
              </div>
            </div>
            
            <a href="#" className="btn-cta w-full text-center mt-6 flex items-center justify-center">
              <Paintbrush className="mr-2 h-4 w-4" />
              Get Estimate
            </a>
          </nav>
        </div>
        
        {/* Decorative Elements for Mobile Menu */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-5 geometric-pattern"></div>
      </div>
    </header>
  );
};

export default Navigation;
