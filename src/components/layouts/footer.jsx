// import github from "../../assets/github.svg";
// import linkedin from "../../assets/linkedin.svg";
// import instagram from "../../assets/instagram.svg";
// import twitter from "../../assets/twitter.svg";


function Footer() {
    return (
        <footer className="w-full min-h-auto bg-[#202021] py-20 px-5 md:px-[10%] box-border border-t border-gray-800/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-white text-sm">© 2026 Dacarlos Lora. Todos los derechos reservados.</p>
                </div>

                <div>
                    {/* <a href="#"><img src={github} alt="GitHub" /></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                    <a href="#"><img src={twitter} alt="Twitter" /></a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;