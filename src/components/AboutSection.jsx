import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.container} ${visible ? styles.visible : ""}`}
    >
      <h2 className={styles.title}>Sobre mí</h2>

      <p className={styles.paragraph}>
        Soy estudiante en Ingeniería en Computación en la Universidad del Valle de Guatemala.
        A lo largo del curso de Desarrollo Web y proyectos personales, me caracterizo por ser 
        una persona que aprende rápido y se adapta muy bien a cualquier ambiente de trabajo.
        Me siento cómodo tanto diseñando interfaces atractivas como programando la lógica que 
        hace que una aplicación funcione de manera eficiente.
      </p>

      <p className={styles.paragraph}>
        Más allá de lo académico, soy una persona muy sociable y disfruto colaborar en equipo,
        me llevo bien con mis compañeros, comparto ideas y busco siempre aportar al éxito colectivo.
        En mi tiempo libre, me encanta jugar videojuegos, tocar la guitarra y practicar deporte:
        hago ejercicio de forma regular y juego fútbol, lo que me ayuda a mantenerme activo y con la mente despejada.
        Estas aficiones alimentan mi creatividad y disciplina, cualidades que traslado a mi pasión por la programación 
        y el desarrollo de proyectos innovadores.
      </p>
    </section>
  );
}