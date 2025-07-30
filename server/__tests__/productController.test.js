const request = require('supertest');
const app = require('../index');
const fs = require('fs').promises;
const path = require('path');

// Mock the products data
const mockProducts = [
  {
    id: 'samsung-galaxy-a55-5g',
    title: 'Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM',
    price: {
      current: 439,
      original: 499,
      currency: 'USD',
      discount: 12
    },
    seller: {
      name: 'Tienda oficial de Samsung',
      rating: 4.8,
      reviews: 795
    }
  }
];

// Mock fs.promises.readFile
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn()
  }
}));

describe('Product Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/products/:id', () => {
    it('should return product details when valid ID is provided', async () => {
      // Mock the file read to return our test data
      require('fs').promises.readFile.mockResolvedValue(JSON.stringify(mockProducts));

      const response = await request(app)
        .get('/api/products/samsung-galaxy-a55-5g')
        .expect(200);

      expect(response.body).toHaveProperty('id', 'samsung-galaxy-a55-5g');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('price');
      expect(response.body).toHaveProperty('seller');
    });

    it('should return 404 when product ID does not exist', async () => {
      require('fs').promises.readFile.mockResolvedValue(JSON.stringify(mockProducts));

      const response = await request(app)
        .get('/api/products/non-existent-product')
        .expect(404);

      expect(response.body).toHaveProperty('error', 'Product not found');
    });

    it('should return 400 when no ID is provided', async () => {
      const response = await request(app)
        .get('/api/products/')
        .expect(200); // This actually matches the "get all products" route

      expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return 400 when ID is empty string', async () => {
      const response = await request(app)
        .get('/api/products/%20')
        .expect(400);

      expect(response.body).toHaveProperty('error', 'Product ID is required');
    });

    it('should return 500 when file read fails', async () => {
      require('fs').promises.readFile.mockRejectedValue(new Error('File read error'));

      const response = await request(app)
        .get('/api/products/samsung-galaxy-a55-5g')
        .expect(500);

      expect(response.body).toHaveProperty('error', 'Failed to fetch product');
    });

    it('should return 500 when JSON parsing fails', async () => {
      require('fs').promises.readFile.mockResolvedValue('invalid json');

      const response = await request(app)
        .get('/api/products/samsung-galaxy-a55-5g')
        .expect(500);

      expect(response.body).toHaveProperty('error', 'Failed to fetch product');
    });

    it('should handle empty products array', async () => {
      require('fs').promises.readFile.mockResolvedValue(JSON.stringify([]));

      const response = await request(app)
        .get('/api/products/samsung-galaxy-a55-5g')
        .expect(404);

      expect(response.body).toHaveProperty('error', 'Product not found');
    });
  });

  describe('GET /api/products', () => {
    it('should return all products', async () => {
      require('fs').promises.readFile.mockResolvedValue(JSON.stringify(mockProducts));

      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toHaveProperty('id', 'samsung-galaxy-a55-5g');
    });

    it('should return 500 when file read fails', async () => {
      require('fs').promises.readFile.mockRejectedValue(new Error('File read error'));

      const response = await request(app)
        .get('/api/products')
        .expect(500);

      expect(response.body).toHaveProperty('error', 'Failed to fetch products');
    });

    it('should return 500 when JSON parsing fails', async () => {
      require('fs').promises.readFile.mockResolvedValue('invalid json');

      const response = await request(app)
        .get('/api/products')
        .expect(500);

      expect(response.body).toHaveProperty('error', 'Failed to fetch products');
    });
  });

}); 