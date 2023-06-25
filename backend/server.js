import express from 'express';
import data from './data.js';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/product/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
