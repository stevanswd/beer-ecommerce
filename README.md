# Beer E-Commerce

This project consists of a frontend built with React and a backend using Node.js/Express for a beer e-commerce application.

## Project Structure

```
/beer-ecommerce
  /beer-ecommerce-backend
    - package.json
    - server.js
    - /routes
      - api.js
    - /data
      - products.js
      - stock-price.js
  /beer-ecommerce-frontend
    - package.json
    - /src
      - App.js
      - index.css
      - index.js
      - /components
        - Header.js
        - ProductCard.js
        - ProductDetail.js
      - /pages
        - HomePage.js
        - ProductDetailsPage.js
      - /styles
        - _mixins.scss
        - _variables.scss
        - main.scss
  - package.json
  - README.md
```

## Setup

1. **Install Dependencies**

   To install the dependencies for both the frontend and backend, run:

   ```bash
   npm run install:all
   ```

2. **Compile SASS**

   To compile the SASS files into CSS, run:

   ```bash
   npm run compile:sass
   ```

3. **Watch SASS Changes**

   To watch for changes in SASS files and compile automatically, run:

   ```bash
   npm run watch:sass
   ```

4. **Start the Project**

   To start both the frontend and backend servers simultaneously, run:

   ```bash
   npm start
   ```

   This will run both servers in parallel.

## Backend

The backend is located in the `beer-ecommerce-backend` folder and uses Express to handle API requests.

### Backend Commands

- `npm start`: Starts the backend server on port 5001.

## Frontend

The frontend is located in the `beer-ecommerce-frontend` folder and uses React for the user interface.

### Frontend Commands

- `npm start`: Starts the React development server on port 3000.
- `npm run compile:sass`: Compiles SASS files into CSS.
- `npm run watch:sass`: Observes changes in SASS files and compiles them automatically.

## Additional Notes

- Make sure the backend and frontend run on different ports to avoid conflicts.
- You may need to adjust the CORS configuration in the backend to allow requests from the frontend.

## Configuration

### Backend

- **Port**: 5001
- **API Endpoint**: `/api/products` for product data
- **API Endpoint**: `/api/stock-price` for get the price

### Frontend

- **Port**: 3000
- **SASS**: Compiled to `index.css` in the `src` directory
