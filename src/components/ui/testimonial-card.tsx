
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({ quote, author, role, location, rating = 5, className }: TestimonialProps) {
  return (
    <Card className={cn("overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full", className)}>
      <CardContent className="pt-6 px-6 pb-6 bg-white relative h-full flex flex-col">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-deco-gold to-deco-gold/30"></div>
        
        {/* Rating stars */}
        <div className="flex mb-4 text-deco-gold">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" className="mr-0.5" />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="font-grosa text-deco-plum/80 italic mb-4 flex-grow">
          "{quote}"
        </blockquote>
        
        {/* Author info */}
        <footer className="mt-auto">
          <p className="font-parafina font-semibold text-deco-plum">{author}</p>
          {(role || location) && (
            <p className="text-sm text-deco-plum/60">
              {role && <span>{role}</span>}
              {role && location && <span> - </span>}
              {location && <span>{location}</span>}
            </p>
          )}
        </footer>
      </CardContent>
    </Card>
  );
}
