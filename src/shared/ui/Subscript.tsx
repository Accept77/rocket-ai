import { cn } from "@/shared/lib/utils";

interface SubscriptProps {
    children: React.ReactNode;
    subscript: string;
    small?: boolean;
}

export default function Subscript({
    children,
    subscript,
    small,
}: SubscriptProps) {
    return (
        <div
            className={cn(
                "flex flex-col text-sm text-block text-center font-bold break-keep",
                small && "text-xs"
            )}
        >
            {children}
            <div
                className={cn(
                    "text-[10px] font-bold break-keep",
                    small && "text-[8px]"
                )}
            >
                {subscript}
            </div>
        </div>
    );
}
