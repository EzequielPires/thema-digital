'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import { Autoplay, Pagination } from "swiper/modules";

export function BannerHome() {
    return (
        <div className="h-screen">
            <Swiper className="h-full" modules={[Autoplay, Pagination]} autoplay pagination>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50  flex items-center justify-center">
                        <Image src={'/images/image_04.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50 flex items-center justify-center">
                        <Image src={'/images/image_02.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/50  flex items-center justify-center">
                        <Image src={'/images/image_03.jpg'} alt="Image" fill sizes="100%" />
                        <Link href={'/'} className="absolute z-50 text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors"><MoveRight />Ver projeto</Link>
                    </div>
                </SwiperSlide>
                <button className="slick-prev">
                    <ArrowLeft />
                </button>
                <button className="slick-next">
                    <ArrowRight />
                </button>
            </Swiper>
        </div>
    )
}