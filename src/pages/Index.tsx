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
import DistinctiveFinishesTabs from '../components/DistinctiveFinishesTabs';
import { useElfsightForm } from '../components/ElfsightFormContext';

const Index = () => {
  useEffect(() => {
    document.title = "DecoPaints | Transforming Spaces, Elevating Lifestyles";
    const scriptId = 'elfsight-platform';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const { openForm } = useElfsightForm();
  return (
    <div className="min-h-screen flex flex-col scroll-smooth font-circular">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section with CTAs */}
        <HeroSection openEstimateForm={openForm} />
        <BrandPromise />

        {/* Texture Section */}
        <section id="textures" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-distrampler text-3xl mb-4 font-normal md:text-5xl">Distinctive Finishes.</h2>
              <GoldAccent className="mb-6" />
              <p className="text-lg text-deco-plum/80">
                Discover our exquisite range of decorative surfaces, each with a unique character and unparalleled elegance.
              </p>
            </div>
            <DistinctiveFinishesTabs />
          </div>
        </section>
        
        <GeometricDivider />
        
        {/* Space Showcase */}
        <SpaceShowcase />
        
        <FeaturedCollections />
        
        {/* Process Experience Section */}
        <section className="section bg-deco-beige relative overflow-hidden font-circular">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-distrampler text-3xl mb-4 font-normal md:text-5xl">Our Artisanal Process.</h2>
              <GoldAccent className="mb-6" />
              <p className="text-deco-plum/80 text-xl">
                Every project is approached with meticulous attention to detail and executed with master craftsmanship.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[{
                title: "Consultation",
                icon: <Paintbrush className="h-8 w-8 text-deco-plum" />,
                desc: "In-depth understanding of your vision and space requirements"
              }, {
                title: "Design",
                icon: <Droplet className="h-8 w-8 text-deco-plum" />,
                desc: "Custom color and finish recommendations for your project"
              }, {
                title: "Preparation",
                icon: <Paintbrush className="h-8 w-8 text-deco-plum" />,
                desc: "Meticulous surface preparation for flawless application"
              }, {
                title: "Application",
                icon: <Droplet className="h-8 w-8 text-deco-plum" />,
                desc: "Master artisans execute with precision techniques"
              }, {
                title: "Completion",
                icon: <Paintbrush className="h-8 w-8 text-deco-plum" />,
                desc: "Final inspection and maintenance guidance"
              }].map((step, index) => <div key={index} className="flex flex-col items-center">
                    <div className="z-10">
                      <div className="rounded-full bg-white p-4 shadow-md border-2 border-deco-gold/30 mb-6">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-distrampler text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-center text-sm text-deco-plum/80">{step.desc}</p>
                  </div>)}
              </div>
              
              <div className="mt-16 text-center">
                <button
                  type="button"
                  onClick={openForm}
                  className="bg-deco-plum text-white px-6 py-3 rounded-full inline-flex items-center hover:shadow-lg transition-all font-circular text-lg"
                >
                  <Paintbrush className="h-5 w-5 mr-2" />
                  Schedule Consultation.
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section bg-white relative font-circular">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-distrampler text-3xl mb-4 font-normal md:text-5xl">Why DecoPaints Stands Apart.</h2>
              <GoldAccent className="mb-6" />
              <p className="text-deco-plum/80 text-xl">
                Our commitment to excellence and innovation has established us as the UAE's premier decorative finishing company.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              icon: <Star className="h-10 w-10 text-deco-gold" />,
              title: "Premium Materials",
              desc: "We source the finest Italian and French materials, ensuring exceptional quality and longevity."
            }, {
              icon: <Check className="h-10 w-10 text-deco-gold" />,
              title: "Master Artisans",
              desc: "Our specialists are trained in traditional European craftsmanship techniques refined over generations."
            }, {
              icon: <Layers className="h-10 w-10 text-deco-gold" />,
              title: "Bespoke Solutions",
              desc: "Every project receives a custom approach tailored to your unique aesthetic vision and space."
            }, {
              icon: <Droplet className="h-10 w-10 text-deco-gold" />,
              title: "Eco-Friendly",
              desc: "Our products are low-VOC and environmentally responsible without compromising on luxury."
            }, {
              icon: <MessageSquare className="h-10 w-10 text-deco-gold" />,
              title: "Dedicated Support",
              desc: "From consultation to completion, our team provides attentive, responsive service."
            }, {
              icon: <Check className="h-10 w-10 text-deco-gold" />,
              title: "5-Year Warranty",
              desc: "We stand behind our work with an industry-leading warranty on all our finishes."
            }].map((feature, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-2 border-deco-gold/30">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="font-distrampler text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-deco-plum/80">{feature.desc}</p>
                </div>)}
            </div>
          </div>
        </section>
        
        {/* Testimonials/Social Proof */}
        <SocialProof />
        
        {/* Dubai Skyline */}
        <DubaiSkyline />
        
        {/* Recent Projects */}
        <section className="section bg-white font-circular">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-distrampler text-3xl mb-4 font-normal md:text-5xl">Recent Transformations.</h2>
              <GoldAccent className="mb-6" />
              <p className="text-deco-plum/80 text-xl">
                Explore our latest luxury projects across the UAE, showcasing the versatility and beauty of our finishes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Luxury Living Room */}
              <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="/lovable-uploads/b5c2a002-66ff-44ac-a016-767aef2a4169.png" alt="Luxury Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-distrampler text-xl font-bold mb-1">Luxury Living Room</h3>
                  <p className="text-deco-plum/70 mb-3">
                    <span className="text-deco-gold">Downtown Dubai</span> 
                  </p>
                  <button className="text-deco-denim font-medium hover:underline font-circular" onClick={() => {
                  const el = document.getElementById('footer-deco-paints');
                  if (el) el.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                    View Project
                  </button>
                </div>
              </div>
              {/* Modern Kitchen */}
              <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="/lovable-uploads/1c5cc876-67e7-46b5-bf7e-33955c2f1fed.png" alt="Modern Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-distrampler text-xl font-bold mb-1">Modern Kitchen</h3>
                  <p className="text-deco-plum/70 mb-3">
                    <span className="text-deco-gold">Palm Jumeirah</span> 
                  </p>
                  <button className="text-deco-denim font-medium hover:underline font-circular" onClick={() => {
                  const el = document.getElementById('footer-deco-paints');
                  if (el) el.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                    View Project
                  </button>
                </div>
              </div>
              {/* Spa-Inspired Bathroom */}
              <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="/lovable-uploads/a595e994-b78b-4726-afbb-5007408bbd6c.png" alt="Spa-Inspired Bathroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-distrampler text-xl font-bold mb-1">Spa-Inspired Bathroom</h3>
                  <p className="text-deco-plum/70 mb-3">
                    <span className="text-deco-gold">Dubai Marina</span> 
                  </p>
                  <button className="text-deco-denim font-medium hover:underline font-circular" onClick={() => {
                  const el = document.getElementById('footer-deco-paints');
                  if (el) el.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  const el = document.getElementById('footer-deco-paints');
                  if (el) el.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="bg-deco-plum text-white px-6 py-3 rounded-full inline-flex items-center font-circular text-lg hover:shadow-lg transition-all"
              >
                View All Projects.
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA cta="Transform Your Space." onCtaClick={openForm} />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
