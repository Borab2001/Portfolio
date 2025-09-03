import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Paragraph from "@/components/paragraph";
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
			description: 'After obtaining my french baccalaureat abroad, I decided to move in France to pursue my higher education at ISEP, an engineering school based in Paris. In 2019 I started my preparatory classes there.',
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
			description: 'Spending a semester in Sydney was one of the most incredible experiences of my life. I had the chance to learn from insanely talented designers and engineers from companies like Canva, Bloomberg, and Spotify—people who truly opened my eyes to new ways of thinking about design and technology.',
			image: '/images/polaroid/usyd.webp',
			alt: 'Sydney Uni Quadrangle',
			imageTitle: 'Sydney Uni Quadrangle',
			date: 'July 2023',
			position: 'right'
		},
		{
			id: '3',
			year: 2023,
			title: 'Sydney #1',
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
			title: 'Sydney #2',
			description: 'But beyond the academics, what really stuck with me was the city itself. Sydney is just… different. The energy, the people, the diversity—it all made me feel at home in a way I didn’t expect. ',
			image: '/images/polaroid/wc_final.webp',
			alt: 'Women\'s World Cup Final in Sydney at ANZ Stadium',
			imageTitle: 'Women\'s World Cup Final',
			date: 'Aug 2023 at 7:39PM',
			position: 'right'
		},
		{
			id: '5',
			year: 2023,
			title: 'Sydney #3',
			description: 'I fell in love with the culture, the spontaneity of everyday life, the endless food spots where you could taste the whole world in one city, and of course, those golden-hour walks by the beaches. It was the kind of place where every day felt like an adventure, and leaving it only made me more sure that I want to come back. Sydney felt like home, and I can’t wait to go back.',
			image: '/images/polaroid/bronte_beach.webp',
			alt: 'Sunrise in Bronte Beach in Sydney',
			imageTitle: 'Bronte Beach',
			date: 'Dec 2023 at 5:40AM',
			position: 'left'
		},
		{
			id: '6',
			year: 2025,
			title: 'Graduation',
			description: 'In 2025, I earned my Master’s degree in Computer Science at ISEP, where I spent years honing my technical skills and diving deep into software engineering and design.',
			image: '/images/polaroid/graduation.webp',
			alt: 'ISEP Graduation',
			imageTitle: 'ISEP Graduation',
			date: 'May 2025 at 5:57PM',
			position: 'right'
		}
	];

    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Paragraph />
			<Timeline experiences={timelineData} />
			<Cards />
			{/* <PolaroidStack /> */}
			<Experience />
			<Footer />
		</main>
    );
}
