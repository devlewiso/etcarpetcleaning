"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import services from '../../../components/services';
import Image from 'next/image';
import { Phone, ChevronRight, MenuIcon } from 'lucide-react';
import Sidebar from '../../../components/Sidebar';

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    return notFound();
  }

  const filteredServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón para mostrar sidebar en móvil */}
      <div className="sticky top-0 z-20 md:hidden bg-white shadow-sm">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center space-x-2 p-4 w-full text-gray-600 hover:bg-gray-50"
        >
          <MenuIcon className="w-5 h-5" />
          <span>Ver más servicios</span>
          <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${isSidebarOpen ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar responsivo */}
        <div 
          className={`
            ${isSidebarOpen ? 'block' : 'hidden'} 
            md:block
            w-full md:w-80 lg:w-96
            fixed md:sticky
            top-[57px] md:top-0
            h-[calc(100vh-57px)] md:h-screen
            bg-white md:bg-transparent
            z-10
            overflow-y-auto
            transition-transform
            border-r border-gray-200
          `}
        >
          <div className="p-4">
            <Sidebar services={filteredServices} onSelectService={() => setIsSidebarOpen(false)} />
          </div>
        </div>

        {/* Contenido principal */}
        <main className="flex-1 px-4 py-6 md:py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Imagen del servicio */}
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Contenido del servicio */}
              <div className="p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h1>
                
                <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-xl sm:text-2xl font-semibold text-blue-600">
                    {service.cost}
                  </p>
                </div>

                {/* Botón de llamada */}
                <div className="sticky bottom-4 md:relative md:bottom-0">
                  <a 
                    href="tel:+18057042301"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm sm:text-base">
                      Llamar ahora: (805) 704-2301
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay para cerrar sidebar en móvil */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}