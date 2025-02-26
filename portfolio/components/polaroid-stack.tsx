"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

import Image from "next/image";
import { Kalam } from "next/font/google";


interface CardRotateProps {
    children: React.ReactNode;
    onSendToBack: () => void;
    sensitivity: number;
}

const kalamFont = Kalam({
    subsets: ["latin"],
    weight: "400",
});

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
        if (
            Math.abs(info.offset.x) > sensitivity ||
            Math.abs(info.offset.y) > sensitivity
        ) {
            onSendToBack();
        } else {
            x.set(0);
            y.set(0);
        }
    }

    return (
        <motion.div
            className="absolute cursor-grab"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    );
}

interface CardData {
    id: number;
    imageSrc: string;
    altText: string;
    imageTitle: string;
    imageDate: string;
}

interface PolaroidStackProps {
    randomRotation?: boolean;
    sensitivity?: number;
    cardDimensions?: { width: number; height: number };
    sendToBackOnClick?: boolean;
    cardsData?: CardData[];
    animationConfig?: { stiffness: number; damping: number };
}

export default function PolaroidStack({
    randomRotation = false,
    sensitivity = 200,
    cardDimensions = { width: 320, height: 400 },
    cardsData = [],
    animationConfig = { stiffness: 260, damping: 20 },
    sendToBackOnClick = false
}: PolaroidStackProps) {
    const [cards, setCards] = useState(
        cardsData.length
        ? cardsData
        : [
            { id: 1, imageSrc: "/images/sydney2.webp", altText: "Opera House at night", imageTitle: "Sydney", imageDate: "Dec 2023 at 5:52AM" },
            { id: 2, imageSrc: "/images/sydney2.webp", altText: "Opera House at ", imageTitle: "Sydney Opera House", imageDate: "Dec 2023 at 5:52AM" },
            { id: 3, imageSrc: "/images/sydney2.webp", altText: "Opera House", imageTitle: "Sydney Opera House", imageDate: "Dec 2023 at 5:52AM" },
            { id: 4, imageSrc: "/images/sydney2.webp", altText: "Opera", imageTitle: "Sydney Opera House", imageDate: "Dec 2023 at 5:52AM" }
        ]
    );

    const sendToBack = (id: number) => {
        setCards((prev) => {
            const newCards = [...prev];
            const index = newCards.findIndex((card) => card.id === id);
            const [card] = newCards.splice(index, 1);
            newCards.unshift(card);
            return newCards;
        });
    };

    return (
        <div className="w-full h-auto pt-10 pb-72 flex items-center justify-center ">
            <div
                className="relative"
                style={{
                    width: cardDimensions.width,
                    height: cardDimensions.height,
                    perspective: 600,
                }}
            >
                {cards.map((card, index) => {
                    const randomRotate = randomRotation
                    ? Math.random() * 10 - 5 // Random degree between -5 and 5
                    : 0;

                    return (
                        <CardRotate
                            key={card.id}
                            onSendToBack={() => sendToBack(card.id)}
                            sensitivity={sensitivity}
                        >
                            <motion.div
                                className="overflow-hidden bg-white p-4 flex flex-col items-center justify-start"
                                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                                animate={{
                                    rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                                    scale: 1 + index * 0.06 - cards.length * 0.06,
                                    transformOrigin: "90% 90%",
                                }}
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: animationConfig.stiffness,
                                    damping: animationConfig.damping,
                                }}
                                style={{
                                    width: cardDimensions.width,
                                    height: cardDimensions.height,
                                }}
                            >
                                <Image
                                    width={280}
                                    height={280}
                                    src={card.imageSrc}
                                    alt={card.altText}
                                    className="w-[288px] h-[288px] object-cover select-none pointer-events-none"
                                />
                                <div className={`w-full pt-4 flex flex-col gap-2 select-none pointer-events-none ${kalamFont.className}`}>
                                    <h2 className="text-2xl text-black font-semibold">{card.imageTitle}</h2>
                                    <p className="text-base text-zinc-600">{card.imageDate}</p>
                                </div>
                            </motion.div>
                        </CardRotate>
                    );
                })}
            </div>
        </div>
    );
}