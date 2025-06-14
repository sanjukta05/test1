
import React from 'react';

export default function DubaiSkyline() {
  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{
        background: "linear-gradient(to right, rgba(57,41,86,0.90), rgba(57,41,86,0.90)), url('/lovable-uploads/e464d2ed-3dfc-489e-9ecb-1340c2c82f79.png') center/cover no-repeat"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-parafina text-3xl text-white mb-6">Serving All Emirates in the UAE</h2>
          <p className="font-grosa text-lg text-white/80 mb-8">
            Delivering premium decorative finishes across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain
          </p>
        </div>
      </div>
      
      {/* Dubai Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-contain bg-repeat-x bg-bottom" style={{ backgroundImage: 'url(/images/dubai-skyline.svg)' }}></div>
      
      {/* Gold shimmer effect */}
      <div className="absolute inset-0 gold-shimmer opacity-20"></div>
    </section>
  );
}
