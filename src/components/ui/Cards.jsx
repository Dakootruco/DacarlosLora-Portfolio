import React from 'react';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiAstro } from "react-icons/si";


// Icon Helper mapping
const techIcons = {
    React: (
        <FaReact color="#61dafb" size={24} className='hover:animate-spin' />
    ),
    'Tailwind CSS': (
        <RiTailwindCssFill color="#38bdf8" size={24} className='hover:animate-spin' />

    ),
    NodeJS: (
        <FaNodeJs color="#68a063" size={24} className='hover:animate-spin' />
    ),
    PostgreSQL: (
        <BiLogoPostgresql color="#61dafb" size={24} className='hover:animate-spin' />
    ),
    Express: (
        <SiExpress color="#111111" size={24} className='hover:animate-spin bg-yellow-500' />
    ),
    TypeScript: (
        <SiTypescript color="#3178c6" size={24} className='hover:animate-spin' />
    ),
    Supabase: (
        <SiSupabase color="#3ecf8e" size={24} className='hover:animate-spin' />
    ),
    Astro: (
        <SiAstro color="#ff5a03" size={24} className='hover:animate-spin' />
    )
};

function Cards({ project }) {
    const { title, description, image, technologies, liveLink, repoLink } = project;

    // Render tech icons
    const renderTechIcon = (tech) => {
        // Check if we have an SVG for this explicitly
        if (techIcons[tech]) {
            return (
                <div key={tech} className="w-10 h-10 flex items-center justify-center p-1" title={tech}>
                    {techIcons[tech]}
                </div>
            );
        }

        // Fallback if not mapped
        return (
            <span key={tech} className="text-gray-400 font-bold text-[10px] break-all border border-gray-600 rounded px-2 py-1 flex items-center h-10" title={tech}>
                {tech}
            </span>
        );
    };

    return (
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden flex flex-col hover:border-gray-500 transition-colors shadow-lg shadow-black/30 group">

            {/* Top Image Box */}
            <div className="w-full h-[220px] overflow-hidden bg-[#0d1117] relative flex items-center justify-center rounded-t-2xl p-2">
                <img
                    src={image}
                    alt={title}
                    className="max-w-full max-h-full object-contain z-0 rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        // Fallback base64 image if the actual image file doesn't exist yet
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none"><rect width="800" height="400" fill="%2327272a"></rect><text x="50%" y="50%" fill="%2364748b" text-anchor="middle" font-size="24" dy=".3em">Preview</text></svg>';
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-6 pt-2 flex flex-col grow">
                <h3 className="text-[22px] font-bold text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-[1.6] mb-6 line-clamp-3 grow">
                    {description}
                </p>

                {/* Tech Icons Row */}
                <div className="flex gap-1 flex-wrap mb-6 items-center">
                    {technologies?.map(tech => renderTechIcon(tech))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto w-full">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#f97316] hover:bg-[#ea580c] text-white font-medium text-[15px] py-2.5 px-3 rounded-lg flex-1 text-center transition-colors no-underline!"
                    >
                        Ver Proyecto
                    </a>
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border border-[#3f3f46] hover:border-[#71717a] text-white font-medium text-[15px] py-2.5 px-3 rounded-lg flex-1 transition-colors flex items-center justify-center gap-2 no-underline!"
                    >
                        Ver Código
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;
