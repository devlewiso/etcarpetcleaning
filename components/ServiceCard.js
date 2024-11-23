import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg">
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
      <Link href={`/services/${service.slug}`}>
        <a className="text-blue-500 underline">Learn more</a>
      </Link>
    </div>
  );
};

export default ServiceCard;
