const fs = require('fs').promises;
const path = require('path');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/products.json');
    const data = await fs.readFile(dataPath, 'utf8');
    const products = JSON.parse(data);
    
    res.json(products);
  } catch (error) {
    console.error('Error reading products:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id || id.trim() === '') {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const dataPath = path.join(__dirname, '../data/products.json');
    const data = await fs.readFile(dataPath, 'utf8');
    const products = JSON.parse(data);
    
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error reading product:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getAllProducts,
  getProductById
}; 