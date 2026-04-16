import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

const extras = [
  "Git",
  "Github",
  "Vercel",
  "IA"
];

const softSkills = [
  "Trabajo en Equipo",
  "Creatividad",
  "Aprendizaje Constante",
  "Pensamiento Crítico",
  "Iniciativa y Autonomía",
  "Adaptabilidad",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 border-t border-white/5 relative">
      {/* Glow subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

        {/* Core Stack */}
        <div className="md:col-span-7 flex flex-col gap-8 animate-on-scroll">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--color-brand-text)' }}>
              Tecnologías
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-brand-text-dim)' }}>Mi stack principal enfocado en crear interfaces rápidas y escalables.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col justify-center items-center py-6 px-4 glass-effect rounded-2xl hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className="text-4xl mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  style={{ color: 'var(--color-brand-text)' }}
                >
                  {skill.icon}
                </div>
                <span className="font-semibold text-sm tracking-wide" style={{ color: 'var(--color-brand-text-dim)' }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Extras / Soft Skills */}
        <div className="md:col-span-5 flex flex-col gap-12 animate-on-scroll delay-150">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-brand-text)' }}>Herramientas Extras</h3>
            <div className="flex flex-wrap gap-3">
              {extras.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium" style={{ color: 'var(--color-brand-text-dim)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-brand-text)' }}>Habilidades Blandas</h3>
            <ul className="flex flex-col gap-3">
              {softSkills.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-brand-accent)' }}></div>
                  <span className="text-base font-medium" style={{ color: 'var(--color-brand-text-dim)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills