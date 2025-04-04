"use client"

import type React from "react"
import type { Variants } from "motion/react"
import { motion, useAnimation } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"
import { cn } from "@/lib/utils"

export interface FigmaIconHandle {
    startAnimation: () => void
    stopAnimation: () => void
}

interface FigmaIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number
}

const createPathVariant = (delay: number): Variants => ({
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [0.5, 0],
        scale: [0.9, 1],
        transition: {
            delay,
            duration: 0.5,
            ease: "easeOut",
            opacity: { duration: 0.2, delay },
            scale: { duration: 0.3, delay },
        },
    },
})

const FigmaIcon = forwardRef<FigmaIconHandle, FigmaIconProps>(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const topLeftControls = useAnimation()
        const topRightControls = useAnimation()
        const middleRightControls = useAnimation()
        const bottomLeftControls = useAnimation()
        const middleLeftControls = useAnimation()

        const isControlledRef = useRef(false)

        const startSequentialAnimation = useCallback(() => {
            // Reset all paths to initial state
            topLeftControls.set({ opacity: 0, pathLength: 0, pathOffset: 0.5, scale: 0.9 })
            topRightControls.set({ opacity: 0, pathLength: 0, pathOffset: 0.5, scale: 0.9 })
            middleRightControls.set({ opacity: 0, pathLength: 0, pathOffset: 0.5, scale: 0.9 })
            bottomLeftControls.set({ opacity: 0, pathLength: 0, pathOffset: 0.5, scale: 0.9 })
            middleLeftControls.set({ opacity: 0, pathLength: 0, pathOffset: 0.5, scale: 0.9 })

            // Start animations with staggered delays
            topLeftControls.start(createPathVariant(0).animate)
            topRightControls.start(createPathVariant(0.1).animate)
            middleRightControls.start(createPathVariant(0.2).animate)
            middleLeftControls.start(createPathVariant(0.3).animate)
            bottomLeftControls.start(createPathVariant(0.4).animate)
        }, [topLeftControls, topRightControls, middleRightControls, bottomLeftControls, middleLeftControls])

        const resetAnimation = useCallback(() => {
            topLeftControls.start("normal")
            topRightControls.start("normal")
            middleRightControls.start("normal")
            bottomLeftControls.start("normal")
            middleLeftControls.start("normal")
        }, [topLeftControls, topRightControls, middleRightControls, bottomLeftControls, middleLeftControls])

        useImperativeHandle(ref, () => {
            isControlledRef.current = true

            return {
                startAnimation: startSequentialAnimation,
                stopAnimation: resetAnimation,
            }
        })

        const handleMouseEnter = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!isControlledRef.current) {
                    startSequentialAnimation()
                } else {
                    onMouseEnter?.(e)
                }
            },
            [startSequentialAnimation, onMouseEnter],
        )

        const handleMouseLeave = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!isControlledRef.current) {
                    resetAnimation()
                } else {
                    onMouseLeave?.(e)
                }
            },
            [resetAnimation, onMouseLeave],
        )

        return (
            <div
                className={cn(
                    `cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
                    className,
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Top-left section (F) */}
                    <motion.path
                        d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                        variants={createPathVariant(0)}
                        initial="normal"
                        animate={topLeftControls}
                    />

                    {/* Top-right section (I) */}
                    <motion.path
                        d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
                        variants={createPathVariant(0.1)}
                        initial="normal"
                        animate={topRightControls}
                    />

                    {/* Middle-right circle (G) */}
                    <motion.path
                        d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
                        variants={createPathVariant(0.2)}
                        initial="normal"
                        animate={middleRightControls}
                    />

                    {/* Middle-left section (A) */}
                    <motion.path
                        d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                        variants={createPathVariant(0.3)}
                        initial="normal"
                        animate={middleLeftControls}
                    />

                    {/* Bottom-left section (M) */}
                    <motion.path
                        d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                        variants={createPathVariant(0.4)}
                        initial="normal"
                        animate={bottomLeftControls}
                    />
                </svg>
            </div>
        )
    },
)

FigmaIcon.displayName = "FigmaIcon"

export { FigmaIcon }