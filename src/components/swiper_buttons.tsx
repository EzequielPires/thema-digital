import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwiper } from "swiper/react";

export function SwiperButtons() {
    const swiper = useSwiper();
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