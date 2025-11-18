import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kazmo-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="font-heading font-bold text-2xl tracking-[0.15em] mb-6">KÄZMO</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Wholesale Hemp Supply, Done Right. <br/>
            Reliable. Quiet. Professional.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-6 text-kazmo-gray">Navigation</h4>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/request-catalog" className="text-sm text-gray-400 hover:text-white transition-colors">Request Catalog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-6 text-kazmo-gray">Contact</h4>
          <p className="text-sm text-gray-400 mb-2">Mount Laurel, NJ</p>
          <a href="mailto:orders@kazmosupplyco.com" className="text-sm text-white hover:text-kazmo-olive transition-colors">
            orders@kazmosupplyco.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Käzmo Supply Co. All rights reserved.</p>
      </div>
    </footer>
  );
};