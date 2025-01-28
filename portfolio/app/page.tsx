import Cards from "@/components/cards";
import Hero from "@/components/hero";

export default function Home() {
    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
		</main>
    );
}
