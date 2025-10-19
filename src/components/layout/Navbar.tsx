import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-primary-500" : "text-secondary-700 hover:text-primary-500"
    }`;

  return (
    <nav className="shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/cormas_logo.png"
            alt="Logo Cormas S.A.S"
            className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/portafolio" className={navLinkClass}>
            Portafolio
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu móvil */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 pb-4">
          <NavLink
            to="/portafolio"
            onClick={() => setOpen(false)}
            className="block py-2 text-secondary-700 hover:text-primary-500"
          >
            Portafolio
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={() => setOpen(false)}
            className="block py-2 text-secondary-700 hover:text-primary-500"
          >
            Contacto
          </NavLink>
        </div>
      )}
    </nav>
  );
}
