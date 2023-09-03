import { useState, useEffect } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Slide } from "./components/Slide";
import { HandleIndex } from "./components/HandleIndex";
import { X } from "lucide-react";
import { SwiperButtons } from "../swiper_buttons";

export function GalleryView({ close, active, show, images }) {
    const [state, setState] = useState('start');

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                close();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-screen z-[9999] bg-black bg-opacity-70`} style={{ visibility: !show ? 'hidden' : 'visible' }}>
            <div className={'w-full max-w-full mx-auto'}>
                <button className={`absolute top-4 right-4 z-[9999] `} onClick={close}><X /></button>
                <Swiper
                    className="swiper-gallery w-full"
                    pagination={{
                        type: "fraction",
                    }}
                    loop
                    keyboard
                    modules={[Keyboard, Pagination, Navigation]}
                    onSlideChange={(swiper) => {
                        { swiper.isBeginning && setState('start') }
                        { swiper.isEnd && setState('end') }
                        { !swiper.isBeginning && !swiper.isEnd && setState('progress') }
                    }}
                    navigation
                >
                    <HandleIndex active={active} show={show} />
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Slide image={item} />
                        </SwiperSlide>
                    ))}
                    <SwiperButtons />
                </Swiper>
            </div>
        </div>
    );
}