"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Lauzen<span>.</span>
            </div>

            {/* Desktop Links */}
            <ul className={styles.links}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/#sobre" className={styles.link}>Sobre</Link></li>
                <li><Link href="/#servicos" className={styles.link}>Serviços</Link></li>
                <li><Link href="/#projetos" className={styles.link}>Projetos</Link></li>
            </ul>

            <Link href="#contato" className={styles.cta}>
                Contacte-me
            </Link>

            {/* Mobile Menu Icon */}
            <div className={styles.mobileToggle} onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <ul className={styles.mobileLinks}>
                            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link href="/#sobre" onClick={toggleMenu}>Sobre</Link></li>
                            <li><Link href="/#servicos" onClick={toggleMenu}>Serviços</Link></li>
                            <li><Link href="/#projetos" onClick={toggleMenu}>Projetos</Link></li>
                            <li><Link href="#contato" onClick={toggleMenu}>Contacte-me</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
