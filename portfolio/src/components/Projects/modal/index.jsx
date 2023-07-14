import Image from "next/image";
import React from "react";
import { styles } from './style.module.css';

export default function index(modal, projects) {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalSlider}>
                {
                    projects.map((project, index) => {
                        const { src, color, href } = project;
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