'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { CardNotice } from "./cards/notice";
import { SwiperButtons } from "./swiper_buttons";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export function Notices() {
    return (
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
    )
}