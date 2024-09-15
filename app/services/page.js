"use client"; // Asegúrate de que el archivo sea tratado como Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicePopup = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-full w-full mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-32 text-center">
        <Image
          src={service.imageSrc}
          alt={service.title}
          width={300}
          height={200}
          className="mx-auto rounded-lg shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-4 text-blue-500">{service.title}</h2>
        <p className="mb-4 text-gray-700">{service.description}</p>
        <p className="mb-4 font-semibold text-blue-500">Cost: {service.cost}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => window.location.href = 'tel:+18057042301'}
            className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 mt-4"
          >
            Call to Schedule
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Carpet Cleaning",
      description: "Professional steam cleaning to remove deep dirt and stubborn stains from your carpets.",
      cost: "$100",
      imageSrc: "/images/carpet-cleaning.webp"
    },
    {
      id: 2,
      title: "Upholstery Cleaning",
      description: "Expert cleaning for sofas, chairs, and other upholstered furniture.",
      cost: "$90",
      imageSrc: "/images/upholstery-cleaning.webp"
    },
    {
      id: 3,
      title: "Area Rug Cleaning",
      description: "Delicate cleaning for area rugs, ensuring colors and fibers are protected.",
      cost: "$75",
      imageSrc: "/images/cleaning-process.webp"
    },
    {
      id: 4,
      title: "Tile and Grout Cleaning",
      description: "Steam cleaning to remove grime and restore the shine of tile and grout.",
      cost: "$120",
      imageSrc: "/images/tile-grout-cleaning.webp"
    },
    {
      id: 5,
      title: "Hotel - Corridors and Hallways",
      description: "Professional steam cleaning to remove deep dirt and stubborn stains from your carpets.",
      cost: "$85",
      imageSrc: "/images/Hotel-Corridors-and-Hallways.webp"
    },
    {
      id: 6,
      title: "Arm Chair Guard",
      description: "Specialized treatments to remove odors from your chairs.",
      cost: "$110",
      imageSrc: "/images/Arm-Chair-Guard.webp"
    },
    {
      id: 7,
      title: "Outdoor Furnitures",
      description: "Emergency steam cleaning for water-damaged Outdoor Furnitures.",
      cost: "$200",
      imageSrc: "/images/outdoor-furnitures.webp"
    },
    {
      id: 8,
      title: "Commercial Carpet Cleaning",
      description: "Keep your office carpets looking professional and clean with our commercial services.",
      cost: "$300",
      imageSrc: "/images/Commercial Carpet Cleaning.webp"
    },
    {
      id: 9,
      title: "Mattress Cleaning Different Sizes",
      description: "Advanced treatments for removing deep, stubborn stains from beds.",
      cost: "$175",
      imageSrc: "/images/mattress-removal.webp"
    },
    {
      id: 10,
      title: "Recliner Couches",
      description: "Steam cleaning for your vehicle's interior carpets and upholstery.",
      cost: "$70",
      imageSrc: "/images/recliner-couches.webp"
    },
    {
      id: 11,
      title: "Hardwood Floor Cleaning",
      description: "Steam cleaning to refresh and sanitize your hardwood floors.",
      cost: "$150",
      imageSrc: "/images/hardwood-floor-cleaning.jpg"
    },
    {
      id: 12,
      title: "Drapery Cleaning",
      description: "Gentle steam cleaning for curtains and drapes, removing dust and allergens.",
      cost: "$95",
      imageSrc: "/images/drapery-cleaning.jpg"
    },

  ];
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedService(service)}
          >
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={300}
              height={200}
              className="mx-auto rounded-lg shadow-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-blue-500">{service.title}</h2>
            <p className="text-gray-700 mb-2">{service.description}</p>
            <p className="font-semibold text-blue-500">{service.cost}</p>
          </div>
        ))}
      </div>

      {/* Popup for Selected Service */}
      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

