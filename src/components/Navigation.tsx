
import React, { useState, useEffect } from 'react';
import { Menu, X, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="flex items-center gap-2">
            <Paintbrush className={`h-6 w-6 transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`} />
            <span className={`text-2xl font-parafina font-bold tracking-tighter transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
              DecoPaints
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative cursor-pointer">
              <span className={`link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                Decorative Paints
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <Link to="/paints/marmorino" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Marmorino</span>
                  </Link>
                  <Link to="/paints/limewash" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Limewash</span>
                  </Link>
                  <Link to="/paints/concrete-texture" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Concrete Texture</span>
                  </Link>
                  <Link to="/paints/pearl-finish" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Pearl Finish</span>
                  </Link>
                  <Link to="/paints/gold-silver-leaf" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Gold & Silver Leaf</span>
                  </Link>
                  <Link to="/paints/brick-finish" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Brick Finish</span>
                  </Link>
                  <Link to="/paints/stencil-painting" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Stencil Painting</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                Flooring
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <Link to="/flooring/micro-cement" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Micro-Topping & Micro-Cement</span>
                  </Link>
                  <Link to="/flooring/terrazzo-flooring" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Terrazzo Flooring</span>
                  </Link>
                  <Link to="/flooring/resin-bound-surface" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Resin Bound Surface</span>
                  </Link>
                  <Link to="/flooring/decorative-epoxy" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Decorative Epoxy Flooring</span>
                  </Link>
                  <Link to="/flooring/metallic-epoxy" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Metallic Epoxy Flooring</span>
                  </Link>
                  <Link to="/flooring/stamped-concrete" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Stamped Concrete</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                Locations
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <Link to="/locations" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa font-medium">
                    <span className="text-deco-plum">All Locations</span>
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/dubai" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Dubai</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/abudhabi" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Abu Dhabi</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/sharjah" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Sharjah</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/ajman" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Ajman</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/rak" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Ras Al Khaimah</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/fujairah" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Fujairah</span>
                    </Link>
                  </div>
                  
                  <div className="group/sub relative">
                    <Link to="/locations/uaq" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                      <span className="text-deco-plum">Umm Al Quwain</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer">
              <span className={`link-hover font-medium transition-colors ${isScrolled ? 'text-deco-plum' : 'text-white'}`}>
                Company
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 grid gap-2">
                  <Link to="/about" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">About</span>
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Careers</span>
                  </Link>
                  <Link to="/blog" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Blog</span>
                  </Link>
                  <Link to="/sustainability" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Sustainability</span>
                  </Link>
                  <Link to="/press-media" className="block px-4 py-2 hover:bg-deco-beige rounded-md transition-colors font-grosa">
                    <span className="text-deco-plum">Press & Media</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Get Estimate Button */}
          <Link to="/contact" className="hidden md:inline-flex items-center bg-deco-denim text-white px-6 py-2 rounded-full hover:shadow-md transition-all">
            Get Estimate
          </Link>

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
            <Link to="/" className="flex items-center gap-2">
              <Paintbrush className="h-6 w-6 text-deco-plum" />
              <span className="text-2xl font-parafina font-bold tracking-tighter text-deco-plum">
                DecoPaints
              </span>
            </Link>
            
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X size={24} className="text-deco-plum" />
            </button>
          </div>
          
          <nav className="mt-10 flex flex-col space-y-6 font-grosa">
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">
                <span className="text-deco-plum">Decorative Paints</span>
              </div>
              <div className="grid gap-3 pl-2">
                <Link to="/paints/marmorino" className="text-deco-plum/80 hover:text-deco-plum">Marmorino</Link>
                <Link to="/paints/limewash" className="text-deco-plum/80 hover:text-deco-plum">Limewash</Link>
                <Link to="/paints/concrete-texture" className="text-deco-plum/80 hover:text-deco-plum">Concrete Texture</Link>
                <Link to="/paints/pearl-finish" className="text-deco-plum/80 hover:text-deco-plum">Pearl Finish</Link>
                <Link to="/paints/gold-silver-leaf" className="text-deco-plum/80 hover:text-deco-plum">Gold & Silver Leaf</Link>
                <Link to="/paints/brick-finish" className="text-deco-plum/80 hover:text-deco-plum">Brick Finish</Link>
                <Link to="/paints/stencil-painting" className="text-deco-plum/80 hover:text-deco-plum">Stencil Painting</Link>
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">
                <span className="text-deco-plum">Flooring</span>
              </div>
              <div className="grid gap-3 pl-2">
                <Link to="/flooring/micro-cement" className="text-deco-plum/80 hover:text-deco-plum">Micro-Topping & Micro-Cement</Link>
                <Link to="/flooring/terrazzo-flooring" className="text-deco-plum/80 hover:text-deco-plum">Terrazzo Flooring</Link>
                <Link to="/flooring/resin-bound-surface" className="text-deco-plum/80 hover:text-deco-plum">Resin Bound Surface</Link>
                <Link to="/flooring/decorative-epoxy" className="text-deco-plum/80 hover:text-deco-plum">Decorative Epoxy Flooring</Link>
                <Link to="/flooring/metallic-epoxy" className="text-deco-plum/80 hover:text-deco-plum">Metallic Epoxy Flooring</Link>
                <Link to="/flooring/stamped-concrete" className="text-deco-plum/80 hover:text-deco-plum">Stamped Concrete</Link>
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">
                <span className="text-deco-plum">Locations</span>
              </div>
              <div className="grid gap-3 pl-2">
                <Link to="/locations" className="text-deco-plum/80 hover:text-deco-plum font-medium">All Locations</Link>
                <div className="h-px bg-gray-100 my-2"></div>
                <Link to="/locations/dubai" className="text-deco-plum/80 hover:text-deco-plum">Dubai</Link>
                <Link to="/locations/abudhabi" className="text-deco-plum/80 hover:text-deco-plum">Abu Dhabi</Link>
                <Link to="/locations/sharjah" className="text-deco-plum/80 hover:text-deco-plum">Sharjah</Link>
                <Link to="/locations/ajman" className="text-deco-plum/80 hover:text-deco-plum">Ajman</Link>
                <Link to="/locations/rak" className="text-deco-plum/80 hover:text-deco-plum">Ras Al Khaimah</Link>
                <Link to="/locations/fujairah" className="text-deco-plum/80 hover:text-deco-plum">Fujairah</Link>
                <Link to="/locations/uaq" className="text-deco-plum/80 hover:text-deco-plum">Umm Al Quwain</Link>
              </div>
            </div>
            
            <div className="border-b border-deco-beige pb-4">
              <div className="font-medium text-lg mb-4">
                <span className="text-deco-plum">Company</span>
              </div>
              <div className="grid gap-3 pl-2">
                <Link to="/about" className="text-deco-plum/80 hover:text-deco-plum">About</Link>
                <Link to="/careers" className="text-deco-plum/80 hover:text-deco-plum">Careers</Link>
                <Link to="/blog" className="text-deco-plum/80 hover:text-deco-plum">Blog</Link>
                <Link to="/sustainability" className="text-deco-plum/80 hover:text-deco-plum">Sustainability</Link>
                <Link to="/press-media" className="text-deco-plum/80 hover:text-deco-plum">Press & Media</Link>
              </div>
            </div>
            
            <Link to="/contact" className="bg-deco-denim text-white px-6 py-3 rounded-full text-center">
              Get Estimate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
