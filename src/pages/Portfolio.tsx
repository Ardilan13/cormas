const projects = [
  {
    title: "Proyecto A",
    description: "Diseño web moderno para una startup tecnológica.",
    image: "/images/proyectos/proyecto1.jpg",
  },
  {
    title: "Proyecto B",
    description: "Landing page para una marca de moda sostenible.",
    image: "/images/proyectos/proyecto2.jpg",
  },
  {
    title: "Proyecto C",
    description: "Aplicación móvil para gestión de eventos.",
    image: "/images/proyectos/proyecto3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Nuestro Portafolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
