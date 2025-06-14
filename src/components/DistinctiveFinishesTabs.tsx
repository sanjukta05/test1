
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// Finish titles for each tab
const wallFinishes = [
  { label: "Marmorino", img: "/lovable-uploads/mar-rb.png" },
  { label: "Limewash", img: "/lovable-uploads/lime-rb.png" },
  { label: "Concrete Texture", img: "/lovable-uploads/con-rb.png" },
  { label: "Brick Finish", img: "/lovable-uploads/brick-rb.jpg" },
  { label: "Pearl Finish", img: "/lovable-uploads/pearl-finish.png" },
  { label: "Gold & Silver Leaf", img: "/lovable-uploads/gold-rb.jpg" }
];
const floorFinishes = [
  { label: "Microcement", img: "/lovable-uploads/cement-rb.png" },
  { label: "Terrazzo", img: "/lovable-uploads/tera-rb.png" },
  { label: "Resinbound", img: "/lovable-uploads/rb-rb.png" },
  { label: "Decorative Epoxy", img: "/lovable-uploads/deco-rb.png" },
  { label: "Metallic Epoxy", img: "/lovable-uploads/meta-rb.jpg" },
  { label: "Stamped Concrete", img: "/lovable-uploads/stamped-rb.png" }
];

const DistinctiveFinishesTabs = () => (
  <div className="w-full max-w-5xl mx-auto">
    {/* Section Title */}
    <h3 className="text-2xl md:text-3xl font-parafina font-bold text-deco-denim mb-4 text-center">
      Explore Our Signature Finishes
    </h3>
    <Tabs defaultValue="wall" className="w-full">
      <TabsList className="max-w-xs mx-auto grid grid-cols-2 mb-8 rounded-full bg-deco-beige shadow-inner overflow-hidden">
        <TabsTrigger
          value="wall"
          className="font-parafina text-deco-plum data-[state=active]:bg-deco-plum data-[state=active]:text-white"
        >
          Wall Finish
        </TabsTrigger>
        <TabsTrigger
          value="floor"
          className="font-parafina text-deco-plum data-[state=active]:bg-deco-denim data-[state=active]:text-white"
        >
          Floor Finish
        </TabsTrigger>
      </TabsList>
      <TabsContent value="wall" className="animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wallFinishes.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg bg-white flex flex-col items-center">
              <div className="font-grosa font-semibold text-deco-plum mt-4 mb-2 text-center">{item.label}</div>
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-b-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="floor" className="animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {floorFinishes.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg bg-white flex flex-col items-center">
              <div className="font-grosa font-semibold text-deco-denim mt-4 mb-2 text-center">{item.label}</div>
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-b-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

export default DistinctiveFinishesTabs;
