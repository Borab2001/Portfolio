import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Paragraph from "@/components/paragraph";
// import PolaroidStack from "@/components/polaroid-stack";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import PhotoGallery from "@/components/folder";


export default function Home() {	
    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph />
			{/* <PolaroidStack /> */}
			<PhotoGallery />
			<Experience />
			<Footer />
		</main>
    );
}
