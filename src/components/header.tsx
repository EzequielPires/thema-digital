'use client'

import { Facebook, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Header() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        AOS.init();
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let body = document.querySelector('body');
        if(show) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [show]);

    return (
        <header className={`bg-background ${isTop ? 'lg:bg-transparent' : 'lg:bg-black/40 shadow-lg lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-[999]`}>
            <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button className="flex max-lg:hidden" onClick={() => setShow(true)}><Menu size={32} /></button>
                    <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                </div>
                <ul className="lg:flex gap-10 hidden">
                    <li>
                        <Link href={'/'} className={`${pathname === '/' ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}>Início</Link>
                    </li>
                    <li>
                        <Link href={'/sobre'} className={`${pathname === '/sobre' ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}>Sobre</Link>
                    </li>
                    <li>
                        <Link href={'/portfolio'} className={`${pathname === '/portfolio' ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}>Projetos</Link>
                    </li>
                    <li>
                        <Link href={'/contato'} className={`${pathname === '/contato' ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}>Contato</Link>
                    </li>
                    {/* <li>
                        <Link href={'/blog'} className={`${pathname === '/blog' ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}>Blog</Link>
                    </li> */}
                </ul>
                <button className="flex lg:hidden" onClick={() => setShow(true)}><Menu size={32} /></button>
                {show &&
                    <div className="absolute top-0 left-0 h-screen w-screen bg-zinc-900 px-3 py-4">
                        <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
                            <div className="flex items-center justify-between">
                                <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                                <button onClick={() => setShow(false)}>
                                    <X size={48} />
                                </button>
                            </div>
                            <ul className="flex justify-center flex-col gap-4 flex-1">
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/'} className={`text-5xl link-aside ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Início</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/sobre'} className={`text-5xl link-aside ${pathname === '/sobre' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Sobre</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/portfolio'} className={`text-5xl link-aside ${pathname === '/portfolio' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Projetos</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/contato'} className={`text-5xl link-aside ${pathname === '/contato' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Contato</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/blog'} className={`text-5xl link-aside ${pathname === '/blog' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Blog</Link>
                                </li>
                            </ul>
                            <ul className="flex gap-6 mb-4">
                                <Link href={'/'}>
                                    <Facebook />
                                </Link>
                                <Link href={'/'}>
                                    <Instagram />
                                </Link>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export function HeaderSecondary() {
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

    useEffect(() => {
        const body = document.querySelector('body');
        if (show) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [show]);

    return (
        <header className={`bg-zinc-700 ${isTop ? 'lg:bg-transparent' : 'lg:bg-black/20 lg:backdrop-blur-2xl'} fixed top-0 left-0 w-full z-[999]`}>
            <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 h-20 flex items-center justify-between">
                <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                <button className="flex" onClick={() => setShow(true)} ><Menu size={32} /></button>
                {show &&
                    <div className="absolute top-0 left-0 h-screen w-screen bg-zinc-900 px-4 py-4">
                        <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
                            <div className="flex items-center justify-between">
                                <Link href={'/'}><Image src={'/logos/logo_branco.svg'} width={100} height={30} alt="Logo" /></Link>
                                <button onClick={() => setShow(false)}>
                                    <X size={48} />
                                </button>
                            </div>
                            <ul className="flex justify-center flex-col gap-4 flex-1">
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/'} className={`text-5xl link-aside ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Início</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/sobre'} className={`text-5xl link-aside ${pathname === '/sobre' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Sobre</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/portfolio'} className={`text-5xl link-aside ${pathname === '/portfolio' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Projetos</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/contato'} className={`text-5xl link-aside ${pathname === '/contato' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Contato</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setShow(false)} href={'/blog'} className={`text-5xl link-aside ${pathname === '/blog' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}>Blog</Link>
                                </li>
                            </ul>
                            <ul className="flex gap-6 mb-4">
                                <Link href={'/'}>
                                    <Facebook />
                                </Link>
                                <Link href={'/'}>
                                    <Instagram />
                                </Link>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}