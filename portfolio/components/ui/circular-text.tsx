"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { ArrowDown } from "lucide-react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
    arrowControls.start({
        rotate: -(currentRotation + 360),
        transition: getTransition(spinDuration, -currentRotation),
      });
  }, [spinDuration, controls, arrowControls, onHover, text, currentRotation]);

    const handleHoverStart = () => {
        if (!onHover) return;
        switch (onHover) {
        case "slowDown":
            controls.start({
                rotate: currentRotation + 360,
                scale: 1,
                transition: getTransition(spinDuration * 2, currentRotation),
            });
            break;
        case "speedUp":
            controls.start({
                rotate: currentRotation + 360,
                scale: 1,
                transition: getTransition(spinDuration / 4, currentRotation),
            });
            break;
        case "pause":
            controls.start({
                rotate: currentRotation,
                scale: 1,
                transition: {
                    rotate: { type: "spring", damping: 20, stiffness: 300 },
                    scale: { type: "spring", damping: 20, stiffness: 300 },
                },
            });
            break;
        case "goBonkers":
            controls.start({
                rotate: currentRotation + 360,
                scale: 0.8,
                transition: getTransition(spinDuration / 20, currentRotation),
            });
            break;
        default:
            break;
        }
    };

    const handleHoverEnd = () => {
        controls.start({
            rotate: currentRotation + 360,
            scale: 1,
            transition: getTransition(spinDuration, currentRotation),
        });
        arrowControls.start({
            rotate: -(currentRotation + 360),
            transition: getTransition(spinDuration, -currentRotation),
        });
    };

    return (
        <div>
            <motion.div
                initial={{ rotate: 0 }}
                className={`relative mx-auto rounded-full w-[130px] h-[130px] text-white font-semibold text-center cursor-pointer origin-center ${className}`}
                animate={controls}
                onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
            >
                {letters.map((letter, i) => {
                    const rotation = (360 / letters.length) * i;
                    const factor = Number((Math.PI / letters.length).toFixed(0));
                    const x = factor * i;
                    const y = factor * i;
                    const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

                    return (
                    <span
                        key={i}
                        className="scale-50 sm:scale-100  absolute inline-block inset-0 text-lg transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
                        style={{ transform, WebkitTransform: transform }}
                    >
                        {letter}
                    </span>
                    );
                })}
                <motion.span className="absolute inset-0 flex items-center justify-center" animate={arrowControls}>
                    <ArrowDown className="text-2xl" />
                </motion.span>
            </motion.div>
        </div>
    );
};

export default CircularText;
