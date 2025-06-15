import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Card, CardContent } from "@/components/ui/card";

const PressMediaPage = () => {
  useEffect(() => {
    document.title = "Press & Media | DecoPaints";
  }, []);
  
  const pressReleases = [
    {
      id: 1,
      title: "DecoPaints Unveils New Sustainable Finishes Collection",
      date: "April 15, 2023",
      excerpt: "DecoPaints announces the launch of its new Eco-Lux collection, featuring VOC-free decorative finishes made from sustainable materials.",
      category: "Product Launch"
    },
    {
      id: 2,
      title: "DecoPaints Awarded for Excellence in Sustainable Business Practices",
      date: "February 28, 2023",
      excerpt: "DecoPaints UAE receives recognition at the Middle East Sustainability Awards for its innovative approach to environmentally responsible manufacturing.",
      category: "Awards"
    },
    {
      id: 3,
      title: "DecoPaints Completes Landmark Project at Dubai Museum of the Future",
      date: "January 10, 2023",
      excerpt: "The specialized team at DecoPaints provided custom-developed finishes for the interior spaces of Dubai's architectural marvel.",
      category: "Project Completion"
    },
    {
      id: 4,
      title: "DecoPaints Expands UAE Operations with New Experience Center in Abu Dhabi",
      date: "November 15, 2022",
      excerpt: "Expanding its footprint across the Emirates, DecoPaints inaugurates a state-of-the-art Experience Center in Abu Dhabi's Al Bateen district.",
      category: "Company News"
    },
  ];
  
  const mediaFeatures = [
    {
      id: 1,
      title: "The Artisans Behind UAE's Most Luxurious Interiors",
      publication: "Emirates Home",
      date: "March 2023",
      image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.png", // png extension
    },
    {
      id: 2,
      title: "Sustainability Meets Luxury: The Future of Decorative Finishes",
      publication: "Design Middle East",
      date: "January 2023",
      image: "/lovable-uploads/photo-1461749280684-dccba630e2f6.png", // png extension
    },
    {
      id: 3,
      title: "Behind the Scenes: The Making of Dubai's Most Exclusive Interiors",
      publication: "Architectural Digest Arabia",
      date: "December 2022",
      image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d.png", // png extension
    },
  ];
  
  const awardRecognitions = [
    {
      title: "Middle East Design Award",
      category: "Best Decorative Finish - Commercial",
      year: "2023",
      project: "The Opus Hotel Dubai - Interior Finishes"
    },
    {
      title: "Dubai Sustainable Business Award",
      category: "Innovation in Green Manufacturing",
      year: "2022",
      project: "Eco-Lux Product Line Development"
    },
    {
      title: "UAE Interior Contractors Award",
      category: "Excellence in Specialized Finishes",
      year: "2022",
      project: "Royal Palace Sharjah Renovation"
    },
    {
      title: "International Property Awards",
      category: "Best Interior Design Element - Middle East",
      year: "2021",
      project: "Custom Terrazzo Development for Luxury Retail Chain"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader 
        title="Press & Media."
        description="Latest News, Media Coverage, and Resources."
        backgroundImage="/lovable-uploads/8d1007c1-5891-4364-91c8-7a6972b3d8fc.png"
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Latest Press Releases</h2>
              <p className="text-lg text-center text-deco-plum/80">
                Stay updated with the latest announcements from DecoPaints UAE.
              </p>
            </div>
            
            <div className="space-y-8 max-w-6xl mx-auto">
              {pressReleases.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-deco-denim text-sm uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      </div>
                      <div className="text-sm text-deco-plum/60 mt-2 md:mt-0">{item.date}</div>
                    </div>
                    
                    <p className="text-deco-plum/80 mb-4">{item.excerpt}</p>
                    
                    <div className="flex justify-end">
                      <a 
                        href={`/press/${item.id}`}
                        className="text-deco-denim hover:text-deco-plum transition-colors inline-flex items-center"
                      >
                        <span>Read Full Release</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center mt-12">
              <a 
                href="/press-archive"
                className="border border-deco-plum hover:bg-deco-plum hover:text-white text-deco-plum font-medium py-2 px-6 rounded-full transition-colors inline-block"
              >
                View Press Archive
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Media Features</h2>
              <p className="text-lg text-center text-deco-plum/80">
                Recent coverage of DecoPaints in leading publications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mediaFeatures.map((feature) => (
                <div key={feature.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      // fallback to jpg if png is not found, or show a transparent placeholder
                      const element = e.currentTarget as HTMLImageElement;
                      if (element.src.endsWith('.png')) {
                        element.src = feature.image.replace('.png', '.jpg');
                      } else {
                        element.src = '/placeholder.svg';
                      }
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{feature.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">{feature.publication}</span>
                      <span className="text-sm text-deco-plum/60">{feature.date}</span>
                    </div>
                    <a 
                      href={`/media/${feature.id}`}
                      className="text-deco-denim hover:text-deco-plum transition-colors inline-flex items-center"
                    >
                      <span>Read Feature</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Awards & Recognition</h2>
              <p className="text-lg text-center text-deco-plum/80">
                Industry acknowledgments of our commitment to excellence and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {awardRecognitions.map((award, index) => (
                <div key={index} className="bg-deco-beige p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <p className="text-deco-plum/80">{award.category}</p>
                    </div>
                    <div className="bg-deco-plum text-white px-3 py-1 rounded-full text-sm">
                      {award.year}
                    </div>
                  </div>
                  <p className="text-sm text-deco-plum/70">Project: {award.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Resources</h2>
              <p className="text-lg mb-12 text-deco-plum/80">
                Access high-resolution images, brand assets, and information for media professionals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Image Gallery</h3>
                  <p className="text-sm text-deco-plum/70 mb-4">High-resolution project images and product photography</p>
                  <a 
                    href="/media-resources/images"
                    className="text-deco-denim hover:text-deco-plum transition-colors text-sm"
                  >
                    Browse Images
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Press Kit</h3>
                  <p className="text-sm text-deco-plum/70 mb-4">Logos, brand guidelines, and company information</p>
                  <a 
                    href="/media-resources/press-kit"
                    className="text-deco-denim hover:text-deco-plum transition-colors text-sm"
                  >
                    Download Press Kit
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Media Events</h3>
                  <p className="text-sm text-deco-plum/70 mb-4">Upcoming launches, exhibitions, and press conferences</p>
                  <a 
                    href="/media-resources/events"
                    className="text-deco-denim hover:text-deco-plum transition-colors text-sm"
                  >
                    View Calendar
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Media Contact</h3>
                <p className="text-deco-plum/80 mb-6">
                  For interview requests, high-resolution images, or additional information, please contact our media relations team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-deco-beige p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:press@decopaints.ae" className="text-deco-denim hover:text-deco-plum transition-colors">
                        press@decopaints.ae
                      </a>
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
                      <a href="tel:+97145556789" className="text-deco-denim hover:text-deco-plum transition-colors">
                        +971 4 555 6789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Press & Media Inquiries</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Our communications team is ready to assist journalists, bloggers, and media professionals with information, interviews, and visual assets.
            </p>
            
            <a 
              href="/contact" 
              className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block"
            >
              Contact Media Relations
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PressMediaPage;
