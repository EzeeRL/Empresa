import React from "react";
import "./medios.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicios = [
  {
    titulo: "Producción de Video",
    descripcion:
      "Creación de contenido audiovisual de alta calidad, incluyendo videos corporativos, promocionales y eventos.",
    imagenes: [
      "public/Producciones/Back Stage Institucional 19.jpg",
      "public/Producciones/Back Stage Institucional 24.jpg",
      "public/Producciones/Back Stage Institucional 26.jpg",
    ],
  },
  {
    titulo: "Streaming en Vivo",
    descripcion:
      "Transmisión en tiempo real con calidad profesional para conferencias, eventos y conciertos.",
    imagenes: [
      "public/Producciones/Back Stage Martin Fierros 04.jpg",
      "public/Producciones/Un sol para los Chicos 03.jpg",
      "public/Producciones/Un sol para los Chicos 05.jpg",
    ],
  },
  {
    titulo: "Edición y Postproducción",
    descripcion:
      "Edición avanzada, efectos visuales y optimización de video para diversas plataformas.",
    imagenes: [
      "public/Producciones/UNICEF Notas 21.jpg",
      "public/Producciones/Canal Volver 03.jpg",
      "public/Producciones/Canal Volver 05.jpg",
      "public/Producciones/Promo Tinelli 02.jpg",
    ],
  },
  {
    titulo: "Grabación Profesional",
    descripcion:
      "Equipos de última generación para capturar el mejor contenido audiovisual.",
    imagenes: [
      "public/Producciones/Promo Institucional canal 07.jpg",
      "public/Producciones/Cuccinare 04.jpg",
      "public/Producciones/Cuccinare 10.jpg",
    ],
  },
];

const MediaStreaming = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container-general-medios">
      <header className="container-title-medios">
        <h1 className="title-medios">Media Streaming</h1>
        <div className="container-parrafo-title">
          <p>
            Ofrecemos soluciones profesionales en <b>producción audiovisual</b>{" "}
            y <b>transmisión en vivo</b> para potenciar tu{" "}
            <b>presencia digital.</b>
          </p>
        </div>
      </header>

      <section className="container-servicios-medios">
        {servicios.map((servicio, index) => (
          <div key={index} className="card-servicio">
            <div className="container-img-servicio">
              <Slider {...sliderSettings}>
                {servicio.imagenes.map((imagen, i) => (
                  <img
                    key={i}
                    src={imagen}
                    alt={`${servicio.titulo} ${i + 1}`}
                    className="img-servicio"
                  />
                ))}
              </Slider>
            </div>
            <div className="container-info-servicio">
              <h2 className="title-servicio">{servicio.titulo}</h2>
              <p className="parrafo-servicio">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MediaStreaming;
