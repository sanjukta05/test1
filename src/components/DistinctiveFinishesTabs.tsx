
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const wallFinishImages = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  "https://images.unsplash.com/photo-1486718448742-163732cd1544",
  "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
  "/lovable-uploads/pearlfinish.png",
  "/lovable-uploads/9.png",
  "/lovable-uploads/conwall.jpg"
];
const floorFinishImages = [
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
  "/lovable-uploads/terrazzo.png",
  "/lovable-uploads/626c9756-9fc9-437a-8645-6508c66ee745.png",
  "/lovable-uploads/goldleaf.png"
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
