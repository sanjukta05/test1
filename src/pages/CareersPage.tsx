import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
const CareersPage = () => {
  useEffect(() => {
    document.title = "Careers | DecoPaints";
  }, []);

  // Sample job openings
  const jobs = [{
    title: "Senior Decorative Finish Artisan",
    location: "Dubai",
    type: "Full-time",
    description: "We're seeking an experienced artisan with a minimum of 5 years applying high-end decorative finishes. Expertise in Venetian plaster, Marmorino, and textured finishes required.",
    requirements: ["5+ years experience in premium decorative finishing", "Portfolio showcasing Venetian plaster, Marmorino, and textured finishes", "Excellent attention to detail and color matching abilities", "Strong work ethic and ability to work in team environments", "Experience working in luxury residential and commercial projects"]
  }, {
    title: "Architectural Specification Consultant",
    location: "Dubai / Abu Dhabi",
    type: "Full-time",
    description: "Join our team as a consultant working directly with architects and interior designers to specify our premium finishes for high-end projects throughout the UAE.",
    requirements: ["Background in architecture, interior design, or related field", "Minimum 3 years experience in architectural sales or specifications", "Strong knowledge of decorative finishes and their applications", "Excellent presentation and communication skills", "Established network within UAE design community preferred"]
  }, {
    title: "Specialty Flooring Installer",
    location: "Dubai",
    type: "Full-time",
    description: "Experienced flooring specialist needed for the application of micro-cement, terrazzo, and epoxy flooring systems in residential and commercial spaces.",
    requirements: ["3+ years experience installing specialty flooring systems", "Proficiency in micro-cement, terrazzo, and epoxy applications", "Meticulous surface preparation and finishing skills", "Understanding of substrate requirements and moisture testing", "Experience with complex pattern work and decorative techniques"]
  }];
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader title="Join Our Team" description="Build Your Career with UAE's Premier Decorative Finishing Company" backgroundImage="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=2000&h=600" />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl mb-6 text-center font-normal md:text-5xl">Why Work With Us.</h2>
              <p className="text-lg text-deco-plum/80">
                At DecoPaints, we bring together talented artisans, innovative designers, and passionate professionals 
                to create extraordinary spaces across the UAE. When you join our team, you become part of a legacy of 
                craftsmanship and innovation that transforms environments and elevates lifestyles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              <div className="bg-deco-beige p-8 rounded-lg">
                <div className="h-12 w-12 bg-deco-plum rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Mastery & Growth</h3>
                <p className="text-deco-plum/80">
                  We invest in our team's development through ongoing training, international workshops with master 
                  artisans, and opportunities to work on landmark projects throughout the region.
                </p>
              </div>
              
              <div className="bg-deco-beige p-8 rounded-lg">
                <div className="h-12 w-12 bg-deco-plum rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-deco-plum/80">
                  Our diverse team brings together expertise from around the world, fostering an environment of 
                  creativity, respect, and collaboration across all departments and roles.
                </p>
              </div>
              
              <div className="bg-deco-beige p-8 rounded-lg">
                <div className="h-12 w-12 bg-deco-plum rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Impact & Legacy</h3>
                <p className="text-deco-plum/80">
                  Your work will transform UAE's most prestigious spaces, leaving a legacy of beauty and craftsmanship 
                  in iconic properties throughout the Emirates.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-12 text-center font-normal md:text-5xl">Current Openings.</h2>
              
              <div className="space-y-8">
                {jobs.map((job, index) => <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 border-b">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                            <span className="bg-deco-beige px-3 py-1 rounded-full text-sm">
                              {job.location}
                            </span>
                            <span className="bg-deco-beige px-3 py-1 rounded-full text-sm">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <p className="text-deco-plum/80">{job.description}</p>
                      </div>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value={`job-${index}`}>
                          <AccordionTrigger className="px-6">View Requirements</AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <ul className="list-disc pl-5 space-y-2 text-deco-plum/80">
                              {job.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
                            </ul>
                            
                            <div className="mt-6">
                              <a href="/contact" className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-full transition-colors inline-block">
                                Apply for This Position
                              </a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>)}
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="mb-4 font-normal text-5xl">Don't See a Matching Role?</h3>
                <p className="mb-8 text-deco-plum/80 text-xl">
                  We're always interested in connecting with talented professionals in the decorative finishing industry. 
                  Send us your resume and portfolio for future opportunities.
                </p>
                <a href="/contact" className="border border-deco-plum hover:bg-deco-plum hover:text-white text-deco-plum font-medium py-3 px-8 rounded-full transition-colors inline-block">
                  Submit General Application
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl mb-12 text-center font-normal md:text-5xl">Life at DecoPaints.</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600&h=400" alt="Team workshop" className="rounded-lg shadow-md mb-4 w-full h-64 object-cover" />
                <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                <p className="text-deco-plum/80">
                  Regular training workshops with international masters to perfect traditional and innovative techniques.
                </p>
              </div>
              
              <div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400" alt="Team collaboration" className="rounded-lg shadow-md mb-4 w-full h-64 object-cover" />
                <h3 className="text-xl font-bold mb-2">Collaborative Environment</h3>
                <p className="text-deco-plum/80">
                  Our multicultural team brings together diverse perspectives and expertise from around the world.
                </p>
              </div>
              
              <div>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400" alt="Wellness team meeting" className="rounded-lg shadow-md mb-4 w-full h-64 object-cover" />
                <h3 className="text-xl font-bold mb-2">Wellness & Balance</h3>
                <p className="text-deco-plum/80">
                  We promote well-being through flexible schedules, team activities, and a supportive work culture.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-6 font-normal md:text-5xl">Ready to Join Our Team?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Explore our current openings or send us your resume for future opportunities.
            </p>
            
            <a href="/contact" className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block">
              Apply Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default CareersPage;