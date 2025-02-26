import Cards from "@/components/cards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Paragraph from "@/components/paragraph";
import PolaroidStack from "@/components/polaroid-stack";
// import BentoGrid from "@/components/bento-grid";


export default function Home() {

	const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	
    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph value={paragraph} />
			<PolaroidStack />
			<Experience />
			{/* <BentoGrid /> */}
		</main>
    );
}
