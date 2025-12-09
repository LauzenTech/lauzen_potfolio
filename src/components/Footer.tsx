"use client";

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink}><FiGithub /></a>
                <a href="https://www.linkedin.com/in/ladislau-piedoso-borges-402800273/" target="_blank" rel="noreferrer" className={styles.socialLink}><FiLinkedin /></a>
                <a href="mailto:seuemail@exemplo.com" className={styles.socialLink}><FiMail /></a>
            </div>
            <p className={styles.copyright}>Desenvolvido por Ladislau Piedoso Borges</p>
        </footer>
    );
}
