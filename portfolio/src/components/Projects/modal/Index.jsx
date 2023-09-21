"use client";

import React, { useEffect, useRef } from "react";
import styles from './style.module.css';
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
    initial: {scale: 0, x: "0%", y: "0%"},
    open: {scale: 1, x: "0%", y: "0%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "0%", y: "0%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Index({modal, projects}) {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    const activeProjectHref = projects[modal.index]?.href;

    useEffect(() => {
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

        // Inside the useEffect hook:

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const containerRect = modalContainer.current.getBoundingClientRect();
            const cursorRect = cursor.current.getBoundingClientRect();
            
            const xContainer = clientX - containerRect.width / 2;
            const yContainer = clientY - containerRect.height / 2;

            xMoveContainer(xContainer);
            yMoveContainer(yContainer);

            // Check if real cursor overlaps with custom cursor
            if(clientX > cursorRect.left && clientX < cursorRect.right && clientY > cursorRect.top && clientY < cursorRect.bottom) {
                // If they overlap, change the real cursor style to pointer
                document.body.style.cursor = 'pointer';
            } else {
                // Otherwise, reset the cursor style
                document.body.style.cursor = 'auto';
            }
        });

        const handleClick = (e) => {
            const { clientX, clientY } = e;
            const cursorRect = cursor.current.getBoundingClientRect();
            
            // Check if real cursor overlaps with custom cursor
            if(clientX > cursorRect.left && clientX < cursorRect.right && clientY > cursorRect.top && clientY < cursorRect.bottom){
                // If they overlap, navigate to the desired URL
                window.location.href = activeProjectHref;
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        }

    }, [projects, modal.index, activeProjectHref])


    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.modalContainer}>
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
                <motion.div ref={cursor} href={activeProjectHref} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.cursor}>
                    <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.cursorLabel}>View</motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}
