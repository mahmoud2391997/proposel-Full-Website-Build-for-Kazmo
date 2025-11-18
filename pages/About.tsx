import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-kazmo-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <h1 className="text-white font-heading font-bold text-4xl md:text-5xl uppercase tracking-widest">About Us</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        
        {/* Who We Are */}
        <div className="mb-20">
          <h2 className="font-heading font-bold text-2xl uppercase tracking-wide mb-6 text-kazmo-black">Who We Are</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Käzmo Supply Co is a wholesale hemp distributor serving retailers across the East Coast, specializing
            in compliant THCA flower, CBD flower, and curated accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Approach */}
          <div className="bg-kazmo-lightGray p-10 border-t-4 border-kazmo-olive">
            <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-4">Our Approach</h3>
            <p className="text-gray-600">Reliable supply, clean pricing, fast fulfillment.</p>
          </div>
          
          {/* Serve */}
          <div className="bg-kazmo-lightGray p-10 border-t-4 border-kazmo-black">
             <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-4">Who We Serve</h3>
             <ul className="space-y-2 text-gray-600">
               <li>• Smoke shops</li>
               <li>• CBD/hemp stores</li>
               <li>• Convenience stores</li>
               <li>• Small retail chains</li>
             </ul>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-wide mb-8 text-kazmo-black">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Professional communication",
              "Consistent inventory",
              "Transparent pricing",
              "Discreet shipping"
            ].map((value, i) => (
              <div key={i} className="flex items-center gap-4 p-6 border border-gray-200 hover:border-kazmo-olive transition-colors duration-300">
                <div className="w-2 h-2 bg-kazmo-olive rounded-full"></div>
                <span className="font-heading font-semibold text-kazmo-black uppercase tracking-wider text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};