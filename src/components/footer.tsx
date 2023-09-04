import Link from "next/link";

export function Footer() {
    return (
        <div className="py-4 bg-zinc-950">
            <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
            </div>
        </div>
    )
}