"use client";

import { useState } from 'react'; // Importa el hook useState
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado al hacer clic
  };

  return (
    <header className="bg-blue-500 text-foreground py-4 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="rounded-lg shadow-lg"
            />
          </Link>
        </div>
        {/* Ícono del menú hamburguesa, visible solo en pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Ícono de hamburguesa */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Menú de navegación, visible en pantallas medianas y grandes */}
        <nav className="hidden md:flex flex-grow justify-end">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menú hamburguesa desplegable, visible solo en pantallas pequeñas */}
      {isOpen && (
        <nav className="md:hidden bg-blue-500 px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-sm hover:underline block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:underline block">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline block">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
