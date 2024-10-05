"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - solo visible en pantallas grandes */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/contact" label="Contact" />
            <a 
              href="tel:+18057042301"
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              (805) 704-2301
            </a>
          </nav>

          {/* Botón de menú - visible en móvil y tablet */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil y tablet */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '64px' }}
      >
        <nav className="h-full px-4 py-6 space-y-6">
          <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/services" label="Services" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          
          {/* Botón de llamada en menú móvil/tablet */}
          <div className="pt-6">
            <a 
              href="tel:+18057042301"
              className="block w-full text-center px-4 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Llamar ahora
            </a>
          </div>
        </nav>
      </div>

      
    </header>
  );
}

// Componente para enlaces de navegación desktop
const NavLink = ({ href, label }) => (
  <Link 
    href={href}
    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
  >
    {label}
  </Link>
);

// Componente para enlaces de navegación móvil y tablet
const MobileNavLink = ({ href, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
  >
    {label}
  </Link>
);