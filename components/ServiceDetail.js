// Importa el componente Image de Next.js
import Image from 'next/image';

export default function ServiceDetail({ service }) {
  return (
    <div>
      {/* Cambia img por Image */}
      <Image 
        src={service.image} 
        alt={service.title} 
        width={600} // Ajusta el ancho según sea necesario
        height={400} // Ajusta la altura según sea necesario
        className="w-full h-64 object-cover rounded" 
      />
      <h1 className="text-3xl font-bold mt-4">{service.title}</h1>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}
