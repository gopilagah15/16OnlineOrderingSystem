// App.js
import React, { useState, useEffect } from 'react';
import ProductSelection from './components/ProductSelection';
import OrderSummary from './components/OrderSummary';
import SalesReport from './components/SalesReport';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 }
  ]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePlaceOrder = (order) => {
    setOrders([...orders, order]);
    setCart([]); // Clear cart after order is placed
  };

  return (
    <div>
      <h1>Online Ordering System</h1>
      <ProductSelection products={products} onAddToCart={handleAddToCart} />
      <OrderSummary cart={cart} onPlaceOrder={handlePlaceOrder} />
      <SalesReport orders={orders} />
    </div>
  );
};

export default App;
