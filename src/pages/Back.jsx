import React from "react";
import "./back.css";

const BackendDevelopment = () => {
  return (
    <section className="backendDevelopment">
      <header className="header">
        <div className="container-info-header-back">
          <h1 className="title">Desarrollo Backend</h1>
          <p className="subtitle">
            Potenciamos tus aplicaciones con tecnologías robustas, prácticas
            modernas y una infraestructura escalable.
          </p>
        </div>
      </header>

      {/* Tecnologías */}
      <div className="section tecnologias">
        <div className="section list-tecnologias">
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
        <div className="img-tecnologias containers-imgs">
          <img
            src="public\Back\img-1-back.png"
            alt=""
            className="img ilustraciones"
          />
        </div>
      </div>

      {/* Buenas prácticas */}
      <div className="section practicas">
        <div className="container-img-practicas containers-imgs">
          <img
            src="public\Back\img-2-back.png"
            alt=""
            className="img-practicas ilustraciones"
          />
        </div>
        <div className="section container-practicas">
          <h2 className="sectionTitle">Buenas prácticas</h2>
          <ul className="practiceList">
            <li>Arquitectura limpia y modular (MVC, DDD)</li>
            <li>Automatización de pruebas unitarias e integrales</li>
            <li>Validación y sanitización de datos para mayor seguridad</li>
            <li>Gestión eficiente de errores y logging centralizado</li>
            <li>Documentación clara y precisa de la API (Swagger, Postman)</li>
          </ul>
        </div>
      </div>

      {/* Optimización */}
      <div className="section optimizacion">
        <div className="container-optimizacion">
          <h2 className="sectionTitle">Optimización y rendimiento</h2>
          <ul className="optimizationList">
            <li>Implementación de caché con Redis para consultas frecuentes</li>
            <li>Balanceo de carga y escalabilidad horizontal</li>
            <li>Optimización de consultas SQL para maximizar el rendimiento</li>
            <li>Despliegue en contenedores con Docker para portabilidad</li>
            <li>Integración de mensajería asíncrona con RabbitMQ</li>
          </ul>
        </div>
        <div className="container-img-optimizacion containers-imgs">
          <img
            src="public\Back\img-3-back.png"
            alt=""
            className="img-optimizacion ilustraciones"
          />
        </div>
      </div>

      {/* Infraestructura */}
    </section>
  );
};

export default BackendDevelopment;
