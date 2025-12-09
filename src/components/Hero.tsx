"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './hero.module.css';
import RetroBackground from './RetroBackground';

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
    return (
        <section className={styles.hero}>
            <RetroBackground />
            <div className={styles.contentWrapper}>

                <div className={styles.greeting}>
                    <TypewriterText text="Olá, o meu nome é" />
                </div>

                <h1 className={styles.headline}>
                    <TypewriterText text="Ladislau Piedoso Borges." />
                </h1>

                <h2 className={styles.subheadline}>
                    <TypewriterText text="Desenvolvedor de Software Orientado ao Negócio." />
                </h2>

                {/* Description and buttons fade in normally to not be annoying */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <p className={styles.description}>
                        Vou além do código: traduzo metas estratégicas em soluções técnicas com alto
                        <strong style={{ color: 'var(--foreground)' }}> ROI</strong>.
                        Foco em <strong style={{ color: 'var(--foreground)' }}>MVP</strong> e priorização por valor,
                        garantindo que cada funcionalidade impulsione o crescimento do seu negócio.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="#projetos" className={styles.primaryBtn}>
                            Ver o meu trabalho
                        </Link>
                        <Link href="#contato" className={styles.secondaryBtn}>
                            Contacte-me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
