// components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ cart, onPlaceOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrderPlacement = () => {
    if (cart.length > 0) {
      onPlaceOrder({ items: cart, total, date: new Date().toLocaleDateString() });
      alert('Order confirmed!');
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <div>
      <h2>Order Summary</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p>Total: ${total}</p>
      <button onClick={handleOrderPlacement}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
