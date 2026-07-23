"use client";

import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './projects.module.css';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsGrid() {
    return (
        <section id="projetos" className={styles.section}>
            <div className={styles.header}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Ideias transformadas em impacto
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ color: '#a8b2d1', marginTop: '0.8rem', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.6' }}
                    >
                        Cada projeto começou exatamente da mesma forma. Não com código, mas com uma pergunta. Porque acredito que as melhores soluções são consequência das perguntas certas.
                    </motion.p>
                </div>
            </div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                    >
                        {/* Overlay Link for Main Card Action */}
                        <Link
                            href={`/projetos/${project.slug}`}
                            className={styles.overlayLink}
                            aria-label={`View project ${project.title}`}
                        />

                        <div className={styles.cardInner}>
                            {project.image && (
                                <div className={styles.cardImageWrapper}>
                                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.cardImage} />
                                    {project.tags.length > 0 && (
                                        <div className={styles.tagOverlay}>
                                            {project.tags[0]}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className={styles.cardContent}>
                                {((project.github && project.github !== '#') || (project.link && project.link !== '#')) && (
                                    <div className={styles.metaData}>
                                        {project.github && project.github !== '#' && (
                                            <a href={project.github} className={styles.iconLink} title="GitHub" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                        {project.github && project.github !== '#' && project.link && project.link !== '#' && (
                                            <span className={styles.dot}>·</span>
                                        )}
                                        {project.link && project.link !== '#' && (
                                            <a href={project.link} className={styles.iconLink} title="Live Project" target="_blank" rel="noopener noreferrer">
                                                Live Preview
                                            </a>
                                        )}
                                    </div>
                                )}

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
