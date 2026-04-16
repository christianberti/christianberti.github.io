import { FaLinkedin } from "react-icons/fa6";

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 md:px-12 relative overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight animate-slide-up" style={{ color: 'var(--color-brand-text)' }}>
          ¡Hola! Soy Christian
        </h1>
        <p className="text-lg md:text-2xl font-medium max-w-3xl text-balance animate-slide-up delay-150 leading-relaxed" style={{ color: 'var(--color-brand-text-dim)' }}>
          Desarrollador Web especializado en <span className="font-bold whitespace-nowrap" style={{ color: 'var(--color-brand-accent)' }}>Frontend con React</span>. <br className="hidden md:block" />
          Apasionado por el diseño, el código y el aprendizaje constante.
        </p>

        {/* Botones de acción elegantes */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up delay-300 w-full sm:w-auto">
          <a
            href="./CV-DesarrolladorWeb.pdf"
            download
            className="group relative px-6 py-3.5 text-base md:text-lg font-bold rounded-full shadow-lg transition-all duration-300 overflow-hidden w-full sm:w-auto text-center hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: 'var(--color-brand-accent)', color: '#fff' }}
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative">Descargar CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/christian-berti"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-center items-center gap-3 px-6 py-3.5 text-base md:text-lg font-semibold rounded-full glass-effect hover:bg-white/5 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
            style={{ color: 'var(--color-brand-text)' }}
          >
            <FaLinkedin className="text-xl group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;