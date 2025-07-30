import React from 'react';
import './ProductDescription.css';

const ProductDescription = ({ description }) => {
  if (!description) {
    return null;
  }

  // Split description into sections for better presentation
  const sections = [
    {
      title: "Descripción del producto",
      content: description
    },
    {
      title: "Características principales",
      content: "Este dispositivo ofrece un rendimiento excepcional con tecnología de última generación, diseñado para satisfacer las necesidades de usuarios exigentes."
    },
    {
      title: "Beneficios",
      content: "• Experiencia de usuario fluida y rápida\n• Cámara de alta calidad para capturar momentos especiales\n• Batería de larga duración para todo el día\n• Diseño elegante y moderno"
    }
  ];

  return (
    <div className="product-description">
      <h2 className="description-title">Descripción del producto</h2>
      
      <div className="description-content">
        {sections.map((section, index) => (
          <div key={index} className="description-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="section-content">
              {section.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="description-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="description-features">
        <h3>Características destacadas</h3>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <span className="feature-text">Pantalla de alta calidad</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📷</span>
            <span className="feature-text">Cámara profesional</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span className="feature-text">Rendimiento excepcional</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔋</span>
            <span className="feature-text">Batería de larga duración</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription; 