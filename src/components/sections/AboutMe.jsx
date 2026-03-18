import yo from "../../assets/Yo.png";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



function AboutMe() {
  return (
    <section id="acerca" className="relative w-full min-h-screen bg-[#0d1932] flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-[10%] box-border py-20 gap-10 md:gap-0">
      <div className="text-white z-10 w-full md:w-1/2 flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-[45px] font-bold mb-6 tracking-tight">
          Acerca de mí
        </h2>
        <div className="text-gray-300 text-[15px] md:text-[17px] leading-[1.8] max-w-[550px] flex flex-col gap-5">
          <p>
            Soy un Frontend Web Developer formado en el ITLA con una profunda pasión por el desarrollo de interfaces y la experiencia de usuario.
          </p>
          <p>
            Disfruto ser el puente entre el diseño visual y la lógica de programación, asegurándome de que cada píxel esté en su lugar y cada interacción sea fluida. Me especializo en construir arquitecturas web escalables, responsivas y atractivas. Siempre estoy explorando las últimas tendencias y frameworks de JavaScript para llevar mis proyectos al siguiente nivel.
          </p>
        </div>

        {/* Placeholder for tech logos later */}
        <div className="flex gap-4 mt-8">
          <div className="w-12 h-12 bg-[#1e293b]/50 rounded-lg flex items-center justify-center border border-gray-700/50">
            <FaReact color="#61dafb" size={34} />
            {/* <span className="text-[#61dafb] font-bold text-xs">React</span> */}
          </div>
          <div className="w-12 h-12 bg-[#1e293b]/50 rounded-lg flex items-center justify-center border border-gray-700/50">
            <RiTailwindCssFill color="#38bdf8" size={34} />
            {/* <span className="text-[#38bdf8] font-bold text-xs">Tailwind</span> */}
          </div>
          <div className="w-12 h-12 bg-[#1e293b]/50 rounded-lg flex items-center justify-center border border-gray-700/50">
            <FaHtml5 color="#e34f26" size={34} />
            {/* <span className="text-[#e34f26] font-bold text-xs">HTML5</span> */}
          </div>
          <div className="w-12 h-12 bg-[#1e293b]/50 rounded-lg flex items-center justify-center border border-gray-700/50">
            <FaNodeJs color="#68a063" size={34} />
            {/* <span className="text-[#68a063] font-bold text-xs">NodeJS</span> */}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 mt-10 md:mt-0">
        {/* Light glow behind the image to simulate the node connections feel */}
        <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-[#38bdf8]/10 rounded-full blur-[60px] -z-10"></div>
        <img
          src={yo}
          alt="Yo"
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover rounded-[32px] shadow-2xl bg-white"
        />
      </div>
    </section>
  );
}

export default AboutMe;
