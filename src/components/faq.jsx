import React, { useState } from "react";
import "./faq.css";
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
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className="toggle-icon">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </div>
              {openQuestion === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
