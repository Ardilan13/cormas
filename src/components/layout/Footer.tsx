export default function Footer() {
  return (
    <footer className="py-6 mt-10 bg-secondary-700 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CORMAS S.A.S. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-x-12 mt-3 md:mt-0">
          <div>
            <h3 className="font-black">Ubicación</h3>
            <ul className="text-xs">
              <li>Calle 71 # 27B-12</li>
              <li>SEGUNDO PISO BARRIO LA LIBERTAD</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black">Contacto</h3>
            <ul className="text-xs">
              <li>3204292908</li>
              <li>3108076486</li>
              <li>gerencia@cormassas.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
