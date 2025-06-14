import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-deco-plum text-white relative overflow-hidden font-circular">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-deco-gold"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <Logo variant="light" className="mb-6" />
            </div>
            <p className="text-white/70 font-circular mb-6">
              Premium decorative paints and flooring solutions crafted with artisanal techniques and premium materials.
            </p>
          </div>
          
          {/* Decorative Paints */}
          <div id="footer-deco-paints">
            <h3 className="text-lg font-distrampler font-bold mb-6">Decorative Paints</h3>
            <ul className="space-y-2 font-circular">
              <li><Link to="/paints/marmorino" className="text-white/70 hover:text-white transition-colors">Marmorino</Link></li>
              <li><Link to="/paints/limewash" className="text-white/70 hover:text-white transition-colors">Limewash</Link></li>
              <li><Link to="/paints/concrete-texture" className="text-white/70 hover:text-white transition-colors">Concrete Texture</Link></li>
              <li><Link to="/paints/pearl-finish" className="text-white/70 hover:text-white transition-colors">Pearl Finish</Link></li>
              <li><Link to="/paints/gold-silver-leaf" className="text-white/70 hover:text-white transition-colors">Gold & Silver Leaf</Link></li>
              <li><Link to="/paints/brick-finish" className="text-white/70 hover:text-white transition-colors">Brick Finish</Link></li>
              <li><Link to="/paints/stencil-painting" className="text-white/70 hover:text-white transition-colors">Stencil Painting</Link></li>
            </ul>
          </div>
          
          {/* Decorative Flooring */}
          <div>
            <h3 className="text-lg font-distrampler font-bold mb-6">Decorative Flooring</h3>
            <ul className="space-y-2 font-circular">
              <li><Link to="/flooring/micro-cement" className="text-white/70 hover:text-white transition-colors">Micro-Topping & Micro-Cement</Link></li>
              <li><Link to="/flooring/terrazzo-flooring" className="text-white/70 hover:text-white transition-colors">Terrazzo Flooring</Link></li>
              <li><Link to="/flooring/resin-bound-surface" className="text-white/70 hover:text-white transition-colors">Resin Bound Surface</Link></li>
              <li><Link to="/flooring/decorative-epoxy" className="text-white/70 hover:text-white transition-colors">Decorative Epoxy Flooring</Link></li>
              <li><Link to="/flooring/metallic-epoxy" className="text-white/70 hover:text-white transition-colors">Metallic Epoxy Flooring</Link></li>
              <li><Link to="/flooring/stamped-concrete" className="text-white/70 hover:text-white transition-colors">Stamped Concrete</Link></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-distrampler font-bold mb-6">Contact</h3>
            <ul className="space-y-3 font-circular mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+971503119537" className="text-white/80 hover:text-white transition-colors">+971 50 311 9537</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@decopaints.ae" className="text-white/80 hover:text-white transition-colors">info@decopaints.ae</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-white/80 not-italic">
                  DecoPaints UAE, Al Marabea' St - Al Quoz - Dubai
                </address>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-deco-gold hover:text-deco-plum p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-deco-gold hover:text-deco-plum p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-deco-gold hover:text-deco-plum p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-deco-gold hover:text-deco-plum p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            {/* WhatsApp Business Link */}
            <div>
              <a 
                href="https://wa.me/971503119537"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors font-grosa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Business
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-circular">
            <div className="text-white/60 text-sm font-circular">
              © {new Date().getFullYear()} DecoPaints. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm font-circular">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dubai Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-contain bg-repeat-x bg-bottom opacity-10" style={{ backgroundImage: 'url(/dubai-skyline.svg)' }}></div>
    </footer>
  );
};

export default Footer;
