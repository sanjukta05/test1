import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Shield, Paintbrush, Layers } from 'lucide-react';
import { FAQAccordion } from './ui/faq-accordion';
import SocialProof from './SocialProof';
import ContactCTA from './ContactCTA';

interface LocationDistrictPageProps {
  emirate: string;
  district: string;
  description: string;
  backgroundImage: string;
  metaDescription?: string;
}

const LocationDistrictPage: React.FC<LocationDistrictPageProps> = ({
  emirate,
  district,
  description,
  backgroundImage,
  metaDescription
}) => {
  useEffect(() => {
    // SEO-friendly title with location and service keywords
    document.title = `${district} ${emirate} - Premium Decorative Paints & Flooring | DecoPaints`;
    
    // Add meta description if provided
    if (metaDescription) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", metaDescription);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = "description";
        newMeta.content = metaDescription;
        document.head.appendChild(newMeta);
      }
    }
  }, [district, emirate, metaDescription]);

  // Generate some sample services based on the location
  const localServices = [
    "Custom Decorative Paint Consultation",
    "Interior Surface Preparation",
    "Professional Paint Application",
    "Micro-Cement Installation",
    "Decorative Flooring Services",
    "Maintenance and Touch-up Services"
  ];

  // FAQ items for the location
  const faqItems = [
    {
      question: `How quickly can you start a project in ${district}?`,
      answer: `We typically schedule consultations within 48 hours for ${district} properties and can begin work within 1-2 weeks of project approval, depending on the scope and current schedule.`
    },
    {
      question: `Do you offer custom color matching for ${district} properties?`,
      answer: `Yes, we provide custom color matching services tailored to complement existing interior elements or to achieve specific design visions for ${district} properties, ensuring perfect integration with your space.`
    },
    {
      question: `How do your finishes perform in ${district}'s specific climate conditions?`,
      answer: `Our decorative paints and flooring solutions are specifically formulated to withstand the local climate challenges, including temperature fluctuations and humidity levels common in ${district}, ensuring long-lasting, beautiful results.`
    },
    {
      question: `Do you provide maintenance services for existing finishes in ${district}?`,
      answer: `Yes, we offer comprehensive maintenance services for both our own installations and existing decorative finishes in ${district} properties, helping to preserve their beauty and integrity over time.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader 
        title={`${district}, ${emirate}'s Best Decorative Paints & Flooring Company`}
        description={`Premium decorative finishes and expert application services in ${district}, ${emirate}`}
        backgroundImage={backgroundImage}
      />
      
      <main className="flex-grow">
        {/* Section 1: Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6">Top-Rated Decorative Paint & Flooring Services in {district}, {emirate}</h2>
              <p className="text-deco-plum/80 mb-6 text-lg">
                {description}
              </p>
              <p className="text-deco-plum/80 mb-8">
                Our team of skilled artisans specializes in delivering premium decorative finishes tailored to the unique 
                architectural styles and design preferences prevalent in {district}.
              </p>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-deco-denim hover:bg-deco-denim/90">
                    Get Estimate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Local Experience */}
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6 text-center">Our {district} {emirate} Experience</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                With years of experience serving the {district} area, we've developed specialized techniques 
                that address the unique challenges and design preferences of this distinctive neighborhood.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-deco-denim rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{district} Expertise Since 2005</h3>
                  <p className="text-deco-plum/80">
                    We've been serving the {district} area for over a decade, building relationships with local designers and homeowners.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-deco-denim rounded-full flex items-center justify-center mb-6">
                    <Paintbrush className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Local Design Sensibilities</h3>
                  <p className="text-deco-plum/80">
                    Our designers understand the unique architectural character of {district}, 
                    allowing us to create finishes that enhance local spaces.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-deco-denim rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Climate-Specific Solutions</h3>
                  <p className="text-deco-plum/80">
                    We formulate our decorative paints and flooring to withstand {emirate}'s unique climate conditions, 
                    ensuring longevity in both residential and commercial spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 3: Popular Services in This District */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6">Most Popular Decorative Finishes in {district}, {emirate}</h2>
              <p className="mb-12 text-deco-plum/80">
                Based on our extensive experience in {district}, these are the most requested decorative paint and flooring 
                solutions that perfectly complement the local architecture and design preferences.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-deco-beige rounded-full flex items-center justify-center">
                      <Paintbrush className="w-6 h-6 text-deco-plum" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marmorino Veneziano</h3>
                    <p className="text-deco-plum/80 mb-4">
                      Our premium Italian limestone plaster finish is particularly popular in {district}'s luxury villas and penthouses, 
                      providing timeless elegance that complements both traditional and contemporary architecture.
                    </p>
                    <Link to="/paints/marmorino" className="text-deco-denim hover:text-deco-plum font-medium inline-flex items-center">
                      Learn More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-deco-beige rounded-full flex items-center justify-center">
                      <Layers className="w-6 h-6 text-deco-plum" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Micro-Cement Flooring</h3>
                    <p className="text-deco-plum/80 mb-4">
                      A seamless, contemporary flooring solution that has become the finish of choice for {district}'s modern 
                      apartments and commercial spaces, offering durability and sophisticated aesthetics.
                    </p>
                    <Link to="/flooring/micro-cement" className="text-deco-denim hover:text-deco-plum font-medium inline-flex items-center">
                      Learn More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-deco-beige rounded-full flex items-center justify-center">
                      <Paintbrush className="w-6 h-6 text-deco-plum" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pearl Finish</h3>
                    <p className="text-deco-plum/80 mb-4">
                      Our light-reflective luxury finish creates subtle shimmer that enhances {district}'s natural light, 
                      making it perfect for reception areas, master bedrooms, and dining spaces.
                    </p>
                    <Link to="/paints/pearl-finish" className="text-deco-denim hover:text-deco-plum font-medium inline-flex items-center">
                      Learn More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-deco-beige rounded-full flex items-center justify-center">
                      <Layers className="w-6 h-6 text-deco-plum" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Metallic Epoxy Flooring</h3>
                    <p className="text-deco-plum/80 mb-4">
                      A statement flooring solution that has gained popularity in {district}'s high-end retail spaces and 
                      luxury residences, offering dramatic flowing patterns with three-dimensional visual effects.
                    </p>
                    <Link to="/flooring/metallic-epoxy" className="text-deco-denim hover:text-deco-plum font-medium inline-flex items-center">
                      Learn More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Social Proof */}
        <SocialProof location={`${district}, ${emirate}`} />
        
        {/* Section 5: Local Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6">Our Services in {district}, {emirate}</h2>
              <p className="mb-12 text-deco-plum/80">
                We offer a comprehensive range of decorative paint and flooring services tailored to the unique 
                needs of {district} properties, delivered by our local team of skilled artisans.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {localServices.map((service, index) => (
                  <div key={index} className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">{service}</h3>
                    <p className="text-deco-plum/80 text-sm">
                      Professional service tailored for {district} properties, delivered by our expert local team.
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button className="bg-deco-denim hover:bg-deco-denim/90">
                    Request Service in {district}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 6: Design Trends */}
        <section className="py-16 bg-deco-beige relative">
          <div className="absolute inset-0 geometric-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6">{district} {emirate} Design Trends</h2>
              <p className="mb-8 text-deco-plum/80">
                Our design team closely monitors the evolving design landscape in {district}, 
                ensuring our decorative paint and flooring solutions remain at the cutting edge of local trends.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Current Color Palettes</h3>
                  <p className="text-deco-plum/80 mb-6">
                    {district} properties are currently embracing sophisticated neutral tones with selective accent colors, 
                    creating spaces that feel both timeless and contemporary.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Texture Preferences</h3>
                  <p className="text-deco-plum/80">
                    We've observed a growing preference for subtle textured walls in {district} interiors, with 
                    Marmorino and concrete texture finishes being particularly popular.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Flooring Innovations</h3>
                  <p className="text-deco-plum/80 mb-6">
                    {district} properties are increasingly adopting seamless flooring solutions like micro-cement 
                    and metallic epoxy for their contemporary aesthetic and durability.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Architectural Integration</h3>
                  <p className="text-deco-plum/80">
                    Our decorative finishes are designed to complement {district}'s distinctive architectural elements, 
                    enhancing rather than competing with the structural features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 7: FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-distrampler text-3xl md:text-4xl font-bold mb-6 text-center">FAQs About Our {district} {emirate} Services</h2>
              <p className="text-center mb-12 text-deco-plum/80">
                Common questions about our decorative paint and flooring services in {district}
              </p>
              
              <FAQAccordion items={faqItems} location={district} />
            </div>
          </div>
        </section>
        
        {/* Section 8: Contact and Service Area */}
        <ContactCTA location={`${district}, ${emirate}`} />
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationDistrictPage;
