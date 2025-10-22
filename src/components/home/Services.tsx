import { servicesData } from "../../data/ServicesData";

interface ServicesProps {
  showCount?: number;
}

export default function Services({ showCount }: ServicesProps) {
  // Si showCount está definido, usamos sólo ese número de elementos; si no, todos
  const itemsToShow =
    showCount != null ? servicesData.slice(0, showCount) : servicesData;

  return (
    <section className="py-20">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {itemsToShow.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={s.imageUrl}
                alt={s.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
