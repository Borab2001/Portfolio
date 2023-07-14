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
    // const cursor = useRef(null);
    // const cursorLabel = useRef(null);

    useEffect(() => {
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

        // let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        // let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

        // let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        // let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})


        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const containerRect = modalContainer.current.getBoundingClientRect();
            // const cursorRect = cursor.current.getBoundingClientRect();
            // const cursorLabelRect = cursorLabel.current.getBoundingClientRect();
            
            const xContainer = clientX - containerRect.width / 2;
            const yContainer = clientY - containerRect.height / 2;
            
            // const xCursor = clientX - cursorRect.width / 2;
            // const yCursor = clientY - cursorRect.height / 2;
            
            // const xCursorLabel = clientX - cursorLabelRect.width / 2;
            // const yCursorLabel = clientY - cursorLabelRect.height / 2;
            
            // gsap.to(container.current, {left: x, top: y, duration: 0.8, ease: "power3"});
            xMoveContainer(xContainer);
            yMoveContainer(yContainer);
            // xMoveCursor(xCursor);
            // yMoveCursor(yCursor);
            // xMoveCursorLabel(xCursorLabel);
            // yMoveCursorLabel(yCursorLabel);
        });
    }, [])
    

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
            </motion.div>
            {/* <motion.a ref={cursor} href={href} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.cursor}></motion.a>
            <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className={styles.cursorLabel}>View</motion.div> */}
        </>
    )
}