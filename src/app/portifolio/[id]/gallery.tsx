'use client'

import { GalleryView } from "@/components/GalleryView";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Gallery() {
    const [active, setActive] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [images, setImages] = useState([]);

    const handleShowGallery = (index) => {
        setActive(index ?? 0);
        setShowGallery(true);
    }

    useEffect(() => {
        setImages([
            '/projetos/vio/01.png',
            '/projetos/vio/02.png',
            '/projetos/vio/03.png',
            '/projetos/vio/04.png',
            '/projetos/vio/05.png',
            '/projetos/vio/06.png',
            '/projetos/vio/07.png',
            '/projetos/vio/08.png',
            '/projetos/vio/09.png',
            '/projetos/vio/10.png',
            '/projetos/vio/11.png',
            '/projetos/vio/12.png',
            '/projetos/vio/13.png',
            '/projetos/vio/14.png',
            '/projetos/vio/15.png',
            '/projetos/vio/16.jpg',
            '/projetos/vio/17.png',
            '/projetos/vio/18.png',
            '/projetos/vio/19.png',
        ]);
    }, []);

    return (
        <>
            {showGallery && <GalleryView active={active} close={() => setShowGallery(false)} images={images} show={showGallery} />}
            <section className="w-full max-w-7xl mx-auto mb-20 px-4 xl:px-0">
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                    {images.map((item, index) => (
                        <div
                            onMouseDown={() => handleShowGallery(index)}
                            className="h-[100px] lg:h-[264px] relative overflow-hidden">
                            <Image src={item} alt="" fill sizes="100%" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}