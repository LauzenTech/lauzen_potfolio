"use client";

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiMonitor } from 'react-icons/fi';
import styles from './services.module.css';

const services = [
    {
        icon: FiTarget,
        title: "Desenvolvimento de MVP",
        description: "Transformo ideias em produtos viáveis rapidamente. Foco no 'Time-to-Market' para validar hipóteses de negócio com o menor custo e maior impacto possível."
    },
    {
        icon: FiTrendingUp,
        title: "Consultoria Estratégica",
        description: "Alinhamento entre tecnologia e objetivos comerciais. Ajudo a identificar gargalos, otimizar processos e escolher as ferramentas certas para escalar a sua operação."
    },
    {
        icon: FiMonitor,
        title: "Web Apps & Dashboards",
        description: "Criação de painéis administrativos, SaaS e sistemas internos complexos. Interfaces intuitivas que facilitam a gestão do negócio e aumentam a produtividade."
    }
];

export default function Services() {
    return (
        <section id="servicos" className={styles.section}>
            <div className={styles.header}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ color: 'var(--primary-orange)' }}>03.</span> Serviços
                </motion.h2>
                <motion.div
                    className={styles.line}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.div>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={styles.icon}>
                            <service.icon />
                        </div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDesc}>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
