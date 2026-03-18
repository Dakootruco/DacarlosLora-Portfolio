import Cards from "../ui/cards";
import { projectsList } from "../../data/PortafolioData";

function Projects() {
  return (
    <section id="proyectos" className="w-full min-h-screen bg-[#0b1120] py-20 px-5 md:px-[10%] box-border border-t border-gray-800/30">
      <h2 className="text-3xl md:text-[45px] font-bold text-white mb-[60px] tracking-tight">
        Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projectsList.map((project) => (
          <Cards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
