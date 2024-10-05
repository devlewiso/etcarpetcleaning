"use client";

import { useState } from 'react';
import Image from 'next/image';
import services from '../../components/services';
import Popup from '../../components/popup';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
        Our Services
      </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Discover our wide range of professional services designed to meet your needs.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-blue-800">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-600">
                    {service.cost}
                  </span>
                  
                  <button 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    onClick={() => setSelectedService(service)}
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <Popup
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </div>
  );
}
