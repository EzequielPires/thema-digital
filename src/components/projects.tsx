'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
/* import Slider from 'react-slick'; */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const projects = [
    {
        id: 1,
        title: 'Título do projeto completo 1',
        category: 'Categoria do projeto',
        thumb: '/images/image_01.jpg',
    },
    {
        id: 2,
        title: 'Título do projeto completo 2',
        category: 'Categoria do projeto',
        thumb: '/images/image_02.jpg',
    },
    {
        id: 3,
        title: 'Título do projeto completo 3',
        category: 'Categoria do projeto',
        thumb: '/images/image_03.jpg',
    },
    {
        id: 4,
        title: 'Título do projeto completo 4',
        category: 'Categoria do projeto',
        thumb: '/images/image_04.jpg',
    },
    {
        id: 5,
        title: 'Título do projeto completo 5',
        category: 'Categoria do projeto',
        thumb: '/images/image_05.jpg',
    },
]

export function Projects() {
    return (
        <div className="h-fit bg-background pt-20 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                <span className="uppercase block mb-2">../Conheça nossos trabalhos</span>
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
    const [active, setActive] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const handleSlideChange = (swiper) => {
        setActive(swiper.realIndex);
    };

    return (
        <Swiper
            slidesPerView={'auto'}
            pagination={{
                clickable: true
            }}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            key={'swiper_property'}
            id="swiper_property"
        >
            {
                projects.map((project, index) => (
                    <SwiperSlide key={project.id} style={{ width: '100%', maxWidth: 954 }}>
                        <div className="w-full h-[548px]">
                            <div className="w-full h-[548px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-card-linear flex items-center justify-center">
                                <Image src={project.thumb} alt="Image" fill sizes="100%" />
                                <Link href={'/portfolio/projeto-01'} className={`absolute top-0 left-0 right-0 bottom-0 z-50 p-4 lg:p-8 flex flex-col justify-end ${index == active ? 'opacity-1' : 'opacity-0'} transition-all`}>
                                    <span className="text-lg font-light">{project.category}</span>
                                    <h4 className="text-2xl lg:text-4xl font-medium lg:font-bold mt-1">{project.title}</h4>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <button className="slick-prev" onClick={() => swiper.slidePrev()}>
                <ArrowLeft />
            </button>
            <button className="slick-next" onClick={() => swiper.slideNext()}>
                <ArrowRight />
            </button>
        </Swiper>
    )
}

/* function Desktop() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        dots: true,
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
            {/* @ts-ignore 
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
} */

function Mobile() {
    const [active, setActive] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const handleSlideChange = (swiper) => {
        setActive(swiper.realIndex);
    };

    return (
        <Swiper
            slidesPerView={'auto'}
            pagination={{
                clickable: true
            }}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            key={'swiper_property'}
            id="swiper_property"
        >
            {
                projects.map((project, index) => (
                    <SwiperSlide key={project.id} style={{ width: '100%', maxWidth: 954 }}>
                        <div className="w-full h-[300px]">
                            <div className="w-full h-[300px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-card-linear flex items-center justify-center">
                                <Image src={project.thumb} alt="Image" fill sizes="100%" />
                                {index == active &&
                                    <Link href={'/portfolio/projeto-01'} className="absolute top-0 left-0 right-0 bottom-0 z-50 p-4 flex flex-col justify-end">
                                        <span className="text-lg font-light">{project.category}</span>
                                        <h4 className="text-2xl font-medium mt-1 line-clamp-1">{project.title}</h4>
                                    </Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <button className="slick-prev" onClick={() => swiper.slidePrev()}>
                <ArrowLeft />
            </button>
            <button className="slick-next" onClick={() => swiper.slideNext()}>
                <ArrowRight />
            </button>
        </Swiper>
    )
}