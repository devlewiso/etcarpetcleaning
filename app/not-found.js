// app/404.js
import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Image
        src="/images/logo.png" // Asegúrate de que esta ruta sea correcta
        alt="ET Steam Carpet Cleaning Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-5xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-gray-600">
        If you need help with our cleaning services, feel free to get in touch with us!
      </p>
      <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
        Back to Home
      </Link>
      <Link href="/contact" className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
        Contact Us
      </Link>
    </div>
  );
}
