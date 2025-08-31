import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { LinkIcon } from "./link-icon";
import { FigmaIcon } from "./figma-icon";


interface CardProps {
    title: string;
    description: string;
    src: string;
    alt: string;
    link: string;
    link2?: string;
    linkType: string;
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
    link,
    link2,
    linkType,
    index,
    progress,
    range,
    targetScale
}) => {

    const cardScale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen p-4 flex items-center justify-center sticky top-0">
            
            <motion.div 
                // style={{ scale: cardScale, top: `calc(-6% + ${index * 28}px)` }} 
                style={{ scale: cardScale, top: "0%" }} 
                className="relative -top-[10%] w-full max-w-4xl h-auto p-2 bg-background border border-zinc-700 rounded-xl sm:rounded-2xl md:rounded-3xl flex flex-col gap-4"
            >
                <div
                    className="w-full h-full flex flex-col gap-6 p-2 sm:p-4 md:p-6 bg-background rounded-lg sm:rounded-xl md:rounded-2xl"
                >
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-2.5">
                            <div className={`flex flex-row items-center ${link ? 'justify-between gap-2' : "justify-start"}`}>
                                <h2 className="text-xl md:text-3xl font-medium">{title}</h2>
                                <div className="flex flex-row items-center gap-2">
                                    {link && (
                                        <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${linkType}`}>
                                            {linkType === 'project' ? (
                                                <LinkIcon className="w-8 h-8 md:w-10 md:h-10" />
                                            ) : linkType === 'Figma' ? (
                                                <FigmaIcon className="w-8 h-8 md:w-10 md:h-10" />
                                            ) : (
                                                <LinkIcon className="w-8 h-8 md:w-10 md:h-10" />
                                            )}
                                        </Link>
                                    )}
                                    {link2 && (
                                        <Link href={link2} target="_blank" rel="noopener noreferrer" aria-label="Link to Figma">
                                            <FigmaIcon className="w-8 h-8 md:w-10 md:h-10" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-400">{description}</p>
                        </div>
                    </div>
                    <Image 
                        src={src} 
                        alt={alt}
                        width={800}
                        height={800}
                        className="aspect-[12/7] object-cover object-center w-full rounded-lg sm:rounded-xl md:rounded-2xl pointer-events-non select-none border border-zinc-800"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
            </motion.div>
        </div>
    );
}
 
export default Card;