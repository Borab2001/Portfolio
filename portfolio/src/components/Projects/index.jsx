import styles from "./style.module.css";
import { useState } from 'react';

import Project from './project';

export default function index() {

    const projects = [
        {
          title: "Curious",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
          href: "https://verycurious.xyz/",
          color: "#706D63"
        },
        {
          title: "Link",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
          href: "/",
          color: "#4F46E5"
        },
        {
          title: "Foodify",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
          href: "https://foodifyapp.vercel.app/",
          color: "#4CD264"
        },
        {
          title: "Cinephile",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
          href: "https://cinephileapp.vercel.app/",
          color: "#000000"
        },
        {
          title: "Cypheme",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
          href: "https://cypheme.com/",
          color: "#8C8C8C"
        },
        {
          title: "Groupe BNSB",
          subtitle: "Knowledge portal powered with ChatGPT built in Next.js, React, TailwindCSS, Python (FastAPI), PostgreSQL, Redis, LangChain, Docker & Docker Compose",
          src: "",
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
                        return <Project key={index} index={index} title={project.title} subtitle={project.subtitle} href={project.href} setModal={setModal} />
                    })
                }
            </div>
        </div>
    )
}