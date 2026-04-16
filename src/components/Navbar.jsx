import { useState } from "react";
import logoPersonal from '../assets/iconoportfolio.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full px-0 md:px-0 z-50 transition-all duration-300 ${menuOpen ? "glass-effect border-b border-white/10" : "bg-transparent"}`}>
      <div className={`absolute inset-0 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'} md:opacity-100 md:glass-effect border-b border-white/5`}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img src={logoPersonal} alt="Logo personal" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <h1 className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-brand-text)' }}>Christian Berti</h1>
        </div>

        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        
        {/* Links de navegación */}
        <ul className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide">
          {[
            { href: "#introduction", text: "Inicio" },
            { href: "#projects", text: "Trabajos" },
            { href: "#skills", text: "Tecnologías" },
            { href: "#about", text: "Sobre Mí" },
            { href: "#contact", text: "Contacto" }
          ].map(link => (
            <li key={link.href}>
              <a href={link.href} className="relative group text-white/70 hover:text-white transition-colors duration-300 py-1">
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-effect border-b border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-center py-4 space-y-2 font-semibold text-sm">
          <li className="w-full text-center"><a href="#introduction" className="block py-3 px-6 hover:text-white" style={{ color: 'var(--color-brand-text-dim)' }} onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li className="w-full text-center"><a href="#projects" className="block py-3 px-6 hover:text-white" style={{ color: 'var(--color-brand-text-dim)' }} onClick={() => setMenuOpen(false)}>Trabajos</a></li>
          <li className="w-full text-center"><a href="#skills" className="block py-3 px-6 hover:text-white" style={{ color: 'var(--color-brand-text-dim)' }} onClick={() => setMenuOpen(false)}>Tecnologías</a></li>
          <li className="w-full text-center"><a href="#about" className="block py-3 px-6 hover:text-white" style={{ color: 'var(--color-brand-text-dim)' }} onClick={() => setMenuOpen(false)}>Sobre Mí</a></li>
          <li className="w-full text-center"><a href="#contact" className="block py-3 px-6 hover:text-white" style={{ color: 'var(--color-brand-text-dim)' }} onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar