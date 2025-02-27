import React from "react";
import { Mail, Phone, MapPin, Copy } from "lucide-react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("¡Información copiada exitosamente!");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Contacta con Nosotros</h2>
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte a hacer realidad tu proyecto
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} color="#4f46e5" />
              </div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <div className={styles.containerCopy}>
                  <p>emaildelaempresa@gmail.com</p>
                  <button
                    className={styles.copyButton}
                    onClick={() => handleCopy("emaildelaempresa@gmail.com")}
                  >
                    <Copy size={20} color="#4f46e5" />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} color="#4f46e5" />
              </div>
              <div className={styles.infoContent}>
                <h3>Teléfono</h3>
                <div className={styles.containerCopy}>
                  <p>+54 9 11 6359 2430</p>
                  <button
                    className={styles.copyButton}
                    onClick={() => handleCopy("+54 9 11 6359 2430")}
                  >
                    <Copy size={20} color="#4f46e5" />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} color="#4f46e5" />
              </div>
              <div className={styles.infoContent}>
                <h3>Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Tu nombre o de tu empresa"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="tuemail@gmail.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className={styles.textarea}
                placeholder="Cuéntanos sobre tu proyecto"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
