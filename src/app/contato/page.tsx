import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";

export default function Page() {
    return (
        <main>
            <section className="pt-36 pb-20 w-full max-w-7xl px-4 xl:px-0 mx-auto">
                <h1 className="text-5xl lg:text-7xl font-semibold">Contato</h1>
                <ul className="flex gap-4 mt-6">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/contato'}>Contato</Link>
                    </li>
                </ul>
            </section>
            <section className="py-10 xl:py-20 bg-zinc-900 flex">
                <div className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row px-4 xl:px-0 gap-8">
                    <div className="flex-1 flex flex-col items-start gap-4">
                        <h4 className="text-3xl font-semibold mb-2">Enviar um e-mail</h4>
                        <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Nome" />
                        <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Telefone" />
                        <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Email" />
                        <textarea className="h-32 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Mensagem" />
                        <button className="h-12 px-20 bg-zinc-800 hover:bg-zinc-700 transition-colors font-semibold">Enviar</button>
                    </div>
                    <div className="flex-1 flex flex-col items-start">
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39563613123!2d-46.924960160457054!3d-23.681434588352147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1693766903575!5m2!1spt-BR!2sbr" width="100%" height="300" style={{ border: 0 }} loading="lazy"></iframe>
            <div className="py-4 bg-zinc-950">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                    <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                    <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
                </div>
            </div>
        </main>
    )
}