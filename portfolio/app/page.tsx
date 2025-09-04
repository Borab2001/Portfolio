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
			description: 'In 2019, after obtaining my French baccalaureate abroad, I moved to Paris to begin my five-year journey at ISEP. Over the years, I moved from the intensity of preparatory classes to the engineering cycle, gradually diving deeper into computer science. Along the way, I experienced the startup world through an internship at Station F, which gave me a firsthand look at innovation in action.',
			image: '/images/polaroid/isep.webp',
			alt: 'ISEP Paris',
			imageTitle: 'ISEP Campus',
			date: 'September 2019',
			position: 'left'
		},
		{
			id: '2',
			year: 2023,
			title: 'University of Sydney',
			description: 'In 2023, I had the chance to spend a semester at the University of Sydney, one of the most enriching experiences of my life. I learned from incredible professors, designers and engineers working at Canva, Bloomberg, and Spotify, who pushed me to think differently about design and technology.',
			image: '/images/polaroid/usyd.webp',
			alt: 'Sydney Uni Quadrangle',
			imageTitle: 'Sydney Uni Quadrangle',
			date: 'July 2023',
			position: 'right'
		},
		{
			id: '3',
			year: 2023,
			title: 'Sydney #1 - The Experience',
			description: 'Academics aside, Sydney itself left a huge mark on me. Sydney is just… different. The energy of the city, its cultural diversity, and the openness of the people made me feel surprisingly at home from the very first days. It wasn’t just a semester abroad, it was an entirely new perspective on life.',
			image: '/images/polaroid/opera_night.webp',
			alt: 'Sydney Opera House view by night',
			imageTitle: 'Opera House',
			date: 'Aug 2023 at 8:17PM',
			position: 'left'
		},
		{
			id: '4',
			year: 2023,
			title: 'Sydney #2 - Everyday Life',
			description: 'Life in Sydney was vibrant and spontaneous. I loved wandering through its neighborhoods, sharing moments with people from all around the world, and discovering food spots where you could taste an entire continent in a single street. The city had a joy and rhythm that kept me constantly inspired.',
			image: '/images/polaroid/wc_final.webp',
			alt: 'Women\'s World Cup Final in Sydney at ANZ Stadium',
			imageTitle: 'Women\'s World Cup Final',
			date: 'Aug 2023 at 7:39PM',
			position: 'right'
		},
		{
			id: '5',
			year: 2023,
			title: 'Sydney #3 – Wildlife',
			description: 'One of the unforgettable parts of living in Australia was discovering its incredible wildlife. From seeing kangaroos up close to spotting colorful birds and walking through breathtaking landscapes, I felt constantly reminded that this country is unlike anywhere else. It wasn’t just the city, it was the raw beauty of nature that made the experience so special.',
			image: '/images/polaroid/kangaroo.webp',
			alt: 'Kangaroos in Sydney',
			imageTitle: 'Kangaroos',
			date: 'Sep 2023 at 9:46AM',
			position: 'left'
		},
		{
			id: '6',
			year: 2023,
			title: 'Sydney #4 - Golden Hours',
			description: 'And then there were the beaches. Walking along the coast at sunrise, watching the city slow down as the waves kept rolling in, it was pure magic. Sydney became more than just a temporary stay; it became a place that felt like home. Leaving it was bittersweet, but it made me certain that I’ll return.',
			image: '/images/polaroid/bronte_beach.webp',
			alt: 'Sunrise in Bronte Beach in Sydney',
			imageTitle: 'Bronte Beach',
			date: 'Dec 2023 at 5:40AM',
			position: 'right'
		},
		{
			id: '7',
			year: 2025,
			title: 'Graduation',
			description: 'In 2025, I graduated with a Master’s degree in Computer Science from ISEP. After five intense and rewarding years, I left not only with strong skills in engineering and design, but also with unforgettable experiences and friendships. It was the closing of a chapter, and the start of something new.',
			image: '/images/polaroid/graduation.webp',
			alt: 'ISEP Graduation',
			imageTitle: 'ISEP Graduation',
			date: 'May 2025 at 5:57PM',
			position: 'left'
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
