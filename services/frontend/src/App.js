import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Orders from "./Orders";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>E-Commerce Demo</h1>
        <nav>
          <Link to="/">Products</Link> | <Link to="/orders">Orders</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
