import Image from 'next/image';
import Link from 'next/link';

const Popup = ({ service, onClose }) => {
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
          <Link href={`/services/${service.slug}`} passHref>
            <button className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 mt-4">
              Go to Service
            </button>
          </Link>
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

export default Popup;
