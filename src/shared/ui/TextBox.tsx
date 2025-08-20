import { cn } from "../lib";

interface TextBoxProps {
    children: React.ReactNode;
    subscript: string;
    superscript: string;
    color?: "black" | "white" | "red" | "green";
}

export default function TextBox({
    children,
    subscript,
    superscript,
    color = "white",
}: TextBoxProps) {
    return (
        <div
            className={cn(
                "flex flex-col text-center text-white",
                color === "white" && "text-black bg-text-bg-white",
                color === "black" && " bg-text-bg-black",
                color === "red" && " bg-text-bg-red",
                color === "green" && " bg-text-bg-green"
            )}
        >
            <div className="text-[8px]">{superscript}</div>
            <div className="text-4xl">{children}</div>
            <div className="text-xs">{subscript}</div>
        </div>
    );
}
