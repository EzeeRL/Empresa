import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "../styles/Hero.module.css";
// import AnimatedSVG from "./AnimatedSVG"; // Importamos el SVG animado

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <svg
          className="fondo"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(79, 70, 229, 0.2)" }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgba(88, 85, 252, 0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(249, 250, 255, 0.3)" }}
              />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity="0.3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity="0.6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity="0.9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformamos Ideas en
            <span className={styles.highlight}> Experiencias Digitales</span>
          </h1>
          <p className={styles.description}>
            Desarrollamos soluciones web innovadoras integrando IA para
            potenciar tu presencia digital
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              Empezar Proyecto
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#services" className={styles.secondaryButton}>
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
