import React from "react";
import { background, color } from "storybook/internal/theming";

export default function ContactSection() {
  return (
    
    <section
    style={{
      width: "100%",
      backgroundColor: "#1f2937",
      padding: "0.5rem 0",
       }}
      >
    <div style={contactContainer}>
      <h2 style={contactTitle}>Contáctame</h2>
      <p style={contactText}>
        Si deseas ponerte en contacto conmigo, escríbeme a{" "}
        <a href="mailto:tu.email@ejemplo.com" style={emailLink}>
          papacaliente2.0am@gmail.com
        </a>{" "}
        o sígueme en mis redes:
      </p>
      <div style={socialIcons}>
        <a href="https://github.com/SaintPage" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/angel-merida-4b022136a/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/an.gelm21/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" style={iconStyle} />
        </a>
      </div>
    </div>
    </section>
  );
}

const contactContainer = {
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
  padding: "2rem 1rem",
  backgroundColor: "#1f2937",   
};

const contactTitle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#ffffff"
};

const contactText = {
  fontSize: "1.25rem",
  color: "#ffffff",
  marginBottom: "1.5rem",
  lineHeight: "1.5"
};

const emailLink = {
  color: "#ffffff",
  textDecoration: "underline",
  fontWeight: "500"
};

const socialIcons = {
  display: "flex",
  justifyContent: "center",
  gap: "1.25rem"
};

const iconStyle = {
  width: "64px",
  height: "64px"
};
