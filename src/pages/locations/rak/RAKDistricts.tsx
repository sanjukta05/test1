
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Ras Al Khaimah districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "al-hamra": {
    description: "Al Hamra's prestigious coastal development demands exceptional decorative finishes that enhance its architectural elegance. Our specialized solutions are formulated to withstand RAK's coastal conditions while delivering luxury aesthetics.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Al Hamra properties in RAK. Expert application services for beachfront villas and residences."
  },
  "al-marjan-island": {
    description: "Al Marjan Island's iconic properties require decorative finishes that withstand the unique marine environment while delivering uncompromising luxury. Our specialized solutions are engineered for this man-made archipelago's challenges.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Marjan Island's trusted decorative paint and flooring specialists in RAK. Marine-grade solutions for luxury resorts and beachfront properties."
  },
  "al-nakheel": {
    description: "Al Nakheel's growing residential communities benefit from our comprehensive range of decorative finishes that create inviting living spaces. Our solutions balance practicality with luxury for this popular district.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Nakheel RAK's premier decorative paint and flooring experts. Family-friendly, durable solutions for residential villas and apartments."
  },
  "mina-al-arab": {
    description: "Mina Al Arab's waterfront developments require decorative finishes that complement both the stunning views and contemporary designs. Our marine-grade solutions are formulated to withstand RAK's coastal environment while providing luxury aesthetics.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Mina Al Arab's specialist decorative paint and flooring providers in RAK. Premium solutions for coastal properties with marine-grade durability."
  }
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const RAKDistricts = () => {
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
      emirate="Ras Al Khaimah"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default RAKDistricts;
