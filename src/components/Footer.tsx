import React from "react";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <Code2 size={32} color="#818cf8" />
              <span>TechJE</span>
            </div>
            <p className={styles.description}>
              Transformando el futuro digital con soluciones web innovadoras e
              IA.
            </p>
          </div>

          <div className={styles.section}>
            <h3>Servicios</h3>
            <ul className={styles.list}>
              <a href="/front" className={styles.listItem}>
                Desarrollo Frontend
              </a>
              <a href="#back" className={styles.listItem}>
                Desarrollo Backend
              </a>
              <a href="/ia" className={styles.listItem}>
                Chatbots con IA
              </a>
              <a href="/audiovisual" className={styles.listItem}>
                Medios Audiovisuales y transmisiones
              </a>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Empresa</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Sobre Nosotros</li>
              <li className={styles.listItem}>Portfolio</li>
              <li className={styles.listItem}>Contacto</li>
            </ul>
          </div>

          {/* <div className={styles.section}>
            <h3>Síguenos</h3>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                <Github size={24} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin size={24} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={24} />
              </a>
            </div>
          </div> */}
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} TechWeave. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
