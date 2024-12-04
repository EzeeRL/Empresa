import React, { useState } from "react";
import "./front.css";
function Frontend() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Mostrar 3 proyectos inicialmente

  // Lista de proyectos
  const projects = [
    {
      id: 1,
      img: "https://portfolio-juanmanuel.netlify.app/tienda-jose.png",
      description:
        "Rediseño de e-commerce con experiencia fluida en todos los dispositivos.",
    },
    {
      id: 2,
      img: "https://portfolio-juanmanuel.netlify.app/chat.png",
      description:
        "Plataforma educativa con interfaz moderna y optimizada para aprendizaje.",
    },
    {
      id: 3,
      img: "https://portfolio-juanmanuel.netlify.app/498shots_so.png",
      description:
        "Dashboard interactivo para análisis de datos en tiempo real.",
    },
    {
      id: 4,
      img: "https://media.licdn.com/dms/image/v2/D4D2DAQEm1H3HB5gfzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730570025155?e=1733670000&v=beta&t=SzldoGeMgyGlKPkSpG1d5hZ2C5j7OGMDC-sruDrM_zo",
      description: "Landing page minimalista para una startup tecnológica.",
    },
    {
      id: 5,
      img: "https://portfolio-juanmanuel.netlify.app/beauty.png",
      description:
        "Sistema de gestión para reservas de eventos con diseño atractivo.",
    },
    {
      id: 6,
      img: "https://portfolio-juanmanuel.netlify.app/fierros.png",
      description:
        "Aplicación de productividad con interfaz intuitiva y rápida.",
    },
  ];

  // Función para mostrar más proyectos
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3); // Mostrar 3 proyectos más
  };
  const showLessProjects = () => {
    setVisibleProjects((prev) => (prev > 3 ? prev - 3 : 3)); // Reducir a 3 como mínimo
  };

  return (
    <div className="frontend-page">
      <header className="frontend-header">
        <h1>Desarrollo Frontend</h1>
        <p>
          Creamos interfaces que no solo lucen increíbles, sino que también
          están diseñadas para captar y retener a tus usuarios. Nuestro enfoque
          se basa en diseño centrado en el usuario, rendimiento superior y
          tecnologías modernas.
        </p>
      </header>

      <section className="frontend-content">
        <div className="frontend-feature">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            Sabemos que tu sitio web es tu carta de presentación. Por eso,
            combinamos creatividad y funcionalidad para garantizar que cada
            pixel y cada línea de código cuenten. ¡Lleva tu marca al siguiente
            nivel con nosotros!
          </p>
        </div>
        <div className="frontend-feature">
          <h2>Nuestra Experiencia</h2>
          <p>
            Con años de experiencia en el desarrollo frontend, hemos trabajado
            con clientes de diferentes industrias, ayudándolos a transformar sus
            ideas en productos digitales exitosos. Somos expertos en tecnologías
            como React, TailwindCSS y TypeScript.
          </p>
        </div>
        <div className="frontend-feature">
          <h2>Resultados Medibles</h2>
          <p>
            Diseñamos con un enfoque estratégico para optimizar tasas de
            conversión, mejorar la retención de usuarios y ofrecer experiencias
            que dejan una impresión duradera.
          </p>
        </div>
      </section>

      <section className="frontend-portfolio">
        <h2>Ejemplos de Nuestro Trabajo</h2>
        <div className="portfolio-grid">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.img} alt={`Ejemplo Proyecto ${project.id}`} />
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="project-buttons">
          {visibleProjects < projects.length && (
            <button className="cta-secondary" onClick={showMoreProjects}>
              Ver Más Proyectos
            </button>
          )}
          {visibleProjects > 3 && (
            <button className="cta-secondary" onClick={showLessProjects}>
              Ver Menos Proyectos
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Frontend;
