export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/cormas_logo.png"
            alt="Quiénes somos"
            className="rounded-2xl shadow-md object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quiénes Somos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Somos una compañía con el objetivo de brindar soluciones integrales
            a nuestros clientes, con resultados de calidad en nuestros procesos
            de{" "}
            <span className="font-semibold">
              construcción, reparación, mantenimiento y suministro
            </span>{" "}
            para la industria petroquímica, minera, tecnológica y energética del
            país.
          </p>
        </div>
      </div>
    </section>
  );
}
