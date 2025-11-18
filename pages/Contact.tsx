import React, { useState } from 'react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-lg animate-fade-in">
          <h2 className="font-heading font-bold text-3xl mb-4 text-kazmo-olive">Message Sent</h2>
          <p className="text-gray-600">Thank you for contacting Käzmo Supply Co. We will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="bg-kazmo-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <h1 className="text-white font-heading font-bold text-4xl md:text-5xl uppercase tracking-widest">Contact</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Info */}
        <div>
           <h2 className="font-heading font-bold text-2xl uppercase tracking-wide mb-8 text-kazmo-black">Get in Touch</h2>
           <div className="space-y-12">
              <div>
                <h3 className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-widest mb-2">Email</h3>
                <a href="mailto:orders@kazmosupplyco.com" className="text-xl font-medium hover:text-kazmo-olive transition-colors">
                  orders@kazmosupplyco.com
                </a>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-widest mb-2">Location</h3>
                <p className="text-xl font-medium">Mount Laurel, NJ</p>
              </div>
              
              <div className="p-8 bg-kazmo-lightGray mt-12">
                <p className="text-gray-500 italic">
                  "Reliable supply for licensed retailers, smoke shops, and CBD stores."
                </p>
              </div>
           </div>
        </div>

        {/* Form */}
        <div className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Name</label>
              <input 
                type="text" 
                required
                className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-kazmo-olive transition-colors bg-transparent text-kazmo-black"
                placeholder="Your Full Name"
              />
            </div>
            
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Business Name</label>
              <input 
                type="text" 
                required
                className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-kazmo-olive transition-colors bg-transparent text-kazmo-black"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Email</label>
              <input 
                type="email" 
                required
                className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-kazmo-olive transition-colors bg-transparent text-kazmo-black"
                placeholder="email@company.com"
              />
            </div>

            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Phone (Optional)</label>
              <input 
                type="tel" 
                className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-kazmo-olive transition-colors bg-transparent text-kazmo-black"
                placeholder="(555) 555-5555"
              />
            </div>

            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-kazmo-olive transition-colors bg-transparent text-kazmo-black resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="pt-6">
              <Button type="submit" fullWidth>Send Message</Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};