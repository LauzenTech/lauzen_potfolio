"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './hero.module.css';


const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.05, // Typing speed
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const TypewriterText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.span
            className={className}
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Faster for descriptions
const fastSentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5, // Start after headline
            staggerChildren: 0.02,
        },
    },
};

const TypewriterParagraph = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.p
            className={className}
            variants={fastSentence}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = [
        "Engenheiro Informático.", 
        "Engenheiro Criativo.",
        "Engenheiro de Soluções.",
        "Engenheiro de Impacto."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <section className={styles.hero}>
            <div className={styles.contentWrapper}>

                <div className={styles.greeting}>
                    <TypewriterText text="Ladislau Piedoso Borges" />
                </div>

                <h1 className={styles.headline}>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titleIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'inline-block', minWidth: '300px' }}
                        >
                            {titles[titleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </h1>

                {/* Description and buttons fade in normally to not be annoying */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <p className={styles.description}>
                        As melhores soluções não começam com código.<br />
                        Começam quando alguém faz a pergunta certa.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="#sobre" className={styles.primaryBtn}>
                            Descobrir a minha forma de pensar
                        </Link>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className={styles.imageBackground}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
            >
                <div className={styles.overlay}></div>
                <Image 
                    src="/capa.gif" 
                    alt="Hero Background" 
                    fill
                    className={styles.heroImage}
                    unoptimized
                />
            </motion.div>
        </section>
    );
}
