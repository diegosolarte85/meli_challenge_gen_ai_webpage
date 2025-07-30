import React from 'react';
import './ProductSpecifications.css';

const ProductSpecifications = ({ specifications }) => {
  if (!specifications) {
    return null;
  }

  const specItems = [
    { label: 'Memoria RAM', value: specifications.ram },
    { label: 'Almacenamiento', value: specifications.storage },
    { label: 'Pantalla', value: specifications.screen },
    { label: 'Cámara', value: specifications.camera },
    { label: 'Batería', value: specifications.battery },
    { label: 'Procesador', value: specifications.processor },
    { label: 'Sistema Operativo', value: specifications.os }
  ];

  return (
    <div className="product-specifications">
      <h2 className="specifications-title">Características del producto</h2>
      
      <div className="specifications-grid">
        {specItems.map((item, index) => (
          <div key={index} className="specification-item">
            <span className="specification-label">{item.label}</span>
            <span className="specification-value">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Visual representation for screen size */}
      {specifications.screen && (
        <div className="screen-visualization">
          <h3>Tamaño de pantalla</h3>
          <div className="screen-slider">
            <div className="screen-size-indicator">
              <div 
                className="screen-size-bar"
                style={{ 
                  width: `${getScreenSizePercentage(specifications.screen)}%` 
                }}
              ></div>
              <span className="screen-size-text">{specifications.screen}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to calculate screen size percentage for visualization
const getScreenSizePercentage = (screenText) => {
  const sizeMatch = screenText.match(/(\d+(?:\.\d+)?)/);
  if (sizeMatch) {
    const size = parseFloat(sizeMatch[1]);
    // Normalize to a percentage (assuming 6.7" is 100%)
    return Math.min((size / 6.7) * 100, 100);
  }
  return 50; // Default fallback
};

export default ProductSpecifications; 