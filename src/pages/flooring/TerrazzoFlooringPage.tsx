
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Clock, Star, Layers, Paintbrush } from 'lucide-react';

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

// Finished project images and their descriptive titles:
const finishedProjects = [
  {
    image: "/lovable-uploads/a1380385-7acb-40bd-9f89-aca5d7162af7.png",
    title: "Colorful Terrazzo Floor – Luxury Living Room"
  },
  {
    image: "/lovable-uploads/cb3fbbca-6a68-4b2a-97d7-73bf89cd91b3.png",
    title: "Geometric Black & Gold Terrazzo – Grand Entrance"
  },
  {
    image: "/lovable-uploads/c3fabbb7-f3ad-4f59-94d4-c5335dd356a3.png",
    title: "Classic Beige Terrazzo – Sculptural Staircase"
  },
  {
    image: "/lovable-uploads/b9778cbe-5f5a-489e-bdd8-49b225952568.png",
    title: "Red Hexagon Terrazzo Tiles – Modern Kitchen"
  },
  {
    image: "/lovable-uploads/ad4d2868-157f-486f-88d6-cbe6bc527f0e.png",
    title: "Contemporary Red & Black Terrazzo – Patterned Kitchen"
  },
  {
    image: "/lovable-uploads/c5f18927-a1c8-467e-9e62-529c0818c1de.png",
    title: "Dark Terrazzo Spa Retreat – Luxurious Bathroom"
  }
];

// New featured applications from uploaded images
const terrazzoApplications = [
  {
    title: "Luxurious Terrazzo Bathroom",
    description: "A serene, hotel-style bathroom featuring beautifully patterned terrazzo flooring and modern lighting design.",
    image: "/lovable-uploads/928c4da9-4bb8-4a30-8732-ba77f3140d35.png"
  },
  {
    title: "Designer Terrazzo Dining Room",
    description: "An elegant formal dining area showcasing striking brown-toned terrazzo floors and custom accent wall paneling.",
    image: "/lovable-uploads/0e46cf06-f50c-4fd6-839e-5cf18053e9ed.png"
  },
  {
    title: "Marble & Terrazzo Kitchen",
    description: "High-end kitchen space uniting dramatic marble finishes with modern terrazzo flooring for a contemporary look.",
    image: "/lovable-uploads/924c39a8-986a-43bf-925c-60685a97c6d1.png"
  }
];

const TerrazzoFlooringPage = () => {
  useEffect(() => {
    document.title = "Terrazzo Flooring | DecoPaints";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductLayout
      type="flooring"
      title="Terrazzo Flooring"
      heroTitle="Luxurious Terrazzo Finishes"
      heroDescription="Timeless flooring with stunning custom aggregate designs that combine artistic beauty with unmatched durability for statement surfaces."
      heroImage="/lovable-uploads/2913e48c-2719-48e2-af7a-5a65f2b8d26e.png"
      benefits={[
        {
          title: "Endless Design Possibilities",
          description: "Create truly custom floors with our extensive selection of marble, granite, glass, and other decorative aggregates.",
          icon: <Paintbrush className="h-8 w-8" />
        },
        {
          title: "Extreme Longevity",
          description: "With proper maintenance, terrazzo floors will maintain their beauty for decades, making them a truly sustainable choice.",
          icon: <Clock className="h-8 w-8" />
        },
        {
          title: "Seamless Installation",
          description: "Modern terrazzo can be installed with minimal joints, creating sweeping expanses of continuous pattern.",
          icon: <Layers className="h-8 w-8" />
        },
        {
          title: "Inlay Options",
          description: "Incorporate decorative brass, aluminum, or other metal divider strips to create geometric patterns or define spaces.",
          icon: <Star className="h-8 w-8" />
        }
      ]}
      applications={terrazzoApplications}
      techSpecs={[
        { label: "Aggregate Options", value: "Marble, granite, quartz, glass, shell, mother-of-pearl" },
        { label: "Thickness Variations", value: "6mm overlay to 25mm full bed" },
        { label: "Polishing Levels", value: "Standard 1500 grit to 3000+ high polish" },
        { label: "Divider Strip Options", value: "Brass, aluminum, zinc, plastic in various widths" },
        { label: "Binding Materials", value: "Cementitious or epoxy matrices available" },
        { label: "Load Bearing Capacity", value: "High - suitable for commercial applications" },
        { label: "Application Method", value: "Poured in place and mechanically polished" },
        { label: "Sustainability", value: "Can incorporate recycled materials, low maintenance lifecycle" }
      ]}
      maintenance={[
        {
          title: "Daily Care",
          description: "Sweep or dust mop regularly to remove grit that could scratch the surface. Clean with pH-neutral cleaners specially formulated for natural stone and terrazzo surfaces."
        },
        {
          title: "Polishing Schedule",
          description: "Depending on traffic, professional maintenance polishing is recommended every 3-5 years to restore the original luster and remove any minor surface imperfections."
        },
        {
          title: "Stain Prevention",
          description: "While modern terrazzo is highly stain-resistant, promptly clean spills, especially from acidic foods, red wine, or oils to prevent potential etching or staining."
        },
        {
          title: "Long-Term Preservation",
          description: "With proper care, terrazzo will last for generations. We offer comprehensive maintenance programs to ensure your investment retains its beauty for decades."
        }
      ]}
      inProgressProjects={inProgressProjects}
      inProgressTitles={inProgressTitles}
      finishedProjects={finishedProjects}
    />
  );
};

export default TerrazzoFlooringPage;
