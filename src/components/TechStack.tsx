"use client";

import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiJavascript, SiGit, SiDocker, SiPostgresql, SiSupabase, SiVercel } from 'react-icons/si';
import styles from './techstack.module.css';

const technologies = [
    { name: 'Javascript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function TechStack() {
    return (
        <section className={styles.section}>
            <motion.h3
                className={styles.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Tecnologias & Ferramentas
            </motion.h3>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {technologies.map((tech) => (
                    <motion.div
                        key={tech.name}
                        className={styles.techItem}
                        variants={itemVariants}
                    >
                        <div className={styles.iconWrapper}>
                            <tech.icon />
                        </div>
                        <span className={styles.label}>{tech.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
