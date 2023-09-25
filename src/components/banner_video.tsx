'use client'

import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function BannerVideo() {
    const [show, setShow] = useState(false);
    return (
        <div className="overflow-hidden relative">
            <div className="h-[300px] lg:h-[500px] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/70 flex items-center justify-center">
                <Image src={'/images/escritorio_03.jpg'} alt="" fill sizes="100%" />
                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center">
                    <button onClick={() => setShow(true)}><PlayCircle size={64} /></button>
                </div>
                {show &&
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex items-center justify-center z-[9999]">
                        <div className="absolute top-0 left-0 w-full h-full" onMouseDown={() => setShow(false)}></div>
                        <div className="absolute">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ICg_xqBBN2g?si=ezE-el0Xw1va0M4g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}