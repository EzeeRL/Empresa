import React from "react";
import styles from '../styles/ImplementationProcess.module.css';

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
    <section className={styles.implementationProcess}>
      <h2 className={styles.title}>Proceso de Implementación</h2>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.steps}>
            {/* <div className={styles.containerNumbers}> */}
            {/* </div> */}
            <div className={styles.stepContent}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            <hr className={styles.line} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImplementationProcess;
