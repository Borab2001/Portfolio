import styles from "./style.module.css";
import { useState } from 'react';

import Project from './project/Index';
import Modal from './modal/Index';

export default function Index() {

    const projects = [
        {
          title: "Curious",
          subtitle: "Knowledge portal powered with ChatGPT built with Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose.",
          src: "curious.webp",
          href: "https://verycurious.xyz/",
          color: "#706D63"
        },
        {
          title: "Link",
          subtitle: "Full stack real-time messaging app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma, MongoDB & Pusher.",
          src: "link.webp",
          href: "https://link-bb.vercel.app/",
          color: "#4F46E5"
        },
        {
          title: "Foodify",
          subtitle: "Full stack multi-functional recipe app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma & MongoDB.",
          src: "foodify.webp",
          href: "https://foodifyapp.vercel.app/",
          color: "#4CD264"
        },
        {
          title: "Cinephile",
          subtitle: "Full Stack Movie Streaming app built with Next.js, React.js, TailwindCSS, NextAuth, Prisma & MongoDB.",
          src: "cinephile.webp",
          href: "https://cinephileapp.vercel.app/",
          color: "#000000"
        },
        {
          title: "Cypheme",
          subtitle: "Cypheme Anti-Counterfeit Technologies website which included visual rebranding, administrative automation, code optimization, cross-platform compatibility & numerous other landing pages.",
          src: "cypheme.webp",
          href: "https://cypheme.com/",
          color: "#8C8C8C"
        },
        {
          title: "Groupe BNSB",
          subtitle: "Website of Groupe BNSB - Design & Sourcing office built with HTML, CSS & JS (New version built with Next.js, React.js, FramerMotion, GSAP & LenisScroll coming soon).",
          src: "groupebnsb.webp",
          href: "https://groupe-bnsb.com/",
          color: "#EFE8D3"
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