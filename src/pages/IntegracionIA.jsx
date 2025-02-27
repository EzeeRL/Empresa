import React from "react";
import "./integracionIA.css";
import FAQ from "../components/faq";

const AutomationWithAI = () => {
  return (
    <section className="automation-with-ai">
      <div className="container">
        <div className="header">
          <h1 className="title">Automatización con Inteligencia Artificial</h1>
          <p className="subtitle">
            Revoluciona la interacción con tus clientes y optimiza tus procesos
            internos con soluciones de IA personalizadas.
          </p>
        </div>

        {/* Beneficios principales */}
        <div className="section">
          <h2 className="section-title">
            Lo que puedes lograr con nuestros ChatBots
          </h2>
          <ul className="benefits-list">
            <li>
              Respuestas instantáneas y disponibles 24/7 en tu página web,
              Instagram y WhatsApp.
            </li>
            <li>
              Automatización de consultas frecuentes como precios, horarios y
              disponibilidad.
            </li>
            <li>Gestión de reservas y citas sincronizadas con calendarios.</li>
            <li>Procesamiento y generación de reportes en tiempo real.</li>
            <li>Interacciones multilingües para clientes globales.</li>
          </ul>
          <img
            className="iaImage"
            src="https://media.istockphoto.com/id/1482901838/es/vector/inteligencia-artificial-3d-red-neuronal-cerebral-digital-servidores-de-ia-y-tecnolog%C3%ADa-de.jpg?s=612x612&w=0&k=20&c=62JWPN09SSzc8WGQjvxoD8dg3501gg0FBDcKt3t3rW0="
            alt=""
          />
        </div>

        {/* Funcionalidades avanzadas */}
        <div className="section2">
          <h2 className="section-title">Integraciones poderosas</h2>
          <p className="section-description">
            Los chatbots no solo responden preguntas, también se integran con
            tus herramientas existentes para maximizar la productividad:
          </p>
          <ul className="features-list">
            <li>
              <strong>Calendarios:</strong> Agenda citas automáticamente en
              Google Calendar, Outlook o sistemas personalizados.
            </li>
            <li>
              <strong>Correo electrónico:</strong> Envía confirmaciones,
              recordatorios y boletines automáticos directamente desde Gmail o
              servicios SMTP.
            </li>
            <li>
              <strong>Hojas de cálculo:</strong> Extrae y organiza datos en
              tiempo real en Google Sheets, Excel o bases de datos.
            </li>
            <li>
              <strong>Sistemas de CRM:</strong> Sincroniza información de
              clientes con herramientas como HubSpot, Salesforce o Zoho.
            </li>
            <li>
              <strong>Procesos internos:</strong> Automatiza tareas repetitivas
              como gestión de inventarios o seguimiento de pedidos.
            </li>
            <li>
              <strong>Integración con tu Base de Datos:</strong> Integración
              rápida con Google Sheets, AirTable o tu base de datos de
              preferencia
            </li>
          </ul>
        </div>

        {/* Casos de uso */}
        <div className="section casos-de-uso">
          <h2 className="section-title title-usos">Casos de uso destacados</h2>
          <div className="case-studies">
            <div className="case">
              <h3 className="case-titles">
                Atención al cliente personalizada{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icons"
                >
                  <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
                </svg>
              </h3>
              <p>
                Responde consultas frecuentes de forma automática, liberando
                tiempo para tu equipo humano.
              </p>
            </div>
            <div className="case">
              <h3 className="case-titles">
                Gestión de reservas{" "}
                <svg
                  width="25px"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icons"
                >
                  <path
                    d="M21 10H3M16 2V6M8 2V6M9 16L11 18L15.5 13.5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h3>
              <p>
                Un cliente puede agendar una cita en tu negocio y recibir
                confirmaciones instantáneas sin intervención humana.
              </p>
            </div>
            <div className="case">
              <h3 className="case-titles">
                Procesamiento de datos{" "}
                <svg
                  width="25px"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icons"
                >
                  <path
                    d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h3>
              <p>
                Genera reportes dinámicos basados en datos extraídos de sistemas
                internos o formularios web.
              </p>
            </div>
          </div>
        </div>

        {/* Ventajas de la IA */}
        <div className="section section-ventajas">
          <h2 className="section-title title-ventajas">
            Ventajas de usar IA en tus procesos
          </h2>
          <ul className="advantages-list">
            <li>Reducción de costos operativos.</li>
            <li>
              Mayor satisfacción del cliente gracias a tiempos de respuesta
              rápidos.
            </li>
            <li>
              Automatización de tareas repetitivas, liberando tiempo para tu
              equipo.
            </li>
            <li>
              Escalabilidad para manejar múltiples interacciones
              simultáneamente.
            </li>
            <li>
              Personalización avanzada basada en el comportamiento y las
              preferencias de los usuarios.
            </li>
          </ul>
        </div>

        {/* Llamado a la acción */}
      </div>
      <FAQ></FAQ>
      <div className="cta">
        <h2>¿Listo para transformar tu negocio con IA?</h2>
        <p>
          Contáctanos para desarrollar soluciones personalizadas que se adapten
          a tus necesidades.
        </p>
        <button className="cta-button">Habla con un experto</button>
      </div>
    </section>
  );
};

export default AutomationWithAI;
