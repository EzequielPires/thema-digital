'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import { ArrowDownCircle, ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperButtons } from "./swiper_buttons";

export function BannerHome() {

    const handleClick = () => {
        window.scrollTo({
            behavior: "smooth",
            top: window.innerHeight
        });
    }

    return (
        <div className="h-screen relative flex items-center justify-center">
            <Swiper className="h-full w-full swiper-banner-home" modules={[Autoplay, Pagination]} autoplay>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50  flex items-center justify-center">
                        <Image src={'/projetos/vio/01.png'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50  flex items-center justify-center">
                        <Image src={'/images/image_04.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_02.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50  flex items-center justify-center">
                        <Image src={'/images/image_03.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/portfolio/projeto-01'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperButtons />
            </Swiper>
            <a href="#about" className="flex items-center justify-center absolute z-20 bottom-4 text-white/50 hover:text-white transition-colors" onClick={handleClick}>
                <ArrowDownCircle size={32}/>
            </a>
        </div>
    )
}