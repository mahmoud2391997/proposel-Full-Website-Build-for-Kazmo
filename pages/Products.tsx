import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Products: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "THCA Flower",
      description: "Indoor and greenhouse batches. COAs included. Bulk and case quantities.",
      image: "https://picsum.photos/800/600?grayscale&random=10"
    },
    {
      title: "CBD Flower",
      description: "Fresh, compliant hemp flower with reliable quality.",
      image: "https://picsum.photos/800/600?grayscale&random=11"
    },
    {
      title: "Accessories",
      description: "Essential hardware and supplies for your shop.",
      items: [
        "Metal and plastic grinders",
        "Rolling papers",
        "Cones",
        "Trays",
        "Lighters",
        "Glass & silicone pipes",
        "Mylar bags, jars, storage",
        "Cleaning supplies"
      ],
      image: "https://picsum.photos/800/600?grayscale&random=12"
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="bg-kazmo-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <h1 className="text-white font-heading font-bold text-4xl md:text-5xl uppercase tracking-widest">Our Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {categories.map((cat, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-kazmo-gray overflow-hidden">
                 <img src={cat.image} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading font-bold text-3xl mb-6 uppercase tracking-wide text-kazmo-black border-l-4 border-kazmo-olive pl-6">
                {cat.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed pl-6">
                {cat.description}
              </p>
              
              {cat.items && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pl-6">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-gray-500 flex items-center before:content-['•'] before:mr-2 before:text-kazmo-olive">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Strip */}
      <div className="bg-kazmo-lightGray py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="font-heading font-bold text-2xl mb-6">SEE FULL PRICING & INVENTORY</h3>
           <Button onClick={() => navigate('/request-catalog')} size="lg">Request Wholesale Catalog</Button>
        </div>
      </div>
    </div>
  );
};