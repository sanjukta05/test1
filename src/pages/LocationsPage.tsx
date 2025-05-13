import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

// Locations data
const locationsData = [
  {
    name: "Dubai",
    description: "Our flagship location with our main Experience Center, serving all districts from Downtown to Marina, Palm Jumeirah to Arabian Ranches.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Downtown", "Marina", "Jumeirah", "Palm", "Business Bay", 
      "Deira", "Al Barsha", "JLT", "JVC", "Arabian Ranches", "Hills Estate", 
      "DIFC", "Silicon Oasis", "Al Quoz", "Mirdif", 
      "International City", "Motor City", "Dubai Land", "Creek Harbour"
    ],
    address: "Al Marabea' St, Al Quoz, Dubai",
    phone: "+971 50 311 9537",
    email: "dubai@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.537133511753!2d55.23233491500953!3d25.044147283965648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc629d74eb1%3A0x7f8f5d5a7b08d1e4!2sAl%20Quoz%2C%20Dubai!5e0!3m2!1sen!2sae!4v1652180484576!5m2!1sen!2sae"
  },
  {
    name: "Abu Dhabi",
    description: "Serving the capital with premium decorative finishing solutions for residential and commercial properties throughout Abu Dhabi.",
    image: "https://images.unsplash.com/photo-1551041377-19c3d646fca0?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Al Reem Island", "Al Raha Beach", "Saadiyat Island", "Yas Island", 
      "Khalifa City", "Al Bateen", "Corniche", "Al Maryah Island", "Masdar City"
    ],
    address: "Khalifa St, Al Bateen, Abu Dhabi",
    phone: "+971 50 411 8372",
    email: "abudhabi@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2578012650224!2d54.35483651499573!3d24.46651618424865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e661b857a0eeb%3A0xf3d20ea13c2634d9!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1652180684476!5m2!1sen!2sae"
  },
  {
    name: "Sharjah",
    description: "Offering our complete range of decorative paints and flooring solutions to the cultural capital.",
    image: "https://images.unsplash.com/photo-1553855994-ef3319430bf3?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Al Majaz", "Al Khan", "Al Nahda", "Al Taawun", "Muwaileh", "Al Qasba", "University City"
    ],
    address: "Al Taawun St, Al Taawun, Sharjah",
    phone: "+971 50 511 4729",
    email: "sharjah@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.063850564768!2d55.37642871501434!3d25.25552198386352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5abfe3100001%3A0x7564ca0a8ffeb2!2sSharjah!5e0!3m2!1sen!2sae!4v1652180754476!5m2!1sen!2sae"
  },
  {
    name: "Ajman",
    description: "Providing premium decorative finishes to the growing real estate developments in Ajman and surrounding areas.",
    image: "https://images.unsplash.com/photo-1529027903438-baa64663196a?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Al Jurf", "Al Rashidiya", "Al Nuaimiya", "Al Rawda", "Ajman Marina", "Ajman Downtown"
    ],
    address: "Sheikh Khalifa Bin Zayed St, Ajman",
    phone: "+971 50 611 5837",
    email: "ajman@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5084842401606!2d55.43555881501757!3d25.40723628379361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5779e7f28903%3A0xbca4232c8cec0606!2sAjman!5e0!3m2!1sen!2sae!4v1652180804476!5m2!1sen!2sae"
  },
  {
    name: "Ras Al Khaimah",
    description: "Extending our luxury finishes to the northernmost region, known for its natural beauty and growing luxury resorts.",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Al Hamra", "Al Marjan Island", "Al Nakheel", "Mina Al Arab"
    ],
    address: "Al Muntasir Rd, Al Nakheel, Ras Al Khaimah",
    phone: "+971 50 711 6942",
    email: "rak@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.823880652268!2d55.943424815023346!3d25.67477788369044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6741b01a646bd%3A0xb3a3267e4fb338c3!2sRas%20al%20Khaimah!5e0!3m2!1sen!2sae!4v1652180854476!5m2!1sen!2sae"
  },
  {
    name: "Fujairah",
    description: "Bringing our artisanal finishes to the eastern coast, specialized in solutions for the coastal environment.",
    image: "https://images.unsplash.com/photo-1559762717-99c81ac85459?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Fujairah City", "Dibba", "Al Faseel", "Al Gurfa"
    ],
    address: "Hamad Bin Abdullah Rd, Fujairah City",
    phone: "+971 50 811 7045",
    email: "fujairah@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9883846586537!2d56.33002841501975!3d25.568982983764933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4549dfb34698d%3A0x66a2fcd9d986398!2sFujairah!5e0!3m2!1sen!2sae!4v1652180904476!5m2!1sen!2sae"
  },
  {
    name: "Umm Al Quwain",
    description: "Servicing both residential and hospitality projects in this charming and traditional region.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=1000&h=600",
    districts: [
      "Dream Land", "UMM Al Quwain Marina", "Al Salamah", "Al Rolla"
    ],
    address: "King Faisal St, Umm Al Quwain",
    phone: "+971 50 911 8143",
    email: "uaq@decopaints.ae",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.977938634164!2d55.552476115017866!3d25.50426438381689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5fb27df746f3d%3A0x27fcaadd5aa1dee7!2sUmm%20Al%20Quwain!5e0!3m2!1sen!2sae!4v1652180964476!5m2!1sen!2sae"
  }
];

const LocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = "Locations | DecoPaints";
  }, []);
  
  const currentLocation = locationsData.find(location => location.name === selectedLocation);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader 
        title="Our Locations"
        description="Serving Premium Clients Across the Region"
        backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Regional Coverage</h2>
            
            <div className="max-w-6xl mx-auto mb-12">
              <Tabs 
                defaultValue="Dubai" 
                value={selectedLocation}
                onValueChange={value => {
                  setSelectedLocation(value);
                  setSelectedDistrict(null);
                }}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                  {locationsData.map(location => (
                    <TabsTrigger key={location.name} value={location.name} className="text-sm">
                      {location.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {locationsData.map(location => (
                  <TabsContent key={location.name} value={location.name} className="mt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <img 
                          src={location.image} 
                          alt={`${location.name} location`} 
                          className="rounded-lg shadow-lg h-80 w-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{location.name} Coverage</h3>
                        <p className="text-deco-plum/80 mb-6">
                          {location.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="bg-deco-beige p-2 rounded-full mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium">Address</h4>
                              <address className="not-italic text-deco-plum/80">{location.address}</address>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-deco-beige p-2 rounded-full mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium">Phone</h4>
                              <a href={`tel:${location.phone}`} className="text-deco-denim hover:text-deco-plum transition-colors">
                                {location.phone}
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-deco-beige p-2 rounded-full mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium">Email</h4>
                              <a href={`mailto:${location.email}`} className="text-deco-denim hover:text-deco-plum transition-colors">
                                {location.email}
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <a 
                            href={`#${location.name.toLowerCase()}-districts`} 
                            className="btn-cta inline-flex items-center"
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('districts-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <span>View Districts</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        <section id="districts-section" className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Districts We Serve</h2>
            <p className="text-lg text-center mb-12 text-deco-plum/80">Select a district to learn more about our services in that area</p>
            
            {currentLocation && (
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">{currentLocation.name} Districts</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentLocation.districts.map(district => (
                    <Card 
                      key={district}
                      className={`cursor-pointer transition-all ${
                        selectedDistrict === district ? 'border-deco-plum shadow-md' : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedDistrict(district)}
                    >
                      <CardContent className="p-6">
                        <div className="font-medium">{district}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {selectedDistrict && (
                  <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold">{selectedDistrict}</h3>
                      <button 
                        onClick={() => setSelectedDistrict(null)}
                        className="text-deco-plum/60 hover:text-deco-plum"
                        aria-label="Close district details"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Services in {selectedDistrict}</h4>
                        <p className="text-deco-plum/80 mb-4">
                          Our team of expert craftsmen regularly service the {selectedDistrict} area, providing the following specialized solutions:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-deco-plum/80 mb-6">
                          <li>Decorative paint finishes including Venetian Marmorino, Limewash, and more</li>
                          <li>Specialty flooring installations with micro-cement and terrazzo</li>
                          <li>Custom color matching to suit the local architectural style</li>
                          <li>Regular maintenance services for existing installations</li>
                        </ul>
                        
                        <h4 className="text-lg font-medium mb-3">Recent Projects in {selectedDistrict}</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="bg-deco-beige px-3 py-1 rounded-full text-sm">Residential Villa</span>
                          <span className="bg-deco-beige px-3 py-1 rounded-full text-sm">Boutique Hotel</span>
                          <span className="bg-deco-beige px-3 py-1 rounded-full text-sm">Restaurant</span>
                        </div>
                        
                        <Link to="/contact" className="btn-cta inline-flex items-center">
                          <span>Request Service in {selectedDistrict}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium mb-3">Local Design Trends</h4>
                          <p className="text-deco-plum/80">
                            {selectedDistrict} properties often feature a blend of modern and traditional elements, with a preference for 
                            neutral base tones with subtle texture. Gold leaf accents are particularly popular in this area.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium mb-3">Local Team</h4>
                          <p className="text-deco-plum/80">
                            Our {currentLocation.name} team includes specialists who frequently work in {selectedDistrict}, with intimate knowledge 
                            of the area's architectural styles and client preferences.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium mb-3">Response Time</h4>
                          <p className="text-deco-plum/80">
                            Being centrally located, we offer quick response times for consultations and services in {selectedDistrict}, 
                            typically within 24-48 hours of initial contact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Visit Our Experience Center</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-96">
                    {currentLocation && (
                      <iframe 
                        src={currentLocation.mapUrl} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        aria-label={`Map showing ${currentLocation.name} DecoPaints location`}
                      ></iframe>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Experience Our Finishes in Person</h3>
                  <p className="text-deco-plum/80 mb-6">
                    Visit our Experience Center to see and feel our premium decorative finishes firsthand. Our design consultants will guide you 
                    through our extensive collection and help you find the perfect solution for your space.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">What to Expect</h4>
                      <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                        <li>Extensive sample displays of all our finishes</li>
                        <li>Full-scale application demonstrations</li>
                        <li>Expert guidance from our design consultants</li>
                        <li>Custom sample creation for your specific project</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Opening Hours</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="font-medium">Weekdays</p>
                          <p className="text-deco-plum/80">9:00 AM - 6:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Saturdays</p>
                          <p className="text-deco-plum/80">10:00 AM - 4:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Sundays</p>
                          <p className="text-deco-plum/80">Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="btn-cta inline-flex items-center">
                    <span>Schedule a Visit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Contact our team for a consultation, or request a personalized estimate for your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
              >
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
              >
                <span>Get an Estimate</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;
