import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import ProjectCard from "./ProjectCard";

const proyectos = [
  {
    title: "Calculadora",
    description:
      "Calculadora científica que cuenta con funciones básicas y Test, subida a la web del curso",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/052/637/687/non_2x/futuristic-glowing-calculator-displaying-number-8251-on-dark-background-vector.jpg", 
    techStack: ["React", "Vite", "CSS"],
    repoLink: "https://github.com/SaintPage/Calculadora_Web/",
    demoLink: "https://calicheoficial.lat/23661/Calculadora/"
  },
  {
    title: "PharmaCenter",
    description:
      "Organización de medicamentos de una clínica ubicada en Quetzaltenango",
    imageSrc: "https://www.inside-pharmacy.com/wp-content/uploads/2019/06/farmacias-modernas-1024x682.jpg",
    techStack: ["React", "Vite", "Node.js", "Express", "CSS"],
    repoLink: "https://github.com/Josero31/pharmacenter_proyecto",
    demoLink: null
  },
  
];
export default function ProjectsSection() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  return (
    <section
      id="projects"
      ref={ref}
      className={`scrollContainer ${visible ? "visible" : ""}`}
      style={{
        backgroundColor: "#3d3d3d",     
        padding: "3rem 0 12rem",              
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3.25rem",
            fontWeight: 700,
            marginBottom: "2rem",
            color: "#eaeaea",
          }}
        >
          Proyectos
        </h2>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          }}
        >
          {proyectos.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}