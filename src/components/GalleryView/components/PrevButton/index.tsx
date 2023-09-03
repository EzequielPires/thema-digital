import { useSwiper } from "swiper/react";
import { Button } from "./styles";
import { ChevronLeft } from "lucide-react";

interface Props {
    disabled: boolean;
}

export function PrevButton({disabled}: Props) {
    const swiper = useSwiper();
    return (
        <Button disabled={disabled && true} onClick={() => swiper.slidePrev()}>
            <ChevronLeft />
        </Button>
    );
}