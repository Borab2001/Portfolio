"use client";

import React, { useEffect, useRef } from "react";
import styles from './style.module.css';
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    open: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({modal, projects}) {

    const { active, index } = modal;
    const container = useRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const rect = container.current.getBoundingClientRect();
            const x = clientX - rect.width / 2;
            const y = clientY - rect.height / 2;
            gsap.to(container.current, {left: x, top: y, duration: 0.8, ease: "power3"});
        });
    }, [])
    

    return (
        <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                {
                    projects.map((project, index) => {
                        const { title, src, color, href } = project;
                        return (
                            <div key={`modal_${index}`} style={{backgroundColor: color}} className={styles.modal}>
                                <Link href={href}>
                                    <Image 
                                        src={`/images/${src}`}
                                        width={350}
                                        height={0}
                                        alt={`${title} Image`}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}