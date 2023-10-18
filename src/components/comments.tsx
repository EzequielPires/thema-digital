'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { CardComment } from "./cards/comment";
import { SwiperButtons } from "./swiper_buttons";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import { useState } from "react";

export function Comments() {
    const [swiper, setSwiper] = useState(null);
    return (
        <div className="bg-zinc-950 py-20 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                <span className="uppercase block mb-2">O que falam sobre nós</span>
                <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-16 max-w-4xl">Comentários</h2>
                <div className="w-full overflow-x-hidden overflow-y-visible pb-6">
                    <Swiper id="comments" pagination loop modules={[Pagination]} onSwiper={setSwiper}>
                        <SwiperSlide>
                            <CardComment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardComment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardComment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardComment />
                        </SwiperSlide>
                        <SwiperButtons swiper={swiper}/>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}