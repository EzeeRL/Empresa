import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformamos Ideas en
            <span className={styles.highlight}> Experiencias Digitales</span>
          </h1>
          <p className={styles.description}>
            Desarrollamos soluciones web innovadoras integrando IA para potenciar tu presencia digital
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              Empezar Proyecto
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#portfolio" className={styles.secondaryButton}>
              Ver Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;