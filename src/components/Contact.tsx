"use client";

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <section id="contato" className={styles.section}>
            <motion.p
                style={{ color: 'var(--primary-orange)', fontFamily: 'monospace', marginBottom: '1rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                05. E agora?
            </motion.p>

            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Vamos Conversar
            </motion.h2>

            <motion.p
                className={styles.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                Estou sempre disponível para novas oportunidades e parcerias estratégicas.
                Se tiver um projeto em mente ou quiser discutir como optimizar o seu negócio através da tecnologia,
                a minha caixa de entrada está aberta.
            </motion.p>

            <motion.a
                href="mailto:seuemail@exemplo.com"
                className={styles.emailBtn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                Diga Olá
            </motion.a>

        </section>
    );
}
