const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "payments-service" });
});


app.get("/payments", (req, res) => {
  res.json([
    { id: 1, orderId: 1, amount: 150, status: "completed" },
    { id: 2, orderId: 2, amount: 200, status: "pending" },
    { id: 3, orderId: 3, amount: 300, status: "failed" },
    { id: 4, orderId: 4, amount: 100, status: "completed" },
    { id: 5, orderId: 5, amount: 250, status: "refunded" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Payments Service running on port ${PORT}`);
});
