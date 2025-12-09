"use client";

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import styles from './project.module.css';
import { motion } from 'framer-motion';
import { use } from 'react';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/#projetos" className={styles.backLink}>
                    <FiArrowLeft style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Voltar aos Projetos
                </Link>

                {/* Header */}
                <header className={styles.header}>
                    <motion.h1
                        className={styles.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className={styles.meta}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.tags}>
                            {project.tags.map(tag => (
                                <span key={tag} className={styles.tag}>#{tag}</span>
                            ))}
                        </div>

                        <div className={styles.links}>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <FiGithub /> Código
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <FiExternalLink /> Live Demo
                            </a>
                        </div>
                    </motion.div>
                </header>

                {/* Case Study Content */}
                <div className={styles.content}>
                    <motion.section
                        className={styles.section}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.sectionTitle}>O Desafio</h2>
                        <p className={styles.sectionText}>{project.challenge}</p>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.sectionTitle}>A Solução</h2>
                        <p className={styles.sectionText}>{project.solution}</p>
                    </motion.section>

                    <motion.section
                        className={`${styles.section} ${styles.roiSection}`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.roiTitle}>Impacto & ROI</h2>
                        <p className={styles.roiText}>{project.roi}</p>
                    </motion.section>
                </div>

            </motion.div>
            <Contact />
        </>
    );
}
