import { GalleryView } from "@/components/GalleryView";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <section className="pt-36 pb-20 w-full max-w-7xl mx-auto px-4 xl:px-0">
                <h1 className="text-5xl xl:text-7xl font-semibold">Portifólio</h1>
                <ul className="flex gap-4 mt-6">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/portifolio'}>Portfólio</Link>
                    </li>
                </ul>
            </section>
            <section className="py-20 bg-zinc-900">
                <div className="w-full max-w-7xl mx-auto px-4 xl:px-0">
                    <ul className="px-4 xl:px-0 flex flex-wrap justify-start lg:justify-between gap-8 list-disc">
                        <li className="text-white">
                            <button>Todos</button>
                        </li>
                        <li className="text-white/70">
                            <button>Redes sociais</button>
                        </li>
                        <li className="text-white/70">
                            <button>Modernização de Marca</button>
                        </li>
                        <li className="text-white/70">
                            <button>Identidade Visual</button>
                        </li>
                        <li className="text-white/70">
                            <button>Embalagens</button>
                        </li>
                        <li className="text-white/70">
                            <button>Contrução de Marca</button>
                        </li>
                        <li className="text-white/70">
                            <button>Comunicação</button>
                        </li>
                        <li className="text-white/70">
                            <button>Campanha</button>
                        </li>
                    </ul>
                    <div className="mt-20 grid lg:grid-cols-3 gap-4">
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_01.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portifolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="w-0 group-hover:w-fit transition-all text-xl font-semibold">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_02.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portifolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_03.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portifolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_04.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portifolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_05.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portifolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-[50vh] lg:h-[80vh] bg-zinc-800">
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