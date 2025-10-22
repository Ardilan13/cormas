export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CORMAS S.A.S</h1>
        <p className="text-lg mb-6">
          Expertos en construcción, reparación, mantenimiento y suministro
          industrial en todo el país.
        </p>
      </div>

      {/* Enlace de descarga del certificado con imagen */}
      <a
        href="/certificado.pdf"
        download="Certificado-ISO-CORMAS"
        className="absolute bottom-6 left-6 z-10 transition hover:scale-105"
      >
        <img
          src="/iso_9001.png"
          alt="Certificado ISO 9001"
          className="w-32 h-16 md:w-40 md:h-20"
        />
      </a>
    </section>
  );
}
