
import React from 'react';
import { cn } from '@/lib/utils';
import { TestimonialCard } from './ui/testimonial-card';
import { Award, ShieldCheck, Heart } from 'lucide-react';
interface SocialProofProps {
  className?: string;
  location?: string;
}
export default function SocialProof({
  className,
  location = ""
}: SocialProofProps) {
  const locationText = location ? ` in ${location}` : '';
  return <section className={cn("py-16 bg-deco-beige relative", className)}>
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* CHANGED: use font-distrampler for section heading */}
          <h2 className="font-distrampler mb-4 text-5xl font-normal">Why Clients Trust Us{locationText}</h2>
          <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
          <p className="font-grosa text-deco-plum/80 text-xl">
            Our commitment to excellence and premium results has earned us the trust of clients across the UAE.
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="h-16 w-16 rounded-full bg-deco-beige flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-deco-plum" />
            </div>
            {/* CHANGED: card titles use font-distrampler */}
            <h3 className="font-distrampler text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-deco-plum/80">
              We use only the finest materials, sourced from Italy and France, ensuring exceptional durability and beauty.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="h-16 w-16 rounded-full bg-deco-beige flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-deco-plum" />
            </div>
            <h3 className="font-distrampler text-xl font-bold mb-2">5-Year Warranty</h3>
            <p className="text-deco-plum/80">
              Our confidence in our workmanship and materials allows us to offer an industry-leading warranty.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
            <div className="h-16 w-16 rounded-full bg-deco-beige flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-deco-plum" />
            </div>
            <h3 className="font-distrampler text-xl font-bold mb-2">Client Satisfaction</h3>
            <p className="text-deco-plum/80">
              With a 98% client satisfaction rate, we're dedicated to exceeding expectations on every project.
            </p>
          </div>
        </div>
        
        {/* Testimonials */}
        {/* CHANGED: use font-distrampler for subheading */}
        <h3 className="font-distrampler mb-8 text-center text-5xl font-normal">What Our Clients Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard quote="DecoPaints transformed our villa with their exceptional Marmorino finish. Their attention to detail resulted in a truly spectacular outcome." author="Mohammed A." role="Villa Owner" location={location || "Palm Jumeirah"} />
          
          <TestimonialCard quote="As an interior designer, I rely on DecoPaints for their consistent quality and ability to understand the unique requirements of each project." author="Sarah K." role="Interior Designer" location="Dubai" />
          
          <TestimonialCard quote="The micro-cement flooring they installed in our office has transformed the space completely. Professional team and excellent results." author="Ahmed R." role="Business Owner" location={location || "Business Bay"} />
        </div>
      </div>
    </section>;
}
