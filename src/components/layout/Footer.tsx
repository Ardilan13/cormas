export default function Footer() {
  return (
    <footer className="py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MiMarca. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white text-sm">
            Política de privacidad
          </a>
          <a href="#" className="hover:text-white text-sm">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
