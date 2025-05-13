
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Umm Al Quwain districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "dream-land": {
    description: "Dream Land's recreational and residential properties require decorative finishes that balance durability with aesthetic appeal. Our solutions enhance the leisure experience of this unique UAQ district.",
    backgroundImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Dream Land properties in UAQ. Expert application services for recreational and residential projects."
  },
  "umm-al-quwain-marina": {
    description: "Umm Al Quwain Marina's waterfront properties demand decorative finishes that complement both the stunning views and contemporary designs. Our marine-grade solutions are formulated to withstand the coastal environment while providing luxury aesthetics.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "UAQ Marina's trusted decorative paint and flooring specialists. Marine-grade solutions for waterfront properties and developments."
  },
  "al-salamah": {
    description: "Al Salamah's residential communities benefit from our comprehensive range of decorative finishes that create inviting living spaces. Our solutions balance practicality with luxury for this quiet district.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Salamah UAQ's premier decorative paint and flooring experts. Family-friendly, durable solutions for residential villas and apartments."
  },
  "al-rolla": {
    description: "Al Rolla's blend of traditional heritage and modern development requires versatile decorative finishes. Our solutions respect UAQ's cultural identity while providing modern performance for this distinctive area.",
    backgroundImage: "https://images.unsplash.com/photo-1582671846656-74538eef29ea?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Rolla's specialist decorative paint and flooring providers in UAQ. Heritage-inspired finishes for traditional and modern properties."
  }
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const UAQDistricts = () => {
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
      emirate="Umm Al Quwain"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default UAQDistricts;
