import Image from "next/image";
import BentoElement from "./ui/bento-element";

const BentoGrid = () => {
    return (
        <div className="p-4 sm:p-8 w-full">
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <BentoElement className="col-span-1 md:col-span-1">Grid 1</BentoElement>
                <BentoElement className="col-span-1 md:col-span-2">Grid 2</BentoElement>
                <BentoElement className="col-span-1 md:col-span-2">Grid 3</BentoElement>
                <BentoElement className="col-span-1 md:col-span-1 relative">
                    <Image src="/images/map.webp" alt="Map" width="3000" height="3000" className="absolute z-0 w-full h-full object-cover object-center contrast-[140%] grayscale" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/images/memoji.webp" alt="Memoji" width="500" height="500" className="h-16 w-16 rounded-full object-cover border border-white" />
                    </div>
                </BentoElement>
            </div>
        </div>
    );
}
 
export default BentoGrid;