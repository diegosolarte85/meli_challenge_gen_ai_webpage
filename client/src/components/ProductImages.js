import React, { useState } from 'react';
import './ProductImages.css';

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="product-images">
        <div className="no-image">
          <span>Sin imagen</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-images">
      <div className="main-image-container">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="main-image"
        />
      </div>
      
      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages; 