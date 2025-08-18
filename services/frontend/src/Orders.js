import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const fetchOrders = () => {
    axios.get("http://localhost:3003/orders") // maps to orders-service
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  };

  useEffect(fetchOrders, []);

  const placeOrder = async () => {
    try {
      await axios.post("http://localhost:3003/orders", {
        productId,
        quantity: parseInt(quantity)
      });
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <div>
        <input 
          placeholder="Product ID" 
          value={productId} 
          onChange={e => setProductId(e.target.value)} 
        />
        <input 
          placeholder="Quantity" 
          type="number"
          value={quantity} 
          onChange={e => setQuantity(e.target.value)} 
        />
        <button onClick={placeOrder}>Place Order</button>
      </div>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            {o.product.name} x {o.quantity} = ${o.total}
          </li>
        ))}
      </ul>
    </div>
  ); 
}

export default Orders;