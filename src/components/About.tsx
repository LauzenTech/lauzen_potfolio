"use client";

import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiCompass, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi';
import styles from './about.module.css';

// Component to handle counting animation1
function Counter({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse numeric part and suffix/prefix
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const prefix = value.startsWith('+') ? '+' : '';
    const suffix = value.endsWith('%') ? '%' : '';
    const isNumber = !isNaN(parseInt(value[0])) || value.startsWith('+');

    const count = useSpring(0, {
        stiffness: 50,
        damping: 15,
        duration: 2
    });

    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView && isNumber) {
            count.set(numericValue);
        }
    }, [isInView, numericValue, isNumber, count]);

    // If it's not a number (e.g. "ROI", "MVP"), just return text
    if (!isNumber) return <span>{value}</span>;

    return (
        <span ref={ref} style={{ display: 'inline-flex' }}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function About() {
    const [activeBadge, setActiveBadge] = useState<number | null>(null);

    return (
        <section id="sobre" className={styles.aboutSection}>
            <div className={styles.content}>
                {/* Left Column: Pill Badge, Bio Text & Title */}
                <motion.div
                    className={styles.leftColumn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.pillBadge}>SOBRE MIM</div>
                    
                    <h2 className={styles.title}>
                        Não desenvolvo software, Desenvolvo mudanças.
                    </h2>

                    <div className={styles.textColumn}>
                        <p>
                            Toda tecnologia resolve alguma coisa. Mas a verdadeira questão nunca foi a tecnologia. Foi sempre o <span className={styles.highlight}>impacto que ela é capaz de criar</span>.
                        </p>
                        <p>
                            É por isso que não começo pelos frameworks, pelas linguagens ou pelas funcionalidades. Começo por compreender o problema. Porque quando entendemos profundamente um desafio, a tecnologia deixa de ser protagonista. Passa a ser apenas a ferramenta que torna a mudança possível.
                        </p>
                        <p>
                            Não procuro construir aplicações. Procuro criar soluções que simplificam decisões, aproximam pessoas e ajudam organizações a evoluir.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: Photo & Interactive Floating Icon Badges */}
                <motion.div
                    className={styles.rightColumn}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.imageStage}>
                        {/* Central Photo */}
                        <div className={styles.imageFrame}>
                            <Image
                                src="/lads_port.webp"
                                alt="Ladislau Piedoso Borges"
                                width={400}
                                height={500}
                                className={styles.profileImage}
                                priority
                            />
                        </div>

                        {/* Interactive Floating Icon Badges */}
                        {[
                            {
                                id: 0,
                                value: 'IDEIA',
                                icon: <FiCompass className={styles.badgeIcon} />,
                                sub: 'Visão & Diagnóstico',
                                description: 'Toda mudança começa com uma boa pergunta.',
                                positionClass: styles.badgeTopLeft,
                                floatDuration: 4.2,
                                delay: 0
                            },
                            {
                                id: 1,
                                value: 'ENGENHARIA',
                                icon: <FiCpu className={styles.badgeIcon} />,
                                sub: 'Execução Técnica',
                                description: 'Criatividade só gera valor quando executada.',
                                positionClass: styles.badgeTopRight,
                                floatDuration: 5.0,
                                delay: 0.5
                            },
                            {
                                id: 2,
                                value: 'IMPACTO',
                                icon: <FiZap className={styles.badgeIcon} />,
                                sub: 'Transformação Real',
                                description: 'Uma solução vale pela transformação que provoca.',
                                positionClass: styles.badgeBottomLeft,
                                floatDuration: 4.6,
                                delay: 0.2
                            },
                            {
                                id: 3,
                                value: 'EVOLUÇÃO',
                                icon: <FiTrendingUp className={styles.badgeIcon} />,
                                sub: 'Melhoria Contínua',
                                description: 'Nenhum produto termina no lançamento.',
                                positionClass: styles.badgeBottomRight,
                                floatDuration: 5.4,
                                delay: 0.7
                            }
                        ].map((badge) => {
                            const isOpen = activeBadge === badge.id;
                            return (
                                <motion.div
                                    key={badge.id}
                                    layout
                                    onMouseEnter={() => setActiveBadge(badge.id)}
                                    onMouseLeave={() => setActiveBadge(null)}
                                    onClick={() => setActiveBadge(isOpen ? null : badge.id)}
                                    className={`${styles.interactiveBadge} ${badge.positionClass} ${isOpen ? styles.badgeOpen : ''}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{ y: isOpen ? 0 : [0, -6, 0] }}
                                    transition={{
                                        y: isOpen ? { duration: 0.3 } : {
                                            duration: badge.floatDuration,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: badge.delay
                                        },
                                        layout: { type: "spring", stiffness: 120, damping: 18, mass: 0.8 },
                                        opacity: { duration: 0.4 },
                                    }}
                                >
                                    <div className={styles.badgeHeader}>
                                        <span className={styles.iconCircle}>{badge.icon}</span>
                                        <span className={styles.badgeValue}>{badge.value}</span>
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                key="details"
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                                className={styles.badgeDetails}
                                            >
                                                <span className={styles.badgeSub}>{badge.sub}</span>
                                                <p className={styles.badgeDesc}>{badge.description}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
