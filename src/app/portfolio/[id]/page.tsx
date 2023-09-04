import { Projects } from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "./gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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
            
            <Projects />

            <Contact />

            <Footer />
        </main>
    )
}