import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// 12 uploaded image URLs for blog use (replace with the actual file names/paths)
const allBlogImages = ["/lovable-uploads/86e618b5-70e2-41d9-9297-eb9666af2e74.png", "/lovable-uploads/cf3703aa-7b33-40fb-a0f0-36daba46b91f.png", "/lovable-uploads/e3b2e9bc-fa91-41bc-af6c-b77da66d07fa.png", "/lovable-uploads/7e69dde9-8443-4deb-bd09-7eecad6d7a3a.png", "/lovable-uploads/1537f467-aea6-4174-accb-0d20aa5f88d6.png", "/lovable-uploads/c2f21f92-5b78-41a6-a393-b2af95db6e83.png", "/lovable-uploads/2afc656c-ca9b-4bfc-8304-30fb589c032c.png", "/lovable-uploads/a1080c58-d9f6-4887-8f92-493b3c0b8a8e.png", "/lovable-uploads/61c73de1-1e51-4c64-a902-ccdc4a22c92f.png", "/lovable-uploads/77a1934c-69e1-48ae-b2c7-882476a35cc7.png", "/lovable-uploads/4c6273e6-eb0b-4979-b0f6-4a894a2e1f61.png", "/lovable-uploads/86e618b5-70e2-41d9-9297-eb9666af2e74.png" // reusing the first one if more posts added; replace if new file
];
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}
const rawBlogPosts: Omit<BlogPost, 'image'>[] = [{
  id: 1,
  title: "The Enduring Elegance of Venetian Plaster: A Renaissance Art Form in Modern Spaces",
  excerpt: "Explore how the centuries-old technique of Venetian plaster continues to captivate interior designers and homeowners with its depth, texture, and timeless appeal.",
  category: "techniques",
  date: "May 10, 2023",
  featured: true
}, {
  id: 2,
  title: "Sustainable Luxury: The Rise of Eco-Friendly Decorative Finishes",
  excerpt: "Discover how the decorative finishing industry is embracing sustainability without compromising on luxury or durability.",
  category: "trends",
  date: "April 22, 2023"
}, {
  id: 3,
  title: "Color Psychology in Interior Design: Choosing the Right Finish for Each Space",
  excerpt: "Learn how color and texture influence mood and perception, and how to select the perfect decorative finish for different rooms in your home.",
  category: "design",
  date: "March 15, 2023"
}, {
  id: 4,
  title: "Project Showcase: Transforming a Dubai Villa with Custom Decorative Finishes",
  excerpt: "A behind-the-scenes look at how we used custom finishes to completely transform a Palm Jumeirah villa, from concept to completion.",
  category: "projects",
  date: "February 28, 2023"
}, {
  id: 5,
  title: "The Art of Gold Leaf Application: Techniques for Adding Luxurious Accents",
  excerpt: "Explore the meticulous process of gold leaf application and how this ancient technique brings unmatched luxury to contemporary interiors.",
  category: "techniques",
  date: "January 18, 2023"
}, {
  id: 6,
  title: "Micro-Cement vs. Traditional Concrete: What's Right for Your Project?",
  excerpt: "A comparative analysis of micro-cement and traditional concrete flooring options, with insights on making the best choice for different spaces.",
  category: "comparisons",
  date: "December 5, 2022"
}];
const blogPosts: BlogPost[] = rawBlogPosts.map((post, idx) => ({
  ...post,
  image: allBlogImages[idx % allBlogImages.length]
}));
const categories = [{
  value: 'all',
  label: 'All Categories'
}, {
  value: 'techniques',
  label: 'Techniques'
}, {
  value: 'trends',
  label: 'Trends & Innovations'
}, {
  value: 'design',
  label: 'Design Insights'
}, {
  value: 'projects',
  label: 'Project Showcases'
}, {
  value: 'comparisons',
  label: 'Product Comparisons'
}];
const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | DecoPaints";
  }, []);
  const [filter, setFilter] = useState<string>('all');
  const filteredPosts = filter === 'all' ? blogPosts : blogPosts.filter(post => post.category === filter);
  const featuredPost = blogPosts.find(post => post.featured);
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader title="Blog & Insights" description="Expert Knowledge and Creative Inspiration" backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000&h=600" />
      
      <main className="flex-grow">
        {/* Featured Post */}
        {featuredPost && <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl mb-12 text-center font-normal md:text-5xl">Featured Article.</h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img src={featuredPost.image} alt={featuredPost.title} className="rounded-lg shadow-lg w-full h-full object-cover" />
                  </AspectRatio>
                  <div className="absolute top-4 left-4">
                    <span className="bg-deco-plum text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <span className="text-deco-denim uppercase tracking-wider text-sm mb-2">
                    {featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}
                  </span>
                  <h3 className="text-2xl md:text-3xl mb-4 font-normal">{featuredPost.title}</h3>
                  <p className="text-deco-plum/80 mb-6">{featuredPost.excerpt}</p>
                  <div className="mb-6 text-sm text-deco-plum/60">{featuredPost.date}</div>
                  <a href={`/blog/${featuredPost.id}`} className="btn-cta inline-flex items-center self-start">
                    <span>Read Article</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>}
        
        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-deco-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl mb-8 text-center font-normal md:text-5xl">Latest Articles.</h2>
            
            {/* Category Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map(category => <button key={category.value} className={`px-4 py-2 rounded-full text-sm transition-all ${filter === category.value ? 'bg-deco-plum text-white' : 'bg-white text-deco-plum hover:bg-deco-lavender/20'}`} onClick={() => setFilter(category.value)}>
                    {category.label}
                  </button>)}
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.map(post => <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img src={post.image} alt={post.title} className="object-cover w-full h-full rounded-t-lg" />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-deco-denim text-sm uppercase tracking-wider">
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      <span className="text-sm text-deco-plum/60">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-deco-plum/80 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="text-deco-denim hover:text-deco-plum transition-colors inline-flex items-center">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Pagination - Would be dynamic in a real application */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded border border-deco-plum/20 text-deco-plum hover:bg-deco-plum hover:text-white transition-colors">
                  &laquo;
                </button>
                <button className="px-3 py-1 rounded bg-deco-plum text-white">1</button>
                <button className="px-3 py-1 rounded border border-deco-plum/20 text-deco-plum hover:bg-deco-plum hover:text-white transition-colors">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-deco-plum/20 text-deco-plum hover:bg-deco-plum hover:text-white transition-colors">
                  3
                </button>
                <button className="px-3 py-1 rounded border border-deco-plum/20 text-deco-plum hover:bg-deco-plum hover:text-white transition-colors">
                  &raquo;
                </button>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl mb-6 font-normal md:text-5xl">Subscribe to Our Newsletter.</h2>
              <p className="mb-8 text-deco-plum/80 text-xl">
                Stay updated on the latest trends, techniques, and projects in decorative finishing. 
                Receive exclusive content, industry insights, and special offers.
              </p>
              
              <form className="max-w-md mx-auto">
                <div className="flex">
                  <input type="email" placeholder="Your email address" className="flex-grow border border-deco-plum/20 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-deco-plum" required />
                  <button type="submit" className="bg-deco-denim text-white px-6 py-2 rounded-r-full hover:bg-opacity-90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-deco-plum/60">
                By subscribing, you agree to receive marketing emails from DecoPaints. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-deco-plum text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-6 font-normal md:text-5xl">Have a Question About Our Finishes?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
              Our team of experts is ready to assist you with any questions about decorative finishes, techniques, or project ideas.
            </p>
            
            <a href="/contact" className="bg-deco-denim hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block">
              Contact Our Specialists
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default BlogPage;