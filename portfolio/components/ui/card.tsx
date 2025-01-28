import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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
    link,
    index,
    progress,
    range,
    targetScale
}) => {

    const cardScale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen p-4 sm:p-8 md:p-20 flex items-center justify-center sticky top-0">
            
            <motion.div style={{ scale: cardScale, top: `calc(-10% + ${index * 5}vh)` }} className="relative -top-[10%] w-full max-w-5xl h-auto aspect-video p-2 sm:p-4 dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="cols-span-1 flex flex-col justify-between gap-4 order-2 lg:order-1">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl md:text-3xl">{title}</h2>
                        <p className="text-sm md:text-base">{description}</p>
                    </div>
                    <Link href={link} target="blank">View Project</Link>
                </div>
                <Image 
                    src={src} 
                    alt=""
                    width={500}
                    height={500}
                    className="cols-span-1 order-1 lg:order-2 w-full rounded-md pointer-events-none"    
                />
            </motion.div>
        </div>
    );
}
 
export default Card;