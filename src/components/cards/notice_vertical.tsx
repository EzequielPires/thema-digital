import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardNoticeVertical() {
    return (
        <div className="flex flex-col flex-wrap items-center h-full py-4 px-4 bg-zinc-800 gap-10">
            <div className="min-w-[300px] w-full flex-1 flex flex-col items-end">
                <div className="h-[228px] lg:h-[496px] w-full relative overflow-hidden">
                    <Image src={'/images/escritorio_02.jpg'} alt="" sizes="100%" fill />
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <span className="text-sm font-light text-white/90 mb-4 flex items-center gap-2"><Clock />02 de setembro 2023, by Tema digital</span>
                <h2 className="text-xl lg:text-3xl font-semibold mb-4">Somos o que você precisa: do essencial ao estratégico</h2>
                <span className="text-sm font-light text-white/90 leading-7 line-clamp-2">Somos um estúdio de design e uma agência de publicidade que busca sempre oferecer as melhores soluções para a sua empresa. Desenvolvemos desde a concepção da marca até estratégias únicas, sempre com o objetivo de emocionar e conquistar os seus clientes. Venha nos conhecer e ver o futuro de sucesso da sua marca, que só uma coruja pode enxergar.</span>
                <Link href={'/blog/noticia-01'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors">LEIA MAIS</Link>
            </div>
        </div>
    )
}