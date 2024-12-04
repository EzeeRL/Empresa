import React, { useState } from "react";
import styles from '../styles/faq.module.css';
const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "¿Cuánto tiempo lleva implementar una solución de IA?",
      answer:
        "El tiempo varía según la complejidad del proyecto, pero generalmente se implementa entre 4 y 16 semanas.",
    },
    {
      question: "¿Qué tipo de tareas puede automatizar la IA?",
      answer:
        "La IA puede automatizar tareas como gestión de correos, generación de informes y atención al cliente.",
    },
    {
      question: "¿Cómo la IA mejora la atención al cliente?",
      answer:
        "Nuestros chatbots responden preguntas comunes, gestionan solicitudes y brindan soporte 24/7.",
    },
    {
      question: "¿Puedo integrar la IA con herramientas que ya uso?",
      answer:
        "Sí, nuestras soluciones se integran con plataformas como Google Calendar, CRM y hojas de cálculo.",
    },
    {
      question: "¿Es seguro usar IA en mi negocio?",
      answer:
        "Sí, nuestras soluciones cumplen con normativas de privacidad y garantizan la seguridad de los datos.",
    },
    {
      question: "¿Qué pasa si los sistemas de IA fallan?",
      answer:
        "Ofrecemos soporte continuo y monitoreo para garantizar el correcto funcionamiento de las soluciones.",
    },
    {
      question: "¿La IA reemplazará a mis empleados?",
      answer:
        "No, la IA complementa a tu equipo, liberándolos de tareas repetitivas para que se enfoquen en estrategias.",
    },
    {
      question: "¿Es flexible la IA para adaptarse a mi negocio?",
      answer:
        "Sí, nuestras soluciones son personalizables según las necesidades y particularidades de cada cliente.",
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
        <div className={styles.faqList}>
          {questions.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className={styles.toggleIcon}>
                  {openQuestion === index ? "-" : "+"}
                </span>
              </div>
              {openQuestion === index && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
