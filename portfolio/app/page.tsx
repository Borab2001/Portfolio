import BentoGrid from "@/components/bento-grid";
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Paragraph from "@/components/paragraph";
import TiltedCard from "@/components/ui/tilted-card";


export default function Home() {

	const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.";

    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph value={paragraph} />
			<BentoGrid />
			<div className="p-64">
				<TiltedCard
					imageSrc="/images/map.webp"
					altText=""
					captionText=""
					containerHeight="300px"
					containerWidth="300px"
					imageHeight="300px"
					imageWidth="300px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={false}
					displayOverlayContent={true}
					// overlayContent={
					// 	<p className="bg-white rounded-full p-2">
					// 		Coucou les congolais
					// 	</p>
					// }
				/>
			</div>
		</main>
    );
}
