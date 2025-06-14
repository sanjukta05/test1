
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const wallFinishImages = [
  "/lovable-uploads/mar-rb.png",
  "/lovable-uploads/lime-rb.png",
  "/lovable-uploads/con-rb.png",
  "/lovable-uploads/brick-rb",
  "/lovable-uploads/pearl-finish.png",
  "/lovable-uploads/gold-rb.jpg"
];
const floorFinishImages = [
  "/lovable-uploads/tera-rb.png",
  "/lovable-uploads/cement-rb.png",
  "/lovable-uploads/rb-rb.png",
  "/lovable-uploads/meta-rb.jpg",
  "/lovable-uploads/deco-rb.png",
  "/lovable-uploads/stamped-rb.png"
];

const DistinctiveFinishesTabs = () => (
  <div className="w-full max-w-5xl mx-auto">
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
          {wallFinishImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg bg-white">
              <img
                src={src}
                alt={`Wall Finish ${i + 1}`}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="floor" className="animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {floorFinishImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg bg-white">
              <img
                src={src}
                alt={`Floor Finish ${i + 1}`}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
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
