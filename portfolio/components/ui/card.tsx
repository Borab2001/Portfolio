import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
// import Link from "next/link";
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import TextHoverEnter from "./text-hover-enter";


interface CardProps {
    title: string;
    description: string;
    src: string;
    alt: string;
    projectId?: string;
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
    projectId,
    index,
    progress,
    range,
    targetScale
}) => {
    const router = useTransitionRouter();
    const pathname = usePathname();
    const cardScale = useTransform(progress, range, [1, targetScale]);

    // Fonction de transition pour la navigation
    const pageAnimation = (currentPath: string, targetPath: string) => {
        const isGoingFromProjectsToProject = currentPath === '/projects' && targetPath.startsWith('/projects/') && targetPath !== '/projects';
        
        if (isGoingFromProjectsToProject) {
            const oldPageTranslateX = '-100px';
            const newPageTranslateX = '100%';
            
            document.documentElement.animate([
                { opacity: 1, scale: 1, transform: 'translateX(0)' },
                { opacity: 0, scale: 1, transform: `translateX(${oldPageTranslateX})` }
            ], {
                duration: 1000,
                easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            });

            document.documentElement.animate([
                { transform: `translateX(${newPageTranslateX})` },
                { transform: 'translateX(0)' }
            ], {
                duration: 1000,
                easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            });
        }
    };

    const handleImageClick = () => {
        if (projectId) {
            const targetPath = `/projects/${projectId}`;
            router.push(targetPath, {
                onTransitionReady: () => pageAnimation(pathname, targetPath)
            });
        }
    };

    return (
        <div className="group h-screen p-4 flex flex-col items-center justify-center sticky top-9">
            {/* <div className="flex flex-col justify-center items-center gap-4 mb-9">
                <h2 className="text-3xl font-semibold hidden group-first-of-type:block">Some of my work</h2>
            </div> */}
            <motion.div 
                style={{ scale: cardScale, top: "0%" }} 
                className="relative -top-[10%] w-full max-w-4xl h-auto p-2 bg-background border border-border rounded-xl sm:rounded-2xl md:rounded-3xl flex flex-col gap-4"
            >
                <div
                    className="w-full h-full flex flex-col gap-6 p-2 sm:p-4 md:p-6 bg-background rounded-lg sm:rounded-xl md:rounded-2xl"
                >
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-2.5">
                            <div className="flex flex-row items-center justify-between gap-2">
                                <h2 className="text-xl md:text-3xl font-medium text-primary">{title}</h2>
                                <div className="flex flex-row items-center gap-2">
                                    <TextHoverEnter>
                                        View more
                                    </TextHoverEnter>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-muted">{description}</p>
                        </div>
                    </div>
                    <Image 
                        src={src} 
                        alt={alt}
                        width={800}
                        height={800}
                        className={`aspect-[12/7] object-cover object-center w-full rounded-lg sm:rounded-xl md:rounded-2xl select-none border border-border ${projectId ? 'cursor-pointer hover:opacity-90 transition-opacity' : 'pointer-events-none'}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        onClick={handleImageClick}
                    />
                </div>
            </motion.div>
        </div>
    );
}
 
export default Card;