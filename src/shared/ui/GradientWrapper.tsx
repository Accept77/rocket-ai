export default function GradientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            {children}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/100 via-white/0 " />
        </div>
    );
}
