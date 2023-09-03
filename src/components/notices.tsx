'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { CardNotice } from "./cards/notice";
import { SwiperButtons } from "./swiper_buttons";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export function Notices() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-visible pb-10">
            <Swiper id="notices" pagination loop autoplay modules={[Pagination, Autoplay]}>
                <SwiperSlide>
                    <CardNotice />
                </SwiperSlide>
                <SwiperSlide>
                    <CardNotice />
                </SwiperSlide>
                <SwiperButtons />
            </Swiper>
        </div>
    )
}