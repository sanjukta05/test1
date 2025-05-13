
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDistrictPage from '../../../components/LocationDistrictPage';

// Map of Sharjah districts with specific content
const districtData: Record<string, { description: string, backgroundImage: string, metaDescription: string }> = {
  "al-majaz": {
    description: "Al Majaz's prestigious waterfront developments demand premium decorative finishes that enhance its architectural beauty. Our specialized team delivers sophisticated solutions tailored to this cosmopolitan district.",
    backgroundImage: "https://images.unsplash.com/photo-1580835239846-5bb9ce3f5541?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Premium decorative paints and luxury flooring for Al Majaz properties in Sharjah. Expert application services for waterfront residences and businesses."
  },
  "al-khan": {
    description: "Al Khan's blend of traditional heritage and modern development requires versatile decorative finishes. Our solutions respect Sharjah's cultural identity while providing modern performance for this distinctive area.",
    backgroundImage: "https://images.unsplash.com/photo-1582671846656-74538eef29ea?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Khan's trusted decorative paint and flooring specialists in Sharjah. Heritage-inspired finishes with contemporary durability."
  },
  "al-nahda": {
    description: "Al Nahda's dynamic residential and commercial properties benefit from our comprehensive range of decorative finishes. Our solutions add value and distinction to properties in this popular neighborhood.",
    backgroundImage: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Nahda Sharjah's premier decorative paint and flooring experts. Custom solutions for apartments, villas and commercial spaces."
  },
  "al-taawun": {
    description: "Al Taawun's modern buildings with views of the Sharjah lagoon require decorative finishes that complement its urban sophistication. Our premium solutions enhance the visual appeal of properties in this desirable location.",
    backgroundImage: "https://images.unsplash.com/photo-1610371312618-362424338b52?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Taawun's specialist decorative paint and flooring providers in Sharjah. Premium solutions for luxury apartments and commercial buildings."
  },
  "muwaileh": {
    description: "Muwaileh's growing residential communities benefit from our durable yet sophisticated decorative finishes that create inviting living spaces. Our solutions balance practicality with luxury for this expanding district.",
    backgroundImage: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Muwaileh Sharjah's trusted decorative paint and flooring experts. Family-friendly, durable solutions for villas and residential communities."
  },
  "al-qasba": {
    description: "Al Qasba's cultural and entertainment destination demands decorative finishes that enhance its vibrant atmosphere. Our solutions contribute to the aesthetic appeal of this unique canal-side district in Sharjah.",
    backgroundImage: "https://images.unsplash.com/photo-1561503972-839d0c56de17?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "Al Qasba's premium decorative paint and flooring specialists in Sharjah. Custom finishes for cultural venues, restaurants and retail spaces."
  },
  "university-city": {
    description: "University City's educational institutions and residential areas require practical yet attractive decorative finishes. Our solutions provide durability and style for this knowledge-focused district of Sharjah.",
    backgroundImage: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&q=80&w=2000&h=600",
    metaDescription: "University City Sharjah's expert decorative paint and flooring providers. Durable, low-maintenance solutions for educational and residential buildings."
  }
};

// Format the district param to be more readable
const formatDistrict = (district: string): string => {
  return district
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const SharjahDistricts = () => {
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
      emirate="Sharjah"
      district={formattedDistrict}
      description={description}
      backgroundImage={backgroundImage}
      metaDescription={metaDescription}
    />
  );
};

export default SharjahDistricts;
