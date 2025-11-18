import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Request Catalog', path: '/request-catalog', isCta: true },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-kazmo-white border-b border-kazmo-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-heading font-bold text-2xl tracking-[0.15em] text-kazmo-black">
              KÄZMO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-xs font-semibold tracking-widest uppercase transition-colors duration-200 
                  ${item.isCta 
                    ? 'bg-kazmo-black text-white px-5 py-2 hover:bg-kazmo-olive' 
                    : location.pathname === item.path 
                      ? 'text-kazmo-olive' 
                      : 'text-kazmo-black hover:text-kazmo-olive'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-kazmo-black hover:text-kazmo-olive focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-kazmo-gray">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-sm font-heading font-semibold tracking-widest uppercase
                  ${item.isCta
                    ? 'bg-kazmo-black text-white text-center mt-4'
                    : location.pathname === item.path
                      ? 'text-kazmo-olive'
                      : 'text-kazmo-black'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};