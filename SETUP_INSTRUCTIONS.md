# Setup Instructions

## Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## Installation Steps

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 2. Start Development Servers

```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
# Backend only (port 5000)
npm run server:dev

# Frontend only (port 3000)
cd client && npm start
```

## Project Structure

```
meli_challenge_gen_ai_webpage/
├── server/                 # Backend API
│   ├── controllers/       # Business logic
│   ├── routes/           # API routes
│   ├── data/             # JSON data files
│   └── index.js          # Server entry point
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   └── ...
│   └── package.json
└── package.json          # Root package.json
```

## API Endpoints

- `GET /api/products/:id` - Get product by ID
- `GET /api/products` - Get all products
- `GET /api/health` - Health check

## Testing

```bash
# Run tests with coverage
npm test

# Run tests in watch mode
npm run test:watch
```

## Accessing the Application

1. **Frontend**: http://localhost:3000
2. **Backend API**: http://localhost:5000
3. **API Health Check**: http://localhost:5000/api/health

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Node modules not found**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **React app not starting**
   ```bash
   cd client
   npm install
   npm start
   ```

## Development Workflow

1. **Backend Development**
   - Edit files in `server/` directory
   - Server auto-restarts with nodemon
   - API changes reflect immediately

2. **Frontend Development**
   - Edit files in `client/src/` directory
   - React hot reloads changes
   - Browser updates automatically

3. **Testing**
   - Tests run automatically on file changes
   - Coverage report generated after tests
   - 80%+ coverage requirement maintained

## Production Build

```bash
# Build frontend for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
```

## Features Implemented

### ✅ Frontend Requirements
- [x] Product images with thumbnail navigation
- [x] Product title and description
- [x] Price display with discounts
- [x] Payment methods visualization
- [x] Seller information
- [x] Product specifications
- [x] Responsive design
- [x] Loading and error states

### ✅ Backend Requirements
- [x] RESTful API endpoints
- [x] Product details endpoint
- [x] JSON file storage
- [x] Error handling
- [x] Input validation

### ✅ Non-functional Requirements
- [x] Proper error handling
- [x] Comprehensive documentation
- [x] 80%+ code coverage
- [x] Security headers (Helmet)
- [x] CORS configuration

## Design Features

### MercadoLibre-Inspired Design
- **Color Scheme**: Matches MercadoLibre's brand colors
- **Typography**: Proxima Nova font family
- **Layout**: Three-column responsive grid
- **Components**: Interactive image gallery, price display, seller info
- **User Experience**: Loading states, error handling, responsive design

### Technical Implementation
- **Architecture**: Clean separation of concerns
- **State Management**: React hooks for local state
- **Styling**: CSS Grid, Flexbox, Custom Properties
- **API Integration**: Axios for HTTP requests
- **Testing**: Jest with supertest for API testing

## Next Steps

1. **Install Node.js and npm** if not already installed
2. **Run the installation commands** above
3. **Start the development servers**
4. **Access the application** at http://localhost:3000
5. **Test the API** at http://localhost:5000/api/products/samsung-galaxy-a55-5g

The application will display a MercadoLibre-inspired product detail page for the Samsung Galaxy A55 5G smartphone, complete with all the features shown in the reference image. 