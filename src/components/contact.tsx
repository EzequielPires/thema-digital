import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 flex max-lg:flex-col h-full py-10 gap-20">
        <div className="flex-1 flex flex-col items-start">
          <span className="text-sm font-light text-white/90 block mb-4 uppercase">Tem um projeto em vista</span>
          <h2 className="text-3xl lg:text-5xl title mb-6 lg:mb-16 max-w-2xl">Solicite uma cotação</h2>
          <form className="gap-4 w-full grid min-lg:grid-cols-2">
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Nome" />
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Empresa" />
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Telefone" />
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Email" />
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Assunto" />
            <input type="text" className="h-12 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Budget" />
            <textarea className="hidden lg:flex h-32 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3 col-span-2" placeholder="Mensagem" />
            <textarea className="flex lg:hidden h-32 w-full bg-background border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Mensagem" />
            <button className="h-12 px-20 bg-primary hover:bg-primary/80 transition-colors font-semibold">Enviar</button>
          </form>
          {/* <Link href={'/contato'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Entrar em contato</Link> */}

        </div>
        <div className="flex-1 max-w-lg flex flex-col items-start justify-start h-full">
          <h4 className="text-3xl font-semibold mb-2">Vamos conversar</h4>
          <span className="text-sm text-white/70">contato@temadigital.com.br</span>
          <h4 className="text-3xl font-semibold mb-2 mt-8">Endereço</h4>
          <span className="text-sm text-white/70">Av. T-10, 208,</span>
          <span className="text-sm text-white/70">Ed. New Times Square, Sl. 2206</span>
          <span className="text-sm text-white/70">St. Bueno, Goiânia-GO, 74.223-060</span>
          <button className="h-12 px-20 bg-green-800 hover:bg-green-600 transition-colors font-semibold mt-8 flex items-center justify-center gap-3">
            <FaWhatsapp size={24} />
            Whatsapp
          </button>
        </div>
      </div>
    </section>
  )
}