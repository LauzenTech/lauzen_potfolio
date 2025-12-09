import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <ProjectsGrid />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
