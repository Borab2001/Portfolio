"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

type TextGlitchProps = React.ComponentProps<"div">;

function TextHoverEnter({ children, className }: TextGlitchProps) {
    const processChildren = (children: React.ReactNode) => {
        const elements: React.ReactNode[] = [];
        
        React.Children.forEach(children, (child) => {
            if (typeof child === "string") {
                // Traiter les chaînes caractère par caractère
                child.split("").forEach((letter) => {
                    elements.push(letter === " " ? "\u00A0" : letter);
                });
            } else {
                // Ajouter les éléments React (comme les icônes) directement
                elements.push(child);
            }
        });
        
        return elements;
    };

    const processedElements = processChildren(children);

    return (
        <motion.div
            className={cn(
                "relative block select-none overflow-hidden whitespace-nowrap",
                className,
            )}
            initial="initial"
            whileHover="hovered"
            style={{ lineHeight: 1.1 }}
        >
            <div>
                {processedElements.map((element, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                    >
                        {element}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {processedElements.map((element, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                    >
                        {element}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

export default TextHoverEnter;