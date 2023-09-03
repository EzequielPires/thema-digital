'use client'

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);

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
        <header className={`bg-zinc-700 ${isTop ? 'lg:bg-transparent' : 'lg:bg-white/10 lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-50`}>
            <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 h-16 flex items-center justify-between">
                <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo"/></Link>
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
                <button className="flex lg:hidden"><Menu size={32}/></button>
            </div>
        </header>
    )
}