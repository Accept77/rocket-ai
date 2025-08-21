import { SajuTable, TextBox, Subscript } from "@/shared/ui";
import { cn } from "../lib";

interface SajuCellData {
    type:
        | "text"
        | "textbox"
        | "subscript"
        | "empty"
        | "multi-subscript"
        | "small-text";
    content?: string;
    subscript?: string;
    superscript?: string;
    color?: "black" | "white" | "red" | "green";
    small?: boolean;
    items?: Array<{ content: string; subscript: string }>;
    borderProps?: {
        border?: ("left" | "right" | "top" | "bottom" | "all")[];
        gray?: ("left" | "right" | "top" | "bottom" | "all")[];
    };
    className?: string;
}

const sajuTableData: SajuCellData[][] = [
    [
        {
            type: "empty",
            borderProps: { border: ["bottom", "right"] },
        },
        {
            type: "text",
            content: "時",
            borderProps: {
                border: ["bottom", "right", "left"],
                gray: ["right"],
            },
        },
        {
            type: "text",
            content: "日",
            borderProps: {
                border: ["bottom", "right"],
                gray: ["right"],
            },
        },
        {
            type: "text",
            content: "月",
            borderProps: {
                border: ["bottom", "right"],
                gray: ["right"],
            },
        },
        {
            type: "text",
            content: "年",
            borderProps: { border: ["bottom", "right"] },
        },
    ],
    [
        {
            type: "subscript",
            content: "十星",
            subscript: "(십성)",
            small: true,
            borderProps: { border: ["bottom", "right", "top"] },
        },
        {
            type: "subscript",
            content: "傷官",
            subscript: "(상관)",
            borderProps: { border: ["all"], gray: ["right"] },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "比肩",
            subscript: "(비견)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "傷官",
            subscript: "(상관)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "傷官",
            subscript: "(상관)",
            borderProps: {
                border: ["bottom", "right", "top"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "天干",
            subscript: "(천간)",
            small: true,
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["bottom"],
            },
        },
        {
            type: "textbox",
            content: "王",
            subscript: "陰水",
            superscript: "임",
            color: "black",
            borderProps: { border: ["all"], gray: ["right", "bottom"] },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "丁",
            subscript: "陰火",
            superscript: "정",
            color: "red",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right", "bottom"],
            },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "癸",
            subscript: "陰水",
            superscript: "계",
            color: "black",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right", "bottom"],
            },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "癸",
            subscript: "陰水",
            superscript: "계",
            color: "black",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["bottom"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "地支",
            subscript: "(지지)",
            small: true,
            borderProps: { border: ["bottom", "right"] },
        },
        {
            type: "textbox",
            content: "寅",
            subscript: "陰木",
            superscript: "인",
            color: "green",
            borderProps: {
                border: ["left", "right", "bottom"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "巳",
            subscript: "陰火",
            superscript: "사",
            color: "red",
            borderProps: {
                border: ["bottom", "right"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "亥",
            subscript: "陰水",
            superscript: "해",
            color: "black",
            borderProps: {
                border: ["bottom", "right"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "textbox",
            content: "西",
            subscript: "陰金",
            superscript: "유",
            color: "white",
            borderProps: {
                border: ["bottom", "right"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "十星",
            subscript: "(십성)",
            small: true,
            borderProps: { border: ["bottom", "right", "top"] },
        },
        {
            type: "subscript",
            content: "比肩",
            subscript: "(비견)",
            borderProps: { border: ["all"], gray: ["right"] },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "劫財",
            subscript: "(겁재)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "食神",
            subscript: "(식신)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "偏財",
            subscript: "(편재)",
            borderProps: {
                border: ["bottom", "right", "top"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "十二運星",
            subscript: "(십이운성)",
            small: true,
            borderProps: { border: ["bottom", "right", "top"] },
        },
        {
            type: "subscript",
            content: "死",
            subscript: "(사)",
            borderProps: { border: ["all"], gray: ["right"] },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "帝旺",
            subscript: "(제왕)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "胎",
            subscript: "(태)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "長生",
            subscript: "(장생)",
            borderProps: {
                border: ["bottom", "right", "top"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "十二神殺",
            subscript: "(십이신살)",
            small: true,
            borderProps: { border: ["bottom", "right", "top"] },
        },
        {
            type: "subscript",
            content: "劫殺",
            subscript: "(겁살)",
            borderProps: { border: ["all"], gray: ["right"] },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "地殺",
            subscript: "(지살)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "驛馬殺",
            subscript: "(역마살)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "將星殺",
            subscript: "(장성살)",
            borderProps: {
                border: ["bottom", "right", "top"],
            },
            className: "bg-white",
        },
    ],
    [
        {
            type: "subscript",
            content: "貴人",
            subscript: "(귀인)",
            small: true,
            borderProps: { border: ["bottom", "right", "top"] },
        },
        {
            type: "small-text",
            content: "(없음)",
            borderProps: { border: ["all"], gray: ["right"] },
            className: "bg-white",
        },
        {
            type: "small-text",
            content: "(없음)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "subscript",
            content: "天乙",
            subscript: "(천을귀인)",
            borderProps: {
                border: ["bottom", "right", "top"],
                gray: ["right"],
            },
            className: "bg-white",
        },
        {
            type: "multi-subscript",
            items: [
                { content: "天乙", subscript: "(천을귀인)" },
                { content: "太極", subscript: "(태극귀인)" },
                { content: "文昌", subscript: "(문창귀인)" },
            ],
            borderProps: {
                border: ["bottom", "right", "top"],
            },
            className: "bg-white",
        },
    ],
];

const renderCell = (cellData: SajuCellData, index: number) => {
    const {
        type,
        content,
        subscript,
        superscript,
        color,
        small,
        items,
        borderProps,
        className,
    } = cellData;

    return (
        <SajuTable.Container
            key={index}
            border={borderProps?.border}
            gray={borderProps?.gray}
            className={className}
        >
            {(() => {
                switch (type) {
                    case "textbox":
                        return (
                            <TextBox
                                color={color}
                                superscript={superscript || ""}
                                subscript={subscript || ""}
                            >
                                {content}
                            </TextBox>
                        );

                    case "subscript":
                        return (
                            <Subscript
                                subscript={subscript || ""}
                                small={small}
                            >
                                {content}
                            </Subscript>
                        );

                    case "multi-subscript":
                        return (
                            <div className="text-center">
                                {items?.map((item, itemIndex) => (
                                    <Subscript
                                        key={itemIndex}
                                        subscript={item.subscript}
                                        small={true}
                                    >
                                        {item.content}
                                    </Subscript>
                                ))}
                            </div>
                        );

                    case "text":
                        return (
                            <div
                                className={cn(
                                    "text-center whitespace-pre-line text-xl font-bold",
                                    className
                                )}
                            >
                                {content}
                            </div>
                        );

                    case "small-text":
                        return (
                            <div className="text-center text-[10px] font-bold">
                                {content}
                            </div>
                        );

                    case "empty":
                    default:
                        return null;
                }
            })()}
        </SajuTable.Container>
    );
};

export default function SajuChart() {
    return (
        <SajuTable col={5}>
            {sajuTableData
                .flat()
                .map((cellData, index) => renderCell(cellData, index))}
        </SajuTable>
    );
}
