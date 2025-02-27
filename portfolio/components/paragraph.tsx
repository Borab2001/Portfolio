"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Word from "./ui/word";


const Paragraph = () => {

    const parentRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ['start end', 'end start']
        // offset: ['start 80%', 'end 30%']
    });

    const stickyProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    const text = `
        I earned my Master’s degree in Computer Science at ISEP Paris, where I spent years honing my technical skills and diving deep into software engineering and design. But one of the most defining chapters of my journey happened far from Paris—on the other side of the world, in Sydney.
        Spending a semester in Sydney was one of the most incredible experiences of my life. I had the chance to learn from insanely talented designers and engineers from companies like Canva, Bloomberg, and Spotify—people who truly opened my eyes to new ways of thinking about design and technology. But beyond the academics, what really stuck with me was the city itself.
        Sydney is just… different. The energy, the people, the diversity—it all made me feel at home in a way I didn’t expect. I fell in love with the culture, the spontaneity of everyday life, the endless food spots where you could taste the whole world in one city, and of course, those golden-hour walks by the beaches. It was the kind of place where every day felt like an adventure, and leaving it only made me more sure that I want to come back.
        Sydney felt like home, and I can’t wait to go back.
    `;

    const words = text.split(" ");

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