import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Projects = () => {

  return (
    <section id="projects" className="px-4 md:px-18 xl:px-26 min-h-[90vh] text-center pt-18 pb-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Mis Proyectos</h2>
      <div className="min-h-[200px] p-6 px-2 bg-neutral-900 flex flex-wrap justify-center gap-6 content-center rounded-xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;