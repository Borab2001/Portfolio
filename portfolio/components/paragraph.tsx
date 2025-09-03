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

    const text = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br />Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;

    const words = text.split(/(\s+|<br \/>)/);

    return (
        <div ref={parentRef} className="relative h-auto my-48">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center h-auto px-4 pt-4 sm:px-10 md:px-12 lg:px-24 lg:pt-24">
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