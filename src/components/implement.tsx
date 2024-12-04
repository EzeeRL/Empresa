import React from "react";
import "./ImplementationProcess.css";

const ImplementationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "Entendemos tus desafíos y oportunidades clave.",
    },
    {
      number: 2,
      title: "Strategy Call",
      description:
        "Diseñamos un plan de acción específico para optimizar tus procesos.",
    },
    {
      number: 3,
      title: "Desarrollo",
      description:
        "Desarrollamos y ejecutamos soluciones personalizadas para tu empresa.",
    },
    {
      number: 4,
      title: "Mantenimiento",
      description:
        "Nos aseguramos de que siempre estés al día con los avances y mejoras.",
    },
  ];

  return (
    <section className="implementation-process">
      <h2 className="title">Proceso de Implementación</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImplementationProcess;
