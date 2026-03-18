


function Contact() {
    return (
        <section id="contacto" className="w-full min-h-screen bg-[#0b1120] py-20 px-5 md:px-[10%] box-border border-t border-gray-800/30 flex flex-col items-center justify-center">

            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-[45px] font-bold text-white mb-4 tracking-tight">
                    Contactos
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    ¿Tienes un proyecto en mente o quieres sumarme a tu equipo? Llena el formulario y me pondré en contacto contigo lo antes posible.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl">

                {/* Left side: Image/Graphic */}
                <div className="w-full md:w-5/12 bg-[#0d1117] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#27272a]">
                    {/* Decorative Background Glow */}
                    <div className="absolute w-[200px] h-[200px] bg-[#f97316]/20 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <svg className="w-32 h-32 text-[#f97316] mb-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-white text-center mb-2">¡Hablemos!</h3>
                        <p className="text-center text-gray-400">Estoy disponible para nuevas oportunidades y colaboraciones freelance.</p>
                    </div>
                </div>

                {/* Right side: Contact Form */}
                <div className="w-full md:w-7/12 p-8 md:p-12">
                    <form className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-white text-sm font-medium ml-1">Nombre</label>
                            <input
                                className="w-full bg-[#202021] border border-[#3f3f46] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors placeholder:text-gray-500"
                                type="text"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white text-sm font-medium ml-1">Correo Electrónico</label>
                                <input
                                    className="w-full bg-[#202021] border border-[#3f3f46] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors placeholder:text-gray-500"
                                    type="email"
                                    placeholder="tu@correo.com"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white text-sm font-medium ml-1">Teléfono</label>
                                <input
                                    className="w-full bg-[#202021] border border-[#3f3f46] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors placeholder:text-gray-500"
                                    type="tel"
                                    placeholder="+1 (809) 000-0000"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-white text-sm font-medium ml-1">Mensaje</label>
                            <textarea
                                className="w-full min-h-[150px] resize-y bg-[#202021] border border-[#3f3f46] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors placeholder:text-gray-500"
                                placeholder="Cuéntame sobre tu proyecto o como puedo ayudarte..."
                                required
                            ></textarea>
                        </div>

                        <button
                            className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-6 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
                            type="button"
                            onClick={(e) => e.preventDefault()}
                        >
                            Enviar Mensaje
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact;