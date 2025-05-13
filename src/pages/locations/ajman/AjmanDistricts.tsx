
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Ajman districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "al-jurf": {
    description: "Al Jurf's unique coastal properties require decorative finishes that withstand the marine environment while delivering luxurious aesthetics. Our specialized solutions are engineered for the challenges of this seaside district.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Al Jurf properties in Ajman. Expert application services for coastal residences."
  },
  "al-rashidiya": {
    description: "Al Rashidiya's growing residential developments benefit from our comprehensive range of decorative finishes that create inviting living spaces. Our solutions add value and distinction to properties in this popular neighborhood.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Rashidiya Ajman's trusted decorative paint and flooring specialists. Family-friendly, durable solutions for all residential properties."
  },
  "al-nuaimiya": {
    description: "Al Nuaimiya's diverse properties require versatile decorative finishes that adapt to various architectural styles. Our premium solutions enhance the visual appeal of homes and businesses in this diverse district.",
    backgroundImage: "https://images.unsplash.com/photo-1582671846656-74538eef29ea?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Nuaimiya's premier decorative paint and flooring experts in Ajman. Custom solutions for apartments, villas and commercial spaces."
  },
  "al-rawda": {
    description: "Al Rawda's elegant residential communities demand sophisticated decorative finishes that enhance its prestigious status. Our specialized team delivers premium solutions tailored to this upscale district.",
    backgroundImage: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Rawda's specialist decorative paint and flooring providers in Ajman. Premium solutions for luxury villas and residential complexes."
  },
  "ajman-marina": {
    description: "Ajman Marina's waterfront properties demand decorative finishes that complement both the stunning views and contemporary designs. Our marine-grade solutions withstand the coastal environment while providing luxury aesthetics.",
    backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Ajman Marina's trusted decorative paint and flooring experts. Specialized solutions for waterfront properties with marine-grade durability."
  },
  "ajman-downtown": {
    description: "Ajman Downtown's blend of commercial and residential spaces requires decorative finishes that balance practicality with visual impact. Our solutions enhance the urban character of this central district.",
    backgroundImage: "https://images.unsplash.com/photo-1610371312618-362424338b52?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Ajman Downtown's premium decorative paint and flooring specialists. Urban-inspired finishes for commercial and residential properties."
  }
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const AjmanDistricts = () => {
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
      emirate="Ajman"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default AjmanDistricts;
