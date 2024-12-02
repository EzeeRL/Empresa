import React from 'react';
import { Globe, Server, Bot, MessageSquare, Sparkles, Shield } from 'lucide-react';
import styles from '../styles/Services.module.css';

const Services = () => {
  const services = [
    {
      icon: <Globe size={32} color="#4f46e5" />,
      title: "Desarrollo Frontend",
      description: "Interfaces modernas y responsivas con las últimas tecnologías web."
    },
    {
      icon: <Server size={32} color="#4f46e5" />,
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables para potenciar tu aplicación."
    },
    {
      icon: <Bot size={32} color="#4f46e5" />,
      title: "Chatbots con IA",
      description: "Automatización inteligente para mejorar la atención al cliente."
    },
    {
      icon: <MessageSquare size={32} color="#4f46e5" />,
      title: "Integración WhatsApp",
      description: "Conecta tu negocio con clientes a través de WhatsApp Business API."
    },
    {
      icon: <Sparkles size={32} color="#4f46e5" />,
      title: "UX/UI Design",
      description: "Diseños intuitivos centrados en la experiencia del usuario."
    },
    {
      icon: <Shield size={32} color="#4f46e5" />,
      title: "Seguridad Web",
      description: "Protección robusta para tu aplicación y datos."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestros Servicios</h2>
          <p className={styles.subtitle}>
            Soluciones completas para tu presencia digital
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>
              <p className={styles.cardDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;