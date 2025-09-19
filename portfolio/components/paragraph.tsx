"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Word from "./ui/word";

const Paragraph: React.FC = () => {
    const parentRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ['start end', 'end start']
    });

    const stickyProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    const text = `I’m a design engineer based in Paris, with nearly four years of experience crafting digital products. Currently working as a freelancer, I bring together technical expertise and a strong eye for design to build interfaces that are not only functional but also meaningful and visually refined.<br />Inspired by elegance and minimalism, I draw from the aesthetics of Paris, its black-and-white contrasts found in fashion and design, its sense of detail, and its timeless balance between clarity and sophistication. I believe technology should not only be easy to use, but also a pleasure to use, creating experiences that feel natural, simple, and enjoyable.<br />Whether I’m designing, coding, or capturing moments with my polaroid, I’m guided by curiosity, memory and an attention to detail, qualities that keep teaching me to stay open, take risks, and explore new perspectives.`;

    const words = text.split(/(\s+|<br \/>)/);

    return (
        <div ref={parentRef} className="relative h-auto my-24 sm:my-32 lg:my-48">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center h-auto px-4 sm:px-10 md:px-12 lg:px-24">
                <p className="flex flex-wrap justify-start gap-y-2 gap-x-1 md:gap-y-6 md:gap-x-1 text-xl md:text-3xl tracking-tight text-foreground">
                    {words.map((word, index) => {
                        if (word === "<br />") {
                            return <span key={`br-${index}`} className="w-full h-0"></span>;
                        }

                        const start = index / words.length;
                        const end = start + 1 / words.length;

                        return (
                            <Word
                                key={index}
                                range={[start, end]}
                                progress={stickyProgress}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default Paragraph;