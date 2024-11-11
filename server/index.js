// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample data for products
const products = [
  { id: 1, name: 'Eau de Parfum', description: 'A floral scent', price: 75 },
  { id: 2, name: 'Citrus Mist', description: 'Citrusy aroma', price: 60 }
];

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});