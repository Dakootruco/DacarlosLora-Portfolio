import hero from "../../assets/HeroPortafolio.png";

function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-[calc(100vh-70px)] mt-[70px] flex flex-col md:flex-row-reverse items-center justify-center md:justify-between px-5 md:px-[10%] box-border gap-7 md:gap-0 py-10 md:py-0">
      <img src={hero} alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-60" />
      <div className="text-white z-10 w-full md:max-w-[50%] flex flex-col items-center md:items-end text-center md:text-right">
        <h1 className="font-['bree_serif'] text-[40px] md:text-[60px] font-black leading-tight m-0">Dacarlos Lora</h1>
        <h2 className="pt-1 md:pt-2.5 text-[24px] md:text-[30px] text-[#ff751f] m-0">Software Developer</h2>
        <h3 className="mt-4 max-w-lg md:ml-auto">
          Frontend Web Developer. Construyo interfaces modernas,
          rápidas y accesibles. Transformo diseños increíbles en código limpio
          y experiencias interactivas para el usuario.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 z-10 items-center">
        <button onClick={() => window.location.href = "#proyectos"} className="bg-[#0d1932] hover:border-[#646cff] text-white font-medium py-3 px-6 rounded-lg border border-transparent transition-colors duration-250 cursor-pointer text-base">
          Ver mis Proyectos</button>
        <button onClick={() => window.location.href = "#contacto"} className="bg-[#ff751f] hover:brightness-110 hover:border-[#646cff] h-[50px] w-[150px] text-white font-medium py-3 px-6 rounded-lg border border-transparent transition-all duration-250 cursor-pointer text-base">
          Contactos</button>
      </div>
    </section>
  );
}

export default Hero;
