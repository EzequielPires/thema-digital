import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <div id="about" className="lg:h-fit bg-background-dark">
      <div className="w-full max-w-7xl px-4 lg:px-0 mx-auto flex flex-wrap items-center py-20 gap-10">
        {/* <div className="hidden w-full lg:w-[300px] max-lg:flex flex-col items-end relative">
          <div className="h-[360px] w-full relative overflow-hidden">
            <Image src={'/images/escritorio_02.jpg'} alt="" sizes="100%" fill />
          </div>
          <div className="flex flex-col absolute lg:relative w-full justify-end h-full p-3 lg:p-0 bg-black/70 lg:bg-transparent">
            <span className="block mt-4 text-[80px] leading-[100%] font-semibold mb-2">+ de 5</span>
            <span className="block mb-6">anos de experiência</span>
          </div>
        </div> */}
        <div className="hidden lg:flex h-[300px] flex-1 relative items-center justify-center">
          <div className="w-[200px] h-[300px] absolute floating-element left-10 top-10" style={{animationDelay: '500ms'}}>
            <Image src="/projetos/vio/05.png" alt="" fill />
          </div>
          <div className="w-[200px] h-[300px] absolute floating-element z-50 top-0">
            <Image src="/projetos/vio/20.png" alt="" fill />
          </div>
          <div className="w-[200px] h-[300px] absolute floating-element-inverse items-center justify-center right-10 top-14" style={{animationDelay: '1s'}}>
            <Image src="/projetos/vio/12.png" alt="" fill />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <span className="text-sm font-light text-white/90 block mb-2 uppercase">../Quem somos</span>
          <h1 className="text-3xl lg:text-5xl title mb-4">Moldando o Futuro Digital dos Empreendedores.</h1>
          <span className="text-sm font-light text-white/90 leading-7">Somos a Agência de Marketing Digital formada por uma equipe de profissionais com ampla bagagem prática e anos no mercado de trabalho, transformando ideias de empreendedores visionários em negócios lucrativos através do fortalecimento da marca e do posicionamento virtual.</span>
          <Link href={'#contact'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Solicite um orçamento</Link>
        </div>
      </div>
    </div>
  )
}