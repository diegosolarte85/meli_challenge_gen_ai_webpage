# MercadoLibre Product Detail Page

A prototype for a MercadoLibre-inspired product detail page with both frontend and backend components. This project demonstrates modern web development practices with React frontend and Node.js backend.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Image Gallery**: Thumbnail navigation with main image display
- **Product Information**: Complete product details with pricing, seller info, and specifications
- **Payment Methods**: Visual display of accepted payment options
- **Loading States**: User-friendly loading and error handling
- **MercadoLibre Design**: Authentic look and feel matching the original platform

### Backend
- **RESTful API**: Clean API design with proper HTTP status codes
- **Error Handling**: Comprehensive error management and validation
- **JSON Storage**: File-based data persistence (as per requirements)
- **Security**: Helmet middleware and CORS configuration
- **Testing**: 80%+ code coverage with Jest

## 🛠️ Technology Stack

### Backend
- **Node.js** with **Express.js**
- **Jest** for testing
- **Helmet** for security
- **CORS** for cross-origin requests
- **Morgan** for logging

### Frontend
- **React 18** with functional components
- **CSS Grid** and **Flexbox** for layout
- **Axios** for API communication
- **CSS Custom Properties** for design system

## 📁 Project Structure

```
meli_challenge_gen_ai_webpage/
├── server/
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── data/
│   │   └── products.json
│   ├── __tests__/
│   │   └── productController.test.js
│   └── index.js
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductDetail.js
│   │   │   ├── ProductDetail.css
│   │   │   ├── ProductImages.js
│   │   │   ├── ProductImages.css
│   │   │   ├── ProductInfo.js
│   │   │   ├── ProductInfo.css
│   │   │   ├── ProductSpecifications.js
│   │   │   ├── ProductSpecifications.css
│   │   │   ├── ProductDescription.js
│   │   │   └── ProductDescription.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── package.json
├── jest.config.js
├── jest.setup.js
├── DESIGN_DOCUMENTATION.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meli_challenge_gen_ai_webpage
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 3000).

### Alternative Setup

**Backend only:**
```bash
npm install
npm run server:dev
```

**Frontend only:**
```bash
cd client
npm install
npm start
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Watch Mode
```bash
npm run test:watch
```

## 📡 API Endpoints

### GET /api/products/:id
Fetches product details by ID.

**Example:**
```bash
curl http://localhost:5000/api/products/samsung-galaxy-a55-5g
```

**Response:**
```json
{
  "id": "samsung-galaxy-a55-5g",
  "title": "Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM",
  "price": {
    "current": 439,
    "original": 499,
    "currency": "USD",
    "discount": 12
  },
  "seller": {
    "name": "Tienda oficial de Samsung",
    "rating": 4.8,
    "reviews": 795
  }
}
```

### GET /api/products
Fetches all products (for testing).

### GET /api/health
Health check endpoint.

## 🎨 Design System

### Colors
- **Primary Blue**: `#3483fa` (Links and CTAs)
- **Brand Yellow**: `#fff159` (Primary brand color)
- **Success Green**: `#00a650` (Success states)
- **Error Red**: `#ff4444` (Error states)
- **Text Gray**: `#666` (Secondary text)
- **Background Gray**: `#f5f5f5` (Backgrounds)

### Typography
- **Font Family**: Proxima Nova (MercadoLibre's font)
- **Font Sizes**: 12px, 14px, 16px, 18px, 20px, 24px, 32px
- **Font Weights**: 400 (normal), 600 (semibold)

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start both frontend and backend in development
- `npm run server:dev` - Start backend only in development
- `npm run client:dev` - Start frontend only in development
- `npm run build` - Build frontend for production
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage report
- `npm run install:all` - Install all dependencies

### Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## 🐛 Error Handling

The application includes comprehensive error handling:

### Backend Errors
- **400**: Bad Request (invalid parameters)
- **404**: Product Not Found
- **500**: Internal Server Error

### Frontend Errors
- Loading states with spinners
- Error messages with retry functionality
- Graceful fallbacks for missing data

## 📊 Testing Coverage

The project maintains 80%+ code coverage with tests covering:
- ✅ Happy path scenarios
- ✅ Error handling
- ✅ Edge cases
- ✅ File system errors
- ✅ JSON parsing errors

## 🔒 Security

### Implemented Security Measures
- Helmet security headers
- CORS configuration
- Input validation
- Error message sanitization

### Production Recommendations
- Rate limiting
- JWT authentication
- HTTPS enforcement
- SQL injection prevention
- XSS protection

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Docker (Future Enhancement)
```dockerfile
# Dockerfile would be added for containerization
```

## 📈 Performance

### Backend Optimizations
- Efficient JSON file reading
- Proper error handling
- Security middleware

### Frontend Optimizations
- Responsive images
- CSS optimization
- Minimal bundle size
- Lazy loading capabilities

## 🔮 Future Enhancements

1. **Database Integration**: Replace JSON files with MongoDB/PostgreSQL
2. **Authentication**: User login and session management
3. **Shopping Cart**: Add to cart functionality
4. **Reviews System**: Product reviews and ratings
5. **Search**: Product search and filtering
6. **Recommendations**: Related products algorithm
7. **Analytics**: User behavior tracking
8. **PWA**: Progressive web app features

## 📝 Documentation

For detailed design decisions and architecture information, see:
- [Design Documentation](./DESIGN_DOCUMENTATION.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- MercadoLibre for design inspiration
- React and Node.js communities
- Unsplash for sample images
