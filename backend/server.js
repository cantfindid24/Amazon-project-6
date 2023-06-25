import express from 'express';
import data from './data.js';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
