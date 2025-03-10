import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
// import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    src: string;
    alt: string;
    link: string;
    index: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    src,
    alt,
    // link,
    index,
    progress,
    range,
    targetScale
}) => {

    const cardScale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen p-4 flex items-center justify-center sticky top-0">
            
            <motion.div 
                style={{ scale: cardScale, top: `calc(-5% + ${index * 5}vh)` }} 
                className="relative -top-[10%] w-full max-w-4xl h-auto p-2 bg-background dark:bg-background border border-zinc-700 rounded-xl sm:rounded-2xl md:rounded-3xl flex flex-col gap-4"
            >
                <div
                    className="w-full h-full flex flex-col gap-6 p-4 md:p-6 bg-background rounded-lg sm:rounded-xl md:rounded-2xl"
                >
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-2.5">
                            <h2 className="text-xl md:text-3xl font-medium">{title}</h2>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-400">{description}</p>
                        </div>
                    </div>
                    <Image 
                        src={src} 
                        alt={alt}
                        width={1000}
                        height={1000}
                        className="aspect-[12/7] object-cover object-center w-full rounded-lg sm:rounded-xl md:rounded-2xl pointer-events-none border border-zinc-800"    
                    />
                </div>
            </motion.div>
        </div>
    );
}
 
export default Card;