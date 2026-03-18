import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiPostgresql, SiTypescript, SiTailwindcss, SiExpress, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const iconsArray = [
    <FaJs key="js" className="w-full h-full text-yellow-400 filter group-hover:brightness-125 transition-all" />,
    <FaReact key="react" className="w-full h-full text-[#61DAFB] filter group-hover:brightness-125 transition-all" />,
    <FaNodeJs key="node" className="w-full h-full text-[#339933] filter group-hover:brightness-125 transition-all" />,
    <SiPostgresql key="pg" className="w-full h-full text-[#4169E1] filter group-hover:brightness-125 transition-all" />,
    <SiTypescript key="ts" className="w-full h-full text-[#3178C6] filter group-hover:brightness-125 transition-all" />,
    <SiTailwindcss key="tailwind" className="w-full h-full text-[#06B6D4] filter group-hover:brightness-125 transition-all" />,
    <SiExpress key="express" className="w-full h-full text-white filter group-hover:brightness-125 transition-all" />,
    <FaHtml5 key="html" className="w-full h-full text-[#E34F26] filter group-hover:brightness-125 transition-all" />,
    <FaCss3Alt key="css" className="w-full h-full text-[#1572B6] filter group-hover:brightness-125 transition-all" />,
    <FaPython key="python" className="w-full h-full text-[#3776AB] filter group-hover:brightness-125 transition-all" />,
    <SiCplusplus key="cplusplus" className="w-full h-full text-[#00599C] filter group-hover:brightness-125 transition-all" />,
    <TbBrandCSharp key="csharp" className="w-full h-full text-[#239120] filter group-hover:brightness-125 transition-all" />,
    <FaGitAlt key="git" className="w-full h-full text-[#F05032] filter group-hover:brightness-125 transition-all" />,
    <FaGithub key="github" className="w-full h-full text-white filter group-hover:brightness-125 transition-all" />,
    <FaFigma key="figma" className="w-full h-full text-[#F24E1E] filter group-hover:brightness-125 transition-all" />,
    <VscVscode key="vscode" className="w-full h-full text-[#007ACC] filter group-hover:brightness-125 transition-all" />
];

function MiniCards({ skill }) {
    const { title, description, id } = skill;

    return (
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden flex flex-col hover:border-[#646cff] transition-all duration-300 shadow-lg shadow-black/20 group items-center text-center p-6 cursor-pointer hover:-translate-y-1">
            <div className="w-16 h-16 mb-4 flex items-center justify-center p-2 rounded-xl bg-[#202021] border border-[#3f3f46] group-hover:bg-[#27272a] transition-colors">
                {iconsArray[id - 1] || <div className="text-[#a1a1aa]">Icon</div>}
            </div>

            <div className="w-full">
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#646cff] transition-colors">{title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed line-clamp-2">{description}</p>
            </div>
        </div>
    )
}

export default MiniCards;