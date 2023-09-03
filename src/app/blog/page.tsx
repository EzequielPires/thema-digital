import { CardNoticeVertical } from "@/components/cards/notice_vertical";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <section className="pt-36 pb-20 w-full max-w-7xl px-4 xl:px-0 mx-auto">
                <h1 className="text-5xl xl:text-7xl font-semibold">Blog</h1>
                <ul className="flex gap-4 mt-6">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link href={'/portifolio'}>Blog</Link>
                    </li>
                </ul>
            </section>
            <section className="py-10 bg-zinc-900">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-12 px-4 xl:px-0 gap-8">
                    <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">
                        <CardNoticeVertical />
                        <CardNoticeVertical />
                        <CardNoticeVertical />
                        <CardNoticeVertical />
                    </div>
                    <div className="hidden xl:flex col-span-4">
                        <div className="w-full h-[300px] bg-zinc-600 mb-6 flex items-center justify-center">
                            <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                        </div>
                        <h4 className="text-lg mb-6">Explore conosco um mundo de atualizações em tecnologia, arte e mais!</h4>
                        <input type="text" className="h-12 w-full bg-zinc-900 border border-zinc-500 outline-none focus:border-white px-3 py-3" placeholder="Busque por uma matéria" />
                    </div>
                </div>
            </section>
            <div className="py-4 bg-zinc-950">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                    <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                    <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
                </div>
            </div>
        </main>
    )
}