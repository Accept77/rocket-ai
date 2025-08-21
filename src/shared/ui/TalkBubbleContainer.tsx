import { TalkBubble } from "../assets";
import { cn } from "../lib";

interface TalkBubbleContainerProps {
    children: React.ReactNode;
    direction?: "top" | "bottom";
}

export default function TalkBubbleContainer({
    children,
    direction = "top",
}: TalkBubbleContainerProps) {
    return (
        <div className="relative w-full h-full ">
            <TalkBubble
                className="max-w-full h-full"
                transform={`scale(1.2 ${direction === "bottom" ? -1.2 : 1.2})`}
            />
            <div
                className={cn(
                    "absolute inset-0 flex items-center justify-center px-[calc(6%+2rem)] pb-[calc(12%+2rem)] pt-[calc(20%+2rem)]",
                    direction === "bottom" &&
                        "pb-[calc(20%+2rem)] pt-[calc(12%+2rem)]"
                )}
            >
                <div className="text-center text-sm leading-relaxed break-words max-w-full overflow-hidden line-clamp-3 break-keep">
                    {children}
                </div>
            </div>
        </div>
    );
}
