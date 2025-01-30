import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
    mainCircleSize = 100,
    mainCircleOpacity = 0.3,
    numCircles = 4,
    className,
    ...props
}: RippleProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 select-none",
                className,
            )}
            {...props}
        >
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle =  "solid";
                const borderOpacity = 5 + i * 5;

                return (
                    <div
                        key={i}
                        className={`[--i: absolute animate-ripple rounded-full border bg-white dark:bg-black shadow-xl${i}]`}
                        style={
                        {
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity,
                            animationDelay,
                            borderStyle,
                            borderWidth: "1px",
                            borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)",
                        } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";