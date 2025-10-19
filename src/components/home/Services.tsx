const services = [
  {
    title: "Construcción",
    desc: "Ejecución de obras industriales y civiles con altos estándares de calidad.",
    icon: "🏗️",
  },
  {
    title: "Reparación",
    desc: "Soluciones técnicas para restaurar y optimizar equipos y estructuras.",
    icon: "🛠️",
  },
  {
    title: "Mantenimiento",
    desc: "Planes preventivos y correctivos adaptados a cada industria.",
    icon: "⚙️",
  },
  {
    title: "Suministro",
    desc: "Provisión de materiales, herramientas y equipos industriales.",
    icon: "📦",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
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
