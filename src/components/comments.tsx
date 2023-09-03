'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { CardComment } from "./cards/comment";
import { SwiperButtons } from "./swiper_buttons";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export function Comments() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-visible pb-6">
            <Swiper id="comments" pagination loop autoplay modules={[Pagination, Autoplay]}>
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
                <SwiperButtons />
            </Swiper>
        </div>
    )
}