'use client'

import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function BannerHomeSecondary() {
    const scrollToScreenHeight = () => {
        const screenHeight = window.innerHeight;
        window.scrollTo({
          top: screenHeight,
          behavior: 'smooth', // Isso adiciona uma animação de rolagem suave
        });
      };
    
    return (
        <div className="h-screen px-3 overflow-hidden relative bg-background flex flex-col gap-4 justify-center items-center">
            <div className="absolute top-[-150px] right-[100px]">
                <div className="w-[300px] h-[300px] rounded-full bg-primary/60 filter blur-[200px]" />
            </div>
            <div className="absolute bottom-[150px] right-[-200px]">
                <div className="w-[300px] h-[300px] rounded-full bg-secondary/60 filter blur-[200px]" />
            </div>
            <h1 className="max-lg:text-4xl text-5xl font-semibold max-w-4xl flex flex-col items-center gap-3 text-center" data-aos="fade-up" data-aos-delay="50">Encontre a agência ideal para<span className="text-primary">fazer seu marketing decolar</span></h1>
            <p className="max-w-2xl text-center text-lg font-light text-white/80" data-aos="fade-up" data-aos-delay="100">As melhores agências de marketing digital do Brasil estão aqui, prontas para gerar resultados incríveis em sua empresa.</p>
            <Link href={''} className="h-14 px-6 flex items-center justify-center uppercase font-medium bg-primary hover:bg-primary/80 transition-colors mt-6" data-aos="fade-up" data-aos-delay="150">Entrar em contato</Link>
            <button onClick={scrollToScreenHeight} className="opacity-50 hover:opacity-100 transition-all absolute bottom-4 border border-white w-10 h-10 flex items-center justify-center"><ArrowDown /></button>
        </div>
    )
}