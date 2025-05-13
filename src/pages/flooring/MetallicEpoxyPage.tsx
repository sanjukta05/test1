
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Paintbrush, Layers, Star, Shield } from 'lucide-react';

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
      heroImage="/public/textures/terrazzo-texture.jpg"
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
    />
  );
};

export default MetallicEpoxyPage;
