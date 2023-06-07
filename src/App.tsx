import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="new_product" element={<ProductForm />} />
        <Route path="/" element={<Details />} />
        <Route path="*" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
