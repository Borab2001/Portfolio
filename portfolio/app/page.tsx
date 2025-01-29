import BentoGrid from "@/components/bento-grid";
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Paragraph from "@/components/paragraph";


export default function Home() {

	const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.";

    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph value={paragraph} />
			<BentoGrid />
		</main>
    );
}
