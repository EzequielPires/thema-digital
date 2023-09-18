'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { CardNotice } from "./cards/notice";
import { SwiperButtons } from "./swiper_buttons";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export function Notices() {
    return (
        <div className="h-fit bg-zinc-900 py-20 pb-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                <div className="flex flex-col px-3 lg:px-0">
                    <span className="uppercase block mb-2">Leia, aprenda e inspire-se.</span>
                    <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-16 max-w-4xl">Já leu nosso Blog?</h2>
                </div>
                <div className="w-full overflow-x-hidden overflow-y-visible pb-10">
                    <Swiper id="notices" pagination loop modules={[Pagination]}>
                        <SwiperSlide>
                            <CardNotice />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardNotice />
                        </SwiperSlide>
                        <SwiperButtons />
                    </Swiper>
                </div>
            </div>
        </div>

    )
}