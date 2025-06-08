import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} • Ángel Mérida. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

const footerStyle = {
  fontSize: "1.25rem",
  backgroundColor: "#1f2937",
  color: "#f9fafb",           
  padding: "1rem 0",
  marginTop: "auto"
};

const footerContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center"
};

