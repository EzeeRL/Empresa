import React from "react";
import "./back.css";

const BackendDevelopment = () => {
  return (
    <section className="backendDevelopment">
      <div className="container">
        <div className="header">
          <h1 className="title">Desarrollo Backend</h1>
          <p className="subtitle">
            Potenciamos tus aplicaciones con tecnologías robustas, prácticas
            modernas y una infraestructura escalable.
          </p>
        </div>

        {/* Tecnologías */}
        <div className="section">
          <h2 className="sectionTitle">Tecnologías que dominamos</h2>
          <ul className="technologyList">
            <li>Python (FastAPI, Flask)</li>
            <li>Node.js (Express, Nest.js)</li>
            <li>C# (.NET Core)</li>
            <li>Bases de datos: PostgreSQL, MySQL, SQL Server, Redis</li>
            <li>Infraestructura: Docker, RabbitMQ</li>
            <li>Microservicios para sistemas escalables y modulares</li>
          </ul>
        </div>

        {/* Buenas prácticas */}
        <div className="section">
          <h2 className="sectionTitle">Buenas prácticas</h2>
          <ul className="practiceList">
            <li>Arquitectura limpia y modular (MVC, DDD)</li>
            <li>Automatización de pruebas unitarias e integrales</li>
            <li>Validación y sanitización de datos para mayor seguridad</li>
            <li>Gestión eficiente de errores y logging centralizado</li>
            <li>Documentación clara y precisa de la API (Swagger, Postman)</li>
          </ul>
        </div>

        {/* Optimización */}
        <div className="section">
          <h2 className="sectionTitle">Optimización y rendimiento</h2>
          <ul className="optimizationList">
            <li>Implementación de caché con Redis para consultas frecuentes</li>
            <li>Balanceo de carga y escalabilidad horizontal</li>
            <li>Optimización de consultas SQL para maximizar el rendimiento</li>
            <li>Despliegue en contenedores con Docker para portabilidad</li>
            <li>Integración de mensajería asíncrona con RabbitMQ</li>
          </ul>
        </div>

        {/* Infraestructura */}
      </div>
    </section>
  );
};

export default BackendDevelopment;
