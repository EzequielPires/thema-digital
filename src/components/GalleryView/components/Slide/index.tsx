import { useRef, useEffect, useState } from "react";
import { Container, Image } from "./styles";

export function Slide({ image }) {
    const ref = useRef(null);
    const [height, setHeight] = useState<string | number>('auto');
    useEffect(() => {
        const width = ref.current.offsetWidth;
        setHeight(width * 0.6);
    }, []);

    return (
        <Container ref={ref}>
            <Image src={image} />
        </Container>
    )
}