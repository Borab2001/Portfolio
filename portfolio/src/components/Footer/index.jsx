import styles from './style.module.css';

export default function index() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <p>&#169; Bora Balos {currentYear}. All rights reserved</p>
        </div>
    );
}