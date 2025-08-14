const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "orders-service" });
});


app.get("/orders", (req, res) => {
  res.json([
    { id: 1, userId: 1, productId: 2, quantity: 1, status: "shipped" },
    { id: 2, userId: 2, productId: 1, quantity: 2, status: "pending" },
    { id: 3, userId: 1, productId: 3, quantity: 1, status: "delivered" },
    { id: 4, userId: 3, productId: 2, quantity: 1, status: "cancelled" },
    { id: 5, userId: 2, productId: 3, quantity: 3, status: "shipped" },

  ]);
});

app.listen(PORT, () => {
  console.log(`Orders Service running on port ${PORT}`);
});
