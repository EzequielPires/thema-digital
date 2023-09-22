import Link from "next/link";

export function Contact() {
  return (
    <div className="h-[50vh] lg:h-[80vh] bg-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 flex items-center h-full py-10 gap-10">
        <div className="flex-1 flex flex-col">
          <span className="text-sm font-light text-white/90 block mb-4 uppercase">Vamos conversar</span>
          <h2 className="text-3xl lg:text-5xl title mb-6 lg:mb-16 max-w-4xl">Nos conte sobre o seu próximo projeto.</h2>
          <form className="flex flex-col gap-4 max-w-lg">
            <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Nome" />
            <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Telefone" />
            <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Email" />
            <textarea className="h-32 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Mensagem" />
            <button className="h-12 px-20 bg-zinc-800 hover:bg-zinc-700 transition-colors font-semibold">Enviar</button>
          </form>
          {/* <Link href={'/contato'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Entrar em contato</Link> */}

        </div>
      </div>
    </div>
  )
}