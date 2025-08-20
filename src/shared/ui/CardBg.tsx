import { SajuLeft, SajuRight } from "@/shared/assets";

export default function CardBg() {
    return (
        <>
            <div className="absolute inset-1.5 border-2 border-border-primary"></div>
            <div className="absolute -top-0 -left-0 w-2 h-2 border-b-2 border-r-2 border-border-primary"></div>
            <div className="absolute -top-0 -right-0 w-2 h-2 border-b-2 border-l-2 border-border-primary"></div>
            <div className="absolute -bottom-0 -left-0 w-2 h-2 border-t-2 border-r-2 border-border-primary"></div>
            <div className="absolute -bottom-0 -right-0 w-2 h-2 border-t-2 border-l-2 border-border-primary"></div>
            <div className="absolute top-11 left-1.5">
                <SajuLeft />
            </div>
            <div className="absolute top-6.5 right-1.5">
                <SajuRight />
            </div>
        </>
    );
}
