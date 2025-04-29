import { FaGithub } from "react-icons/fa"
import { useState } from "react"

const ProjectCard = ({ title, subtitle, description, image, techs, demoLink, repoLink }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative h-[380px] w-[300px] flex flex-col justify-center items-center bg-neutral-950 p-3 rounded-lg hover:ring-2 hover:ring-blue-900 transition border-sky-400"
    >
      <h3 className="text-xl text-blue-400 font-semibold">{title}</h3>
      <img src={image} alt={title} className="h-[200px] w-[250px] rounded-md mt-2" />
      <p className="text-blue-400 text-sm mt-2">{subtitle}</p>
      <div className="w-[85%] flex flex-wrap gap-2 mt-2 mb-1 justify-start">
        {techs.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
        ))}
      </div>
      <hr className="border-sky-800 w-[98%] mt-2" />
      <div className="w-[85%] flex justify-between mt-3">
        <a href={demoLink} target="_blank" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-800">Ver Demo</a>
        <a href={repoLink} target="_blank" className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800">
          <FaGithub />
          GitHub
        </a>
      </div>

      {isExpanded && (
        <div 
          className="absolute inset-0 bg-neutral-950 bg-opacity-95 p-4 flex flex-col justify-center items-center text-center rounded-lg z-50 pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation(); // Evita que el click cierre otras cards
            setIsExpanded(false);
          }} 
        >
          <p className="text-blue-400 text-md mb-3">{description}</p>
        </div>
      )}
    </div>

  );
};

export default ProjectCard