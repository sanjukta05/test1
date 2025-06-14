import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Shield, Droplet, Clock, Star } from 'lucide-react';

const inProgressProjects = [
  "/lovable-uploads/49dc218a-718d-4e39-82d9-0f07641515c0.png",
  "/lovable-uploads/38e9d705-cef5-48dc-b152-a95eb6be2e5f.png",
  "/lovable-uploads/b1ac2bdf-2fe4-4725-a8fa-758fe89f943b.png",
  "/lovable-uploads/842364ee-16c7-48c3-ab91-96d46f801324.png",
  "/lovable-uploads/47724a80-587c-4269-b77d-7fbd0ef02fe7.png",
  "/lovable-uploads/049c4502-bba1-4d59-ad87-df6167ff50eb.png"
];

const inProgressTitles = [
  "Applying Two-Tone Microcement",
  "Finishing with a Roller",
  "Prepping Outdoor Floor",
  "Waterproofing a Villa Roof",
  "Leveling Indoor Floor",
  "Protective Coating Application"
];

const DecorativeEpoxyPage = () => {
  useEffect(() => {
    document.title = "Decorative Epoxy Flooring | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Decorative Epoxy Flooring"
      heroTitle="High-Gloss Sophisticated Flooring"
      heroDescription="Stunning high-performance surfaces with exceptional depth and brilliance that combine unmatched durability with sophisticated visual appeal."
      heroImage="/public/textures/concrete-texture.jpg"
      benefits={[
        {
          title: "Extreme Durability",
          description: "Provides incredible abrasion, impact, and chemical resistance for flooring that maintains its beauty despite heavy use.",
          icon: <Shield className="h-8 w-8" />
        },
        {
          title: "Chemical Resistance",
          description: "Impervious to most household and industrial chemicals, preventing staining and deterioration even with exposure.",
          icon: <Star className="h-8 w-8" />
        },
        {
          title: "Seamless Hygienic Surface",
          description: "Non-porous, joint-free surface prevents bacterial growth and simplifies cleaning for healthier environments.",
          icon: <Droplet className="h-8 w-8" />
        },
        {
          title: "Customization Options",
          description: "Available in countless colors and finishes from subtle solid tones to dynamic multi-color effects.",
          icon: <Clock className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "High-End Garages",
          description: "Transform utilitarian garage spaces into showroom-quality environments worthy of displaying premium vehicles with floors that resist automotive chemicals and tire marks.",
          image: "https://images.unsplash.com/photo-1621252179027-64f04c5f6fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Commercial Spaces",
          description: "Provide exceptional durability and easy maintenance for retail, healthcare, and institutional environments that require both beauty and performance.",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Kitchens",
          description: "Create stunning, seamless surfaces that withstand the demands of cooking environments while providing sophisticated contemporary aesthetics.",
          image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Thickness Options", value: "0.5mm thin coat to 3mm self-leveling systems" },
        { label: "Substrate Requirements", value: "Properly prepared concrete with <4% moisture content" },
        { label: "Cure Time in UAE Climate", value: "12-24 hours for foot traffic, 72 hours for full use" },
        { label: "Compressive Strength", value: ">10,000 PSI when fully cured" },
        { label: "Chemical Resistance", value: "Excellent against oil, fuels, many acids and alkalis" },
        { label: "Abrasion Resistance", value: "Less than 0.1g loss per 1000 cycles (Taber test)" },
        { label: "VOC Content", value: "Low VOC formulations available (<100g/L)" },
        { label: "Heat Resistance", value: "Continuous exposure up to 65°C" }
      ]}
      maintenance={[
        {
          title: "Daily Cleaning",
          description: "For routine maintenance, sweep or dust mop to remove abrasive particles, followed by damp mopping with a pH-neutral cleaner specifically formulated for epoxy floors."
        },
        {
          title: "UAE-Specific Products",
          description: "We recommend specific cleaning products available in the UAE market that are formulated to maintain epoxy clarity without leaving residues that could dull the finish."
        },
        {
          title: "Stain Response",
          description: "Although highly stain-resistant, promptly clean chemical spills to prevent potential etching. Avoid using abrasive cleaning pads or brushes that could scratch the surface."
        },
        {
          title: "Recoating Timeline",
          description: "With proper care, decorative epoxy should maintain its appearance for 7-10 years before requiring a maintenance coat, depending on traffic and use patterns."
        }
      ]}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default DecorativeEpoxyPage;
