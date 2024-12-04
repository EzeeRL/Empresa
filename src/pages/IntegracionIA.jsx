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
            Lo que puedes lograr con nuestros chatbots
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
        </div>

        {/* Funcionalidades avanzadas */}
        <div className="section">
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
        <div className="section">
          <h2 className="section-title">Casos de uso destacados</h2>
          <div className="case-studies">
            <div className="case">
              <h3>Atención al cliente personalizada</h3>
              <p>
                Responde consultas frecuentes de forma automática, liberando
                tiempo para tu equipo humano.
              </p>
            </div>
            <div className="case">
              <h3>Gestión de reservas</h3>
              <p>
                Un cliente puede agendar una cita en tu negocio y recibir
                confirmaciones instantáneas sin intervención humana.
              </p>
            </div>
            <div className="case">
              <h3>Procesamiento de datos</h3>
              <p>
                Genera reportes dinámicos basados en datos extraídos de sistemas
                internos o formularios web.
              </p>
            </div>
          </div>
        </div>

        {/* Ventajas de la IA */}
        <div className="section">
          <h2 className="section-title">Ventajas de usar IA en tus procesos</h2>
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
