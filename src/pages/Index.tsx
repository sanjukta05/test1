
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BrandPromise from '../components/BrandPromise';
import FeaturedCollections from '../components/FeaturedCollections';
import Footer from '../components/Footer';
import { TextureGrid, GeometricDivider, GoldAccent } from '../components/TextureUtils';
import { Paintbrush, Droplet, Star, MessageSquare, Layers, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialProof from '../components/SocialProof';
import ContactCTA from '../components/ContactCTA';
import SpaceShowcase from '../components/SpaceShowcase';
import DubaiSkyline from '../components/DubaiSkyline';

const Index = () => {
  useEffect(() => {
    document.title = "DecoPaints | Transforming Spaces, Elevating Lifestyles";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <BrandPromise />
        
        {/* Texture Section */}
        <section id="textures" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Distinctive Finishes</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Discover our exquisite range of decorative surfaces, each with a unique character and unparalleled elegance.
              </p>
            </div>
            
            <TextureGrid />
          </div>
        </section>
        
        <GeometricDivider />
        
        {/* Space Showcase */}
        <SpaceShowcase />
        
        <FeaturedCollections />
        
        {/* Process Experience Section */}
        <section className="section bg-deco-beige relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Our Artisanal Process</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Every project is approached with meticulous attention to detail and executed with master craftsmanship.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { title: "Consultation", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "In-depth understanding of your vision and space requirements" },
                  { title: "Design", icon: <Droplet className="h-8 w-8 text-deco-plum" />, desc: "Custom color and finish recommendations for your project" },
                  { title: "Preparation", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "Meticulous surface preparation for flawless application" },
                  { title: "Application", icon: <Droplet className="h-8 w-8 text-deco-plum" />, desc: "Master artisans execute with precision techniques" },
                  { title: "Completion", icon: <Paintbrush className="h-8 w-8 text-deco-plum" />, desc: "Final inspection and maintenance guidance" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="z-10">
                      <div className="rounded-full bg-white p-4 shadow-md border-2 border-deco-gold/30 mb-6">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-parafina text-xl font-bold mb-2">{step.title}</h3>
                    <p className="font-grosa text-center text-sm text-deco-plum/80">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <Link to="/contact" className="bg-deco-denim text-white px-6 py-3 rounded-full inline-flex items-center hover:shadow-lg transition-all">
                  <Paintbrush className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section bg-white relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Why DecoPaints Stands Apart</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Our commitment to excellence and innovation has established us as the UAE's premier decorative finishing company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Star className="h-10 w-10 text-deco-gold" />,
                  title: "Premium Materials",
                  desc: "We source the finest Italian and French materials, ensuring exceptional quality and longevity."
                },
                { 
                  icon: <Check className="h-10 w-10 text-deco-gold" />,
                  title: "Master Artisans",
                  desc: "Our specialists are trained in traditional European craftsmanship techniques refined over generations."
                },
                { 
                  icon: <Layers className="h-10 w-10 text-deco-gold" />,
                  title: "Bespoke Solutions",
                  desc: "Every project receives a custom approach tailored to your unique aesthetic vision and space."
                },
                { 
                  icon: <Droplet className="h-10 w-10 text-deco-gold" />,
                  title: "Eco-Friendly",
                  desc: "Our products are low-VOC and environmentally responsible without compromising on luxury."
                },
                { 
                  icon: <MessageSquare className="h-10 w-10 text-deco-gold" />,
                  title: "Dedicated Support",
                  desc: "From consultation to completion, our team provides attentive, responsive service."
                },
                { 
                  icon: <Check className="h-10 w-10 text-deco-gold" />,
                  title: "5-Year Warranty",
                  desc: "We stand behind our work with an industry-leading warranty on all our finishes."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-2 border-deco-gold/30">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="font-parafina text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="font-grosa text-deco-plum/80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials/Social Proof */}
        <SocialProof />
        
        {/* Dubai Skyline */}
        <DubaiSkyline />
        
        {/* Recent Projects */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-parafina text-3xl md:text-4xl font-bold mb-4">Recent Transformations</h2>
              <GoldAccent className="mb-6" />
              <p className="font-grosa text-lg text-deco-plum/80">
                Explore our latest luxury projects across the UAE, showcasing the versatility and beauty of our finishes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Villa Renovation",
                  location: "Palm Jumeirah",
                  finish: "Venetian Marmorino"
                },
                { 
                  image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Luxury Apartment",
                  location: "Downtown Dubai",
                  finish: "Pearl Finish & Gold Leaf"
                },
                { 
                  image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
                  title: "Corporate Office",
                  location: "DIFC",
                  finish: "Micro-Cement & Metallic Epoxy"
                }
              ].map((project, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-parafina text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-deco-plum/70 mb-3">
                      <span className="text-deco-gold">{project.location}</span> • {project.finish}
                    </p>
                    <Link to="/gallery" className="text-deco-denim font-medium hover:underline">View Project</Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/gallery" className="btn-outline inline-flex items-center">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <ContactCTA cta="Transform Your Space" />
      </main>
      <Footer />
      
      {/* Floating Get Estimate Button */}
      <Link 
        to="/contact" 
        className="fixed bottom-8 right-8 bg-deco-denim text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 group flex items-center gap-2"
      >
        <Paintbrush className="h-5 w-5 group-hover:animate-pulse" />
        Get Estimate
      </Link>
    </div>
  );
};

export default Index;
