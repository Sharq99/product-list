const express = require('express');
const products = require('./data');

const app = express();
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find(element => element.id === +productId);
    res.json(product);
});

app.post("/api/products", (req, res) => {
    products.push(req.body);
    res.json(req.body);
});

app.listen(8000);

