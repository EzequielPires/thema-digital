import { useRef, useEffect, useState } from "react";

export function Slide({ image }) {
    const ref = useRef(null);
    const [height, setHeight] = useState<string | number>('auto');
    useEffect(() => {
        const width = ref.current.offsetWidth;
        setHeight(width * 0.6);
    }, []);

    return (
        <div ref={ref} className="flex overflow-hidden justify-center max-w-[1080px]">
            <img src={image} className="h-[95vh]"/>
        </div>
    )
}