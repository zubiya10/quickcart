import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1>QuickCart</h1>
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
    </div>
  );
}