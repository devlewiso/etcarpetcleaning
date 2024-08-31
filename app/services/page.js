"use client"; // Asegúrate de que el archivo sea tratado como Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicePopup = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
        <p className="mb-4">{service.description}</p>
        <p className="mb-4 font-semibold">Cost: {service.cost}</p>
        <button
          onClick={() => window.location.href = 'tel:+1234567890'}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
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
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'We remove stains and dirt from your carpets to make your home look clean and fresh.',
      cost: '$99',
      image: '/images/residential-cleaning.jpg',
    },
    {
      title: 'Commercial Cleaning',
      description: 'Specialized services for offices and businesses, ensuring a clean and professional environment.',
      cost: '$199',
      image: '/images/commercial-cleaning.jpg',
    },
    {
      title: 'Stain Treatment',
      description: 'Advanced techniques to remove tough stains and keep your carpets in excellent condition.',
      cost: '$89',
      image: '/images/stain-treatment.jpg',
    },
    {
      title: 'Upholstery Cleaning',
      description: 'Professional cleaning services for your furniture, ensuring it looks as good as new.',
      cost: '$129',
      image: '/images/upholstery-cleaning.webp',
    },
    {
      title: 'Pet Odor Removal',
      description: 'Specialized treatments to eliminate unpleasant pet odors from your carpets and upholstery.',
      cost: '$149',
      image: '/images/pet-odor-removal.webp',
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning services that reach deep into your carpets for a thorough clean.',
      cost: '$199',
      image: '/images/deep-cleaning.webp',
    },
  ];

  const additionalSections = [
    {
      title: 'Our Commitment to Quality',
      description: 'We are dedicated to providing top-notch cleaning services with a focus on quality and customer satisfaction. Our team uses only the best equipment and cleaning solutions to ensure the highest standards.',
      image: '/images/commitment-quality.jpg',
    },
    {
      title: 'Eco-Friendly Solutions',
      description: 'Our cleaning solutions are environmentally friendly, ensuring that your home or business is not only clean but also safe for the environment. We are committed to sustainability and eco-conscious practices.',
      image: '/images/eco-friendly.jpg',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-4xl w-full text-center">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-8">
          At ET Steam Carpet Cleaning, we offer a comprehensive range of cleaning services tailored to meet your needs.
          Whether you&apos;re looking for residential or commercial cleaning, our skilled team is ready to deliver exceptional results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-lg flex flex-col">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="flex-grow">{service.description}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-4 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
              >
                Ver Más
              </button>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {additionalSections.map((section, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="mt-12">
          <Link href="/contact" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Popup for Selected Service */}
      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}
