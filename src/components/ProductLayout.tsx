import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useElfsightForm } from './ElfsightFormContext';
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
  heroImageClassName?: string; // ADD THIS
  benefits: Benefit[];
  applications: Application[];
  techSpecs: TechSpec[];
  maintenance: MaintenanceItem[];
  finishedProjects?: {
    image: string;
    title?: string;
  }[] | string[]; // Support array of objects or strings
  inProgressProjects?: string[];
  inProgressTitles?: string[]; // Accept custom titles for in progress section
}
const finishedTitlesByImage: {
  [filename: string]: string;
} = {
  // MarmorinoPage finishedProjects defaults (add/update as needed)
  "5ec99e9a-e4a6-4dfa-aede-f1b461595568.png": "Private Residence – Neutral Elegance",
  "2811763e-e15f-4057-b440-09a2485592e8.png": "Modern Villa – Marmorino Walls",
  "ae740c6e-aad1-4c76-9366-bf2580f152d6.png": "Majlis Hallway Accent Wall",
  "1b906a20-cd68-4717-ae2d-8249647bf3c4.png": "Penthouse Suite Metallic Plaster",
  "18e8db04-b183-434d-b432-ad3f7d6db1e7.png": "Entrance Feature with Art Niche",
  "626c9756-9fc9-437a-8645-6508c66ee745.png": "Dining Room Texture Finish"
  // Pearl and other product images not directly affected here (handled in source pages)
};
const inProgressTitles = ["Business Bay", "Dubai Hills", "The Springs", "Palm Jumeirah", "Emirates Hills", "Downtown Dubai"];
const ProductLayout: React.FC<ProductProps> = ({
  type,
  title,
  heroTitle,
  heroDescription,
  heroImage,
  heroImageClassName,
  benefits,
  applications,
  techSpecs,
  maintenance,
  finishedProjects,
  inProgressProjects,
  inProgressTitles
}) => {
  // Default images for Palette of Success (if not overridden)
  const defaultFinishedProjects = ["/lovable-uploads/5ec99e9a-e4a6-4dfa-aede-f1b461595568.png", "/lovable-uploads/2811763e-e15f-4057-b440-09a2485592e8.png", "/lovable-uploads/ae740c6e-aad1-4c76-9366-bf2580f152d6.png", "/lovable-uploads/1b906a20-cd68-4717-ae2d-8249647bf3c4.png", "/lovable-uploads/18e8db04-b183-434d-b432-ad3f7d6db1e7.png", "/lovable-uploads/626c9756-9fc9-437a-8645-6508c66ee745.png"];
  const defaultInProgressProjects = ["/lovable-uploads/1.png", "/lovable-uploads/2.png", "/lovable-uploads/3.png", "/lovable-uploads/4.png", "/lovable-uploads/5.png", "/lovable-uploads/6.png"];

  // Helper: check if finishedProjects is array of objects with image & title, or string[]
  const usedFinishedProjects = finishedProjects && finishedProjects.length > 0 ? finishedProjects : defaultFinishedProjects;
  const usedInProgressProjects = inProgressProjects && inProgressProjects.length > 0 ? inProgressProjects : defaultInProgressProjects;

  // Determine custom section title for Featured Applications if this is the Pearl Finish page
  const featuredApplicationsTitle = "Featured Applications";
  const {
    openForm
  } = useElfsightForm();
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative bg-deco-plum overflow-hidden">
        {/* Hero Background Image */}
        <div className={`absolute inset-0 bg-cover bg-center opacity-40 ${heroImageClassName ? heroImageClassName : ""}`} style={{
        backgroundImage: `url(${heroImage})`
      }} aria-hidden="true"></div>
        
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
            
            {/* Main Heading */}
            <h1 className="font-distrampler text-5xl text-white mb-4 font-normal lg:text-6xl">
              {heroTitle.endsWith('.') ? heroTitle : heroTitle + '.'}
            </h1>
            
            <div className="h-1 w-20 bg-deco-gold mb-6"></div>
            
            {/* Subheading/line below heading */}
            <p className="font-circular text-xl max-w-2xl mb-8 text-white">
              {heroDescription}
            </p>
            
            <Link to="#" onClick={e => {
            e.preventDefault();
            openForm();
          }} className="btn-cta inline-flex items-center gap-2">
              <Paintbrush className="h-5 w-5" />
              Get Expert Consultation.
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
            <h2 className="font-distrampler font-normal text-5xl mb-4">
              Signature Benefits.
            </h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-gray-700">
              Discover what makes our {title} finish stand out from conventional options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => <div key={i} className="flex flex-col items-start p-6 rounded-lg bg-white hover:shadow-md transition-shadow border">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-deco-beige text-deco-plum mb-4">
                  {benefit.icon || <Paintbrush className="h-8 w-8" />}
                </div>
                <h3 className="font-distrampler text-xl font-bold text-deco-plum mb-2">{benefit.title}</h3>
                <p className="font-circular text-gray-700">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Palette of Success */}
      <section className="py-16 bg-deco-beige relative">
        <div className="absolute inset-0 geometric-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-distrampler font-normal text-5xl mb-4">Palette of Success.</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-gray-700">
              Witness the transformation power of our {title} finish through real projects
            </p>
          </div>

          <Tabs defaultValue="finished" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="finished" className="font-grosa text-lg bg-gray-950 hover:bg-gray-800 text-slate-50">Finished Projects</TabsTrigger>
              <TabsTrigger value="progress" className="font-grosa text-lg">In Progress</TabsTrigger>
            </TabsList>
            
            {/* FINISHED PROJECTS: Custom titles per image if provided */}
            <TabsContent value="finished" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(Array.isArray(usedFinishedProjects) ? usedFinishedProjects : []).map((proj, index) => {
                let image: string, projTitle: string | undefined;
                if (typeof proj === "string") {
                  image = proj;
                  // fallback logic for title (for legacy)
                  const filename = image.split('/').pop() || '';
                  projTitle = finishedTitlesByImage[filename] || `Project ${index + 1}`;
                } else {
                  image = proj.image;
                  projTitle = proj.title; // always prefer supplied title
                }
                return <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="relative w-full">
                          <AspectRatio ratio={4 / 3}>
                            <img src={image} alt={projTitle ?? `Project ${index + 1}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="font-distrampler text-lg font-bold">{projTitle ?? `Project ${index + 1}`}</h3>
                          </div>
                        </div>
                      </div>;
              })}
              </div>
            </TabsContent>
            
            {/* IN PROGRESS: use provided inProgressTitles prop if present */}
            <TabsContent value="progress" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usedInProgressProjects.map((image, index) => {
                let title = inProgressTitles && inProgressTitles[index] ? inProgressTitles[index] : `Project ${index + 1}`;
                return <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="relative w-full">
                          <AspectRatio ratio={4 / 3}>
                            <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="font-distrampler text-lg font-bold">{title}</h3>
                          </div>
                        </div>
                      </div>;
              })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Maintenance Guide */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-distrampler font-normal text-5xl mb-4">Maintenance Guide.</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-gray-700">
              Protect your investment and ensure long-lasting beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maintenance.map((item, i) => <div key={i} className="bg-deco-beige p-6 rounded-lg">
                <h3 className="font-distrampler text-xl font-bold text-deco-plum mb-3">{item.title}</h3>
                <p className="font-circular text-gray-700">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Featured Applications */}
      <section className="py-16 bg-deco-beige relative">
        <div className="absolute inset-0 geometric-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-distrampler font-normal text-5xl mb-4">{featuredApplicationsTitle}.</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-gray-700">
              Explore spaces where our {title} finish creates exceptional environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, i) => <div key={i} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full">
                  <AspectRatio ratio={16 / 9}>
                    <img src={app.image} alt={app.title} className="object-cover w-full h-full" />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-distrampler text-xl font-bold">{app.title}</h3>
                </div>
                <div className="p-6">
                  <p className="font-circular text-gray-700">{app.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-distrampler text-5xl font-normal mb-4">Technical Specifications.</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-gray-700">
              Essential information for professional application and performance
            </p>
          </div>
          
          <div className="bg-white rounded-lg border max-w-3xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {techSpecs.map((spec, i) => <div key={i} className="flex py-4 px-6">
                  <div className="w-1/3 font-circular font-medium">{spec.label}</div>
                  <div className="w-2/3 font-circular text-gray-700">{spec.value}</div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-deco-plum text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-distrampler font-normal text-5xl mb-4">Ready to Transform Your Space?.</h2>
            <div className="h-1 w-16 bg-deco-gold mx-auto mb-6"></div>
            <p className="font-circular text-xl text-white/90 mb-8">
              Our expert team is ready to bring the beauty of {title} to your project. 
              Contact us for a personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" onClick={openForm} className="btn-gold inline-flex items-center justify-center gap-2 text-lg">
                <Paintbrush className="h-5 w-5" />
                Schedule Consultation.
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default ProductLayout;