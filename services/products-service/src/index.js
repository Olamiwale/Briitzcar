const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const products = [ 
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
    { id: 3, name: "Smartphone", price: 800 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 100 },
    { id: 6, name: "Mouse", price: 50 },
    { id: 7, name: "Tablet", price: 400 },
    { id: 8, name: "Smartwatch", price: 200 },
    { id: 9, name: "Printer", price: 250 },
    { id: 10, name: "External Hard Drive", price: 150 }

]


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "products-service" });
});


app.get("/products", (req, res) => {
  res.json(products);
});


app.get("/products/:id", (req, res) => { 
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product){
    res.json(product);
  }else {
    res.status(404).json({ error: "Product not found" });
  } 
});



app.listen(PORT, () => {
  console.log(`Products Service running on port ${PORT}`);
});
