import { useSwiper } from "swiper/react";
import { Button } from "./styles";
import { ChevronRight } from "lucide-react";

interface Props {
    disabled: boolean;
}

export function NextButton({disabled}: Props) {
    const swiper = useSwiper();
    
    return (
        <Button disabled={disabled} onClick={() => swiper.slideNext()}>
            <ChevronRight />
        </Button>
    );
}