
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Button } from "@/components/ui/button";
import { useElfsightForm } from '../components/ElfsightFormContext';
const ELFSIGHT_APP_ID = "4ae4b665-d18d-434d-bf98-3c9f9bc376b1";
const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | DecoPaints";
    if (!document.getElementById('elfsight-script')) {
      const script = document.createElement('script');
      script.id = 'elfsight-script';
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const {
    openForm
  } = useElfsightForm();
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Add custom class to PageHeader for white description text */}
      <PageHeader
        title="Contact Us."
        description="Let's Transform Your Space Together."
        backgroundImage="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=2000&h=600"
        // Add a className to override description color to white
        // This relies on PageHeader passing it through, which it does (to section)
        // Add a new override below the heading in a span if needed.
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-6 text-5xl font-normal">Get in Touch.</h2>
                <p className="text-lg mb-8 text-deco-plum/80">
                  Whether you're looking for a consultation, have a question about our services, 
                  or want to discuss a potential project, we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-deco-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us.</h3>
                      {/* Phone number - force color to dark purple */}
                      <a href="tel:+971503119537" className="text-[#47143d] hover:text-deco-gold transition-colors font-semibold">
                        +971 50 311 9537
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-deco-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us.</h3>
                      {/* Email address - force color to dark purple */}
                      <a href="mailto:info@decopaints.ae" className="text-[#47143d] hover:text-deco-gold transition-colors font-semibold">
                        info@decopaints.ae
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-deco-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deco-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us.</h3>
                      <address className="not-italic text-deco-plum/80">
                        DecoPaints UAE<br />
                        Al Marabea' St, Al Quoz<br />
                        Dubai, United Arab Emirates
                      </address>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <Button className="w-full bg-deco-plum hover:bg-deco-plum/90 text-white font-bold py-3 rounded" onClick={openForm}>
                    Get Estimate.
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 text-center font-normal text-5xl">Request an Estimate.</h3>
                <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy style={{
                minHeight: 500
              }}></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 font-normal text-5xl">Find Us.</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-[500px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.537133511753!2d55.23233491500953!3d25.044147283965648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc629d74eb1%3A0x7f8f5d5a7b08d1e4!2sAl%20Quoz%2C%20Dubai!5e0!3m2!1sen!2sae!4v1652180484576!5m2!1sen!2sae" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" aria-label="DecoPaints UAE location map"></iframe>
            </div>
            {/* Add a prominent CTA at the bottom */}
            <div className="mt-12 flex flex-col items-center">
              <Button onClick={openForm} className="bg-deco-plum hover:bg-deco-plum/90 text-white font-bold py-3 px-10 rounded-full max-w-xs w-full text-lg">
                Book a Consultation.
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ContactPage;

