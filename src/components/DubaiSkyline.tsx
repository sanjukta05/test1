import React from 'react';

export default function DubaiSkyline() {
  return (
    <section
      className="relative py-12 overflow-hidden font-circular"
      style={{
        background: "url('/lovable-uploads/e464d2ed-3dfc-489e-9ecb-1340c2c82f79.png') center/cover no-repeat"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-distrampler text-3xl text-white mb-6">Serving All Emirates in the UAE</h2>
          <p className="text-lg text-white/80 mb-8">
            Delivering premium decorative finishes across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain
          </p>
        </div>
      </div>
      {/* Dubai Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-contain bg-repeat-x bg-bottom" style={{ backgroundImage: 'url(/images/dubai-skyline.svg)' }}></div>
    </section>
  );
}
