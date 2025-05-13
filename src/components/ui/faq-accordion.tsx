
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  location?: string;
}

export function FAQAccordion({ items, className, location = "" }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full", className)}
    >
      {items.map((faq, index) => (
        <AccordionItem 
          key={index}
          value={`item-${index}`}
          className="border-b border-deco-gold/20 last:border-none"
        >
          <AccordionTrigger className="text-xl font-parafina font-semibold py-6 hover:text-deco-plum/80 hover:no-underline">
            {faq.question.replace('{location}', location)}
          </AccordionTrigger>
          <AccordionContent className="text-deco-plum/80 pb-6">
            <p className="font-grosa">{faq.answer.replace('{location}', location)}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
