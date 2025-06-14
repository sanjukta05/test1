import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactCTAProps {
  className?: string;
  location?: string;
  bgColor?: 'dark' | 'light';
  cta?: string;
  onCtaClick?: () => void;
}

export default function ContactCTA({ className, location = "", bgColor = 'dark', cta = "Get Estimate", onCtaClick }: ContactCTAProps) {
  const isDark = bgColor === 'dark';

  return (
    <section className={cn(
      "py-16 relative overflow-hidden",
      isDark ? "bg-deco-plum text-white" : "bg-white text-deco-plum",
      className
    )}>
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-6">
                Transform Your Space {location ? `in ${location}` : 'Today'}
              </h2>
              <p className={cn("mb-8", isDark ? "text-white/90" : "text-deco-plum/80")}>
                Contact our expert team to discuss your project requirements and 
                schedule a consultation. We're ready to bring your vision to life with 
                our premium decorative finishes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium">Service Area</h3>
                    <p className={isDark ? "text-white/80" : "text-deco-plum/80"}>
                      {location || "UAE"} and surrounding areas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a 
                      href="tel:+971503119537" 
                      className={cn(
                        "transition-colors",
                        isDark ? "text-white/80 hover:text-white" : "text-deco-plum/80 hover:text-deco-plum"
                      )}
                    >
                      +971 50 311 9537
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:info@decopaints.ae" 
                      className={cn(
                        "transition-colors",
                        isDark ? "text-white/80 hover:text-white" : "text-deco-plum/80 hover:text-deco-plum"
                      )}
                    >
                      info@decopaints.ae
                    </a>
                  </div>
                </div>
              </div>
              
              <Button
                className={cn(
                  isDark ? "bg-white text-deco-plum hover:bg-white/90" : "bg-deco-denim text-white hover:bg-deco-denim/90"
                )}
                onClick={onCtaClick}
              >
                {cta}
              </Button>
            </div>
            
            <div>
              <div className={cn(
                "rounded-lg p-6 shadow-lg",
                isDark ? "bg-white" : "bg-deco-beige"
              )}>
                <h3 className="text-xl font-bold mb-4 text-deco-plum">Quick Inquiry</h3>
                <p className="mb-6 text-deco-plum/80">
                  Complete this form for a quick response from our team. We'll contact 
                  you to discuss your project requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deco-plum/80 mb-1">First Name</label>
                      <input type="text" className="w-full p-2 border rounded" placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deco-plum/80 mb-1">Last Name</label>
                      <input type="text" className="w-full p-2 border rounded" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-deco-plum/80 mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="Your email" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-deco-plum/80 mb-1">Phone</label>
                    <input type="tel" className="w-full p-2 border rounded" placeholder="Your phone number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-deco-plum/80 mb-1">Message</label>
                    <textarea 
                      className="w-full p-2 border rounded h-24" 
                      placeholder={`Please describe your ${location ? location + ' ' : ''}project requirements`}
                    ></textarea>
                  </div>
                  
                  <Button className="bg-deco-denim hover:bg-deco-denim/90 w-full">
                    Submit Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
