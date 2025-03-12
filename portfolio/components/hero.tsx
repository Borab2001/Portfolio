import Image from "next/image";
import CircularText from "./ui/circular-text";


const Hero = () => {
    return (
        <div className="min-h-screen w-full p-4 sm:p-8 md:p-20 flex flex-col">
            <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <Image 
                    src="/images/memoji.webp" 
                    alt="Memoji"
                    width={128}
                    height={128}
                    className=" h-24 w-24 sm:h-32 sm:w-32 rounded-full shadow-sm shadow-white ring-1 ring-white"
                />
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-white text-center">
                    Bora Balos
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-white max-w-96 md:max-w-lg text-center">
                    A French software engineer who finds emotion in design and crafts with a keen eye
                </p>
            </div>
        
            <CircularText
                text="LEARN*MORE*ABOUT*ME*"
                spinDuration={20}
                className="mt-auto"
            />
        </div>
    );
}
 
export default Hero;