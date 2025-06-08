import React from "react";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import InspirationSection from "./components/InspirationSection";  
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <Layout>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" style={{ backgroundColor: "#f3f4f6" }}>
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills" style={{ backgroundColor: "#f3f4f6" }}>
        <SkillsSection />
      </section>

      {/* Aquí añadimos tu sección de inspiración */}
      <section id="inspiration">
        <InspirationSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </Layout>
  );
}
