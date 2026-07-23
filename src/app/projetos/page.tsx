"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import styles from './projects-index.module.css';
import pageStyles from '../page.module.css';

export default function ProjectsIndex() {
    return (
        <div className={pageStyles.page}>
            <Navbar />
            <div id="main-scroll" className={pageStyles.main}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.header}
                    >
                        <h1 className={styles.title}>Todos os Projetos</h1>
                        <p className={styles.subtitle}>
                            Exploração detalhada de soluções técnicas e impacto de negócio.
                        </p>
                    </motion.div>

                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Link href={`/projetos/${project.slug}`} className={styles.overlayLink} />

                                <div className={styles.cardTop}>
                                    <div className={styles.folderIcon}>
                                        <FiFolder />
                                    </div>
                                    <div className={styles.externalLinks}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                            <FiGithub />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                            <FiExternalLink />
                                        </a>
                                    </div>
                                </div>

                                <h2 className={styles.projectTitle}>{project.title}</h2>
                                <p className={styles.projectDesc}>{project.description}</p>

                                <div className={styles.footer}>
                                    <div className={styles.tags}>
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <span className={styles.readMore}>
                                        Ver Caso <FiArrowRight />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
