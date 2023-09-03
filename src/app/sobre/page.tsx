import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="bg-zinc-900">
                <section className="pt-36 pb-20 w-full max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center">
                    <h1 className="text-2xl lg:text-4xl font-bold max-w-[800px] text-center">Acreditamos que existem <span className="text-with-stroke text-zinc-900">bons projetos</span> e também <span className="text-with-stroke text-zinc-900">projetos que tocam a alma.</span> Esse é o resultado do que fazemos.</h1>
                </section>
            </div>
            
            <div className="w-full h-[200px] lg:h-[400px] overflow-hidden flex items-center justify-center relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                <Image src={'/images/escritorio_01.jpg'} alt="" fill sizes="100%" />
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 mt-20 mb-20">
                <h2 className="text-3xl font-semibold mb-3">Tema digital? Quem somos?</h2>
                <p className="text-white/70">Somos um estúdio de design e publicidade que trabalha com o intuito de fazer sua marca crescer. Acompanhamos a sua empresa desde a criação da identidade visual, ou a partir da reformulação para uma nova fase. Do essencial ao estratégico, buscamos através de fórmulas criativas, desenvolver, emocionar e conquistar cada vez mais os seus clientes.</p>
                <div className="flex flex-wrap gap-8 mt-8">
                    <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-white">O NOME</h4>
                        <p className="text-sm leading-6 text-white/70">Tema digital é uma derivação da palavra que significa: puro, brilhante e transparente. Exatamente o posicionamento que buscamos no mercado.</p>
                    </div>
                    <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-white">OBJETIVO</h4>
                        <p className="text-sm leading-6 text-white/70">Nosso objetivo é te ajudar a construir e contar a história da sua marca . Venha embarcar nessa viagem com a gente.​</p>
                    </div>
                    <div className="flex-1 min-w-[300px] flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-white">VALORES</h4>
                        <p className="text-sm leading-6 text-white/70">Nossos principais valores são: criatividade, transparência, respeito, confiança e paixão.</p>
                    </div>
                </div>
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