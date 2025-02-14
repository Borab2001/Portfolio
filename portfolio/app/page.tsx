// import BentoGrid from "@/components/bento-grid";
import Cards from "@/components/cards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Paragraph from "@/components/paragraph";
import TiltedCard from "@/components/ui/tilted-card";


export default function Home() {

	const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
		<main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			<Paragraph value={paragraph} />
			<div className="w-screen py-24 mb-24 mx-auto flex flex-row items-center justify-center gap-4 overflow-scroll">
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
			{/* <BentoGrid /> */}
		</main>
    );
}
