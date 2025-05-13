
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Star, FileText, Shield, Home, Paintbrush, Layers } from 'lucide-react';

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

  // Generate some sample projects based on the location
  const sampleProjects = [
    `Luxury Villa Interior in ${district}`,
    `${district} Boutique Hotel Lobby`,
    `Modern Residence in ${district}, ${emirate}`,
    `${district} Commercial Office Complex`
  ];
  
  // Generate some sample services based on the location
  const localServices = [
    "Custom Decorative Paint Consultation",
    "Interior Surface Preparation",
    "Professional Paint Application",
    "Micro-Cement Installation",
    "Decorative Flooring Services",
    "Maintenance and Touch-up Services"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Top-Rated Decorative Paint & Flooring Services in {district}, {emirate}</h2>
              <p className="text-deco-plum/80 mb-6 text-lg">
                {description}
              </p>
              <p className="text-deco-plum/80 mb-8">
                Our team of skilled artisans specializes in delivering premium decorative finishes tailored to the unique 
                architectural styles and design preferences prevalent in {district}. We understand the local climate, design trends, 
                and material performance requirements specific to {emirate}'s environment.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our {district} {emirate} Experience</h2>
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
                    We've been serving the {district} area for over a decade, building relationships with local designers, 
                    architects, and homeowners to deliver exceptional decorative finishes.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-deco-denim rounded-full flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Local Design Sensibilities</h3>
                  <p className="text-deco-plum/80">
                    Our designers understand the unique architectural character and design preferences of {district}, 
                    allowing us to create finishes that complement and enhance local spaces.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-deco-denim rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Climate-Specific Solutions</h3>
                  <p className="text-deco-plum/80">
                    We formulate our decorative paints and flooring solutions to withstand {emirate}'s unique climate conditions, 
                    ensuring longevity and performance in both residential and commercial spaces.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Most Popular Decorative Finishes in {district}, {emirate}</h2>
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
                      providing a timeless elegance that complements both traditional and contemporary architecture.
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
        
        {/* Section 4: Featured Projects */}
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured {district} {emirate} Projects</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                Explore our showcase of completed decorative paint and flooring projects in the {district} area, 
                demonstrating our expertise and commitment to excellence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {sampleProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <Home className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project}</h3>
                      <p className="text-deco-plum/80 mb-4">
                        A recent project showcasing our premium decorative finishes in {district}, featuring 
                        custom color mixtures and application techniques tailored to the client's specific requirements.
                      </p>
                      <Link to="/contact" className="text-deco-denim hover:text-deco-plum font-medium inline-flex items-center">
                        Request Similar Project <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 5: Local Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services in {district}, {emirate}</h2>
              <p className="mb-12 text-deco-plum/80">
                We offer a comprehensive range of decorative paint and flooring services tailored to the unique 
                needs of {district} properties, delivered by our local team of skilled artisans.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {localServices.map((service, index) => (
                  <div key={index} className="border p-6 rounded-lg">
                    <h3 className="font-bold mb-2">{service}</h3>
                    <p className="text-deco-plum/80 text-sm">
                      Professional service tailored for {district} properties, delivered by our expert local team with 
                      in-depth knowledge of the area's requirements.
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
        
        {/* Section 6: Local Team */}
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your {district} {emirate} Team</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                Meet our dedicated team serving the {district} area, bringing specialized knowledge and skills 
                to every decorative paint and flooring project.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Design Consultant</h3>
                  <p className="text-deco-plum/80 mt-2">
                    Specialized in {district} architectural styles and design preferences, offering tailored recommendations 
                    for your specific project needs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Master Artisan</h3>
                  <p className="text-deco-plum/80 mt-2">
                    With extensive experience applying decorative finishes in {district} properties, ensuring 
                    flawless execution and exceptional results.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Project Manager</h3>
                  <p className="text-deco-plum/80 mt-2">
                    Dedicated to ensuring your {district} project is completed on time, within budget, and to 
                    the highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 7: Local Design Trends */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{district} {emirate} Design Trends</h2>
              <p className="mb-8 text-deco-plum/80">
                Our design team closely monitors and contributes to the evolving design landscape in {district}, 
                ensuring our decorative paint and flooring solutions remain at the cutting edge of local trends.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Current Color Palettes</h3>
                  <p className="text-deco-plum/80 mb-6">
                    {district} properties are currently embracing sophisticated neutral tones with selective accent colors, 
                    creating spaces that feel both timeless and contemporary. Our decorative paints are custom-mixed to 
                    achieve the perfect shade for your specific project.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Texture Preferences</h3>
                  <p className="text-deco-plum/80">
                    We've observed a growing preference for subtle textured walls in {district} interiors, with 
                    Marmorino and concrete texture finishes being particularly popular for their ability to add 
                    dimension without overwhelming the space.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Flooring Innovations</h3>
                  <p className="text-deco-plum/80 mb-6">
                    {district} properties are increasingly adopting seamless flooring solutions like micro-cement 
                    and metallic epoxy for their contemporary aesthetic, durability, and ease of maintenance in 
                    the local climate conditions.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Architectural Integration</h3>
                  <p className="text-deco-plum/80">
                    Our decorative finishes are designed to complement {district}'s distinctive architectural elements, 
                    enhancing rather than competing with the structural features that define the local built environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 8: Testimonials */}
        <section className="py-16 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{district} {emirate} Client Testimonials</h2>
              <p className="text-center mb-12 max-w-3xl mx-auto text-deco-plum/80">
                Hear from our satisfied clients in the {district} area who have experienced our premium 
                decorative paint and flooring solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="text-deco-gold">
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                    </div>
                  </div>
                  <blockquote className="text-deco-plum/80 mb-6 italic">
                    "The DecoPaints team transformed our {district} villa with their exceptional Marmorino finish. 
                    Their attention to detail and understanding of our design vision resulted in a truly 
                    spectacular outcome. Highly recommended!"
                  </blockquote>
                  <div className="font-bold">Villa Owner, {district}</div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="text-deco-gold">
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                      <Star className="w-5 h-5 inline-block" />
                    </div>
                  </div>
                  <blockquote className="text-deco-plum/80 mb-6 italic">
                    "As an interior designer working frequently in the {district} area, I rely on DecoPaints for 
                    their consistent quality and ability to understand the unique requirements of each project. 
                    Their micro-cement flooring has become a signature element in many of my designs."
                  </blockquote>
                  <div className="font-bold">Interior Designer, {emirate}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 9: FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">FAQs About Our {district} {emirate} Services</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">How quickly can you start a project in {district}?</h3>
                  <p className="text-deco-plum/80">
                    We typically schedule consultations within 48 hours for {district} properties and can begin 
                    work within 1-2 weeks of project approval, depending on the scope and current schedule.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Do you offer custom color matching for {district} properties?</h3>
                  <p className="text-deco-plum/80">
                    Yes, we provide custom color matching services tailored to complement existing interior elements or to 
                    achieve specific design visions for {district} properties, ensuring perfect integration with your space.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">How do your finishes perform in {district}'s specific climate conditions?</h3>
                  <p className="text-deco-plum/80">
                    Our decorative paints and flooring solutions are specifically formulated to withstand the local climate 
                    challenges, including temperature fluctuations and humidity levels common in {district}, ensuring 
                    long-lasting, beautiful results.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Do you provide maintenance services for existing finishes in {district}?</h3>
                  <p className="text-deco-plum/80">
                    Yes, we offer comprehensive maintenance services for both our own installations and existing 
                    decorative finishes in {district} properties, helping to preserve their beauty and integrity over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 10: Contact and Service Area */}
        <section className="py-16 bg-deco-plum text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our {district} {emirate} Team</h2>
                  <p className="mb-8 text-white/90">
                    Our dedicated {district} team is ready to assist with your decorative paint and flooring needs. 
                    Contact us today to schedule a consultation or request an estimate for your project.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-deco-gold" />
                      <div>
                        <h3 className="font-medium">Service Area</h3>
                        <p className="text-white/80">{district}, {emirate} and surrounding areas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-deco-gold" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="tel:+971503119537" className="text-white/80 hover:text-white transition-colors">
                          +971 50 311 9537
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-deco-gold" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href={`mailto:${emirate.toLowerCase()}@decopaints.ae`} className="text-white/80 hover:text-white transition-colors">
                          {emirate.toLowerCase()}@decopaints.ae
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-white text-deco-plum hover:bg-white/90">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-deco-plum">Request a {district} {emirate} Service</h3>
                    <p className="mb-6 text-deco-plum/80">
                      Complete the form below for a quick response from our {district} team. We'll contact you 
                      to discuss your project requirements and arrange a consultation.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-deco-plum/80 mb-1">First Name</label>
                          <input type="text" className="w-full p-2 border rounded" placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-deco-plum/80 mb-1">Last Name</label>
                          <input type="text" className="w-full p-2 border rounded" placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-deco-plum/80 mb-1">Email</label>
                        <input type="email" className="w-full p-2 border rounded" placeholder="Your email" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-deco-plum/80 mb-1">Phone</label>
                        <input type="tel" className="w-full p-2 border rounded" placeholder="Your phone number" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-deco-plum/80 mb-1">Message</label>
                        <textarea className="w-full p-2 border rounded h-24" placeholder={`Please describe your ${district} project requirements`}></textarea>
                      </div>
                      
                      <Button className="bg-deco-denim hover:bg-deco-denim/90 w-full">
                        Submit Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationDistrictPage;
