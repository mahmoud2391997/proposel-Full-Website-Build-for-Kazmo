import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, Package, Truck, ShieldCheck, Tag } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative bg-kazmo-black text-white py-32 md:py-48 px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto z-10">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
            WHOLESALE <br/>
            <span className="text-kazmo-gray">THCA & CBD</span> <br/>
            HEMP DISTRIBUTION
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light">
            Reliable supply for licensed retailers, smoke shops, and CBD stores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/request-catalog')}>Request Catalog</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-kazmo-black" onClick={() => navigate('/products')}>
              View Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-16 tracking-wide uppercase">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'THCA Flower', img: 'https://picsum.photos/600/800?random=1&grayscale' },
              { title: 'CBD Flower', img: 'https://picsum.photos/600/800?random=2&grayscale' },
              { title: 'Accessories', img: 'https://picsum.photos/600/800?random=3&grayscale' }
            ].map((cat, idx) => (
              <div key={idx} className="group cursor-pointer relative h-[500px] bg-kazmo-lightGray overflow-hidden" onClick={() => navigate('/products')}>
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                    style={{ backgroundImage: `url(${cat.img})` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-heading font-bold text-2xl tracking-wider uppercase mb-2">{cat.title}</h3>
                  <span className="text-white/80 text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    View Products <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-kazmo-lightGray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="font-heading font-bold text-3xl mb-8 tracking-wide uppercase">Who We Are</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Käzmo Supply Co is a New Jersey–based wholesale distributor specializing in compliant THCA flower,
               CBD hemp flower, and high-turnover smoke shop essentials.
             </p>
             <Button variant="outline" onClick={() => navigate('/about')}>Learn More</Button>
          </div>
          <div className="h-full min-h-[300px] bg-white p-12 border border-kazmo-gray flex flex-col justify-center">
             <h3 className="font-heading font-bold text-xl mb-6 uppercase">Why Retailers Choose Us</h3>
             <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-kazmo-olive flex-shrink-0" />
                  <span className="font-medium text-kazmo-black">Compliant, lab-backed flower</span>
                </li>
                <li className="flex items-start gap-4">
                  <Truck className="text-kazmo-olive flex-shrink-0" />
                  <span className="font-medium text-kazmo-black">Fast, discreet shipping</span>
                </li>
                <li className="flex items-start gap-4">
                  <Tag className="text-kazmo-olive flex-shrink-0" />
                  <span className="font-medium text-kazmo-black">Wholesale-only pricing</span>
                </li>
                <li className="flex items-start gap-4">
                  <Package className="text-kazmo-olive flex-shrink-0" />
                  <span className="font-medium text-kazmo-black">Curated, high-demand products</span>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 tracking-tight">READY TO STOCK UP?</h2>
          <p className="text-gray-500 text-lg mb-10">
            Contact us today to get our latest catalog and pricing sheet.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:orders@kazmosupplyco.com" className="font-heading font-bold text-xl underline decoration-2 underline-offset-4 hover:text-kazmo-olive transition-colors">
              orders@kazmosupplyco.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};