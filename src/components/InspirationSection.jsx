import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../styles/InspirationSection.module.css";


export default function InspirationSection() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  return (
    <section
      id="inspiration"
      ref={ref}
      className={`scrollContainer ${visible ? "visible" : ""}`}
    >
      
      <div className={styles.section}>
        {/* contenedor flex que ordena texto e imagen */}
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Mi mayor inspiración</h2>
            <p className={styles.text}>
              Desde pequeño he admirado la disciplina, constancia y excelencia de
              Cristiano Ronaldo tanto dentro como fuera del campo. Su ética de
              trabajo y su mentalidad ganadora me motivan a dar siempre lo mejor
              en cada proyecto.
            </p>
            <p className={styles.text}>
              Cada entrenamiento, cada sacrificio y cada gol me recuerdan que con
              determinación y pasión todo es posible. Aspiro a aplicar esa misma
              pasión en mi carrera como desarrollador: superarme, aprender día a
              día y alcanzar la excelencia en cada línea de código.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/08/09/16915591469321.jpg"
              alt="Cristiano Ronaldo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}