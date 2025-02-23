import Image from "next/image";
import { Kalam } from "next/font/google";

import { MotionValue } from "motion/react";


interface PolaroidProps {
    imageSrc: string;
    altText: string;
    imageTitle: string;
    imageDate: string;
    index: number;
    progress: MotionValue<number>;
    range: number[];
}

const kalamFont = Kalam({
    subsets: ["latin"],
    weight: "400",
});

const Polaroid: React.FC<PolaroidProps> = ({
    imageSrc,
    altText,
    imageTitle,
    imageDate,
}) => {
    
    return (
        <div className="w-[320px] h-auto bg-white p-4 flex flex-col items-center justify-start">
            <Image
                src={imageSrc}
                alt={altText}
                className="w-[288px] h-[288px] object-cover will-change-transform [transform:translateZ(0)] select-none pointer-events-none"
                width={280}
                height={280}
            />
            <div className={`w-full pt-4 flex flex-col gap-2 select-none pointer-events-none ${kalamFont.className}`}>
                <h2 className="text-2xl text-black font-semibold">{imageTitle}</h2>
                <p className="text-base text-zinc-600">{imageDate}</p>
            </div>
        </div>
    );
}
 
export default Polaroid;