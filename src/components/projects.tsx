'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Projects() {

    return (
        <div className="h-fit bg-background pt-20 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                <span className="uppercase block mb-2">Conheça nossos trabalhos</span>
                <h2 className="text-3xl lg:text-5xl title mb-6">Nossos trabalhos criativos</h2>
            </div>
            <div>
                <div className="hidden lg:block">
                    <Desktop />
                </div>
                <div className="block lg:hidden">
                    <Mobile />
                </div>
            </div>
        </div>
    )
}

function Desktop() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        dots: true,
        with: 500,
        heght: 500,
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 2000,
        prevArrow: (
            <button className="slick-prev">
                <ArrowLeft />
            </button>
        ),
        nextArrow: (
            <button className="slick-next">
                <ArrowRight />
            </button>
        ),
    };

    return (
        <div className="h-[540px] projects overflow-hidden bg-background-dark">
            <Slider {...settings}>
                <div className="w-full h-[540px]">
                    <div className="w-full h-[540px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_01.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[540px]">
                    <div className="w-full h-[540px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_02.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[540px]">
                    <div className="w-full h-[540px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_03.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[540px]">
                    <div className="w-full h-[540px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_04.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[540px]">
                    <div className="w-full h-[540px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_05.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

function Mobile() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '16px',
        slidesToShow: 1,
        speed: 500,
        dots: true,
        with: 500,
        heght: 500,
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 2000,
        prevArrow: (
            <button className="slick-prev">
                <ArrowLeft />
            </button>
        ),
        nextArrow: (
            <button className="slick-next">
                <ArrowRight />
            </button>
        ),
    };

    return (
        <div className="h-[300px] projects overflow-hidden">
            <Slider {...settings}>
                <div className="w-full h-[300px]">
                    <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_01.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[300px]">
                    <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_02.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[300px]">
                    <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_03.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[300px]">
                    <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_04.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
                <div className="w-full h-[300px]">
                    <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_05.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium">Ver projeto</Link>
                    </div>
                </div>
            </Slider>
        </div>
    )
}