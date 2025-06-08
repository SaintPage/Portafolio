import React from "react";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  techStack,
  repoLink,
  demoLink
}) {
  return (
    <div style={cardStyle}>
      {imageSrc && (
        <div style={imageWrapperStyle}>
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            style={imageStyle}
          />
        </div>
      )}
      <div style={contentStyle}>
        <h3 style={titleCardStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
        <p style={techStyle}>
          <strong>Tecnologías:</strong> {techStack.join(", ")}
        </p>
        <div style={linksContainer}>
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Repositorio
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Enlace
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "0.75rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  minWidth: "320px",        
  minHeight: "480px"        
};

const imageWrapperStyle = {
  width: "100%",
  height: "300px",         
  overflow: "hidden"
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const contentStyle = {
  padding: "1.5rem",        
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const titleCardStyle = {
  fontSize: "3rem",          
  fontWeight: "600",
  marginBottom: "0.75rem",
  color: "#1f2937"
};

const descStyle = {
  fontSize: "1.5rem",        
  color: "#4b5563",
  marginBottom: "1rem",
  flexGrow: 1
};

const techStyle = {
  fontSize: "1.50rem",
  color: "#6b7280",
  marginBottom: "1.5rem"
};

const linksContainer = {
  display: "flex",
  gap: "1rem"
};

const linkStyle = {
  color: "#3b82f6",
  fontWeight: "500",
  textDecoration: "underline",
  fontSize: "1.75rem"           
};
