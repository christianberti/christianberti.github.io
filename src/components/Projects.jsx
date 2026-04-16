import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectsData";

const Projects = () => {

  return (
    <section id="projects" className="px-6 md:px-12 py-24 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--color-brand-text)' }}>
            Proyectos
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium" style={{ color: 'var(--color-brand-text-dim)' }}>
            Una selección de proyectos donde el diseño y la funcionalidad se encuentran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;