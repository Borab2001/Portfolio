"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(
        scrollYProgress,
        [0.9, 1],
        [1, 0.1]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="mb-8"
        >
            {children}
        </motion.div>
    );
};

export default function Bio() {
    return (
        <div className="relative z-10 mx-[10vw] max-w-3xl px-4 mb-[15vw] md:mb-[15vw] sm:mx-0 sm:mt-[20vw]">
            <AnimatedText>
                <h2 className="text-[max(2vw,1.5rem)] font-medium text-white my-16 leading-relaxed">
                    Lorem Ipsum
                </h2>
            </AnimatedText>
        
            <AnimatedText>
                <p className="text-[max(1.75vw,1.25rem)] font-light text-neutral-200 md:pl-16 sm:pl-7 xs:pl-0 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AnimatedText>
        
        {/* Add more AnimatedText components as needed */}
        </div>
    );
}