import { FaLinkedin } from "react-icons/fa6";

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-[90vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-fadeIn">¡Hola! Soy Christian</h1>
      <p className="text-lg md:text-xl animate-fadeIn">
        Desarrollador Web Frontend enfocado en React.  
      </p>
      <p className="text-lg md:text-xl mb-6 animate-fadeIn">
        Apasionado por el diseño, el código y el aprendizaje constante.
      </p>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row gap-3 animate-fadeIn2">
        <a
          href="./CV-ChristianBerti-DesarrolladorWeb2025.pdf"
          download
          className="text-md md:text-lg px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition w-full md:w-auto text-center mb-0"
        >
          Descargar CV
        </a>

        <a
          href="https://www.linkedin.com/in/christian-berti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md md:text-lg flex justify-center items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition w-full md:w-auto text-center"
        >
          <FaLinkedin/>
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Introduction