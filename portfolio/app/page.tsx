// import { CornerRightDown } from 'lucide-react';

export default function Home() {
    return (
		<div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main>
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="text-3xl sm:text-7xl font-medium  text-black dark:text-white text-center">
						Bora Balos
					</h1>
					<p className="text-lg md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
						A French software engineer crafting clean web<br />with a keen eye for design
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
