
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Fujairah districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "fujairah-city": {
    description: "Fujairah City's blend of traditional heritage and modern development requires versatile decorative finishes. Our solutions respect Fujairah's cultural identity while providing modern performance for this distinctive area.",
    backgroundImage: "https://images.unsplash.com/photo-1553855994-ef3319430bf3?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Fujairah City properties. Expert application services for residential and commercial spaces."
  },
  "dibba": {
    description: "Dibba's coastal properties require decorative finishes that withstand the marine environment while delivering luxurious aesthetics. Our specialized solutions are engineered for the challenges of this seaside district.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Dibba Fujairah's trusted decorative paint and flooring specialists. Marine-grade solutions for coastal properties and resort developments."
  },
  "al-faseel": {
    description: "Al Faseel's growing residential developments benefit from our comprehensive range of decorative finishes that create inviting living spaces. Our solutions add value and distinction to properties in this popular neighborhood.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Faseel's premier decorative paint and flooring experts in Fujairah. Custom solutions for new residential developments and properties."
  },
  "al-gurfa": {
    description: "Al Gurfa's diverse properties require versatile decorative finishes that adapt to various architectural styles. Our premium solutions enhance the visual appeal of homes and businesses in this developing district.",
    backgroundImage: "https://images.unsplash.com/photo-1582671846656-74538eef29ea?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Gurfa's specialist decorative paint and flooring providers in Fujairah. Premium solutions for all property types and architectural styles."
  }
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const FujairahDistricts = () => {
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
      emirate="Fujairah"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default FujairahDistricts;
