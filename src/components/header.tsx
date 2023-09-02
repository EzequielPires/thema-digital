'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
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
        <header className={`${isTop ? 'bg-transparent' : 'bg-black/10 backdrop-blur-2xl'} fixed top-0 left-0 w-full z-50`}>
            <div className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between">
                <Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo"/>
                <ul className="flex gap-10">
                    <li>
                        <Link href={'/'} className="text-sm">Sobre</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-sm">Projetos</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-sm">Contato</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-sm">Blog</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}