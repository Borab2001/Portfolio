import { ReactNode } from "react";
import { motion, MotionValue, useTransform } from "motion/react";

interface WordProps {
    children: ReactNode;
    range: [number, number];
    progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ 
    children,
    range,
    progress 
}) => {
    
    const opacity = useTransform(progress, [range[0], range[1]], [0, 1]);

    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span
                style={{ opacity }}
            >
                {children}
            </motion.span>
        </span>
    );
};

export default Word;