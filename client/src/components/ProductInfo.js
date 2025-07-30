import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
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

  return (
    <div className="product-info">
      {/* Seller Info */}
      <div className="seller-header">
        {product.seller.official && (
          <div className="official-store-badge">
            <img src={product.seller.logo} alt="Logo" className="seller-logo" />
            <span>Tienda oficial de {product.brand}</span>
          </div>
        )}
        <div className="seller-rating">
          <span className="stars">
            {'★'.repeat(Math.floor(product.seller.rating))}
            {'☆'.repeat(5 - Math.floor(product.seller.rating))}
          </span>
          <span className="rating-text">
            {product.seller.rating} ({product.seller.reviews} opiniones)
          </span>
        </div>
      </div>

      {/* Product Status */}
      <div className="product-status">
        <span className="status-badge">Nuevo</span>
        <span className="sold-count">+100 vendidos</span>
      </div>

      {/* Product Title */}
      <h1 className="product-title">{product.title}</h1>

      {/* Promotions */}
      <div className="product-promotions">
        {product.promotions.map((promotion, index) => (
          <span key={index} className="promotion-badge">
            {promotion}
          </span>
        ))}
      </div>

      {/* Price Section */}
      <div className="price-section">
        {product.originalPrice > product.price && (
          <div className="original-price">
            {formatPrice(product.originalPrice)}
          </div>
        )}
        <div className="current-price">
          {formatPrice(product.price)}
        </div>
        {product.discount > 0 && (
          <div className="discount-badge">
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Installments */}
      {product.paymentMethods.creditCard && (
        <div className="installments-info">
          {formatInstallments(
            product.paymentMethods.creditCard.installments,
            product.paymentMethods.creditCard.monthlyPayment
          )}
        </div>
      )}

      {/* Color Selection */}
      {product.colors && product.colors.length > 1 && (
        <div className="color-selection">
          <h3>Color: <span className="selected-color">{product.colors[0].name}</span></h3>
          <div className="color-options">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`color-option ${index === 0 ? 'selected' : ''}`}
                style={{ backgroundColor: color.code }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      <div className="product-highlights">
        <h3>Lo que tienes que saber de este producto</h3>
        <ul>
          {product.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Payment Methods Preview */}
      <div className="payment-methods-preview">
        <h3>Medios de pago</h3>
        <div className="payment-options">
          <div className="payment-option">
            <span className="payment-icon">💳</span>
            <span>Tarjeta de crédito</span>
          </div>
          <div className="payment-option">
            <span className="payment-icon">🏦</span>
            <span>Transferencia</span>
          </div>
          <div className="payment-option">
            <span className="payment-icon">💵</span>
            <span>Efectivo</span>
          </div>
        </div>
        <a href="#" className="payment-link">Ver los medios de pago</a>
      </div>

      {/* Shipping Info */}
      <div className="shipping-info">
        <div className="shipping-badge">
          <span className="shipping-icon">🚚</span>
          <span>Envío gratis</span>
        </div>
        <div className="shipping-details">
          <span>Llega gratis el martes</span>
          <a href="#" className="shipping-link">Ver más formas de entrega</a>
        </div>
      </div>

      {/* Stock Info */}
      <div className="stock-info">
        <div className="stock-badge">
          <span className="stock-icon">✅</span>
          <span>Stock disponible</span>
        </div>
        <div className="stock-details">
          <span>+{product.stock} disponibles</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn btn-primary btn-buy">
          Comprar ahora
        </button>
        <button className="btn btn-secondary btn-cart">
          Agregar al carrito
        </button>
      </div>

      {/* Seller Info */}
      <div className="seller-info">
        <div className="seller-details">
          <img src={product.seller.logo} alt="Seller" className="seller-logo" />
          <div className="seller-text">
            <span className="seller-name">{product.seller.name}</span>
            <span className="seller-type">Tienda oficial</span>
          </div>
        </div>
        <a href="#" className="seller-link">Ver más productos del vendedor</a>
      </div>

      {/* Guarantees */}
      <div className="guarantees">
        <div className="guarantee-item">
          <span className="guarantee-icon">🔄</span>
          <span>Devolución gratis. Tienes 30 días desde que lo recibes.</span>
        </div>
        <div className="guarantee-item">
          <span className="guarantee-icon">🛡️</span>
          <span>Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.</span>
        </div>
        <div className="guarantee-item">
          <span className="guarantee-icon">⚡</span>
          <span>{product.warranty}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo; 