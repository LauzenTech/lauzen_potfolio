import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Lauzen<span>.</span>
            </div>

            <ul className={styles.links}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="#projetos" className={styles.link}>Projetos</Link></li>
                <li><Link href="#sobre" className={styles.link}>Sobre</Link></li>
            </ul>

            <Link href="#contato" className={styles.cta}>
                Contacte-me
            </Link>
        </nav>
    );
}
