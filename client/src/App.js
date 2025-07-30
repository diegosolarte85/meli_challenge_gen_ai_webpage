import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductCatalog from './components/ProductCatalog';

function App() {
  const [currentView, setCurrentView] = useState('catalog');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBackToCatalog = () => {
    setCurrentView('catalog');
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {currentView === 'catalog' ? (
        <ProductCatalog onProductSelect={handleProductSelect} />
      ) : (
        <ProductDetail 
          product={selectedProduct} 
          onBack={handleBackToCatalog}
        />
      )}
    </div>
  );
}

export default App; 