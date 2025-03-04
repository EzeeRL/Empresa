import {
  Globe,
  Server,
  Bot,
  MessageSquare,
  Sparkles,
  Shield,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../styles/Services.module.css";

const Services = () => {
  const services = [
    {
      icon: <Globe size={32} color="#4f46e5" />,
      title: "Desarrollo Frontend",
      description:
        "Interfaces modernas y responsivas con las últimas tecnologías web.",
      link: "/front", // Ruta para este servicio
    },
    {
      icon: <Video size={32} color="#4f46e5" />, // Cambié el icono a uno representativo
      title: "Medios Audiovisuales y Televisión",
      description:
        "Producción, edición y transmisión de contenido audiovisual de alta calidad para medios y plataformas digitales.",
      link: "/audiovisual",
    },

    {
      icon: <Bot size={32} color="#4f46e5" />,
      title: "Integraciones con IA",
      description:
        "Automatización inteligente para mejorar la atención al cliente y diferentes servicios.",
      link: "/ia",
    },
    {
      icon: <Sparkles size={32} color="#4f46e5" />,
      title: "UX/UI Design",
      description:
        "Diseños intuitivos centrados en la experiencia del usuario.",
      link: "/ux-ui",
    },

    {
      icon: <Server size={32} color="#4f46e5" />,
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables para potenciar tu aplicación.",
      link: "/back",
    },
    {
      icon: <Shield size={32} color="#4f46e5" />,
      title: "Seguridad Web",
      description: "Protección robusta para tu aplicación y datos.",
      link: "/services/web-security",
    },
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
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <div className={styles.cardContent}>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
              <div className={styles.containerButton}>
                <Link to={service.link}>
                  <a className={styles.viewButton}>Ver Más</a>{" "}
                  {/* Botón con enlace */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
