import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Paragraph from "@/components/paragraph";
import PolaroidStack from "@/components/polaroid-stack";
import Experience from "@/components/experience";
// import BentoGrid from "@/components/bento-grid";
import Footer from "@/components/footer";


export default function Home() {	
    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph />
			<PolaroidStack />
			<Experience />
			{/* <BentoGrid /> */}
			<Footer />
		</main>
    );
}
