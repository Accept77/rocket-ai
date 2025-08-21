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
                "flex flex-col text-white rounded-2xl px-3.5 py-1 box-border w-full h-full justify-center items-center",
                color === "white" && "text-black bg-text-bg-white border-2",
                color === "black" && " bg-text-bg-black",
                color === "red" && " bg-text-bg-red",
                color === "green" && " bg-text-bg-green"
            )}
        >
            <div className="text-[8px] break-keep">{superscript}</div>
            <div className="text-2xl break-keep ">{children}</div>
            <div className="text-[8px] break-keep ">{subscript}</div>
        </div>
    );
}
