export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bienvenido a <span className="text-blue-600">MiMarca</span>
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Creamos experiencias digitales únicas que impulsan tu marca al
          siguiente nivel.
        </p>
        <a
          href="/portafolio"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Ver Portafolio
        </a>
      </div>
    </section>
  );
}
