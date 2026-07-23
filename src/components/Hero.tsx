"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './hero.module.css';


const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.05, // Typing speed
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const TypewriterText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.span
            className={className}
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Faster for descriptions
const fastSentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5, // Start after headline
            staggerChildren: 0.02,
        },
    },
};

const TypewriterParagraph = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.p
            className={className}
            variants={fastSentence}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

const CanvasParticles = ({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number, y: number }> }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            life: number;
            maxLife: number;

            constructor(x: number, y: number) {
                this.x = x + (Math.random() - 0.5) * 40;
                this.y = y + (Math.random() - 0.5) * 40;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 1.2;
                this.speedY = (Math.random() - 0.5) * 1.2 - 0.3; // Drift upwards slightly
                this.maxLife = Math.random() * 60 + 40;
                this.life = this.maxLife;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life--;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.life / this.maxLife})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let lastMousePos = { x: 0, y: 0 };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Add particles if mouse moved
            const dx = mouseRef.current.x - lastMousePos.x;
            const dy = mouseRef.current.y - lastMousePos.y;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                // Add fewer particles for performance, but enough for magic
                for (let i = 0; i < 2; i++) {
                    particles.push(new Particle(mouseRef.current.x, mouseRef.current.y));
                }
                lastMousePos = { ...mouseRef.current };
            }

            particles.forEach((p, index) => {
                p.update();
                p.draw();
                if (p.life <= 0) particles.splice(index, 1);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouseRef]);

    return <canvas ref={canvasRef} className={styles.particlesCanvas} />;
};

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const titles = [
        "Engenheiro Informático.", 
        "Engenheiro Criativo.",
        "Engenheiro de Soluções.",
        "Engenheiro de Impacto."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update CSS variables for the radial mask
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
        
        // Update ref for canvas particles
        mousePos.current = { x, y };
    };

    return (
        <motion.section 
            ref={heroRef}
            className={styles.hero} 
            onMouseMove={handleMouseMove}
        >
            <div className={styles.contentWrapper}>

                <div className={styles.greeting}>
                    <TypewriterText text="Ladislau Piedoso Borges" />
                </div>

                <h1 className={styles.headline}>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titleIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'inline-block', minWidth: '300px' }}
                        >
                            {titles[titleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </h1>

                {/* Description and buttons fade in normally to not be annoying */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <p className={styles.description}>
                        As melhores soluções não começam com código.<br />
                        Começam quando alguém faz a pergunta certa.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="#sobre" className={styles.primaryBtn}>
                            Descobrir a minha forma de pensar
                        </Link>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className={styles.imageBackground}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                variants={{
                    hover: {
                        scale: 1.03,
                        transition: { duration: 0.8, ease: "easeOut" }
                    }
                }}
                transition={{ duration: 2 }}
            >
                <div className={styles.overlay}></div>
                <Image 
                    src="/capa.webp" 
                    alt="Hero Background" 
                    fill
                    className={styles.heroImage}
                    unoptimized
                />
            </motion.div>
            
            <CanvasParticles mouseRef={mousePos} />
        </motion.section>
    );
}
