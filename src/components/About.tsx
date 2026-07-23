"use client";

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
    return (
        <section id="sobre" className={styles.aboutSection}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Não desenvolvo software. Desenvolvo mudanças.
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
                        Toda tecnologia resolve alguma coisa. Mas a verdadeira questão nunca foi a tecnologia. Foi sempre o <span className={styles.highlight}>impacto que ela é capaz de criar</span>.
                    </p>
                    <p>
                        É por isso que não começo pelos frameworks, pelas linguagens ou pelas funcionalidades. Começo por compreender o problema. Porque quando entendemos profundamente um desafio, a tecnologia deixa de ser protagonista. Passa a ser apenas a ferramenta que torna a mudança possível.
                    </p>
                    <p>
                        Não procuro construir aplicações. Procuro criar soluções que simplificam decisões, aproximam pessoas e ajudam organizações a evoluir.
                    </p>
                </motion.div>

                <div className={styles.statsGrid}>
                    {/* Animated Stats */}
                    {[
                        { label: 'Toda mudança começa com uma boa pergunta.', value: 'IDEIA' },
                        { label: 'Criatividade só gera valor quando pode ser executada.', value: 'ENGENHARIA' },
                        { label: 'Uma solução vale pela transformação que provoca.', value: 'IMPACTO' },
                        { label: 'Nenhum produto termina no lançamento.', value: 'EVOLUÇÃO' }
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
                            <span className={styles.statValue}>
                                <Counter value={stat.value} />
                            </span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
