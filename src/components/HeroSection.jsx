import React, { useState, useEffect } from "react";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ajusta el divisor para hacer el zoom más suave o más agresivo
  const scale = 1 + Math.min(scrollY / 2000, 0.2);

  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.bgImage}
        style={{ transform: `scale(${scale})` }}
      />
      <div className={styles.inner}>
        <h1 className={styles.heroTitle}>Ángel Mérida</h1>
        <p className={styles.heroSubtitle}>Portafolio</p>
      </div>
    </div>
  );
}