import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../styles/SkillsSection.module.css";

const habilidades = [
  { name: "JavaScript ", level: "Avanzado" },
  { name: "React", level: "Intermedio/Avanzado" },
  { name: "Vite", level: "Intermedio" },
  { name: "C++", level: "Intermedio" },
  { name: "Css", level: "Intermedio" },
  { name: "Java", level: "Intermedio" },
  { name: "Python", level: "Avanzado" },
  { name: "Postgre/SQL", level: "Intermedio"},
   { name: "C#", level: "Intermedio"}
];

export default function SkillsSection() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  return (
    <section
      id="skills"
      ref={ref}
      className={`scrollContainer ${visible ? "visible" : ""}`}
    >
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Habilidades Técnicas</h2>
          <div className={styles.grid}>
            {habilidades.map((skill, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>{skill.name}</div>
                <div className={styles.cardBody}>{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
