export default function Footer() {
  return (
    <footer className="py-6 mt-10 bg-secondary-700 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CORMAS S.A.S. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <div>
            <h3>Ubicación</h3>
            <ul>
              <li></li>
            </ul>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
