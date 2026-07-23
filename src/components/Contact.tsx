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
                style={{ color: 'var(--primary-orange)', fontFamily: 'monospace', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                A minha filosofia
            </motion.p>

            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                O Impacto Invisível
            </motion.h2>


            <motion.blockquote
                style={{ fontStyle: 'italic', color: '#f4f4f5', fontSize: '1.8rem', maxWidth: '800px', margin: '3rem auto 4rem', textAlign: 'center', lineHeight: '1.5', fontWeight: '500' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                "As melhores soluções não começam quando alguém escreve a primeira linha de código. Começam quando alguém faz a pergunta certa."
            </motion.blockquote>

            <motion.button
                onClick={() => setIsModalOpen(true)}
                className={styles.emailBtn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                Vamos Conversar
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
