import React, { useState } from 'react';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';

export const RequestCatalog: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-kazmo-lightGray px-6">
        <div className="bg-white p-12 shadow-xl max-w-lg w-full text-center border-t-4 border-kazmo-olive">
          <CheckCircle className="w-16 h-16 text-kazmo-olive mx-auto mb-6" />
          <h2 className="font-heading font-bold text-2xl mb-4 uppercase tracking-wide">Request Received</h2>
          <p className="text-gray-600 text-lg">We'll respond within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="bg-kazmo-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-white font-heading font-bold text-3xl md:text-4xl uppercase tracking-widest mb-4">Request Wholesale Catalog</h1>
           <p className="text-gray-400 max-w-2xl mx-auto">Join our network of retailers. Please fill out the form below completely to receive our latest product list and pricing.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">First Name</label>
              <input type="text" required className="form-input-line" />
            </div>
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Last Name</label>
              <input type="text" required className="form-input-line" />
            </div>
          </div>

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Business Name</label>
              <input type="text" required className="form-input-line" />
            </div>
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Business Email</label>
              <input type="email" required className="form-input-line" />
            </div>
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Phone Number</label>
              <input type="tel" required className="form-input-line" />
            </div>
             <div className="md:col-span-2">
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Business Address</label>
              <input type="text" required className="form-input-line" />
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Monthly Budget</label>
              <select className="form-input-line bg-white">
                <option value="">Select Range</option>
                <option value="<1k">Under $1,000</option>
                <option value="1k-5k">$1,000 - $5,000</option>
                <option value="5k+">$5,000+</option>
              </select>
            </div>
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Resale Certificate / Tax ID</label>
              <input type="text" required className="form-input-line" />
            </div>
          </div>

          <div>
            <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Product Interests</label>
            <div className="flex flex-wrap gap-4 mt-3">
              {['THCA Flower', 'CBD Flower', 'Accessories', 'Pre-Rolls', 'Edibles'].map((interest) => (
                <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="accent-kazmo-olive w-4 h-4" />
                  <span className="text-sm text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
             <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-2 text-gray-500">Notes</label>
             <textarea rows={4} className="form-input-line resize-none" placeholder="Any specific strains or products you are looking for?"></textarea>
          </div>

          <div className="pt-6">
            <Button type="submit" fullWidth size="lg">Submit Request</Button>
          </div>

        </form>
      </div>
      
      <style>{`
        .form-input-line {
          width: 100%;
          border-bottom-width: 2px;
          border-color: #E5E7EB;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
          outline: 2px solid transparent;
          outline-offset: 2px;
          background-color: transparent;
          color: #1A1A1A;
        }
        .form-input-line:focus {
          border-color: #6B7A46;
          outline: none;
        }
      `}</style>
    </div>
  );
};