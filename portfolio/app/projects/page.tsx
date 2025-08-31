
// import CircularText from '@/components/ui/circular-text';
import { Project as ProjectTypes } from '@/types/project';
import Project from '@/components/project';
import Footer from '@/components/footer';

export default function Projects() {	
    
    const projects: ProjectTypes[] = [
        {
            id: '1',
            title: '2032 Brisbane Olympics',
            subtitle: '2023 ~ Sydney Uni',
            description: [
                "This project was a concept application for the Brisbane 2032 Olympics, focusing on the integration of navigation and accessibility without technology limitations. Reviews from previous Olympic Games consistently highlighted that many venues lacked accessibility-friendly pathways and facilities, leaving people with physical disabilities facing repeated challenges in reaching and navigating event spaces. Existing navigation apps often provide only limited or generic information, without addressing crucial accessibility features such as ramps, lifts, elevators, or accessible toilets. Our concept aimed to close this gap and create a smoother, more inclusive event experience.",
                "The solution envisages a navigation platform that combines detailed accessibility data with an immersive AR view mode available on both iPhone and Apple Watch devices. This enables users to visualize accessible routes and facilities in real time, while also benefiting from safety-oriented features such as customizable action buttons, gesture recognition, and a dedicated help function that allows direct contact with staff, emergency services, or personal contacts. By addressing both navigation and accessibility in one integrated system, the app seeks to empower users with greater independence and confidence."
            ],
            links: [
                { type: "figma", label: "Figma", url: "https://www.figma.com/design/o40ZnVFnKsYgeqUWRfGny4/AusVision-%F0%9F%87%A6%F0%9F%87%BA?node-id=1-10549&t=pDOyUD5NSvgl6bio-1", },
            ],
            mockupImages: [
                ['/images/projects/ausvision/home_map.webp', '/images/projects/ausvision/home_list.webp'],
                ['/images/projects/ausvision/transport_selection.webp', '/images/projects/ausvision/route_view.webp'],
                ['/images/projects/ausvision/ar_view.webp', '/images/projects/ausvision/ar_warning.webp'],
                // Apple Watch Images :
                // '/images/projects/ausvision/watch_notify_staff.webp'
            ],
            competitorAnalysis: {
                title: 'Competitor Analysis',
                description: [
                    "While Google Maps remains the strongest competitor in navigation, its accessibility features are secondary and lack the detail required for wheelchair users. Other platforms primarily focus on rating accessible venues but rarely provide route-specific guidance.",
                    "None of the competitors analyzed offer detailed navigation based on physical features like ramps, lifts, or accessible routes, nor do they integrate an AR point-of-view experience. This gap highlights a strong opportunity to create a solution that goes beyond ratings and delivers truly inclusive navigation for people with physical disabilities."
                ],
            },
            // personas: {
            //     title: 'User Personas',
            //     images: [
            //         '/images/projects/ausvision/persona_1.webp',
            //         '/images/projects/ausvision/persona_2.webp'
            //     ]
            // }
        },
        {
            id: '2',
            title: 'Foodify',
            subtitle: '2023 ~ Recipe App',
            description: [
                "Foodify is a recipe app designed to help users discover and share new recipes easily. The app features a user-friendly interface that allows users to browse through a wide variety of recipes, save their favorites, plan your meals in your calendar, filter with the ingredients in your fridge,and create shopping lists based on the ingredients needed. The solution includes a personalized recommendation system that suggests recipes based on user preferences and dietary restrictions. Additionally, Foodify offers step-by-step cooking instructions, nutritional information, and the ability to add and share your own recipes with the community."
            ],
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
            // competitorAnalysis: {
            //     title: 'Competitor Analysis',
            //     description: [
            //         "While Google Maps remains the strongest competitor in navigation, its accessibility features are secondary and lack the detail required for wheelchair users. Other platforms primarily focus on rating accessible venues but rarely provide route-specific guidance.",
            //         "None of the competitors analyzed offer detailed navigation based on physical features like ramps, lifts, or accessible routes, nor do they integrate an AR point-of-view experience. This gap highlights a strong opportunity to create a solution that goes beyond ratings and delivers truly inclusive navigation for people with physical disabilities."
            //     ],
            // },
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
            <div className="min-h-dvh w-full pt-4 px-4 sm:pt-8 sm:px-8 flex flex-col smooth-height">
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
            <Footer />
		</main>
    );
}
