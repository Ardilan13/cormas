export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps/place/Cl.+71+%23+27B-4,+Barrancabermeja,+Santander/@7.0743906,-73.8535044,876m/data=!3m1!1e3!4m6!3m5!1s0x8e42eb502e34475f:0xeff8b0cef51f2bb5!8m2!3d7.07438!4d-73.851262!16s%2Fg%2F11x11j51rm?entry=ttu";

  return (
    <section className="w-full h-[500px] relative overflow-hidden shadow-lg max-w-6xl mx-auto">
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <iframe
          title="Ubicación Cormas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.796625463071!2d-73.8535044!3d7.0743906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42eb502e34475f%3A0xeff8b0cef51f2bb5!2sCl.%2071%20%23%2027B-4%2C%20Barrancabermeja%2C%20Santander!5e0!3m2!1ses!2sco!4v1730000000000!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
        ></iframe>

        {/* Marcador visual extra (sobre el centro del mapa) */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
        </div>
      </a>
    </section>
  );
}
