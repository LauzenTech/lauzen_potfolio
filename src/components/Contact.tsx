"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiX, FiSend } from 'react-icons/fi';
import styles from './contact.module.css';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

            <motion.button
                onClick={() => setIsModalOpen(true)}
                className={styles.emailBtn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                Diga Olá
            </motion.button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                                <FiX />
                            </button>

                            <h3 className={styles.modalTitle}>Escolha uma opção</h3>

                            <div className={styles.modalOptions}>
                                <a href="mailto:ladislaupiedoso@gmail.com" className={styles.modalOption}>
                                    <FiMail className={styles.icon} />
                                    <span>Enviar Email</span>
                                </a>

                                <a href="https://www.linkedin.com/in/ladislau-piedoso-borges-402800273/" target="_blank" rel="noopener noreferrer" className={styles.modalOption}>
                                    <FiLinkedin className={styles.icon} />
                                    <span>LinkedIn</span>
                                </a>

                                <a href="https://wa.me/244951927849" target="_blank" rel="noopener noreferrer" className={styles.modalOption}>
                                    <FiPhone className={styles.icon} />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
