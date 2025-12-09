"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './hero.module.css';
import RetroBackground from './RetroBackground';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <RetroBackground />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className={styles.greeting}>Olá, o meu nome é</span>
                <h1 className={styles.headline}>Ladislau Piedoso Borges.</h1>
                <h2 className={styles.subheadline}>Desenvolvedor de Software Orientado ao Negócio.</h2>

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
        </section>
    );
}
