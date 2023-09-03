import { BannerHome } from "@/components/banner_home";
import { BannerVideo } from "@/components/banner_video";
import { Comments } from "@/components/comments";
import { Notices } from "@/components/notices";
import { Services } from "@/components/services";
import { SwiperProjects } from "@/components/swiper_projects";
import { Clock, Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <BannerHome />

      <div id="about" className="lg:h-screen bg-zinc-900">
        <div className="w-full max-w-7xl px-4 lg:px-0 mx-auto flex flex-wrap items-center h-full py-10 gap-10">
          <div className="w-full lg:w-[300px] flex flex-col items-end relative">
            <div className="h-[360px] w-full relative overflow-hidden">
              <Image src={'/images/escritorio_02.jpg'} alt="" sizes="100%" fill />
            </div>
            <div className="flex flex-col absolute lg:relative w-full justify-end h-full p-3 lg:p-0 bg-black/70 lg:bg-transparent">
              <span className="block mt-4 text-[80px] leading-[100%] font-semibold mb-2">+ de 5</span>
              <span className="block mb-6">anos de experiência</span>
            </div>
          </div>
          <div className="w-[300px] hidden lg:block">
            <div className="h-[450px] relative overflow-hidden">
              <Image src={'/images/escritorio_01.jpg'} alt="" sizes="100%" fill />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm font-light text-white/90 block mb-4 uppercase">Quem somos</span>
            <h2 className="text-3xl font-semibold mb-4">Transformamos ideias em negócios lucrativos no mundo digital.</h2>
            <span className="text-sm font-light text-white/90 leading-7">Tema Digital - Somos a Agência de Marketing Digital formada por uma equipe de profissionais com ampla bagagem prática e anos no mercado de trabalho, transformando ideias de empreendedores visionários em negócios lucrativos através do fortalecimento da marca e do posicionamento virtual.</span>
            <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Solicite um orçamento</Link>
          </div>
        </div>
      </div>

      <div className="h-fit bg-zinc-950 pt-20 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
          <span className="uppercase block mb-2">Conheça nossos trabalhos</span>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Nossos trabalhos criativos</h2>
        </div>
        <SwiperProjects />
      </div>

      <div className="bg-zinc-900 py-20 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
          <span className="uppercase block mb-2">Conheça a gente melhor</span>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 max-w-4xl">Nós te ajudamos a criar estratégias e designs para a sua marca.</h2>
          <Services />
        </div>
      </div>

      <div className="lg:h-[630px] bg-zinc-950 pb-20 pt-4 lg:py-20 flex flex-col justify-center relative overflow-hidden">
        <div className="relative lg:absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-10">
          <div className="flex items-center gap-10 w-full max-w-7xl px-4 lg:px-0 flex-wrap">
            <div className="h-[400px] lg:h-[450px] w-[400px] relative before:absolute 
              before:right-[-16px] before:left-[-16px] before:top-[-16px] before:bottom-[100px]
              lg:before:right-[150px] lg:before:left-auto lg:before:top-[-50px] lg:before:bottom-[-50px]
              before:bg-zinc-700 before:w-[1000px]
            ">
              <Image src={'/images/escritorio_01.jpg'} alt="" sizes="100%" fill />
            </div>
            <div className="flex-1 max-w-xl">
              <span className="text-sm font-light text-white/90 block mb-4">Tema Digital</span>
              <h2 className="text-3xl lg:text-5xl font-semibold my-4 max-w-4xl">Sonhar. Inovar. Implementar.</h2>
              <p className="text-sm font-light text-white/90 leading-7">Nossa agência criativa está há mais de 13 anos se destacando no mercado goiano. Cultivamos ideias inteligentes para a sua empresa. Seguindo os padrões do setor, construímos um portfólio impressionante.</p>
              <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors">NOSSOS PROJETOS</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <BannerVideo />
      </div>

      <div className="bg-zinc-950 py-20 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
          <span className="uppercase block mb-2">O que falam sobre nós</span>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-16 max-w-4xl">Comentários</h2>
          <Comments />
        </div>
      </div>

      <div className="h-fit bg-zinc-900">
        <div className="w-full max-w-7xl mx-auto flex items-center">
          <Notices />
        </div>
      </div>

      <div className="bg-zinc-950 py-10 lg:py-20 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
          <span className="uppercase block mb-2">Nossos clientes</span>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-16 max-w-4xl">Parceiros que fazem o nosso trabalho acontecer</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r border-b">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 lg:border-r border-b">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r border-b">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b lg:border-b-0 border-r">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b lg:border-b-0 lg:border-r">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
            <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10">
              <Hexagon size={64} className="group-hover:w-[0] transition-all absolute" />
              <span className="w-0 group-hover:w-fit overflow-hidden transition-all">Brand name</span>
            </div>
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
