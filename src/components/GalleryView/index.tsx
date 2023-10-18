import { useState, useEffect } from "react";
import { Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { X } from "lucide-react";
import { SwiperButtons } from "../swiper_buttons";

export function GalleryView({ close, active, show, images }) {
    const [state, setState] = useState('start');
    const [swiper, setSwiper] = useState(null);

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
        <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-screen z-[9999] bg-black/90`} style={{ visibility: !show ? 'hidden' : 'visible' }}>
            <div className={'w-screen max-w-full mx-auto relative'}>
                <button className={`absolute top-4 right-4 z-[9999] `} onClick={close}><X /></button>
                <Swiper
                    className="swiper-gallery w-full"
                    
                    onSwiper={setSwiper}
                    keyboard
                    modules={[Keyboard, Navigation]}
                    onSlideChange={(swiper) => {
                        { swiper.isBeginning && setState('start') }
                        { swiper.isEnd && setState('end') }
                        { !swiper.isBeginning && !swiper.isEnd && setState('progress') }
                    }}
                    initialSlide={active}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} style={{
                            width: '100vw'
                        }}>
                            <div className="flex overflow-hidden justify-center">
                                <img src={image} className="w-full max-w-[1080px]" />
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperButtons swiper={swiper}/>
                </Swiper>
            </div>
        </div>
    );
}