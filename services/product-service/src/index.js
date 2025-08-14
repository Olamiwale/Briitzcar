const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "products-service" });
});


app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
    { id: 3, name: "Smartphone", price: 800 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 100 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Products Service running on port ${PORT}`);
});
