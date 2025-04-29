import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TailwindCss", icon: <RiTailwindCssFill /> },
  { name: "NodeJs", icon: <FaNodeJs /> },
];

const extras = [
  { name: "Git" },
  { name: "Photoshop" },
  { name: "Illustrator" },
];

const softSkills = [
  { name: "Trabajo en Equipo" },
  { name: "Creatividad" },
  { name: "Aprendizaje Constante" },
  { name: "Pensamiento Crítico" },
  { name: "Iniciativa y Autonomía" },
  { name: "Adaptabilidad" },
];

const Skills = () => {
  return (
    <section id="skills" className="p-16 flex flex-col gap-4 md:gap-12 text-center justify-center items-center min-h-[70vh]">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap text-md md:text-lg justify-center gap-2 md:gap-4 mb-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2 rounded-lg shadow-md bg-neutral-800 hover:animate-wiggle-more hover:animate-infinite"
            >
              <div className='flex justify-center items-center p-[4px] gap-2'>
                {skill.icon && <span>{skill.icon}</span>}
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12">
        <div className="md:w-[40%] w-[100%] self-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Extras</h2>
          <div className="flex flex-wrap text-md md:text-lg justify-center gap-2 md:gap-4 mb-6">
            {extras.map((skill) => (
              <div
                key={skill.name}
                className="px-2 py-1 rounded-lg shadow-md bg-neutral-800 hover:animate-wiggle-more hover:animate-infinite"
              >
                <div className='flex justify-center items-center p-[4px] gap-2'>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[60%] w-[100%] self-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Soft Skills</h2>
          <div className="flex flex-wrap text-md md:text-lg justify-center gap-2 md:gap-4 mb-6">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="px-2 py-1 rounded-lg shadow-md bg-neutral-800 hover:animate-wiggle-more hover:animate-infinite"
              >
                <div className='flex justify-center items-center p-[4px] gap-2'>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills