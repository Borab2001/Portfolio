import BentoGrid from "@/components/bento-grid";
import Cards from "@/components/cards";
import Experience from "@/components/experience";
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
			<div className="py-64 max-w-5xl mx-auto flex flex-row gap-4">
				<TiltedCard
					imageSrc="/images/sydney1.webp"
					altText=""
					imageTitle="North Sydney"
					imageDate="Aug 2023 at 8:17PM"
					captionText=""
					containerHeight="402px"
					containerWidth="312px"
					imageHeight="402px"
					imageWidth="312px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={false}
					displayOverlayContent={false}
				/>
				<TiltedCard
					imageSrc="/images/sydney2.webp"
					altText=""
					imageTitle="Sydney Opera House"
					imageDate="Dec 2023 at 5:52AM"
					captionText=""
					containerHeight="402px"
					containerWidth="312px"
					imageHeight="402px"
					imageWidth="312px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={false}
					displayOverlayContent={false}
				/>
				<TiltedCard
					imageSrc="/images/sydney1.webp"
					altText=""
					imageTitle="North Sydney"
					imageDate="Aug 2023 at 8:17PM"
					captionText=""
					containerHeight="402px"
					containerWidth="312px"
					imageHeight="402px"
					imageWidth="312px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={false}
					displayOverlayContent={false}
				/>
			</div>
			<Experience />
			<BentoGrid />
		</main>
    );
}
