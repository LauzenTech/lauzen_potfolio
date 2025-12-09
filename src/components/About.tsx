"use client";

import { motion } from 'framer-motion';
import styles from './about.module.css';

export default function About() {
    return (
        <section id="sobre" className={styles.aboutSection}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--primary-orange)' }}>02.</span> Sobre Mim
                <span className={styles.line}></span>
            </motion.h2>

            <div className={styles.content}>
                <motion.div
                    className={styles.textColumn}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        A minha missão é construir software eficiente que <span className={styles.highlight}>resolva as dificuldades do cliente</span> e
                        traga resultados tangíveis para a organização. Não entrego apenas código; entrego soluções de negócio.
                    </p>
                    <p>
                        Com uma abordagem focada em <strong>ROI</strong> (Retorno sobre Investimento), priorizo funcionalidades que trazem valor real
                        desde o primeiro dia. Acredito na metodologia MVP para validar hipóteses rapidamente e escalar com segurança.
                    </p>
                    <p>
                        Seja a liderar equipas técnicas ou a desenvolver arquiteturas complexas, o meu objetivo é sempre o mesmo:
                        conectar a tecnologia aos objetivos estratégicos da empresa.
                    </p>
                </motion.div>

                <div className={styles.statsGrid}>
                    {/* Animated Stats */}
                    {[
                        { label: 'Foco em Resultados', value: 'ROI' },
                        { label: 'Entrega Contínua', value: 'MVP' },
                        { label: 'Anos de Exp.', value: '+5' },
                        { label: 'Comprometimento', value: '100%' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
