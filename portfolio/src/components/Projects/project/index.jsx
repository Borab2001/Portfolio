import React from 'react';
import styles from './style.module.css';

export default function index({index, title, subtitle, setModal}) {
    return (
        <div className={styles.project} onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}}>
            <div className={styles.projectContent}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <p className={styles.projectCategory}>Design &amp; Development</p>
        </div>
    )
}