import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    src: string;
    link: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    src,
    link
}) => {
    return (
        <div className="h-screen p-8 sm:p-20 flex items-center justify-center sticky top-0">
            <div className="relative -top-[10%] w-full max-w-5xl h-auto aspect-video p-4 dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl grid grid-cols-2">
                <div className="cols-span-1">
                    <div>
                        <h2 className="text-2xl">{title}</h2>
                        <p>{description}</p>
                    </div>
                    <Link href={link} target="blank">View Project</Link>
                </div>
                <Image 
                    src={src} 
                    alt="" 
                    className="cols-span-1"
                    width={500}
                    height={500}    
                />
            </div>
        </div>
    );
}
 
export default Card;