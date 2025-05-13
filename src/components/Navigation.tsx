
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          <a href="/" className="text-2xl font-parafina font-bold tracking-tighter text-deco-plum">
            DecoPaints
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative cursor-pointer">
              <span className="link-hover font-medium">Paints</span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['Marmorino', 'Limewash', 'Concrete Texture', 'Pearl Finish', 'Gold & Silver Leaf', 'Brick Finish', 'Stencil Painting'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors">{item}</a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className="link-hover font-medium">Flooring</span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['Micro-Topping & Micro-Cement', 'Terrazzo Flooring', 'Resin Bound Surface', 'Decorative Epoxy Flooring', 'Metallic Epoxy Flooring', 'Stamped Concrete'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors">{item}</a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className="link-hover font-medium">Locations</span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <a href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors">UAE Emirates Hub</a>
                  <a href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors">Dubai Districts</a>
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className="link-hover font-medium">Company</span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  {['About', 'Careers', 'Blog', 'Sustainability', 'Press & Media'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors">{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Get Estimate Button */}
          <a href="#" className="hidden md:block btn-cta">
            Get Estimate
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-deco-plum"
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
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X size={24} className="text-deco-plum" />
            </button>
          </div>
          
          <nav className="mt-10 flex flex-col space-y-6">
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">Paints</div>
              <div className="grid gap-3 pl-2">
                {['Marmorino', 'Limewash', 'Concrete Texture', 'Pearl Finish', 'Gold & Silver Leaf', 'Brick Finish', 'Stencil Painting'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">Flooring</div>
              <div className="grid gap-3 pl-2">
                {['Micro-Topping & Micro-Cement', 'Terrazzo Flooring', 'Resin Bound Surface', 'Decorative Epoxy Flooring', 'Metallic Epoxy Flooring', 'Stamped Concrete'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">Locations</div>
              <div className="grid gap-3 pl-2">
                <a href="#" className="text-deco-plum/80 hover:text-deco-plum">UAE Emirates Hub</a>
                <a href="#" className="text-deco-plum/80 hover:text-deco-plum">Dubai Districts</a>
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">Company</div>
              <div className="grid gap-3 pl-2">
                {['About', 'Careers', 'Blog', 'Sustainability', 'Press & Media'].map((item) => (
                  <a key={item} href="#" className="text-deco-plum/80 hover:text-deco-plum">{item}</a>
                ))}
              </div>
            </div>
            
            <a href="#" className="btn-cta w-full text-center mt-6">
              Get Estimate
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
