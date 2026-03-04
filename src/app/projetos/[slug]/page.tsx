"use client";

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft, FiTarget, FiCheckCircle } from 'react-icons/fi';
import styles from './project.module.css';
import pageStyles from '../../page.module.css';
import { motion } from 'framer-motion';
import { use } from 'react';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className={pageStyles.page}>
            <Navbar />

            {/* Hero Section */}
            <main className={pageStyles.main}>
                <div className={styles.hero}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/#projetos" className={styles.backLink}>
                            <FiArrowLeft /> Voltar aos Projetos
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.metaBar}>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>#{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.secondaryLink}`}>
                                    <FiGithub /> Código
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                                    <FiExternalLink /> Ver Projeto
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Featured Media - Robust Rendering */}
                {(project.video || project.image) && (
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className={styles.imageFrame}>
                            {project.video ? (
                                <video
                                    src={project.video}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.projectImage}
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Grid Content */}
                <div className={styles.contentGrid}>
                    <motion.section
                        className={styles.sectionCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className={styles.sectionTitle}>
                            <FiTarget className={styles.icon} />
                            O Desafio
                        </h2>
                        <p className={styles.sectionText}>{project.challenge}</p>
                    </motion.section>

                    <motion.section
                        className={styles.sectionCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className={styles.sectionTitle}>
                            <FiCheckCircle className={styles.icon} />
                            A Solução
                        </h2>
                        <p className={styles.sectionText}>{project.solution}</p>
                    </motion.section>
 
                    {/* ROI Banner */}
                    <motion.div
                        className={styles.roiContainer}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.roiLabel}>Impacto no Negócio</span>
                        <h3 className={styles.roiValue}>{project.roi}</h3>
                    </motion.div>
                </div>
                <Contact />
                <Footer />
            </main>
        </div>
    );
}
