import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCatalog.css';

const ProductCatalog = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los productos');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatInstallments = (installments, monthlyPayment) => {
    return `${installments} cuotas de ${formatPrice(monthlyPayment)} con 0% interés`;
  };

  if (loading) {
    return (
      <div className="catalog-loading">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catalog-error">
        <p>{error}</p>
        <button onClick={fetchProducts}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="product-catalog">
      <header className="catalog-header">
        <div className="catalog-header-content">
          <div className="header-logo">
            <img 
              src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.139/mercadolibre/logo_large_plus@2x.webp" 
              alt="Mercado Libre Colombia" 
              className="mercadolibre-logo"
            />
          </div>
          <div className="header-title">
            <h1>Mercado Libre Colombia - Donde comprar y vender de todo</h1>
            <p>Encuentra los mejores celulares al mejor precio</p>
          </div>
        </div>
      </header>

      <div className="catalog-container">
        <div className="catalog-filters">
          <div className="filter-section">
            <h3>Filtros</h3>
            <div className="filter-options">
              <label>
                <input type="checkbox" /> Envío gratis
              </label>
              <label>
                <input type="checkbox" /> Tiendas oficiales
              </label>
              <label>
                <input type="checkbox" /> Con descuento
              </label>
            </div>
          </div>
        </div>

        <div className="catalog-products">
          <div className="products-grid">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => onProductSelect(product)}
              >
                <div className="product-card-image">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    loading="lazy"
                  />
                  {product.discount > 0 && (
                    <div className="product-discount-badge">
                      {product.discount}% OFF
                    </div>
                  )}
                  {product.shipping.free && (
                    <div className="product-shipping-badge">
                      Envío gratis
                    </div>
                  )}
                </div>

                <div className="product-card-content">
                  <div className="product-seller">
                    {product.seller.official && (
                      <span className="official-store-badge">
                        Tienda oficial
                      </span>
                    )}
                    <span className="seller-rating">
                      ⭐ {product.seller.rating} ({product.seller.reviews})
                    </span>
                  </div>

                  <h3 className="product-title">{product.title}</h3>

                  <div className="product-price">
                    {product.originalPrice > product.price && (
                      <span className="original-price">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <span className="current-price">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {product.paymentMethods.creditCard && (
                    <div className="product-installments">
                      {formatInstallments(
                        product.paymentMethods.creditCard.installments,
                        product.paymentMethods.creditCard.monthlyPayment
                      )}
                    </div>
                  )}

                  <div className="product-highlights">
                    {product.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="highlight-item">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="product-promotions">
                    {product.promotions.slice(0, 2).map((promotion, index) => (
                      <span key={index} className="promotion-badge">
                        {promotion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog; 