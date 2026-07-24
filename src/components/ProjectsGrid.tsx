"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './projects.module.css';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsGrid() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Animate header elements
        const headerElems = document.querySelectorAll<HTMLElement>('.project-header-elem');
        const cards = document.querySelectorAll<HTMLElement>('.gsap-project-card');

        if (!headerElems.length && !cards.length) return;

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    setTimeout(() => {
                        gsap.fromTo(el,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                        );
                    }, i * 150);
                    headerObserver.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const card = entry.target as HTMLElement;
                    setTimeout(() => {
                        gsap.fromTo(card,
                            { y: 60, opacity: 0, rotationX: -12, scale: 0.92 },
                            { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 0.8, ease: "power2.out" }
                        );
                    }, i * 120);
                    cardObserver.unobserve(card);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        headerElems.forEach(el => {
            gsap.set(el, { opacity: 0 });
            headerObserver.observe(el);
        });
        cards.forEach(card => {
            gsap.set(card, { opacity: 0 });
            cardObserver.observe(card);
        });

        return () => {
            headerObserver.disconnect();
            cardObserver.disconnect();
        };
    }, []);

    return (
        <section id="projetos" className={styles.section} ref={sectionRef}>
            <div className={styles.header}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2
                        className={`${styles.title} project-header-elem`}
                    >
                        Ideias transformadas em impacto
                    </h2>
                    <p
                        className="project-header-elem"
                        style={{ color: '#a8b2d1', marginTop: '0.8rem', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.6' }}
                    >
                        Cada projeto começou exatamente da mesma forma. Não com código, mas com uma pergunta. Porque acredito que as melhores soluções são consequência das perguntas certas.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.card} gsap-project-card`}
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
                    </div>
                ))}
            </div>
        </section>
    );
}
