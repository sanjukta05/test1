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
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
];

// Updated finished projects with titles according to the images
const finishedProjects = [
  {
    image: "/lovable-uploads/5a1a3a99-4645-47b8-ba6c-1f7a7c29062d.png",
    title: "Marble-Effect Epoxy Living Room"
  },
  {
    image: "/lovable-uploads/bdb79e17-f267-4d98-a17d-b51b9b1be19f.png",
    title: "Sleek Modern Kitchen Epoxy Floor"
  },
  {
    image: "/lovable-uploads/60fccb75-69f9-4514-8116-a6a27029130b.png",
    title: "Residential Open Space Epoxy"
  },
  {
    image: "/lovable-uploads/2b252852-6ff7-49c1-80c8-968cc7895509.png",
    title: "Panoramic Lounge with Metallic Epoxy"
  },
  {
    image: "/lovable-uploads/e80c008d-8d22-4fc4-b042-540b18c20c9d.png",
    title: "Blue Marble Epoxy Bathroom"
  },
  {
    image: "/lovable-uploads/af8a3288-b269-44c6-9e69-b05a4e2d2224.png",
    title: "Black Marble Epoxy Corridor"
  }
];

const applications = [
  {
    title: "Modern Epoxy Kitchen",
    description:
      "A luxurious, high-gloss epoxy floor brings new brilliance and elegance to this premium kitchen setting.",
    image: "/lovable-uploads/cbce1490-717b-41a7-8f32-485f84418296.png"
  },
  {
    title: "Vibrant Epoxy Bar Interior",
    description:
      "A striking, multi-colored epoxy design transforms this bar and lounge into an artistic destination with a lively atmosphere.",
    image: "/lovable-uploads/ec618d48-48d4-4fcd-8230-79733fc768e5.png"
  },
  {
    title: "Contemporary Retail Space",
    description:
      "Creative, fluid epoxy floor art elevates the ambiance and sophistication of this modern retail store.",
    image: "/lovable-uploads/df1d4202-6591-4beb-bb5f-9c28b33b69f6.png"
  }
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
      heroImage="/lovable-uploads/e38bf94d-0713-426c-9102-64a96633d99a.png"
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
      applications={applications}
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
      finishedProjects={finishedProjects}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default DecorativeEpoxyPage;
