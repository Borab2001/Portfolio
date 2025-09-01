import Image from 'next/image';
import { Kalam } from "next/font/google";

interface PolaroidPhotoProps {
  image: string;
  alt: string;
  imageTitle: string;
  date: string;
  position: 'left' | 'right';
}

const kalamFont = Kalam({
    subsets: ["latin"],
    weight: "400",
});

export default function PolaroidPhoto({ image, alt, imageTitle, date, position }: PolaroidPhotoProps) {
    return (
        <div className={`relative pointer-events-none ${position === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
            <Image 
                src="/images/polaroid/pin.svg"
                alt="Pin"
                className={`
                    absolute -top-3 left-1/2 transform z-20 -translate-x-1/2
                    ${position === 'left' ? 'scale-x-[1] -translate-x-full' : 'scale-x-[-1] translate-x-0'}
                `}
                width={64}
                height={64}
            />

            <div
                className={`
                    w-[320px] h-[400px] overflow-hidden bg-surface p-4 flex flex-col items-center justify-start pointer-events-none shadow-xl shadow-[#0a0a0a]
                    ${position === 'left' ? 'rotate-[-6deg]' : 'rotate-[6deg]'}
                `}
            >
                <Image
                    width={288}
                    height={288}
                    src={image}
                    alt={alt}
                    className="w-[288px] h-[288px] object-cover select-none pointer-events-none"
                    loading="lazy"
                />
                <div className={`w-full pt-4 flex flex-col gap-2 select-none pointer-events-none ${kalamFont.className}`}>
                    <h2 className="text-2xl text-surface-text font-semibold">{imageTitle}</h2>
                    <p className="text-base text-surface-muted">{date}</p>
                </div>
            </div>
        </div>
    );
}