"use client";

import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './projects.module.css';

const projects = [
    {
        id: 1,
        title: "AI Chat Interface",
        description: "Uma interface conversacional moderna construída com Next.js e integrações de API de LLM. Foco em UX e streaming de respostas.",
        tags: ["Next.js", "TypeScript", "OpenAI"],
        github: "#",
        link: "#"
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Painel administrativo completo para gestão de vendas e stocks com gráficos em tempo real utilizando Supabase.",
        tags: ["React", "Chart.js", "Supabase"],
        github: "#",
        link: "#"
    },
    {
        id: 3,
        title: "Finance Tracker App",
        description: "Aplicação mobile-first para controlo de finanças pessoais e objetivos de poupança, com modo offline.",
        tags: ["React Native", "Expo", "Node.js"],
        github: "#",
        link: "#"
    },
    {
        id: 4,
        title: "Design System Library",
        description: "Biblioteca de componentes reutilizáveis documentada com Storybook, garantindo consistência visual.",
        tags: ["CSS Modules", "Storybook", "A11y"],
        github: "#",
        link: "#"
    },
    {
        id: 5,
        title: "Project Alpha",
        description: "Sistema de gestão empresarial focado em automação de processos internos.",
        tags: ["Vue.js", "Firebase", "Sass"],
        github: "#",
        link: "#"
    },
    {
        id: 6,
        title: "Portfolio v1",
        description: "Primeira versão do meu portfólio pessoal, com animações personalizadas.",
        tags: ["HTML", "CSS", "GSAP"],
        github: "#",
        link: "#"
    }
];

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
                    <span style={{ color: 'var(--primary-orange)' }}>03.</span> Projetos Selecionados
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
                    <motion.div
                        key={project.id}
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
                                <a href={project.github} className={styles.iconLink} title="GitHub"><FiGithub /></a>
                                <a href={project.link} className={styles.iconLink} title="External Link"><FiExternalLink /></a>
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
                ))}
            </div>
        </section>
    );
}
