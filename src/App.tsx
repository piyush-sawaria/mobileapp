import React, { Suspense, lazy } from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Default from './components/Default';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = lazy(() => import('./components/Cart')); // not part of bundle.js
const Details = lazy(() => import('./components/Details'));
const ProductForm = lazy(() => import('./components/ProductForm'));


function App() {
  return (
    <div>
      <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CISCO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        } />
        <Route path="/details/:id" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Details />
          </Suspense>
        } />
        <Route path="/new_product" element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductForm />
          </Suspense>
        } />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;