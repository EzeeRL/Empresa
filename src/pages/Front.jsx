import React, { useState } from "react";
import "./front.css";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Frontend() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Mostrar 3 proyectos inicialmente

  const projects = [
    {
      id: 1,
      img: "https://portfolio-juanmanuel.netlify.app/tienda-jose.png",
      title: "E-commerce",
      description:
        "Rediseño de e-commerce con experiencia fluida en todos los dispositivos.",
    },
    {
      id: 2,
      img: "https://portfolio-juanmanuel.netlify.app/chat.png",
      title: "IAGym",
      description:
        "Plataforma educativa con interfaz moderna y optimizada para aprendizaje.",
    },
    {
      id: 3,
      img: "https://portfolio-juanmanuel.netlify.app/498shots_so.png",
      title: "Iglesia VTL",
      description:
        "Dashboard interactivo para análisis de datos en tiempo real.",
    },
    {
      id: 4,
      img: "https://media.licdn.com/dms/image/v2/D4D2DAQEm1H3HB5gfzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730570025155?e=1733670000&v=beta&t=SzldoGeMgyGlKPkSpG1d5hZ2C5j7OGMDC-sruDrM_zo",
      title: "Matungo",
      description: "Landing page minimalista para una startup tecnológica.",
    },
    {
      id: 5,
      img: "https://portfolio-juanmanuel.netlify.app/beauty.png",
      title: "Beauty Studio D'art",
      description:
        "Sistema de gestión para reservas de eventos con diseño atractivo.",
    },
    {
      id: 6,
      img: "https://portfolio-juanmanuel.netlify.app/fierros.png",
      title: "Fierros Motor",
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
        <div className="container-info-header">
          <h1 className="title">Desarrollo Frontend</h1>
          <p>
            Creamos interfaces que no solo <b>lucen increíbles</b>, sino que
            también están diseñadas para <b>captar</b> y{" "}
            <b>retener a tus usuarios</b>. Nuestro enfoque se basa en diseño
            centrado en el <b>usuario</b>, rendimiento <b>superior</b> y
            <b> tecnologías modernas</b>.
          </p>
        </div>
      </header>

      <section className="frontend-content">
        <div className="frontend-feature">
          <h2 className="title">Nuestra Experiencia</h2>
          <p>
            Con años de experiencia en el desarrollo frontend, hemos trabajado
            con clientes de diferentes industrias, ayudándolos a transformar sus
            ideas en productos digitales exitosos. Somos expertos en tecnologías
            como React, TailwindCSS y TypeScript.
          </p>
        </div>
        <div className="frontend-feature">
          <h2 className="title">¿Por qué elegirnos?</h2>
          <p>
            Sabemos que tu sitio web es tu carta de presentación. Por eso,
            combinamos creatividad y funcionalidad para garantizar que cada
            pixel y cada línea de código cuenten. ¡Lleva tu marca al siguiente
            nivel con nosotros!
          </p>
        </div>
        <div className="frontend-feature">
          <h2 className="title">Resultados Medibles</h2>
          <p>
            Diseñamos con un enfoque estratégico para optimizar tasas de
            conversión, mejorar la retención de usuarios y ofrecer experiencias
            que dejan una impresión duradera.
          </p>
        </div>
      </section>

      <section className="frontend-portfolio">
        <h2 className="title">Ejemplos de Nuestro Trabajo</h2>
        <div className="portfolio-grid">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project) => (
              /* From Uiverse.io by Yaya12085 */
              <motion.div
                key={project.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container-image-card">
                  <img
                    src={project.img}
                    alt="Imágen del Proyecto"
                    className="img-card"
                  />
                </div>
                <div className="content-card">
                  <h1 className="title-card">{project.title}</h1>
                  <p className="description-card">{project.description}</p>
                </div>
                <div className="container-button" href="#">
                  <a href="#contact" className="button">
                    Ver Proyecto
                    <ArrowRight size={20} className="" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="project-buttons">
          {visibleProjects < projects.length && (
            <button className="cta-primary" onClick={showMoreProjects}>
              Ver más Proyectos{" "}
              <svg
                width="25px"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}
          {visibleProjects > 3 && (
            <button className="cta-secondary" onClick={showLessProjects}>
              Ver menos Proyectos{" "}
              <svg
                width="25px"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Frontend;
