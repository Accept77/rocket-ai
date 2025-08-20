interface SajuTableProps {
    children: React.ReactNode;
    row: number;
    col: number;
}

export default function SajuTable({ children, row, col }: SajuTableProps) {
    return (
        <div className={`grid grid-rows-${row} grid-cols-${col} gap-2`}>
            {children}
        </div>
    );
}
