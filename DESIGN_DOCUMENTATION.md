# MercadoLibre Product Detail Page - Design Documentation

## Overview

This project implements a prototype of a MercadoLibre-inspired product detail page with both frontend and backend components. The solution is designed to be scalable, maintainable, and follows modern web development best practices.

## Architecture

### Backend Architecture

**Technology Stack:**
- **Node.js** with **Express.js** for the REST API
- **JSON file storage** for data persistence (as per requirements)
- **Jest** for testing with 80%+ code coverage
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Morgan** for request logging

**Key Design Decisions:**

1. **RESTful API Design:**
   - Clean separation of concerns with controllers, routes, and data layers
   - Proper HTTP status codes and error handling
   - JSON file-based storage for simplicity (as required)

2. **Error Handling:**
   - Comprehensive error middleware
   - Proper HTTP status codes (400, 404, 500)
   - Detailed error messages for debugging
   - Graceful handling of file system errors

3. **Security:**
   - Helmet middleware for security headers
   - Input validation and sanitization
   - CORS configuration for frontend integration

4. **Testing Strategy:**
   - Unit tests for all controller functions
   - Mock file system operations
   - Edge case coverage (invalid IDs, file errors, JSON parsing errors)
   - 80%+ code coverage requirement met

### Frontend Architecture

**Technology Stack:**
- **React 18** with functional components and hooks
- **CSS Grid and Flexbox** for responsive layout
- **Axios** for API communication
- **React Icons** for UI elements
- **CSS Custom Properties** for design system consistency

**Key Design Decisions:**

1. **Component Structure:**
   - Modular component architecture
   - Separation of concerns (images, info, specifications, description)
   - Reusable components with proper props interface

2. **Responsive Design:**
   - Mobile-first approach
   - CSS Grid for complex layouts
   - Breakpoints at 768px and 1024px
   - Flexible image gallery with thumbnails

3. **User Experience:**
   - Loading states with spinners
   - Error handling with retry functionality
   - Interactive image gallery
   - MercadoLibre-inspired design system

4. **Performance:**
   - Lazy loading of images
   - Optimized CSS with custom properties
   - Minimal bundle size with tree shaking

## Design System

### Color Palette
```css
--meli-yellow: #fff159    /* Primary brand color */
--meli-blue: #3483fa      /* Links and CTAs */
--meli-green: #00a650     /* Success states */
--meli-red: #ff4444       /* Error states */
--meli-gray: #666         /* Secondary text */
--meli-light-gray: #f5f5f5 /* Backgrounds */
--meli-dark-gray: #333    /* Primary text */
```

### Typography
- **Font Family:** Proxima Nova (MercadoLibre's font)
- **Font Sizes:** 12px, 14px, 16px, 18px, 20px, 24px, 32px
- **Font Weights:** 400 (normal), 600 (semibold)

### Layout System
- **Container:** Max-width 1200px with responsive padding
- **Grid System:** CSS Grid for complex layouts
- **Spacing:** 8px, 16px, 24px, 32px, 48px base units
- **Border Radius:** 4px, 8px for cards and buttons

## Component Breakdown

### 1. ProductDetail (Main Container)
- **Purpose:** Orchestrates the entire product page
- **Features:** API integration, error handling, loading states
- **Layout:** Three-column grid (images, info, purchase)

### 2. ProductImages
- **Purpose:** Displays product images with thumbnail navigation
- **Features:** Interactive image gallery, responsive design
- **State Management:** Selected image state with useState

### 3. ProductInfo
- **Purpose:** Displays product title, price, seller info, highlights
- **Features:** Price formatting, rating display, payment methods
- **Data Processing:** Currency formatting, installment calculations

### 4. ProductSpecifications
- **Purpose:** Technical specifications with visual elements
- **Features:** Interactive screen size slider, icon-based layout
- **Visual Elements:** Progress bars, icons, organized information

### 5. ProductDescription
- **Purpose:** Detailed product description
- **Features:** Structured content, responsive typography
- **Content:** Multiple sections with clear hierarchy

## API Design

### Endpoints

#### GET /api/products/:id
- **Purpose:** Fetch product details by ID
- **Response:** Complete product object with all specifications
- **Error Handling:** 404 for not found, 500 for server errors

#### GET /api/products
- **Purpose:** Fetch all products (for testing)
- **Response:** Array of all products
- **Error Handling:** 500 for server errors

#### GET /api/health
- **Purpose:** Health check endpoint
- **Response:** Status and timestamp

### Data Structure
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": {
    "current": "number",
    "original": "number",
    "currency": "string",
    "discount": "number",
    "installments": {
      "count": "number",
      "amount": "number",
      "interest": "boolean"
    }
  },
  "images": [{
    "id": "string",
    "url": "string",
    "alt": "string"
  }],
  "seller": {
    "name": "string",
    "type": "string",
    "verified": "boolean",
    "rating": "number",
    "reviews": "number",
    "sold": "number"
  },
  "specifications": {
    "screen": { "size": "string", "dimensions": "string" },
    "memory": { "ram": "string", "internal": "string" },
    "camera": { "front": "string", "rear": "string" },
    "unlock": ["string"],
    "nfc": "boolean"
  }
}
```

## Testing Strategy

### Backend Testing
- **Unit Tests:** Controller functions with mocked dependencies
- **Integration Tests:** API endpoints with supertest
- **Coverage:** 80%+ requirement met
- **Edge Cases:** Invalid IDs, file errors, JSON parsing errors

### Test Categories
1. **Happy Path:** Valid product ID returns correct data
2. **Error Handling:** 404 for non-existent products
3. **Server Errors:** File system failures, JSON parsing errors
4. **Input Validation:** Missing or invalid parameters

## Performance Considerations

### Backend
- **File System:** Efficient JSON file reading
- **Caching:** Consider Redis for production
- **Compression:** gzip compression for responses
- **Security:** Rate limiting for production

### Frontend
- **Image Optimization:** Responsive images with proper sizing
- **Bundle Size:** Tree shaking and code splitting
- **Lazy Loading:** Images and components as needed
- **Caching:** Browser caching for static assets

## Scalability

### Current Limitations
- JSON file storage (as per requirements)
- Single server instance
- No database optimization

### Production Considerations
- **Database:** MongoDB or PostgreSQL for data persistence
- **Caching:** Redis for session and data caching
- **CDN:** CloudFront for static assets
- **Load Balancing:** Multiple server instances
- **Monitoring:** Application performance monitoring

## Security Considerations

### Implemented
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

## Deployment

### Development
```bash
npm run install:all
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Environment Variables
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)

## Future Enhancements

1. **Database Integration:** Replace JSON files with proper database
2. **Authentication:** User login and session management
3. **Shopping Cart:** Add to cart functionality
4. **Reviews System:** Product reviews and ratings
5. **Search:** Product search and filtering
6. **Recommendations:** Related products algorithm
7. **Analytics:** User behavior tracking
8. **PWA:** Progressive web app features

## Conclusion

This implementation provides a solid foundation for a MercadoLibre-inspired product detail page with proper separation of concerns, comprehensive testing, and modern web development practices. The modular architecture allows for easy maintenance and future enhancements while meeting all specified requirements. 