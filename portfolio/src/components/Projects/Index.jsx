import styles from "./style.module.css";
import { useState } from 'react';

import Project from './project/Index';
import Modal from './modal/Index';

export default function Index() {

    const projects = [
        {
			title: "Curious",
			subtitle: "A social knowledge portal powered with ChatGPT built with Next.js, React, TypeScript, TailwindCSS, Firebase & LangChain.",
			src: "curious.webp",
			href: "https://curious-gpt.vercel.app/",
			color: "#4F46E5",
        },
        {
			title: "Foodify",
			subtitle: "Full stack multi-functional recipe app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma & MongoDB with mockups on Figma.",
			src: "foodify.webp",
			href: "https://foodifyapp.vercel.app/",
			color: "#4CD264"
        },
        {
			title: "Link",
			subtitle: "Full stack real-time messaging app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma, MongoDB & Pusher.",
			src: "link.webp",
			href: "https://link-bb.vercel.app/",
			color: "#1B171C"
        },
        {
			title: "Cinephile",
			subtitle: "Full Stack Movie Streaming app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma & MongoDB.",
			src: "cinephile.webp",
			href: "https://cinephileapp.vercel.app/",
			color: "#390C6F"
        },
        {
			title: "Cypheme",
			subtitle: "Cypheme Anti-Counterfeit Technologies website which included visual rebranding, administrative automation, code optimization, cross-platform compatibility & numerous other landing pages.",
			src: "cypheme.webp",
			href: "https://cypheme.com/",
			color: "#F0EFF9"
        },
        {
			title: "Groupe BNSB",
			subtitle: "Website of Groupe BNSB - Design & Sourcing office, currently in build with Next.js, TypeScript, TailwindCSS FramerMotion and LenisScroll (Old version build with HTML, CSS & JS available on groupe-bnsb.com).",
			src: "groupebnsb.webp",
			href: "https://groupe-bnsb.vercel.app/",
			color: "#ECEFF3"
        },
        {
			title: "Aila Consulting",
			subtitle: "Website of Aila Consulting, currently in build with Next.js, TypeScript, TailwindCSS and FramerMotion.",
			src: "ailaconsulting.webp",
			href: "https://ailaconsulting.vercel.app/",
			color: "#FFFFFF"
        }
    ]

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <div className={styles.projects}>
            <div className={styles.projectsBody}>
                {
                    projects.map((project, index) => {
                        return <Project key={index} index={index} title={project.title} subtitle={project.subtitle} src={project.src} color={project.color} href={project.href} setModal={setModal} />
                    })
                }
            </div>
            <Modal modal={modal} projects={projects} />
        </div>
    )
}