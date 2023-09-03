'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-zinc-700 ${isTop ? 'lg:bg-transparent' : 'lg:bg-white/10 lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-[999]`}>
            <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 h-16 flex items-center justify-between">
                <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                <ul className="lg:flex gap-10 hidden">
                    <li>
                        <Link href={'/'} className={`text-sm ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Início</Link>
                    </li>
                    <li>
                        <Link href={'/sobre'} className={`text-sm ${pathname === '/sobre' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Sobre</Link>
                    </li>
                    <li>
                        <Link href={'/portifolio'} className={`text-sm ${pathname === '/portifolio' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Projetos</Link>
                    </li>
                    <li>
                        <Link href={'/contato'} className={`text-sm ${pathname === '/contato' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Contato</Link>
                    </li>
                    <li>
                        <Link href={'/blog'} className={`text-sm ${pathname === '/blog' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Blog</Link>
                    </li>
                </ul>
                <button className="flex lg:hidden" onClick={() => setShow(true)}><Menu size={32} /></button>
                {show &&
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-900 px-4 py-4">
                        <div className="flex justify-end mb-4">
                            <button onClick={() => setShow(false)}>
                                <X />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-10">
                            <li>
                                <Link onClick={() => setShow(false)} href={'/'} className={`text-lg ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Início</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShow(false)} href={'/sobre'} className={`text-lg ${pathname === '/sobre' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Sobre</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShow(false)} href={'/portifolio'} className={`text-lg ${pathname === '/portifolio' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Projetos</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShow(false)} href={'/contato'} className={`text-lg ${pathname === '/contato' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Contato</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShow(false)} href={'/blog'} className={`text-lg ${pathname === '/blog' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}