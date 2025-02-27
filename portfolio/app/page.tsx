import Cards from "@/components/cards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Paragraph from "@/components/paragraph";
import PolaroidStack from "@/components/polaroid-stack";
// import BentoGrid from "@/components/bento-grid";


export default function Home() {	
    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph />
			<PolaroidStack />
			<Experience />
			{/* <BentoGrid /> */}
		</main>
    );
}
