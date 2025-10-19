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
    </section>
  );
}
