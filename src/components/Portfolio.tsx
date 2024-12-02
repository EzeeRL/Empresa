import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce AI Assistant",
      description: "Plataforma de comercio electrónico con chatbot integrado",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "IA", "WhatsApp API"]
    },
    {
      title: "Sistema de Reservas",
      description: "Aplicación web para gestión de reservas con asistente virtual",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Python", "ChatGPT API"]
    },
    {
      title: "Portal Educativo",
      description: "Plataforma de aprendizaje con tutor virtual integrado",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Django", "IA"]
    }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestro Portfolio</h2>
          <p className={styles.subtitle}>
            Proyectos destacados que demuestran nuestra experiencia
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                <p className={styles.description}>
                  {project.description}
                </p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.containerButton}>
                <button className={styles.viewButton}>
                  Ver Proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;