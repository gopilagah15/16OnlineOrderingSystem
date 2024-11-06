// components/SalesReport.js
import React, { useEffect, useState } from 'react';

const SalesReport = ({ orders }) => {
  const [dailySales, setDailySales] = useState([]);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const todayOrders = orders.filter(order => order.date === today);
    const totalRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0);

    setDailySales({ orders: todayOrders, totalRevenue });
  }, [orders]);

  return (
    <div>
      <h2>Daily Sales Report</h2>
      <p>Total Revenue Today: ${dailySales.totalRevenue}</p>
      <ul>
        {dailySales.orders?.map((order, index) => (
          <li key={index}>Order Total: ${order.total} (Items: {order.items.length})</li>
        ))}
      </ul>
    </div>
  );
};

export default SalesReport;
