"use client"

import type React from "react"

import type { Variants } from "motion/react"
import { motion, useAnimation } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"
import { cn } from "@/lib/utils"


export interface LinkIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface LinkIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

// Replace the pathVariants with separate variants for each path
const pathVariants: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
        duration: 0.4,
        opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
        duration: 0.6,
        ease: "linear",
        opacity: { duration: 0.1 },
        },
    },
}

// Update the LinkIcon component to use separate animation controls
const LinkIcon = forwardRef<LinkIconHandle, LinkIconProps>(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const topPathControls = useAnimation()
        const bottomPathControls = useAnimation()
        const isControlledRef = useRef(false)

        useImperativeHandle(ref, () => {
            isControlledRef.current = true

            return {
                startAnimation: () => {
                topPathControls.start("animate")
                bottomPathControls.start("animate")
                },
                stopAnimation: () => {
                topPathControls.start("normal")
                bottomPathControls.start("normal")
                },
            }
        })

        const handleMouseEnter = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!isControlledRef.current) {
                    topPathControls.start("animate")
                    bottomPathControls.start("animate")
                } else {
                    onMouseEnter?.(e)
                }
            },
            [topPathControls, bottomPathControls, onMouseEnter],
        )

        const handleMouseLeave = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                    if (!isControlledRef.current) {
                    topPathControls.start("normal")
                    bottomPathControls.start("normal")
                } else {
                    onMouseLeave?.(e)
                }
            },
            [topPathControls, bottomPathControls, onMouseLeave],
        )
        
        return (
            <div
                className={cn(
                    `cursor-pointer select-none p-2 flex items-center justify-center`,
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
                    <motion.path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                        variants={pathVariants}
                        initial="normal"
                        animate={topPathControls}
                    />
                    <motion.path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                        variants={pathVariants}
                        initial="normal"
                        animate={bottomPathControls}
                    />
                </svg>
            </div>
        )
    },
)

LinkIcon.displayName = "LinkIcon"

export { LinkIcon }