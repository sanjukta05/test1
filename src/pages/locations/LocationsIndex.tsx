
import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

// Use all 6 uploaded images for 6 locations (one per location, in order)
const locationData = [
  {
    name: "Dubai",
    image: "/lovable-uploads/4ecb4de7-4546-4601-b7ed-bc86e32088ba.png",
    description: "Our flagship location with our main Experience Center, serving all districts from Downtown to Marina, Palm Jumeirah to Arabian Ranches.",
    path: "/locations/dubai"
  },
  {
    name: "Abu Dhabi",
    image: "/lovable-uploads/e0197bf4-1553-4463-9e9a-c70ea277f1a2.png",
    description: "Serving the capital with premium decorative finishing solutions for residential and commercial properties throughout Abu Dhabi.",
    path: "/locations/abudhabi"
  },
  {
    name: "Sharjah",
    image: "/lovable-uploads/2a1da991-3266-4a1b-a03a-5c7cf0b570fc.png",
    description: "Offering our complete range of decorative paints and flooring solutions to the cultural capital.",
    path: "/locations/sharjah"
  },
  {
    name: "Ajman",
    image: "/lovable-uploads/21bdf105-895d-4e81-bec3-bc6936561dd2.png",
    description: "Providing premium decorative finishes to the growing real estate developments in Ajman and surrounding areas.",
    path: "/locations/ajman"
  },
  {
    name: "Ras Al Khaimah",
    image: "/lovable-uploads/ba27fd41-1cc2-465c-88a9-35e7b90ac2da.png",
    description: "Extending our luxury finishes to the northernmost region, known for its natural beauty and growing luxury resorts.",
    path: "/locations/rak"
  },
  {
    name: "Fujairah",
    image: "/lovable-uploads/62e227a4-f4ef-4fd0-b233-aabb1884d31e.png",
    description: "Bringing our artisanal finishes to the eastern coast, specialized in solutions for the coastal environment.",
    path: "/locations/fujairah"
  }
];

const LocationsIndex = () => {
  useEffect(() => {
    document.title = "Our Locations | DecoPaints";
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader title="Our UAE Locations" description="Serving Premium Clients Across All Emirates" backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600" />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="md:text-4xl mb-6 text-center font-normal text-5xl">Select Your Location</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                DecoPaints provides premium decorative finishes across all seven emirates. 
                Find your nearest location and explore our services tailored to your region.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locationData.map(location => (
                  <Card key={location.name} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={`${location.name} location`}
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                      <p className="text-deco-plum/80 mb-4">{location.description}</p>
                      <Link to={location.path}>
                        <Button className="bg-deco-denim hover:bg-deco-denim/90 w-full">
                          View Details <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="md:text-4xl mb-6 text-5xl font-normal">UAE-Wide Service</h2>
              <p className="mb-8 text-deco-plum/80">
                Our expert craftsmen travel across all seven emirates to deliver premium decorative finishes 
                to commercial and residential clients. Each location has a dedicated team familiar with the 
                local architectural styles and client preferences.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-deco-denim hover:bg-deco-denim/90">
                    Schedule Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/971503119537">
                  <Button className="bg-deco-denim hover:bg-deco-denim/90">
                    WhatsApp Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default LocationsIndex;
