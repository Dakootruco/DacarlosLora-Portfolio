import { useState } from 'react';
import logo from "../../assets/react.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-[70px] bg-[#202021] flex justify-between items-center px-5 box-border z-100">
      <div className="flex items-center gap-4">
        <button className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-6 h-[3px] bg-white rounded-sm"></span>
          <span className="w-6 h-[3px] bg-white rounded-sm"></span>
          <span className="w-6 h-[3px] bg-white rounded-sm"></span>
        </button>
        <a href="/">
          <img src={logo} alt="logo" className="w-10 h-10 hover:opacity-80 transition-opacity" />
        </a>
      </div>

      <nav className={`absolute md:static top-[70px] -left-full md:left-auto flex flex-col md:flex-row bg-[#202021] md:bg-transparent w-[250px] md:w-auto h-[calc(100vh-70px)] md:h-auto transition-all duration-300 ease-in-out p-5 md:p-0 box-border items-start md:items-center gap-5 md:gap-8 ${menuOpen ? 'left-0!' : ''}`}>
        <a href="#inicio" className="text-[1.2rem] md:text-base w-full md:w-auto py-2.5 md:py-0 font-medium text-[#646cff] hover:text-[#535bf2] no-underline" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#acerca" className="text-[1.2rem] md:text-base w-full md:w-auto py-2.5 md:py-0 font-medium text-[#646cff] hover:text-[#535bf2] no-underline" onClick={() => setMenuOpen(false)}>Acerca de mi</a>
        <a href="#proyectos" className="text-[1.2rem] md:text-base w-full md:w-auto py-2.5 md:py-0 font-medium text-[#646cff] hover:text-[#535bf2] no-underline" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#habilidades" className="text-[1.2rem] md:text-base w-full md:w-auto py-2.5 md:py-0 font-medium text-[#646cff] hover:text-[#535bf2] no-underline" onClick={() => setMenuOpen(false)}>Habilidades</a>
        <a href="#contacto" className="text-[1.2rem] md:text-base w-full md:w-auto py-2.5 md:py-0 font-medium text-[#646cff] hover:text-[#535bf2] no-underline" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>

      <button className="bg-[#0d1932] hover:border-[#646cff] text-white font-medium py-2 px-5 rounded-lg border border-transparent transition-colors duration-250 cursor-pointer text-base">Ver CV</button>
    </div>
  );
}

export default Nav;
