import { Metadata } from 'next';
import type { MockupGridConfig } from '@/types/mockup-grid';
import { Project as ProjectTypes } from '@/types/project';

import Project from '@/components/project';
import Footer from '@/components/footer';
import MockupGrid from '@/components/mockup-grid';
// import CircularText from '@/components/ui/circular-text';


export const metadata: Metadata = {
    title: 'Projects',
    description: 'A showcase of design projects made by Bora, blending creativity with user-focused design.',
};

export default function Projects() {
    // Configuration des grilles d'images
    const mockupGrids: MockupGridConfig[] = [
        {
            className: 'h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
            images: [
                { src: "/images/projects/grid/maestro_1.webp", alt: "Maestro 1", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/vrai.webp", alt: "Vrai", className: "row-span-2 h-full" },
                { src: "/images/projects/grid/maestro_2.webp", alt: "Maestro 2", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/watches.webp", alt: "AusVision Watch", className: "row-span-1 h-full" },
                { src: "/images/projects/grid/cedrus.webp", alt: "Reveal 1", className: "row-span-1 h-full" },
            ]
        },
        {
            className: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
            images: [
                { src: "/images/projects/grid/flowfinity_1.avif", alt: "Flowfinity 1", className: "col-span-1" },
                { src: "/images/projects/grid/flowfinity_2.avif", alt: "Flowfinity 2", className: "col-span-1" },
                { src: "/images/projects/grid/flowfinity_3.avif", alt: "Flowfinity 3", className: "col-span-1" },
            ]
        },
        {
            className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
            customLayout: true,
            content: [
                { 
                    type: 'image', 
                    src: "/images/projects/grid/reveal_1.webp", 
                    alt: "Reveal 1", 
                    className: "col-span-1 lg:row-span-1 w-full h-full object-cover border border-border rounded-lg sm:rounded-xl md:rounded-2xl aspect-square lg:aspect-auto" 
                },
                { 
                    type: 'container', 
                    className: 'flex flex-col gap-8 sm:order-last lg:order-none col-span-1 sm:col-span-2 lg:col-span-1',
                    images: [
                        { src: "/images/projects/grid/cedrus_2.webp", alt: "Aila Consulting" },
                        { src: "/images/projects/grid/aila.webp", alt: "Aila Consulting" },
                    ]
                },
                { 
                    type: 'image', 
                    src: "/images/projects/grid/reveal_2.webp", 
                    alt: "Reveal 2", 
                    className: "col-span-1 lg:row-span-1 w-full h-full object-cover border border-border rounded-lg sm:rounded-xl md:rounded-2xl aspect-square lg:aspect-auto" 
                },
            ]
        },
        {
            className: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
            images: [
                { src: "/images/projects/grid/paymate.webp", alt: "Paymate", className: "col-span-1" },
                { src: "/images/projects/grid/cpayant.webp", alt: "CPayant", className: "col-span-1" },
            ]
        }
    ];
    
    const projects: ProjectTypes[] = [
        {
            id: '1',
            title: '2032 Brisbane Olympics',
            subtitle: '2023 ~ Sydney Uni',
            context: {
                title: 'Context',
                description: [
                    "This project was a concept application for the Brisbane 2032 Olympics, designed to integrate navigation and accessibility into one seamless experience. Feedback from previous Olympic Games consistently revealed that venues often lacked accessibility-friendly pathways and facilities, forcing people with physical disabilities to face repeated challenges. Existing navigation tools remain generic, rarely accounting for essential features like ramps, elevators, lifts, or accessible toilets. Our concept aimed to close this gap and provide a smoother, more inclusive event experience.",
                    "The solution introduces a navigation platform that combines detailed accessibility data and an immersive AR view mode available on both iPhone and Apple Watch devices. Users can visualize accessible routes in real time, while safety features such as customizable action buttons, gesture recognition, and a dedicated Help function provide instant contact with staff, emergency services, or trusted contacts. By uniting navigation and accessibility in one integrated system, the app empowers users with greater independence, confidence, and safety."
                ],
            },
            links: [
                { type: "figma", label: "Figma", url: "https://www.figma.com/design/o40ZnVFnKsYgeqUWRfGny4/AusVision-%F0%9F%87%A6%F0%9F%87%BA?node-id=1-10549&t=pDOyUD5NSvgl6bio-1", },
            ],
            mockupImages: [
                ['/images/projects/ausvision/home_map.webp', '/images/projects/ausvision/home_list.webp'],
                ['/images/projects/ausvision/transport_selection.webp', '/images/projects/ausvision/route_view.webp'],
                ['/images/projects/ausvision/ar_view.webp', '/images/projects/ausvision/ar_warning.webp'],
            ],
            competitorAnalysis: {
                title: 'Competitor Analysis',
                description: [
                    "While Google Maps and Apple Maps offer AR navigation, their accessibility support is secondary and lacks the granularity needed for wheelchair users. Other competitors focus mainly on venue ratings rather than route-specific guidance, leaving critical gaps.",
                    "None provide a comprehensive solution that merges immersive navigation with detailed accessibility information, covering step-free routes and mobility-friendly facilities, into a single cohesive experience. This underlines a clear opportunity to create a truly inclusive navigation tool tailored to the needs of people with physical disabilities."
                ],
            },
            personas: {
                title: 'User Personas',
                images: [
                    '/images/projects/ausvision/persona_1.webp',
                    '/images/projects/ausvision/persona_2.webp'
                ]
            }
        },
        {
            id: '2',
            title: 'Foodify',
            subtitle: '2023 ~ Recipe App',
            context: {
                title: 'Context',
                description: [
                    "Foodify is a concept recipe app designed to make discovering, cooking, and sharing meals easier and more engaging. Many existing platforms overwhelm users with cluttered interfaces, inconsistent recipe quality, or limited personalization. Users often struggle to filter recipes based on the ingredients they already have or adapt them to specific dietary needs, which makes everyday cooking less accessible and more time-consuming. Inspired by industry leaders like Airbnb, Foodify adopts a clean and intuitive design language that emphasizes clarity and ease of use. Our concept creates a streamlined, user-friendly experience that empowers users to simply look, save, and cook.",
                    "The app combines a personalized recommendation system with practical tools such as ingredient-based filtering, meal planning with both built-in and external calendar integration, and auto-generated shopping lists. Recipes include step-by-step instructions, nutritional insights, and customizable options to suit dietary restrictions. Beyond discovery, Foodify fosters a sense of community by allowing users to add, share, and save recipes, making cooking both social and interactive."
                ],
            },
            links: [
                { type: "figma", label: "Figma", url: 'https://www.figma.com/design/qe1nzudt3YFyMSUaj8gXFi/Foodify-%F0%9F%A5%A6?node-id=0-1&t=rZkngaf2rEApO21m-1' },
                { type: "project", label: "Project", url: 'https://foodifyapp.vercel.app/' },
            ],
            mockupImages: [
                ['/images/projects/foodify/landing.webp', '/images/projects/foodify/home.webp'],
                ['/images/projects/foodify/recipe.webp', '/images/projects/foodify/add_recipe_1.webp'],
                // ['/images/projects/foodify/add_recipe_2.webp', '/images/projects/foodify/shopping_list.webp'],
                ['/images/projects/foodify/fridge.webp', '/images/projects/foodify/calendar.webp'],

            ],
            marketResearch: {
                title: 'Market Research',
                description: [
                    "To better understand potential users and their needs, we conducted a set of interviews and distributed a survey answered by over sixty participants. Despite differences in age, profession, and lifestyle, respondents shared common expectations: healthy recipe suggestions, meal planning with a built-in calendar, nutritional tracking, personalization based on dietary preferences, and smart shopping lists. The survey confirmed these priorities across a larger audience, showing a clear demand for an app that unifies everyday cooking, personalization, and nutrition into one seamless platform.",
                ],
            },
            // personas: {
            //     title: 'User Personas',
            //     images: [
            //         '/images/projects/foodify/persona_1.webp',
            //         '/images/projects/foodify/persona_2.webp'
            //     ]
            // }
        },
    ];

    return (
		<main className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="min-h-dvh max-w-[1600px] mx-auto w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
                <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-[24vh] pb-16">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-primary text-center">
                        Projects
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-secondary max-w-96 md:max-w-lg text-center">
                        {/* Step into my creative space. Here, every project is a blend of modern design and real-world problem solving */}
                        {/* A brief showcase of my works, each one a glimpse into how I merge creativity and user-centered design */}
                        A quick glimpse at how I blend creativity with user-focused design in my projects
                    </p>
                    {/* <CircularText
                        text="CHECK*OUT*MY*PROJECTS*"
                        spinDuration={20}
                        className="mt-16"
                    /> */}
                </div>
            
                <div>
                {/* <div className="divide-y divide-border-light"> */}
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <div className='max-w-[1600px] mx-auto flex flex-col p-4 sm:p-8 pb-4 sm:pb-8 md:pb-20 gap-8 sm:gap-10 md:gap-12'>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary text-center">
                    More Mockups
                </h2>
                <MockupGrid grids={mockupGrids} />
            </div>
            <Footer />
		</main>
    );
}
