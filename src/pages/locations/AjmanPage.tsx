
import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const AjmanPage = () => {
  useEffect(() => {
    document.title = "Ajman's Best Decorative Paints & Flooring Company | DecoPaints";
  }, []);
  
  const districts = [
    { name: "Al Jurf", slug: "al-jurf" },
    { name: "Al Rashidiya", slug: "al-rashidiya" },
    { name: "Al Nuaimiya", slug: "al-nuaimiya" },
    { name: "Al Rawda", slug: "al-rawda" },
    { name: "Ajman Marina", slug: "ajman-marina" },
    { name: "Ajman Downtown", slug: "ajman-downtown" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader 
        title="Ajman's Best Decorative Paints & Flooring Company"
        description="Premium decorative finishes for Ajman's luxury properties"
        backgroundImage="https://images.unsplash.com/photo-1529027903438-baa64663196a?auto=format&fit=crop&q=80&w=2000&h=600"
      />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Ajman Location</h2>
                  <p className="text-deco-plum/80 mb-6">
                    Providing premium decorative finishes to the growing real estate developments in Ajman and surrounding areas.
                    Visit our showroom to explore our full range of decorative finishes tailored for Ajman's unique architectural styles.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-deco-gold" />
                      <address className="not-italic text-deco-plum/80">
                        Sheikh Khalifa Bin Zayed St, Ajman
                      </address>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-deco-gold" />
                      <a href="tel:+971506115837" className="text-deco-denim hover:text-deco-plum transition-colors">
                        +971 50 611 5837
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-deco-gold" />
                      <a href="mailto:ajman@decopaints.ae" className="text-deco-denim hover:text-deco-plum transition-colors">
                        ajman@decopaints.ae
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <Button className="bg-deco-denim hover:bg-deco-denim/90">
                        Get Estimate
                      </Button>
                    </Link>
                    <a href="https://wa.me/971506115837">
                      <Button className="bg-deco-denim hover:bg-deco-denim/90">
                        WhatsApp Inquiry
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-96">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5084842401606!2d55.43555881501757!3d25.40723628379361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5779e7f28903%3A0xbca4232c8cec0606!2sAjman!5e0!3m2!1sen!2sae!4v1652180804476!5m2!1sen!2sae"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      aria-label="Map showing Ajman DecoPaints location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ajman Districts We Serve</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                Our expert team provides premium decorative finishing services throughout Ajman, with specialized 
                knowledge of each district's architectural styles and design preferences. Click on a district to learn more.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {districts.map(district => (
                  <Link 
                    key={district.name} 
                    to={`/locations/ajman/${district.slug}`}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow group"
                  >
                    <h3 className="font-medium text-deco-plum group-hover:text-deco-denim transition-colors">
                      {district.name}
                      <ExternalLink className="inline-block ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ajman Experience Center</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                Visit our Ajman Experience Center to see and feel our premium decorative finishes firsthand. Our design consultants will guide you 
                through our extensive collection and help you find the perfect solution for your space.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                  <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                    <li>Extensive sample displays of all our finishes</li>
                    <li>Full-scale application demonstrations</li>
                    <li>Expert guidance from our design consultants</li>
                    <li>Custom sample creation for your specific project</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="font-bold">Weekdays</p>
                      <p className="text-deco-plum/80">9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-bold">Saturdays</p>
                      <p className="text-deco-plum/80">10:00 AM - 4:00 PM</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-bold">Sundays</p>
                      <p className="text-deco-plum/80">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button className="bg-deco-denim hover:bg-deco-denim/90 text-white">
                    Schedule a Visit <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AjmanPage;
