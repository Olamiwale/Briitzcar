const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

let orders = [];


app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    service: "orders-service" });
});


app.get("/orders", (req, res) => {
  res.json(orders);
});


app.post("/orders", async (req, res) => {
  const { productId, quantity } = req.body;

  try {

    const productResponse = await axios.get(`http://products-service:3000/products/${productId}`);
    const product = productResponse.data;

    const newOrder = {
      id: orders.length + 1, 
      product,
      quantity,
      total: product.price * quantity
    };


    orders.push(newOrder);
    res.status(201).json(newOrder);
    
  } catch (error) {
    res.status(500).json({error:"Failed to place order", details: error.message})
  }
})




app.listen(PORT, () => {
  console.log(`Orders Service running on port ${PORT}`);
});
