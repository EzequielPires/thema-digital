import { GalleryView } from "@/components/GalleryView";
import { Contact } from "@/components/contact";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="bg-background">
            <section className="pt-36 pb-20 w-full max-w-7xl mx-auto px-4 xl:px-0">
                <h1 className="text-5xl xl:text-7xl font-semibold">Portifólio</h1>
                <ul className="flex gap-4 mt-6">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/portfolio'}>Portfólio</Link>
                    </li>
                </ul>
            </section>
            <section className="py-20 bg-background-dark">
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
                            <Link href={'/portfolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="w-0 group-hover:w-fit transition-all text-xl font-semibold">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_02.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portfolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_03.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portfolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_04.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portfolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                        <div className="group h-[264px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50">
                            <Image src={'/images/image_05.jpg'} alt="" fill sizes="100%" />
                            <Link href={'/portfolio/projeto-01'} className="hidden group-hover:flex absolute z-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
                                <span className="text-xl font-semibold text-ellipsis">Nome do Projeto</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

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