
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useElfsightForm } from './ElfsightFormContext';

interface ContactCTAProps {
  className?: string;
  location?: string;
  bgColor?: 'dark' | 'light';
  cta?: string;
  onCtaClick?: () => void;
}
export default function ContactCTA({
  className,
  location = "",
  bgColor = 'dark',
  cta = "Get Estimate",
  onCtaClick
}: ContactCTAProps) {
  const isDark = bgColor === 'dark';
  const { openForm } = useElfsightForm();

  // Always use openForm when "onCtaClick" isn't specified
  const handleCtaClick = onCtaClick || openForm;

  const ELFSIGHT_APP_ID = "4ae4b665-d18d-434d-bf98-3c9f9bc376b1";
  return <section className={cn("py-16 relative overflow-hidden", isDark ? "bg-deco-plum text-white" : "bg-white text-deco-plum", className)}>
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-normal text-5xl">
                Transform Your Space {location ? `in ${location}` : 'Today'}
              </h2>
              <p className={cn("mb-8", isDark ? "text-white/90" : "text-deco-plum/80", "font-circular")}>
                Contact our expert team to discuss your project requirements and 
                schedule a consultation. We're ready to bring your vision to life with 
                our premium decorative finishes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium font-distrampler">Service Area</h3>
                    <p className={isDark ? "text-white/80 font-circular" : "text-deco-plum/80 font-circular"}>
                      {location || "UAE"} and surrounding areas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium font-distrampler">Phone</h3>
                    <a href="tel:+971503119537" className={cn("transition-colors font-circular", isDark ? "text-white/80 hover:text-white" : "text-deco-plum/80 hover:text-deco-plum")}>
                      +971 50 311 9537
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className={cn("h-5 w-5 mr-3", isDark ? "text-deco-gold" : "text-deco-plum")} />
                  <div>
                    <h3 className="font-medium font-distrampler">Email</h3>
                    <a href="mailto:info@decopaints.ae" className={cn("transition-colors font-circular", isDark ? "text-white/80 hover:text-white" : "text-deco-plum/80 hover:text-deco-plum")}>
                      info@decopaints.ae
                    </a>
                  </div>
                </div>
              </div>
              
              <Button className={cn(isDark ? "bg-white text-deco-plum hover:bg-white/90" : "bg-deco-denim text-white hover:bg-deco-denim/90")} onClick={handleCtaClick}>
                {cta}
              </Button>
            </div>
            {/* Embed Elfsight Form */}
            <div>
              <div className={cn("rounded-lg p-6 shadow-lg flex flex-col items-center justify-center min-h-[400px]", isDark ? "bg-white" : "bg-deco-beige")}>
                <div className={`elfsight-app-${ELFSIGHT_APP_ID} w-full`} data-elfsight-app-lazy style={{
                minWidth: "100%",
                minHeight: 450
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
