import Link from "next/link";

export function Contact() {
    return (
        <div className="h-[50vh] lg:h-[80vh] bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 flex items-center h-full py-10 gap-10">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm font-light text-white/90 block mb-4 uppercase">Vamos conversar</span>
            <h2 className="text-4xl lg:text-7xl text-center font-bold mb-4 stroke-slate-500 stroke-2"><span className="text-with-stroke text-zinc-900">nos conte sobre</span> o seu próximo projeto<span className="text-with-stroke text-zinc-900">.</span></h2>
            <Link href={'/contato'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Entrar em contato</Link>
          </div>
        </div>
      </div>
    )
}