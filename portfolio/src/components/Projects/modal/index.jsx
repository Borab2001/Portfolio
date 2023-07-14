import React from "react";
import styles from './style.module.css';
import Image from "next/image";
import Link from "next/link";

export default function index({modal, projects}) {

    const { active, index } = modal;

    return (
        <div className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                {
                    projects.map((project, index) => {
                        const { title, src, color, href } = project;
                        return (
                            <div key={`modal_${index}`} style={{backgroundColor: color}} className={styles.modal}>
                                <Link href={href}>
                                    <Image 
                                        src={`/images/${src}`}
                                        width={300}
                                        height={0}
                                        alt={`${title} Image`}
                                    />
                                </Link>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}