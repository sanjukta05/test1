import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const SustainabilityPage = () => {
  useEffect(() => {
    document.title = "Sustainability | DecoPaints";
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="Our Sustainability Commitment"
        description="Responsible Practices for a Better Tomorrow"
        backgroundImage="/lovable-uploads/78e0e2c7-2ff0-47fd-b70b-aec0c55e7f54.png"
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-3xl mb-6 font-normal md:text-5xl">Our Approach to Sustainability</h2>
              <p className="text-deco-plum/80 text-xl">
                At DecoPaints, sustainability isn't just a trend—it's a core value that guides our operations, 
                product development, and business relationships. We believe that premium finishes can and should 
                be environmentally responsible, creating spaces that are both beautiful and healthy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
              <div>
                <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto mb-6">
                  <img src="/lovable-uploads/f5c50385-8d91-4c57-8b64-4d49cd2eeed0.png" alt="Eco-friendly manufacturing process" className="rounded-lg shadow-lg object-cover w-full h-full" />
                </AspectRatio>
                <h3 className="text-2xl font-bold mb-4">Environmental Responsibility</h3>
                <p className="text-deco-plum/80 mb-4">
                  We carefully select raw materials that minimize environmental impact while maintaining the highest quality standards. 
                  Many of our decorative finishes utilize natural ingredients such as lime, clay, and mineral pigments that have been 
                  used for centuries.
                </p>
                <p className="text-deco-plum/80">
                  Our manufacturing processes prioritize resource efficiency, waste reduction, and responsible disposal practices. 
                  We continuously work to reduce our carbon footprint through energy efficiency measures and renewable energy utilization.
                </p>
              </div>
              
              <div>
                <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto mb-6">
                  <img src="/lovable-uploads/e9a2d86d-cc04-4611-bff6-24a57f765daa.png" alt="Natural raw materials" className="rounded-lg shadow-lg object-cover w-full h-full" />
                </AspectRatio>
                <h3 className="text-2xl font-bold mb-4">Indoor Air Quality</h3>
                <p className="text-deco-plum/80 mb-4">
                  We understand that the finishes in your home directly impact the air you breathe. That's why we've developed our 
                  premium product lines to feature low-VOC or VOC-free formulations that don't compromise on durability or aesthetics.
                </p>
                <p className="text-deco-plum/80">
                  Many of our lime-based products actively improve indoor air quality through natural properties that absorb carbon 
                  dioxide and inhibit mold and bacterial growth, creating healthier living environments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl mb-6 font-normal md:text-5xl">Our Sustainability Initiatives</h2>
              <p className="text-deco-plum/80 text-xl">
                We're committed to continuous improvement in our environmental practices through these key initiatives.
              </p>
            </div>
            
            <Tabs defaultValue="materials" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="materials" className="text-lg">Sustainable Materials</TabsTrigger>
                <TabsTrigger value="packaging" className="text-lg">Packaging Reduction</TabsTrigger>
                <TabsTrigger value="emissions" className="text-lg">Carbon Neutrality</TabsTrigger>
                <TabsTrigger value="community" className="text-lg">Community Impact</TabsTrigger>
              </TabsList>
              
              <TabsContent value="materials" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-sm">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Responsible Sourcing</h3>
                    <p className="text-deco-plum/80 mb-4">
                      We carefully select suppliers who share our commitment to environmental responsibility and ethical business practices.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                      <li>Natural lime from certified sustainable quarries</li>
                      <li>Clay and mineral pigments from responsible sources</li>
                      <li>Locally sourced materials when possible to reduce transportation emissions</li>
                      <li>Rigorous supplier assessment and auditing process</li>
                    </ul>
                  </div>
                  <div>
                    <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto">
                      <img src="/lovable-uploads/4d7745d5-a235-4778-8620-db73f529a77b.png" alt="" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="packaging" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-sm">
                  <div>
                    <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto">
                      <img src="/lovable-uploads/c6c449b5-dadc-454e-9643-bdecc8853896.png" alt="" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Packaging Innovation</h3>
                    <p className="text-deco-plum/80 mb-4">
                      We're continually reimagining our packaging to minimize waste while ensuring our products are protected during transport.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                      <li>Recycled and recyclable packaging materials</li>
                      <li>Bulk packaging options for commercial projects</li>
                      <li>Refill programs to reduce container usage</li>
                      <li>Biodegradable packaging alternatives for select product lines</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="emissions" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-sm">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Carbon Reduction Strategy</h3>
                    <p className="text-deco-plum/80 mb-4">
                      We're working toward carbon neutrality through a comprehensive approach to emissions reduction.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                      <li>Energy-efficient manufacturing facilities</li>
                      <li>Solar power integration at our Dubai headquarters</li>
                      <li>Electric vehicle fleet for local deliveries</li>
                      <li>Carbon offset investments for emissions we cannot yet eliminate</li>
                      <li>Annual carbon footprint assessment and reduction targets</li>
                    </ul>
                  </div>
                  <div>
                    <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto">
                      <img src="/lovable-uploads/45cebf87-1be7-44bd-8123-a08b8b8b0e80.png" alt="" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="community" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-sm">
                  <div>
                    <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto">
                      <img src="/lovable-uploads/9ad311a1-805b-4eae-8223-7bb8fe09cc77.png" alt="" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                  <div>
                    <h3 className="mb-4 text-5xl font-normal">Supporting Local Communities</h3>
                    <p className="text-deco-plum/80 mb-4">
                      We believe in giving back to the communities where we operate and helping create more sustainable urban environments.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                      <li>Annual community beautification projects</li>
                      <li>Training programs for local artisans in traditional techniques</li>
                      <li>Educational workshops on sustainable building practices</li>
                      <li>Partnerships with local environmental initiatives</li>
                      <li>Volunteer programs for our team members</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl mb-6 font-normal md:text-5xl">Our Certifications</h2>
              <p className="text-deco-plum/80 text-xl">
                We're proud to meet and exceed industry standards for sustainability and product safety.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">ECO<span className="text-deco-denim">cert</span></h3>
                <p className="text-sm text-deco-plum/70">Natural Material Certification</p>
              </div>
              
              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-.181h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">LEED<span className="text-deco-denim">points</span></h3>
                <p className="text-sm text-deco-plum/70">Contributes to Green Building</p>
              </div>
              
              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">GREEN<span className="text-deco-denim">guard</span></h3>
                <p className="text-sm text-deco-plum/70">Indoor Air Quality Certified</p>
              </div>
              
              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">CRADLE<span className="text-deco-denim">2CRADLE</span></h3>
                <p className="text-sm text-deco-plum/70">Sustainable Product Innovation</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl mb-6 font-normal md:text-5xl">Our Sustainability Goals</h2>
              <p className="text-white/90 mb-12 text-xl">
                We've set ambitious targets for the future as we continue our sustainability journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">2026 Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>50% recycled packaging material</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>25% reduction in water usage</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>VOC-free formulations for 75% of product line</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">2028 Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>75% renewable energy in all facilities</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>40% reduction in carbon footprint</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Zero waste to landfill from production</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">2030 Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Carbon neutrality across all operations</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% sustainable or recycled packaging</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deco-denim" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fully electric delivery fleet</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mt-16">
              <a href="/contact" className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block">
                Learn More About Our Initiatives
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default SustainabilityPage;
