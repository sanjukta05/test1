
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Abu Dhabi districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "al-reem-island": {
    description: "Al Reem Island's contemporary luxury developments demand sophisticated decorative finishes that enhance its architectural innovation. Our specialized team delivers premium solutions tailored to this prestigious waterfront district.",
    backgroundImage: "https://images.unsplash.com/photo-1626798682675-19adee164cb3?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Al Reem Island properties. Expert application services tailored for modern waterfront residences."
  },
  "al-raha-beach": {
    description: "Al Raha Beach's waterfront properties require decorative finishes that balance coastal durability with luxury aesthetics. Our marine-grade solutions maintain their beauty despite the challenging environmental conditions.",
    backgroundImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Raha Beach's trusted decorative paint and flooring specialists. Marine-grade durability with luxury aesthetics for waterfront properties."
  },
  "saadiyat-island": {
    description: "Saadiyat Island's cultural district and luxury residences demand exceptional decorative finishes that complement its architectural significance. Our premium solutions enhance the prestige of this world-class destination.",
    backgroundImage: "https://images.unsplash.com/photo-1512216786210-503f09714af1?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Saadiyat Island's premier decorative paint and flooring experts. Museum-quality finishes for luxury homes and cultural properties."
  },
  "yas-island": {
    description: "Yas Island's entertainment venues and residential communities require versatile decorative solutions that combine durability with visual impact. Our finishes are engineered to stand up to high traffic while maintaining their aesthetic appeal.",
    backgroundImage: "https://images.unsplash.com/photo-1533742616333-0c4d300fb157?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Yas Island's specialist decorative paint and flooring providers. High-performance solutions for entertainment venues and luxury residences."
  },
  "khalifa-city": {
    description: "Khalifa City's family-oriented residential communities benefit from our durable yet sophisticated decorative finishes that create inviting living spaces. Our solutions balance practicality with luxury for this popular district.",
    backgroundImage: "https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Khalifa City's trusted decorative paint and flooring experts. Family-friendly, durable solutions for villas and community spaces."
  },
  "al-bateen": {
    description: "Al Bateen's heritage architecture and premium waterfront properties require decorative finishes that respect tradition while delivering modern performance. Our solutions bridge past and present for this historic district.",
    backgroundImage: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Bateen's premium decorative paint and flooring specialists. Heritage-inspired finishes with contemporary performance for traditional and modern spaces."
  },
  "corniche": {
    description: "The Corniche's prestigious properties and public spaces demand decorative finishes that withstand the coastal environment while delivering uncompromising luxury. Our solutions are engineered for the unique challenges of this seafront district.",
    backgroundImage: "https://images.unsplash.com/photo-1539642310851-dc276628da03?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Abu Dhabi Corniche's expert decorative paint and flooring providers. Marine-grade durability with premium aesthetics for seafront properties."
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

const AbuDhabiDistricts = () => {
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
      emirate="Abu Dhabi"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default AbuDhabiDistricts;
