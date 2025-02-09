"use client";
import { Kalam } from "next/font/google";

import { ReactElement, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
    imageSrc: string;
    altText: string;
    imageTitle: string;
    imageDate: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
}

const kalamFont = Kalam({
    // variable: "--font-kalam",
    subsets: ["latin"],
    weight: "400",
});

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
} as const;

export default function TiltedCard({
    imageSrc,
    altText,
    imageTitle,
    imageDate,
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}: TiltedCardProps): ReactElement {
    const ref = useRef<HTMLElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    function handleMouse(e: React.MouseEvent<HTMLElement>): void {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter(): void {
        scale.set(scaleOnHover);
        opacity.set(1);
        setIsHovered(true);
    }

    function handleMouseLeave(): void {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
        setIsHovered(false);
    }

    return (
        <figure
            ref={ref}
            className={`relative w-full h-full [perspective:800px] flex flex-col items-center justify-center ${isHovered ? 'z-10' : 'z-0'}`}
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d] bg-white p-4 flex flex-col items-center justify-start shadow-xl"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="object-cover will-change-transform [transform:translateZ(0)] select-none pointer-events-none"
                    style={{
                        width: 280,
                        height: 280,
                    }}
                />
                <div className={`w-full pt-4 flex flex-col gap-2 select-none pointer-events-none ${kalamFont.className}`}>
                    <h2 className="text-2xl text-black font-semibold">{imageTitle}</h2>
                    <p className="text-base text-zinc-600">{imageDate}</p>
                </div>

                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]"
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}