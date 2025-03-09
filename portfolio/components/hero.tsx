// import { ArrowDown } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import CircularText from "./ui/circular-text";


const Hero = () => {
    return (
        <div className="min-h-screen w-full p-4 sm:p-8 md:p-20 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 ">
            <Image 
                src="/images/memoji.webp" 
                alt="Memoji"
                width={128}
                height={128}
                className=" h-24 w-24 sm:h-32 sm:w-32 rounded-full shadow-sm shadow-black dark:shadow-white ring-1 ring-white dark:ring-white"
            />
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-black dark:text-white text-center">
                Bora Balos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-96 md:max-w-lg text-center">
                A French software engineer crafting clean web with a keen eye for design
            </p>
        
            {/* <div className="flex flex-row items-center gap-4 md:gap-6 pt-4">
                <button className="flex flex-row items-center justify-center gap-1 pl-4 pr-3 py-2 text-base md:text-lg font-medium bg-black dark:bg-white text-white dark:text-black rounded-full">
                    Get to know me
                    <ArrowDown className="w-5 h-5" />
                </button>
                <Link
                    href="https://drive.google.com/file/d/1omk69dKs_T3kyRwFkJPx8-skwl9GMfnN/view?usp=sharing"
                    target="_blank"
                    className="text-base md:text-lg font-medium text-black dark:text-white"
                >
                    My Resume
                </Link>
            </div> */}
            <CircularText
                text="GET*TO*KNOW*ME*MORE*"
                spinDuration={20}
                className="mt-auto"
            />
        </div>
    );
}
 
export default Hero;