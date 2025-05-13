
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Product data (this would typically come from an API/database)
const productData = {
  paints: {
    marmorino: {
      name: "Venetian Marmorino",
      shortDescription: "Timeless elegance with a smooth, stone-like finish",
      fullDescription: "Our Venetian Marmorino finish creates depth, texture and movement with a natural stone-like appearance. This classic lime-based plaster originated in Venice during the Renaissance and continues to be prized for its timeless beauty and durability.",
      origin: "Venice, Italy - 15th Century",
      benefits: [
        "Naturally mold and mildew resistant",
        "Breathable and moisture regulating",
        "Environmentally friendly lime base",
        "Exceptionally durable with proper maintenance",
        "Unique, one-of-a-kind appearance"
      ],
      applications: ["Living Areas", "Dining Rooms", "Entryways", "Feature Walls", "Bathrooms"],
      technicalSpecs: {
        composition: "Slaked lime, marble dust, natural additives",
        finish: "Matte to polished, depending on application",
        colors: "Full custom color range available",
        coverage: "Approximately 8-10 sq. meters per kg (varies by application)",
        dryTime: "24-48 hours for initial set, 30 days for full carbonation"
      },
      steps: [
        {
          title: "Surface Preparation",
          description: "Thorough cleaning, priming, and base coat application"
        },
        {
          title: "First Coat Application",
          description: "Foundation layer providing base color and initial texture"
        },
        {
          title: "Second Coat Application",
          description: "Building depth and developing the marble-like pattern"
        },
        {
          title: "Burnishing & Polishing",
          description: "Creating the characteristic sheen and smooth texture"
        },
        {
          title: "Protective Sealing",
          description: "Application of natural wax or sealer for longevity"
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000&h=600",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1000&h=600",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1000&h=600"
      ],
      colorOptions: [
        { name: "Natural White", hex: "#F5F5F0" },
        { name: "Ivory Cream", hex: "#F7F2E1" },
        { name: "Warm Beige", hex: "#E8DCCA" },
        { name: "Sage Mist", hex: "#D1DBCD" },
        { name: "Dove Gray", hex: "#D2D2D2" },
        { name: "Terra Rosa", hex: "#D9BEB5" }
      ],
      testimonials: [
        {
          name: "Sarah Al Maktoum",
          role: "Homeowner, Palm Jumeirah",
          quote: "The Marmorino finish in our living area completely transformed the space. The depth and texture catch light beautifully throughout the day, and we've received countless compliments."
        },
        {
          name: "Rashid Khan",
          role: "Interior Designer, Khan Design Studios",
          quote: "I've worked with many decorative finish providers, but DecoPaints' Marmorino application is truly exceptional. Their craftsmen achieve a level of depth and subtlety that elevates any project."
        }
      ],
      relatedProducts: ["limewash", "pearl-finish", "concrete-texture"]
    }
  },
  flooring: {
    terrazzo: {
      name: "Terrazzo Flooring",
      shortDescription: "Contemporary interpretation of the classic Italian terrazzo",
      fullDescription: "Our modern terrazzo flooring combines traditional craftsmanship with contemporary design flexibility. Using premium aggregates embedded in a polymer-modified cement or epoxy base, we create seamless, durable and infinitely customizable surfaces.",
      origin: "Venice, Italy - 15th Century",
      benefits: [
        "Extraordinarily durable and long-lasting",
        "Seamless installation with no grout lines",
        "Unlimited design and color possibilities",
        "Low maintenance and easy to clean",
        "Environmentally sustainable options available"
      ],
      applications: ["Residential Floors", "Commercial Spaces", "Hospitality Areas", "Retail Environments", "Outdoor Patios"],
      technicalSpecs: {
        composition: "Marble, glass, or granite aggregates in cement or epoxy base",
        finish: "Polished, honed, or matte",
        colors: "Unlimited combinations available",
        thickness: "6mm to 12mm typical application",
        curingTime: "24-48 hours for light foot traffic, 7 days for full cure"
      },
      steps: [
        {
          title: "Surface Preparation",
          description: "Thorough cleaning, repairing imperfections, and priming"
        },
        {
          title: "Base Coat Application",
          description: "Creating a level, solid foundation"
        },
        {
          title: "Terrazzo Mix Application",
          description: "Applying the custom aggregate mix to the desired thickness"
        },
        {
          title: "Grinding & Honing",
          description: "Revealing the pattern and achieving a smooth surface"
        },
        {
          title: "Polishing & Sealing",
          description: "Finishing to the desired shine and protective sealing"
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1000&h=600",
        "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=80&w=1000&h=600",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1000&h=600"
      ],
      colorOptions: [
        { name: "Classic White", hex: "#F8F8F8" },
        { name: "Light Gray", hex: "#CCCCCC" },
        { name: "Charcoal", hex: "#444444" },
        { name: "Desert Sand", hex: "#E6CCB3" },
        { name: "Sage Green", hex: "#B3CCB3" },
        { name: "Ocean Blue", hex: "#B3C6CC" }
      ],
      testimonials: [
        {
          name: "Mohammed Al Fahim",
          role: "Property Developer, Dubai Marina",
          quote: "The terrazzo flooring installed in our lobby has withstood heavy foot traffic for years while maintaining its beautiful appearance. The customized design perfectly complements our branding."
        },
        {
          name: "Leila Mansour",
          role: "Architect, Mansour Associates",
          quote: "DecoPaints' terrazzo installation exceeded our expectations. Their ability to create complex patterns and color combinations gave us complete design freedom for our client's flagship store."
        }
      ],
      relatedProducts: ["micro-cement", "epoxy-metallic", "polished-concrete"]
    }
  }
};

const ProductPage = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // In a real application, this would fetch data from an API
    if (type && id && productData[type as keyof typeof productData]?.[id as any]) {
      setProduct(productData[type as keyof typeof productData][id as any]);
      document.title = `${productData[type as keyof typeof productData][id as any].name} | DecoPaints`;
    } else {
      document.title = "Product | DecoPaints";
    }
  }, [type, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-deco-plum">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-deco-plum"></div>
          
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">{product.shortDescription}</p>
              <a 
                href="#estimate" 
                className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block"
              >
                Get Estimate
              </a>
            </div>
          </div>
        </section>
        
        {/* Material Origin Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-deco-denim uppercase tracking-wider mb-2">Material Heritage</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Craftsmanship</h2>
                <p className="text-lg mb-6 text-deco-plum/80">
                  {product.fullDescription}
                </p>
                <div className="p-4 border-l-4 border-deco-denim bg-deco-beige/30">
                  <p className="italic text-deco-plum/80">Origin: {product.origin}</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={product.images[1]} 
                  alt={`${product.name} detail`} 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-deco-plum text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Premium Finish</p>
                  <p className="text-sm">Expert Application</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits & Applications */}
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits</h2>
              <p className="text-lg text-deco-plum/80">
                Why {product.name} stands out among decorative finishes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {product.benefits.map((benefit: string, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 flex items-center justify-center bg-deco-beige rounded-full mb-4">
                    <span className="text-deco-plum font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ideal Applications</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {product.applications.map((app: string, index: number) => (
                  <span 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-full text-deco-plum border border-deco-plum/20 shadow-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Specifications */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
              
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="process">Application Process</TabsTrigger>
                  <TabsTrigger value="care">Care & Maintenance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs" className="p-6 border rounded-b-lg mt-2">
                  <div className="space-y-4">
                    {Object.entries(product.technicalSpecs).map(([key, value]: [string, any]) => (
                      <div key={key} className="grid grid-cols-3 border-b border-deco-beige py-3 last:border-0">
                        <div className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="col-span-2 text-deco-plum/80">{value}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="process" className="p-6 border rounded-b-lg mt-2">
                  <div className="space-y-6">
                    {product.steps.map((step: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        <div className="h-10 w-10 flex items-center justify-center bg-deco-beige rounded-full flex-shrink-0">
                          <span className="text-deco-plum font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                          <p className="text-deco-plum/80">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="care" className="p-6 border rounded-b-lg mt-2">
                  <div className="space-y-4">
                    <p className="text-deco-plum/80">
                      To maintain the beauty and longevity of your {product.name} finish, we recommend the following care instructions:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-deco-plum/80">
                      <li>Clean regularly with a soft, damp cloth using mild, pH-neutral soap if needed.</li>
                      <li>Avoid harsh chemicals, abrasive cleaners, and acidic substances which can damage the finish.</li>
                      <li>For stubborn stains, contact our maintenance team rather than attempting aggressive cleaning.</li>
                      <li>Reapply sealer every 5-7 years for areas with high exposure or traffic (we offer this service).</li>
                      <li>Address any damage promptly to prevent further deterioration.</li>
                    </ul>
                    <p className="text-deco-plum/80 mt-4">
                      With proper care, your {product.name} finish will continue to enhance your space for decades.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 text-center">
                <a href="/contact" className="text-deco-denim hover:text-deco-plum transition-colors inline-flex items-center">
                  <span>Have technical questions? Contact our specialists</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Gallery</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Main Image */}
              <div className="md:col-span-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={product.images[activeImageIndex]} 
                      alt={`${product.name} - Gallery image ${activeImageIndex + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="md:col-span-2 flex justify-center gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === activeImageIndex ? 'border-deco-denim ring-2 ring-deco-denim ring-offset-2' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Color Options */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Color Options</h2>
              <p className="text-lg mb-12 text-center text-deco-plum/80">
                Available in a wide range of color options, with custom colors available upon request.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {product.colorOptions.map((color: any, index: number) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-24 h-24 rounded-full border shadow-sm hover:shadow-md transition-shadow mb-3" 
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span className="font-medium text-sm">{color.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="mb-4 text-deco-plum/80">Need a custom color to match your design vision?</p>
                <a 
                  href="/contact" 
                  className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-full transition-colors inline-block"
                >
                  Request Custom Color
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Experiences</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {product.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-deco-plum text-white flex items-center justify-center font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-deco-plum/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote>
                    <p className="italic text-deco-plum/80">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Related Finishes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* In a real application, these would link to actual related products */}
              {[1, 2, 3].map((index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={product.images[index % product.images.length]} 
                      alt="Related product"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Related Finish {index}</h3>
                    <a href="#" className="text-deco-denim bg-white/90 hover:bg-white py-2 px-4 rounded-full inline-block text-sm transition-colors">
                      Explore This Finish
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">How long does the application take?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    For a standard room, the complete application of {product.name} typically takes 3-5 days, including preparation, 
                    multiple coat application, and curing time. Larger spaces or complex designs may require additional time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Is this finish suitable for high-moisture areas?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    Yes, with proper sealing, {product.name} is suitable for bathrooms, kitchens, and other areas with moisture exposure. 
                    We use specialized sealers for these environments to ensure long-term durability and water resistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">How long does the finish last?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    With proper care and maintenance, {product.name} can last decades. The finish actually improves with age as it 
                    continues to cure and harden over time. Our installations come with a 5-year warranty, but we have projects 
                    that have maintained their beauty for 15+ years.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Can I get samples before deciding?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    Absolutely. We offer sample boards of {product.name} in various colors and finishing techniques. Our design consultants 
                    can create custom samples to match your specific design vision. Contact us to arrange a consultation and sample creation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-deco-plum text-white" id="estimate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space with {product.name}</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Our expert artisans bring years of specialized experience to every project, ensuring flawless application and stunning results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
              >
                <span>Request an Estimate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="/contact" 
                className="border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
              >
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
