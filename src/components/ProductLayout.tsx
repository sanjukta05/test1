import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface TechSpec {
  label: string;
  value: string;
}

interface MaintenanceItem {
  title: string;
  description: string;
}

interface Application {
  title: string;
  description: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProductProps {
  type: 'paints' | 'flooring';
  title: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  benefits: Benefit[];
  applications: Application[];
  techSpecs: TechSpec[];
  maintenance: MaintenanceItem[];
  finishedProjects?: string[];
  inProgressProjects?: string[]; // <-- add this line
}

const ProductLayout: React.FC<ProductProps> = ({
  type,
  title,
  heroTitle,
  heroDescription,
  heroImage,
  benefits,
  applications,
  techSpecs,
  maintenance,
  finishedProjects,
  inProgressProjects // <-- add to props
}) => {
  // Default images for Palette of Success (if not overridden)
  const defaultFinishedProjects = [
    "/lovable-uploads/5ec99e9a-e4a6-4dfa-aede-f1b461595568.png",
    "/lovable-uploads/2811763e-e15f-4057-b440-09a2485592e8.png", 
    "/lovable-uploads/ae740c6e-aad1-4c76-9366-bf2580f152d6.png",
    "/lovable-uploads/1b906a20-cd68-4717-ae2d-8249647bf3c4.png",
    "/lovable-uploads/18e8db04-b183-434d-b432-ad3f7d6db1e7.png",
    "/lovable-uploads/626c9756-9fc9-437a-8645-6508c66ee745.png"
  ];

  const defaultInProgressProjects = [
    "/lovable-uploads/1.png",
    "/lovable-uploads/2.png",
    "/lovable-uploads/3.png",
    "/lovable-uploads/4.png",
    "/lovable-uploads/5.png",
    "/lovable-uploads/6.png"
  ];

  // Use custom finishedProjects or inProgressProjects if provided, otherwise fallback
  const usedFinishedProjects = finishedProjects && finishedProjects.length > 0
    ? finishedProjects
    : defaultFinishedProjects;

  const usedInProgressProjects = inProgressProjects && inProgressProjects.length > 0
    ? inProgressProjects
    : defaultInProgressProjects;

  // Determine custom section title for Featured Applications if this is the Pearl Finish page
  const featuredApplicationsTitle = title === "Pearl Finish"
    ? "Pearl Finish Spaces: Luxury Dressing, Dining & Reception"
    : "Featured Applications";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative bg-deco-plum overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-deco-plum"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors mb-6">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to={`/${type}`} className="hover:underline capitalize">{type}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{title}</span>
            </div>
            
            <h1 className="font-parafina text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {heroTitle}
            </h1>
            
            <div className="h-1 w-20 bg-deco-gold mb-6"></div>
            
            <p className="font-grosa text-xl text-white/90 max-w-2xl mb-8">
              {heroDescription}
            </p>
            
            <Link
              to="/contact"
              className="btn-cta inline-flex items-center gap-2"
            >
              <Paintbrush className="h-5 w-5" />
              Get Expert Consultation
            </Link>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-parafina text-3xl font-bold mb-4">Signature Benefits</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-gray-700">
              Discover what makes our {title} finish stand out from conventional options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-lg bg-white hover:shadow-md transition-shadow border">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-deco-beige text-deco-plum mb-4">
                  {benefit.icon || <Paintbrush className="h-8 w-8" />}
                </div>
                <h3 className="font-parafina text-xl font-bold text-deco-plum mb-2">{benefit.title}</h3>
                <p className="font-grosa text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palette of Success */}
      <section className="py-16 bg-deco-beige relative">
        <div className="absolute inset-0 geometric-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-parafina text-3xl font-bold mb-4">Palette of Success</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-gray-700">
              Witness the transformation power of our {title} finish through real projects
            </p>
          </div>

          <Tabs defaultValue="finished" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="finished" className="font-grosa">Finished Projects</TabsTrigger>
              <TabsTrigger value="progress" className="font-grosa">In Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="finished" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usedFinishedProjects.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative w-full">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={image} 
                          alt={`Finished project ${index + 1}`} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-parafina text-lg font-bold">Project {index + 1}</h3>
                        <p className="font-grosa text-sm">Completed</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="progress" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usedInProgressProjects.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative w-full">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={image} 
                          alt={`In progress project ${index + 1}`} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-parafina text-lg font-bold">Project {index + 1}</h3>
                        <p className="font-grosa text-sm">In Progress</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-deco-gold text-white px-2 py-1 rounded-full text-xs font-grosa">
                        In Progress
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Maintenance Guide */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-parafina text-3xl font-bold mb-4">Maintenance Guide</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-gray-700">
              Protect your investment and ensure long-lasting beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maintenance.map((item, i) => (
              <div key={i} className="bg-deco-beige p-6 rounded-lg">
                <h3 className="font-parafina text-xl font-bold text-deco-plum mb-3">{item.title}</h3>
                <p className="font-grosa text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Applications */}
      <section className="py-16 bg-deco-beige relative">
        <div className="absolute inset-0 geometric-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-parafina text-3xl font-bold mb-4">{featuredApplicationsTitle}</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-gray-700">
              Explore spaces where our {title} finish creates exceptional environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={app.image} 
                      alt={app.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-parafina text-xl font-bold">{app.title}</h3>
                </div>
                <div className="p-6">
                  <p className="font-grosa text-gray-700">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-parafina text-3xl font-bold mb-4">Technical Specifications</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-gray-700">
              Essential information for professional application and performance
            </p>
          </div>
          
          <div className="bg-white rounded-lg border max-w-3xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {techSpecs.map((spec, i) => (
                <div key={i} className="flex py-4 px-6">
                  <div className="w-1/3 font-grosa font-medium">{spec.label}</div>
                  <div className="w-2/3 font-grosa text-gray-700">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-deco-plum text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-parafina text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-grosa text-white/90 mb-8">
              Our expert team is ready to bring the beauty of {title} to your project. 
              Contact us for a personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                <Paintbrush className="h-5 w-5" />
                Schedule Consultation
              </Link>
              
              <a 
                href="https://wa.me/971503119537" 
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-grosa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.028.967.297.15.494.225.566.344.071.12.071.713-.172 1.422Z" />
                  <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0Zm6.597 16.979c-.23.659-1.33 1.242-1.832 1.316-.512.074-1.08.098-1.732-.097-.433-.134-.985-.312-1.694-.618-2.953-1.269-4.902-4.276-5.044-4.464-.142-.188-1.15-1.532-1.132-2.899.017-1.367.786-2.033 1.062-2.31.275-.277.6-.417.798-.417.198 0 .396.003.57.011.182.01.428-.069.67.51.248.597.842 2.057.913 2.205.07.149.124.322.025.52-.1.198-.148.321-.297.497-.148.175-.312.387-.446.52-.148.148-.303.308-.13.605.174.298.774 1.274 1.654 2.055 1.134.995 2.091 1.312 2.39 1.456.296.146.469.12.642-.074.173-.193.742-.865.939-1.154.197-.29.396-.248.67-.149.27.1 1.732.816 2.028.967.297.15.494.225.566.344.071.12.071.713-.172 1.422Z" />
                </svg>
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductLayout;
