import Hero from "@/components/hero";
import Cards from "@/components/cards";
// import Paragraph from "@/components/paragraph";
// import PolaroidStack from "@/components/polaroid-stack";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Timeline from "@/components/timeline";
import { TimelineExperience } from "@/types/timeline";


export default function Home() {	
	const timelineData: TimelineExperience[] = [
		{
			id: '1',
			year: 2019,
			title: 'ISEP - Engineering School',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: '/images/polaroid/isep.webp',
			alt: 'ISEP Campus',
			imageTitle: 'ISEP Campus',
			date: 'September 2019',
			position: 'left'
		},
		{
			id: '2',
			year: 2023,
			title: 'University of Sydney',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: '/images/polaroid/usyd.webp',
			alt: 'Sydney Uni Quadrangle',
			imageTitle: 'Sydney Uni Quadrangle',
			date: 'July 2023',
			position: 'right'
		},
		{
			id: '3',
			year: 2023,
			title: 'Experience Name 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: '/images/polaroid/opera_night.webp',
			alt: 'Sydney Opera House view by night',
			imageTitle: 'Opera House',
			date: 'Aug 2023 at 8:17PM',
			position: 'left'
		},
		{
			id: '4',
			year: 2023,
			title: 'Experience Name 2',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: '/images/polaroid/wc_final.webp',
			alt: 'Women\'s World Cup Final in Sydney at ANZ Stadium',
			imageTitle: 'Women\'s World Cup Final',
			date: 'Aug 2023 at 7:39PM',
			position: 'right'
		},
		{
			id: '5',
			year: 2023,
			title: 'Experience Name 3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: '/images/polaroid/bronte_beach.webp',
			alt: 'Sunrise in Bronte Beach in Sydney',
			imageTitle: 'Bronte Beach',
			date: 'Dec 2023 at 5:40AM',
			position: 'left'
		}
	];

    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Cards />
			{/* <Paragraph /> */}
			{/* <PolaroidStack /> */}
			<Timeline experiences={timelineData} />
			<Experience />
			<Footer />
		</main>
    );
}
