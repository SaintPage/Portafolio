import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Sobre mí",   to: "#about"   },
    { label: "Proyectos",   to: "#projects"},
    { label: "Habilidades", to: "#skills"  },
    { label: "Contacto",    to: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        backgroundColor: scrolled ? "#181414" : "transparent",
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        color: "#ffffff",
        padding: "1.5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Aquí cambias el tamaño del título */}
        <h1 style={{ margin: 0, fontSize: "2rem" }}>
          Mi Portafolio
        </h1>

        <ul style={{ display: "flex", gap: "1rem" }}>
          {menuItems.map(({ label, to }) => (
            <li key={to}>
              <a
                href={to}
                style={{
                  color: "inherit",
                  textTransform: "capitalize",
                  fontSize: "1.25rem"    
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
