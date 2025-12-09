"use client";

import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './projects.module.css';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsGrid() {
    return (
        <section id="projetos" className={styles.section}>
            <div className={styles.header}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ color: 'var(--primary-orange)' }}>04.</span> Projetos Selecionados
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
                {projects.map((project, index) => (
                    <Link href={`/projetos/${project.slug}`} key={project.id} style={{ textDecoration: 'none' }}>
                        <motion.div
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.folderIcon}>
                                    <FiFolder />
                                </div>
                                <div className={styles.links}>
                                    <div className={styles.iconLink} onClick={(e) => e.stopPropagation()} title="GitHub">
                                        <a href={project.github}><FiGithub /></a>
                                    </div>
                                    <div className={styles.iconLink} onClick={(e) => e.stopPropagation()} title="External Link">
                                        <a href={project.link}><FiExternalLink /></a>
                                    </div>
                                </div>
                            </div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
