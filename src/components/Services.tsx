"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './services.module.css';

const services = [
    {
        title: "Compreender",
        description: "Toda solução começa por ouvir. Antes de pensar em funcionalidades, procuro perceber como as pessoas trabalham, onde existem obstáculos e que mudança realmente faz sentido criar."
    },
    {
        title: "Estruturar",
        description: "Ideias tornam-se valiosas quando deixam de ser abstratas. Transformo problemas complexos em estratégias claras, priorizando aquilo que gera maior impacto."
    },
    {
        title: "Construir",
        description: "Só depois de compreender e estruturar é que a tecnologia entra. Cada linha de código deve aproximar o projeto do objetivo, nunca afastá-lo."
    },
    {
        title: "Evoluir",
        description: "Um produto nunca termina quando é lançado. Os melhores sistemas aprendem, adaptam-se e evoluem juntamente com quem os utiliza."
    }
];

export default function Services() {
    return (
        <section id="abordagem" className={styles.section}>
            <div className={styles.header}>
                <div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        <span style={{ fontSize: '1rem', color: 'var(--primary-orange)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace' }}>Como penso</span>
                        Antes do código
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ marginTop: '1.5rem', whiteSpace: 'pre-line' }}
                    >
                        Grandes projetos não nascem apenas de boas ideias, mas da compreensão profunda de sistemas e de uma sequência de decisões bem tomadas.
                    </motion.p>
                </div>

                <Link href="#contato" className={`${styles.quoteButton} ${styles.desktopBtn}`}>
                    Fale comigo <FiArrowUpRight />
                </Link>
            </div>

            <div className={styles.servicesList}>
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        className={styles.serviceRow}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className={styles.serviceTitle}>
                            <span>{String(index + 1).padStart(2, '0')}.</span>{service.title}
                        </h3>
                        <p className={styles.serviceDesc}>{service.description}</p>
                        <Link href="#contato" className={styles.rowAction} aria-label={`Contactar sobre ${service.title}`}>
                            <FiArrowUpRight />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <Link href="#contato" className={`${styles.quoteButton} ${styles.mobileBtn}`}>
                Fale comigo <FiArrowUpRight />
            </Link>
        </section>
    );
}
