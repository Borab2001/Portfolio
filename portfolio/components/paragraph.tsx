"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Word from "./ui/word";


interface ParagraphProps {
    value: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ 
    value
}) => {

    const parentRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ['start end', 'end start']
        // offset: ['start 80%', 'end 30%']
    });

    const stickyProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    const words = value.split(" ");

    return (
        // <div ref={parentRef} className="relative h-[300vh]">
        //     <div className="sticky top-0 w-full max-w-6xl mx-auto flex items-center justify-center h-screen p-4 md:p-24">
        <div ref={parentRef} className="relative h-auto mt-48">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center h-auto px-4 pt-4 md:px-24 md:pt-24">
                <p
                    className="flex flex-wrap justify-center gap-y-2 gap-x-1 md:gap-y-6 md:gap-x-3 text-xl md:text-3xl tracking-tight text-muted-foreground"
                >
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + 1 / words.length;

                        return (
                            <Word
                                key={index}
                                range={[start, end]}
                                progress={stickyProgress} // Use normalized sticky progress
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