interface BentoElementProps {
    className?: string;
    children?: React.ReactNode;
}

const BentoElement: React.FC<BentoElementProps> = ({
    className,
    children
}) => {
    return (
        <div className={`relative w-full h-[320px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-3xl overflow-hidden ${className}`}>
            {children}
        </div>
    );
}
 
export default BentoElement;