import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '.mv ~/Desktop/React/top-products-app/src/src/components/src/components/src/components/ProductDetails.js ~/Desktop/React/top-products-app/src/components/';
import ProductDetails from '.mv ~/Desktop/React/top-products-app/src/src/ components/src/components/src/components/ProductDetails.js';
import './App.css'; // Optional: For custom styles

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Product Showcase</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Your Company</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
