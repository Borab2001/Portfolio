// import { CornerRightDown } from 'lucide-react';

import Image from "next/image";

export default function Home() {
    return (
		<div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="h-screen w-full flex items-center justify-center p-8 sm:p-20">
				<div className="flex flex-col justify-center items-center gap-4 md:gap-6">
					<Image 
						src="/images/memoji.webp" 
						alt="Memoji"
						width={96}
						height={96}
						className="rounded-full shadow-sm shadow-black dark:shadow-white ring-1 ring-white dark:ring-white"
					/>
					<h1 className="text-4xl sm:text-7xl font-medium  text-black dark:text-white text-center">
						Bora Balos
					</h1>
					<p className="text-lg md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-72 md:max-w-lg text-center">
						A French software engineer crafting clean web with a keen eye for design
					</p>
				
					<div className="flex flex-row gap-4 pt-4">
						<button className="flex flex-row gap-4 px-4 py-2 font-medium bg-black dark:bg-white text-white dark:text-black rounded-full">
							View my work 
							{/* <CornerRightDown className="w-4 h-4" /> */}
						</button>
						<button className="">
							My Resume
						</button>
					</div>
				</div>
			</main>
			<footer></footer>
		</div>
    );
}
