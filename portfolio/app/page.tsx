import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Paragraph from "@/components/paragraph";
import PolaroidStack from "@/components/polaroid-stack";
import Experience from "@/components/experience";


export default function Home() {	
    return (
		<main>
			<Hero />
			<Cards />
			<Paragraph />
			<PolaroidStack />
			<Experience />
		</main>
    );
}
