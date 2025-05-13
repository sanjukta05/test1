
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Dubai districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "downtown": {
    description: "Downtown Dubai is known for its luxury properties and iconic structures, requiring exceptional decorative finishes that match its prestigious status. Our specialized team delivers premium paint and flooring solutions tailored to Downtown's modern architectural styles.",
    backgroundImage: "https://images.unsplash.com/photo-1582671846656-74538eef29ea?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring solutions for Downtown Dubai properties. Expert application by local specialists with 15+ years of experience."
  },
  "marina": {
    description: "Dubai Marina's waterfront properties demand decorative finishes that complement both the stunning views and contemporary designs. Our marine-grade solutions are formulated to withstand the coastal environment while providing luxury aesthetics.",
    backgroundImage: "https://images.unsplash.com/photo-1570543922355-c64a19ab2bc7?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Dubai Marina's trusted decorative paint and flooring experts. Specialized solutions for waterfront properties with marine-grade durability."
  },
  "jumeirah": {
    description: "Jumeirah's prestigious villas and residences benefit from our bespoke decorative finishes that blend traditional elegance with contemporary luxury. Our finishes enhance Jumeirah's architectural heritage while providing modern performance.",
    backgroundImage: "https://images.unsplash.com/photo-1577404699057-04440b45986f?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Luxury decorative paints and premium flooring solutions for Jumeirah villas and residences. Traditional elegance meets contemporary performance."
  },
  "palm": {
    description: "Palm Jumeirah's iconic properties require decorative finishes that withstand the unique coastal conditions while delivering uncompromising luxury. Our specialized solutions are formulated specifically for Palm's environmental challenges.",
    backgroundImage: "https://images.unsplash.com/photo-1620808640461-2736e249e56a?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Palm Jumeirah's premier decorative paint and flooring specialists. Coastal-specific solutions for luxury villas and penthouses."
  },
  "business-bay": {
    description: "Business Bay's modern commercial and residential spaces demand sophisticated decorative finishes that balance aesthetics with performance. Our commercial-grade solutions deliver both style and durability for this dynamic district.",
    backgroundImage: "https://images.unsplash.com/photo-1547555999-14e818e09e33?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and commercial-grade flooring for Business Bay properties. Solutions for commercial and residential spaces."
  },
  "deira": {
    description: "Deira's blend of historical architecture and modern developments requires versatile decorative finishes that respect tradition while embracing contemporary performance. Our solutions bridge heritage and innovation for this vibrant district.",
    backgroundImage: "https://images.unsplash.com/photo-1518000400227-6355cba8301b?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Deira's trusted decorative paint and flooring experts. Heritage-inspired finishes with modern performance for traditional and contemporary spaces."
  },
  "al-barsha": {
    description: "Al Barsha's diverse residential and commercial properties benefit from our flexible decorative solutions that adapt to various architectural styles and functional requirements while maintaining premium quality and performance.",
    backgroundImage: "https://images.unsplash.com/photo-1578722201918-ed6a63e15f29?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Barsha's premium decorative paint and flooring specialists. Versatile solutions for modern villas, apartments, and commercial spaces."
  },
  "jlt": {
    description: "Jumeirah Lake Towers' high-rise apartments and offices require decorative finishes that enhance vertical living while meeting strict building code requirements. Our solutions are designed specifically for JLT's unique architectural context.",
    backgroundImage: "https://images.unsplash.com/photo-1589450733772-9d5757e98dc1?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "JLT's expert decorative paint and flooring providers. High-rise specific solutions for luxury apartments and commercial spaces."
  }
  // Additional districts can be added as needed
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const DubaiDistricts = () => {
  const { district } = useParams<{ district: string }>();
  
  if (!district || !districtData[district]) {
    // Handle invalid district
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">District Not Found</h1>
          <p>The requested district does not exist or is not yet available.</p>
        </div>
      </div>
    );
  }
  
  const formattedDistrict = formatDistrict(district);
  const { description, backgroundImage, metaDescription } = districtData[district];
  
  return (
    <LocationDistrictPage 
      emirate="Dubai"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default DubaiDistricts;
