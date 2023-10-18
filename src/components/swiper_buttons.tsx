import { ArrowLeft, ArrowRight } from "lucide-react";

export function SwiperButtons({swiper}) {
    return (
        <>
            <button className="slick-prev" onClick={() => swiper.slidePrev()}>
                <ArrowLeft />
            </button>
            <button className="slick-next" onClick={() => swiper.slideNext()}>
                <ArrowRight />
            </button>
        </>
    )
}