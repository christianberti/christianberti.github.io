import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full px-0 md:px-0 ${menuOpen ? "bg-neutral-950" : "bg-neutral-950/50"} shadow-md z-50 transition`}>
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="text-lg font-bold">Christian Berti</h1>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {/* Links de navegación */}
        <ul className="hidden md:flex space-x-7">
          <li><a href="#introduction" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#about" className="hover:text-blue-500">Sobre Mí</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-neutral-950 text-white flex flex-col items-center p-4 space-y-4">
          <li><a href="#introduction" className="hover:text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>Inicio</a></li>
          <li><a href="#projects" className="hover:text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>Proyectos</a></li>
          <li><a href="#skills" className="hover:text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>Skills</a></li>
          <li><a href="#about" className="hover:text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>Sobre Mí</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar