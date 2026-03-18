import MiniCards from "../ui/MiniCards";
import { skillsData } from "../../data/SkillsData";


function Skills() {
  return (
    <section id="habilidades" className="w-full min-h-auto bg-[#0d1932] py-20 px-5 md:px-[10%] box-border border-t border-gray-800/30">
      <h2 className="text-3xl md:text-[45px] font-bold text-white mb-[60px] tracking-tight">
        Habilidades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillsData.map((skill) => (
          <MiniCards key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;