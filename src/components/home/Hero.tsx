export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-3xl md:px-6 text-white">
        <h1 className="text-6xl md:text-9xl text-primary-500 font-bold mb-4">
          CORMAS S.A.S
        </h1>
        <p className="text-sm md:text-lg mb-6">
          construcción, reparación, mantenimiento y suministro.
        </p>
      </div>

      {/* Enlace de descarga del certificado con imagen */}
      <a
        href="/certificado.pdf"
        download="Certificado-ISO-CORMAS"
        className="absolute bottom-6 left-6 z-10 transition hover:scale-105"
      >
        <img
          src="/iso-logo.png"
          alt="Certificados ISO"
          className="w-34 h-16 md:w-44 md:h-20"
        />
      </a>
    </section>
  );
}
