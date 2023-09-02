import { BannerHome } from "@/components/banner_home";
import { Services } from "@/components/services";
import { SwiperProjects } from "@/components/swiper_projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <BannerHome />
      <div className="h-screen bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto flex items-center h-full py-10 gap-10">
          <div className="w-[300px] flex flex-col items-end">
            <div className="h-[360px] w-full relative overflow-hidden">
              <Image src={'/images/escritorio_02.jpg'} alt="" sizes="100%" fill />
            </div>
            <span className="block mt-4 text-[80px] leading-[100%] font-semibold mb-2">+ de 5</span>
            <span className="block mb-6">anos de experiência</span>
          </div>
          <div className="w-[300px]">
            <div className="h-[450px] relative overflow-hidden">
              <Image src={'/images/escritorio_01.jpg'} alt="" sizes="100%" fill />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm font-light text-white/90 block mb-4">SOBRE NÓS</span>
            <h2 className="text-3xl font-semibold mb-4">Somos o que você precisa: do essencial ao estratégico</h2>
            <span className="text-sm font-light text-white/90 leading-7">Somos um estúdio de design e uma agência de publicidade que busca sempre oferecer as melhores soluções para a sua empresa. Desenvolvemos desde a concepção da marca até estratégias únicas, sempre com o objetivo de emocionar e conquistar os seus clientes. Venha nos conhecer e ver o futuro de sucesso da sua marca, que só uma coruja pode enxergar.</span>
            <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors">NOSSO TIME</Link>
          </div>
        </div>
      </div>
      <div className="h-screen bg-zinc-950 py-10 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <span className="uppercase block mb-2">Conheça nossos trabalhos</span>
          <h2 className="text-5xl font-semibold mb-16">Nossos trabalhos criativos</h2>
        </div>
        <SwiperProjects />
      </div>
      <div className="bg-zinc-900 py-20 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <span className="uppercase block mb-2">Conheça a gente melhor</span>
          <h2 className="text-5xl font-semibold mb-16 max-w-4xl">Nós te ajudamos a criar estratégias e designs para a sua marca.</h2>
          <Services />
        </div>
      </div>
      <div className="h-[80vh] bg-zinc-950 py-20 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-10">
          <div className="flex items-center gap-10 w-full max-w-7xl">
            <div className="h-[450px] w-[400px] relative before:absolute before:right-[150px] before:top-[-50px] before:bottom-[-50px] before:bg-zinc-700 before:w-[2000px]">
              <Image src={'/images/escritorio_01.jpg'} alt="" sizes="100%" fill />
            </div>
            <div className="flex-1 max-w-xl">
              <span className="text-sm font-light text-white/90 block mb-4">Tema Digital</span>
              <h2 className="text-5xl font-semibold my-4 max-w-4xl">Sonhar. Inovar. Implementar.</h2>
              <p className="text-sm font-light text-white/90 leading-7">Nossa agência criativa está há mais de 13 anos se destacando no mercado goiano. Cultivamos ideias inteligentes para a sua empresa. Seguindo os padrões do setor, construímos um portfólio impressionante.</p>
              <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors">NOSSOS PROJETOS</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
