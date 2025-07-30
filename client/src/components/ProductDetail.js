import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductSpecifications from './ProductSpecifications';
import ProductDescription from './ProductDescription';
import './ProductDetail.css';

const ProductDetail = ({ product, onBack }) => {
  const [productData, setProductData] = useState(product);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) {
      fetchProduct();
    } else {
      setProductData(product);
    }
  }, [product]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products/samsung-galaxy-s24-fe-5g');
      setProductData(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar el producto');
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="product-detail-loading">
        <div className="loading-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-detail-error">
        <p>{error}</p>
        <button onClick={fetchProduct}>Reintentar</button>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="product-detail-error">
        <p>Producto no encontrado</p>
        {onBack && <button onClick={onBack}>Volver al catálogo</button>}
      </div>
    );
  }

  return (
    <div className="product-detail">
      {/* Back Button */}
      {onBack && (
        <div className="back-button-container">
          <button className="back-button" onClick={onBack}>
            ← Volver al catálogo
          </button>
        </div>
      )}

      <div className="product-detail-container">
        <div className="product-detail-main">
          <div className="product-detail-left">
            <ProductImages images={productData.images} />
          </div>
          
          <div className="product-detail-right">
            <ProductInfo product={productData} />
          </div>
        </div>

        <div className="product-detail-sections">
          <ProductSpecifications specifications={productData.specifications} />
          <ProductDescription description={productData.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 