import { SwiperProjects } from "@/components/swiper_projects";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "./gallery";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main>
            <section className="mt-36 mb-20 w-full max-w-7xl mx-auto px-4 xl:px-0">
                <h1 className="text-5xl lg:text-7xl font-semibold">Vio</h1>
                <ul className="flex gap-4 mt-6">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/portifolio'}>Portfólio</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/vio'}>Vio</Link>
                    </li>
                </ul>
            </section>

            <div className="w-full h-[264px] lg:h-[500px] overflow-hidden flex items-center justify-center relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                <Image src={'/projetos/vio/01.png'} alt="" fill sizes="100%" />
            </div>

            <section className="w-full max-w-7xl mx-auto my-10 xl:my-20 px-4 xl:px-0">
                <h2 className="text-5xl font-semibold mb-4">Vio</h2>
                <p>O projeto de redesign de marca para "Café Aromático" foi uma oportunidade emocionante de revitalizar uma marca icônica que tem uma longa história de produzir café de alta qualidade. Nossa missão era trazer um novo visual moderno e cativante à marca, mantendo ao mesmo tempo a autenticidade e a tradição que a tornaram tão amada por seus clientes fiéis. O desafio principal era modernizar a marca sem alienar seus clientes de longa data. Queríamos criar algo que atraísse uma nova geração de consumidores enquanto ainda era reconhecido e amado pelos antigos. Além disso, a marca precisava comunicar a qualidade e o sabor excepcionais do café.</p>
            </section>
            
            <Gallery />
            
            <div className="h-fit lg:h-screen bg-zinc-900 py-20 flex flex-col justify-center">
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                    <span className="uppercase block mb-2">OUTROS PROJETOS</span>
                    <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Nossos trabalhos criativos</h2>
                </div>
                <SwiperProjects />
            </div>

            <div className="h-[50vh] lg:h-[80vh] bg-zinc-900">
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 flex items-center h-full py-10 gap-10">
                    <div className="flex-1 flex flex-col items-center">
                        <span className="text-sm font-light text-white/90 block mb-4 uppercase">Vamos conversar</span>
                        <h2 className="text-4xl lg:text-7xl text-center font-bold mb-4 stroke-slate-500 stroke-2"><span className="text-with-stroke text-zinc-900">nos conte sobre</span> o seu próximo projeto<span className="text-with-stroke text-zinc-900">.</span></h2>
                        <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Entrar em contato</Link>
                    </div>
                </div>
            </div>

            <div className="py-4 bg-zinc-950">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                    <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                    <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
                </div>
            </div>
        </main>
    )
}