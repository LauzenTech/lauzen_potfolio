"use client";

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import {
    FiArrowLeft,
    FiCheckCircle,
    FiExternalLink,
    FiGithub,
} from 'react-icons/fi';
import pageStyles from '../../page.module.css';
import styles from './project.module.css';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const hasGithub = project.github && project.github !== '#';
    const hasLiveLink = project.link && project.link !== '#';

    return (
        <div className={pageStyles.page}>
            <Navbar />

            <main id="main-scroll" className={pageStyles.main}>
                <section className={styles.detailPage}>
                    <article className={styles.article}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/#projetos" className={styles.backLink}>
                                <FiArrowLeft /> Voltar aos Projetos
                            </Link>
                        </motion.div>

                        <motion.header
                            className={styles.header}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <p className={styles.eyebrow}>Caso de estudo</p>
                            <h1 className={styles.title}>{project.title}</h1>
                            <p className={styles.description}>{project.description}</p>
                        </motion.header>

                        {(project.video || project.image) && (
                            <motion.div
                                className={styles.mediaFrame}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.25, duration: 0.7 }}
                            >
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className={styles.projectMedia}
                                    />
                                ) : project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 980px) 100vw, 760px"
                                        className={styles.projectMedia}
                                        priority
                                    />
                                ) : null}
                            </motion.div>
                        )}

                        <div className={styles.summaryGrid}>
                            <section className={styles.contentSection}>
                                <span className={styles.sectionLabel}>01</span>
                                <h2>Desafio</h2>
                                <p>{project.challenge}</p>
                            </section>

                            <section className={styles.contentSection}>
                                <span className={styles.sectionLabel}>02</span>
                                <h2>Solução</h2>
                                <p>{project.solution}</p>
                            </section>
                        </div>

                        <section className={styles.impactPanel}>
                            <span className={styles.sectionLabel}>03</span>
                            <h2>Impacto</h2>
                            <p>{project.roi}</p>
                        </section>
                    </article>

                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h2 className={styles.sidebarTitle}>Tecnologias</h2>
                            <div className={styles.sidebarLine}></div>
                            <div className={styles.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h2 className={styles.sidebarTitle}>Resumo</h2>
                            <div className={styles.sidebarLine}></div>
                            <ul className={styles.checkList}>
                                <li><FiCheckCircle /> MVP orientado por valor</li>
                                <li><FiCheckCircle /> UX clara e objetiva</li>
                                <li><FiCheckCircle /> Foco em resultado de negócio</li>
                            </ul>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h2 className={styles.sidebarTitle}>Ações</h2>
                            <div className={styles.sidebarLine}></div>
                            <div className={styles.links}>
                                {hasLiveLink && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                                        <FiExternalLink /> Ver Projeto
                                    </a>
                                )}
                                {hasGithub && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.secondaryLink}`}>
                                        <FiGithub /> Código
                                    </a>
                                )}
                                {!hasLiveLink && !hasGithub && (
                                    <span className={styles.unavailable}>Links indisponíveis no momento.</span>
                                )}
                            </div>
                        </div>

                        <Link href="/#contato" className={styles.ctaButton}>Conversar sobre um projeto</Link>
                    </aside>
                </section>

                <Contact />
                <Footer />
            </main>
        </div>
    );
}
