
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deco-plum text-white relative overflow-hidden">
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>
      
      {/* Gold accent line */}
      <div className="h-1 w-full bg-deco-gold"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Paintbrush className="h-6 w-6 text-deco-gold" />
              <h3 className="text-xl font-parafina font-bold">DecoPaints</h3>
            </div>
            <p className="text-white/70 font-grosa mb-6">
              Premium decorative paints and flooring solutions crafted with artisanal techniques and premium materials.
            </p>
            <ul className="space-y-3">
              <li>
                <div className="text-white/80 hover:text-white transition-colors font-grosa cursor-pointer">Paints</div>
                <ul className="pl-4 mt-2 space-y-1">
                  <li><Link to="/paints/marmorino" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Marmorino</Link></li>
                  <li><Link to="/paints/limewash" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Limewash</Link></li>
                  <li><Link to="/paints/concrete-texture" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Concrete Texture</Link></li>
                </ul>
              </li>
              <li>
                <div className="text-white/80 hover:text-white transition-colors font-grosa cursor-pointer">Flooring</div>
                <ul className="pl-4 mt-2 space-y-1">
                  <li><Link to="/flooring/micro-cement" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Micro-Cement</Link></li>
                  <li><Link to="/flooring/terrazzo-flooring" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Terrazzo Flooring</Link></li>
                  <li><Link to="/flooring/decorative-epoxy" className="text-white/70 hover:text-white transition-colors font-grosa text-sm">Decorative Epoxy</Link></li>
                </ul>
              </li>
              <li><Link to="/locations" className="text-white/80 hover:text-white transition-colors font-grosa">Locations</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors font-grosa">Company</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-parafina font-bold mb-6">Contact</h3>
            <ul className="space-y-3 font-grosa">
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
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-parafina font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
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
            
            {/* Awards and Certifications */}
            <div className="mt-8">
              <h4 className="text-sm font-bold text-white/90 mb-4 font-grosa">Awards & Certifications</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 p-2 rounded">
                  <img src="/images/award-1.svg" alt="Design Award" className="h-10 w-auto" />
                </div>
                <div className="bg-white/10 p-2 rounded">
                  <img src="/images/certification-1.svg" alt="UAE Green Building" className="h-10 w-auto" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="relative">
            <h3 className="text-lg font-parafina font-bold mb-6">Stay Updated</h3>
            <p className="text-white/80 mb-4 text-sm font-grosa">Subscribe to receive updates on new finishes and exclusive offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-deco-gold font-grosa"
              />
              <button 
                type="submit" 
                className="px-4 py-2 rounded-full bg-deco-gold text-deco-plum hover:bg-opacity-90 transition-colors font-grosa font-medium"
              >
                Subscribe
              </button>
            </form>
            
            {/* WhatsApp Business Link */}
            <div className="mt-6">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm font-grosa">
              © {new Date().getFullYear()} DecoPaints. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm font-grosa">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-white/60">
                <span className="text-deco-gold">العربية</span> | English
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dubai Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-contain bg-repeat-x bg-bottom opacity-10" style={{ backgroundImage: 'url(/images/dubai-skyline.svg)' }}></div>
    </footer>
  );
};

export default Footer;
