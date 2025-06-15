
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useElfsightForm } from '../components/ElfsightFormContext';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | DecoPaints";
  }, []);
  const { openForm } = useElfsightForm();

  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader title="About DecoPaints" description="Crafting Premium Finishes Since 2010" backgroundImage="/lovable-uploads/f65dbab1-b79d-4c6b-bb8d-2761277f61d6.png" />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-distrampler text-5xl mb-6 font-normal">Our Story.</h2>
                <p className="font-circular text-xl mb-6 text-deco-plum/80">
                  Founded in 2010, DecoPaints began with a singular vision: to bring the timeless beauty of 
                  artisanal finishes to contemporary spaces. Our journey started in the heart of Dubai with 
                  a small team of passionate craftsmen dedicated to preserving traditional techniques while 
                  embracing innovation.
                </p>
                <p className="font-circular text-xl mb-6 text-deco-plum/80">
                  Today, we've grown into the UAE's premier provider of luxury decorative finishes, with a 
                  portfolio spanning residential palaces, commercial landmarks, and hospitality icons across 
                  the Emirates.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-6">
                <img src="/lovable-uploads/879dd430-1a68-471a-a24d-ba955c5e5cb5.png" alt="Modern luxury bedroom interior with neutral tones and artistic finishes" className="rounded-lg shadow-lg w-full object-cover max-h-[370px] mb-5" />
                <div className="absolute -bottom-6 -right-6 bg-deco-plum text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">13+ Years</p>
                  <p className="text-sm">of Artistic Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl mb-12 text-center font-normal md:text-5xl">Our Values.</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-deco-plum">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Artisanal Craftsmanship</h3>
                <p className="text-deco-plum/80">
                  We preserve time-honored techniques passed through generations, ensuring each finish is applied with 
                  meticulous attention to detail and artistic excellence.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-deco-plum">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
                <p className="text-deco-plum/80">
                  We source only the finest materials from trusted global suppliers, ensuring our finishes not only 
                  look exceptional but withstand the test of time in even the harshest climate conditions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-deco-plum">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Design</h3>
                <p className="text-deco-plum/80">
                  While honoring traditional methods, we continuously explore innovative techniques and contemporary 
                  applications, pushing the boundaries of what decorative finishes can achieve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl mb-12 text-center font-normal md:text-5xl">Frequently Asked Questions.</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">How long does a typical project take?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    Project timelines vary based on scope, area size, and finish complexity. A standard room typically 
                    takes 3-5 days for preparation, application, and curing. Larger projects or those requiring multiple 
                    finishes may take longer. During your consultation, we provide a detailed timeline specific to your project.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Are your materials environmentally friendly?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    Yes, sustainability is a core value. Many of our finishes use natural lime, clay, and mineral-based 
                    materials that are low-VOC or VOC-free. We prioritize eco-friendly options without compromising on 
                    quality or durability, and our products meet or exceed UAE environmental standards.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Do you offer warranties on your work?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    Absolutely. All our applications come with a 5-year workmanship warranty. Additionally, we provide 
                    detailed care instructions and maintenance packages to ensure your finishes remain pristine for years to come.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">What areas do you service in UAE?</AccordionTrigger>
                  <AccordionContent className="text-deco-plum/80">
                    We provide services across all seven Emirates, with dedicated teams in each region. Our headquarters is 
                    in Dubai, with additional Experience Centers in Abu Dhabi and Sharjah. For projects in other Emirates, 
                    our mobile consultation team comes to you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <a href="/contact" className="btn-cta">
                Contact Us for More Information
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-6 font-normal md:text-5xl">Our Expertise at Your Service.</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Transform your space with the region's most trusted decorative finishing experts.
            </p>
            
            <button
              type="button"
              onClick={openForm}
              className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-colors inline-flex items-center"
            >
              <span className="text-lg">Get a Personalized Estimate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default AboutPage;
