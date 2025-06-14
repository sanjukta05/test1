
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Paintbrush, Layers, Star, Shield } from 'lucide-react';

// Updated finishedProjects array to include your latest uploads and custom titles
const finishedProjects = [
  {
    image: "/lovable-uploads/914a97c4-50e6-4fde-ba41-3505159ef959.png",
    title: "Grand Lobby – Black & Gold Art Deco Swirl"
  },
  {
    image: "/lovable-uploads/a452180c-2ca5-49e9-8951-88cf279d7b9b.png",
    title: "Penthouse Lounge – Golden Ember Epoxy"
  },
  {
    image: "/lovable-uploads/7b942e1f-ee28-4b07-a489-1cfc60901dbe.png",
    title: "Villa Foyer – Charcoal Mirror Metallic"
  },
  {
    image: "/lovable-uploads/4416aa9c-bdde-456d-b4f2-ca799a83ee4f.png",
    title: "Modern Living Room – Dramatic Metallic Swirl"
  },
  {
    image: "/lovable-uploads/57e8d13e-ce98-4288-96e7-23863c86b973.png",
    title: "Art Studio – Bronze & Aqua Epoxy Statement"
  },
  {
    image: "/lovable-uploads/287a1f0b-704d-45d4-8654-0ce1816885ee.png",
    title: "Contemporary Kitchen – Gold Veined Gloss"
  },
  {
    image: "/lovable-uploads/207fc2f6-6f7c-45a7-81e2-ea04475b6299.png",
    title: "Luxury Bathroom – Graphite Reflections"
  },
  {
    image: "/lovable-uploads/be13f47c-0e57-4032-9259-1abf6cb57372.png",
    title: "Designer Bath Suite – Marble Metallic Blend"
  },
  {
    image: "/lovable-uploads/856eac3d-70de-45f0-8d31-f36ebb78fc91.png",
    title: "Premium Kitchen – Flowing Metallic Counter"
  }
];

const inProgressProjects = [
  "/lovable-uploads/46dee5bb-41b5-47b3-83c5-ec809c487dd9.png",
  "/lovable-uploads/65835dc2-dcc6-459d-bba3-6005ef83056b.png",
  "/lovable-uploads/100c83ec-d191-4ed6-b450-d3b4a2d10161.png",
  "/lovable-uploads/56d316f2-e4b4-4e78-8b70-7c7e9aa31c0a.png",
  "/lovable-uploads/61ac847b-8114-4815-a91e-b9fceb60a443.png",
  "/lovable-uploads/76ae1d28-e912-4cf0-9751-4816ac539db4.png"
];

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
];

const MetallicEpoxyPage = () => {
  useEffect(() => {
    document.title = "Metallic Epoxy Flooring | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Metallic Epoxy Flooring"
      heroTitle="Dramatic Flowing Metallic Effects"
      heroDescription="Create stunning dimensional flooring with fluid, dynamic patterns that appear to have depth and movement beneath a glass-like finish."
      heroImage="/lovable-uploads/da6d6c5b-1007-4713-a5f1-168012d0a355.png"
      benefits={[
        {
          title: "Artistic Installations",
          description: "Each floor is a unique work of art with flowing patterns that can never be exactly duplicated, creating truly one-of-a-kind surfaces.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "3D Visual Effects",
          description: "Remarkable three-dimensional appearance with depth and movement that changes as lighting conditions shift throughout the day.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Exceptional Durability",
          description: "Combines dramatic visual impact with industrial-grade durability for stunning surfaces that withstand heavy traffic.",
          icon: <Shield className="h-8 w-8" />
        },
        {
          title: "Custom Color Combinations",
          description: "Unlimited color combinations allow for perfect coordination with interior design elements and brand identities.",
          icon: <Star className="h-8 w-8" />
        }
      ]}
      applications={[
        {
          title: "Statement Residential Areas",
          description: "Create unforgettable impressions in entryways, living areas, or master suites with dramatic floors that become conversation pieces.",
          image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "VIP Lounges",
          description: "Provide sophisticated, attention-commanding flooring for exclusive areas designed to impress discerning clients and guests.",
          image: "https://images.unsplash.com/photo-1630417886118-0d47acc7b1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Retail",
          description: "Create distinctive shopping environments that enhance brand positioning with floors that communicate sophistication and attention to detail.",
          image: "https://images.unsplash.com/photo-1552233657-afa61a23874a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
      techSpecs={[
        { label: "Effect Options", value: "Marble, cloud, geode, tiger eye, galaxy, lava flow" },
        { label: "Base Coat Specifications", value: "Solid color epoxy primer in complementary or contrasting shade" },
        { label: "Metallic Pigments", value: "Specialized mica-based pigments in various particle sizes" },
        { label: "Topcoat Options", value: "UV-stable polyaspartic or polyurethane clear coats" },
        { label: "Thickness", value: "2-3mm total system thickness" },
        { label: "Application Method", value: "Proprietary techniques including torching, air manipulation" },
        { label: "Substrate Requirements", value: "Properly prepared concrete with <4% moisture content" },
        { label: "Cure Time", value: "24-48 hours for foot traffic, 7 days for full cure" }
      ]}
      maintenance={[
        {
          title: "Visual Effect Preservation",
          description: "To maintain the dramatic metallic effects, avoid using acidic cleaners or abrasive scrubbers that could etch or scratch the clear topcoat that creates the glass-like finish."
        },
        {
          title: "Routine Cleaning",
          description: "Regular dust mopping followed by cleaning with neutral pH cleaners specifically formulated for high-gloss epoxy floors will maintain optimal appearance."
        },
        {
          title: "Scratch Prevention",
          description: "Use protective pads under furniture and avoid dragging heavy objects across the surface. For moving heavy items, lift or use soft-wheeled dollies."
        },
        {
          title: "Professional Maintenance",
          description: "Every 3-5 years, depending on traffic, a professional maintenance coat can restore the original brilliance and protect the metallic effects from degradation."
        }
      ]}
      finishedProjects={finishedProjects}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
    />
  );
};

export default MetallicEpoxyPage;
