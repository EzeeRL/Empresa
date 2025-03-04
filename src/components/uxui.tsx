import React from "react";

const UXUIGallery = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        backgroundColor: "#f9f9f9",
        marginTop: "80px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2d2d2d" }}>
        Galería de Diseño UX/UI
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        Explora nuestros trabajos en diseño de interfaces y experiencia de
        usuario, con un enfoque en usabilidad e innovación.
      </p>

      <div style={{ maxWidth: "1000px", margin: "40px auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/uxui1.jpg"
            alt="Diseño UX/UI 1"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/images/uxui2.jpg"
            alt="Diseño UX/UI 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/images/uxui3.jpg"
            alt="Diseño UX/UI 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/images/uxui4.jpg"
            alt="Diseño UX/UI 4"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UXUIGallery;
