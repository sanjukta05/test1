
import React, { useEffect } from 'react';
import ProductLayout from '../../components/ProductLayout';
import { Clock, Star, Layers, Paintbrush } from 'lucide-react';

const inProgressTitles = [
  "Business Bay",
  "Dubai Marina",
  "The Springs",
  "The Meadows",
  "Palm Jumeirah",
  "Emirates Hills"
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
      applications={[
        {
          title: "Hotel Lobbies",
          description: "Create unforgettable first impressions with custom terrazzo that incorporates brand colors and design motifs for a truly distinctive entrance experience.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Luxury Residential",
          description: "Elevate living spaces with the timeless sophistication of terrazzo flooring that serves as a stunning foundation for both contemporary and traditional interiors.",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        },
        {
          title: "Museum Spaces",
          description: "Provide elegant, durable surfaces for high-traffic cultural institutions that require both aesthetic refinement and practical performance.",
          image: "https://images.unsplash.com/photo-1594388732016-32ecf9fc47e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
        }
      ]}
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
      inProgressTitles={inProgressTitles}
    />
  );
};

export default TerrazzoFlooringPage;
