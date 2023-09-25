import { Contact } from "@/components/contact";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="bg-background-dark">
            <div className="w-full h-[200px] lg:h-[600px] overflow-hidden flex items-center justify-center relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/70">
                <Image src={'/images/escritorio_04.jpg'} alt="" fill sizes="100%" />
                <div className="absolute z-50">
                    <section className="pt-36 pb-20 w-full max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center">
                        <span className="uppercase block mb-2" data-aos="fade-up" data-aos-delay="50">../Conheça a Tema</span>
                        <h1 className="text-2xl lg:text-5xl font-bold max-w-[700px] text-center title" data-aos="fade-up" data-aos-delay="100">Uma agência de resultado com dna criativo.</h1>
                        <Link href={''} className="h-14 px-6 flex items-center justify-center uppercase font-medium bg-primary hover:bg-primary/80 transition-colors mt-6" data-aos="fade-up" data-aos-delay="150">Entrar em contato</Link>
                    </section>
                </div>
            </div>
            <div className="bg-white py-20">
                <div className="w-full max-w-7xl mx-auto px-4 xl:px-0">
                    <h2 className="text-3xl font-semibold mb-3 text-gray-900">Tema digital? Quem somos?</h2>
                    <p className="text-black/70">Somos um estúdio de design e publicidade que trabalha com o intuito de fazer sua marca crescer. Acompanhamos a sua empresa desde a criação da identidade visual, ou a partir da reformulação para uma nova fase. Do essencial ao estratégico, buscamos através de fórmulas criativas, desenvolver, emocionar e conquistar cada vez mais os seus clientes.</p>
                    <div className="flex flex-wrap gap-8 mt-8">
                        <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-gray-900">O NOME</h4>
                            <p className="text-sm leading-6 text-black/70">Tema digital é uma derivação da palavra que significa: puro, brilhante e transparente. Exatamente o posicionamento que buscamos no mercado.</p>
                        </div>
                        <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-gray-900">OBJETIVO</h4>
                            <p className="text-sm leading-6 text-black/70">Nosso objetivo é te ajudar a construir e contar a história da sua marca . Venha embarcar nessa viagem com a gente.​</p>
                        </div>
                        <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-gray-900">VALORES</h4>
                            <p className="text-sm leading-6 text-black/70">Nossos principais valores são: criatividade, transparência, respeito, confiança e paixão.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />

            <div className="py-4 bg-zinc-950">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                    <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                    <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
                </div>
            </div>
        </main>
    )
}