"use client"; // Asegúrate de que este archivo sea tratado como un Client Component

const Sidebar = ({ services }) => {
  return (
    <div className="sidebar p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Servicios</h2>

      {/* Sección de servicios */}
      <div className="services-section mb-4">
        <h3 className="text-lg font-semibold">Nuestros Servicios</h3>
        <ul className="list-disc pl-5">
          {services.map((service) => (
            <li key={service.id} className="my-2">
              <a href={`/services/${service.slug}`} className="text-blue-500 hover:underline">
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de comentarios */}
      <div className="comments-section">
        <h3 className="text-lg font-semibold">Comentarios</h3>
        <p className="text-gray-700">
          &quot;Excelente servicio y muy profesionales.&quot; - Cliente Satisfecho
        </p>
        <p className="text-gray-700">
          &quot;Recomiendo altamente este servicio de limpieza.&quot; - Cliente Contento
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
