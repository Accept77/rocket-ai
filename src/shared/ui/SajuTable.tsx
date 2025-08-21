import { cn } from "../lib";

interface SajuTableProps {
    children: React.ReactNode;
    col: number;
}

interface SajuTableContainerProps {
    children?: React.ReactNode;
    border?: ("left" | "right" | "top" | "bottom" | "all")[];
    gray?: ("left" | "right" | "top" | "bottom" | "all")[];
    className?: string;
}

const gridColsMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
} as const;

function Table({ children, col }: SajuTableProps) {
    return (
        <div
            className={cn("grid", gridColsMap[col as keyof typeof gridColsMap])}
        >
            {children}
        </div>
    );
}

function Container({
    children,
    border,
    gray,
    className,
}: SajuTableContainerProps) {
    const borderClasses = cn(
        "p-1.5 box-border flex justify-center items-center border-black",
        (border?.includes("left") || border?.includes("all")) && "border-l",
        (border?.includes("right") || border?.includes("all")) && "border-r",
        (border?.includes("top") || border?.includes("all")) && "border-t",
        (border?.includes("bottom") || border?.includes("all")) && "border-b",
        gray?.includes("left") && "border-l-border-primary-thin",
        gray?.includes("right") && "border-r-border-primary-thin",
        gray?.includes("top") && "border-t-border-primary-thin",
        gray?.includes("bottom") && "border-b-border-primary-thin",
        gray?.includes("all") && "border-border-primary-thin",
        className
    );

    return <div className={borderClasses}>{children}</div>;
}

export const SajuTable = Object.assign(Table, {
    Container,
});
