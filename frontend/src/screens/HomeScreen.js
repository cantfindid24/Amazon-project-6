import React, { useEffect, useState } from 'react';
// import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products'); //return object
      console.log(result); // object
      setProducts(result.data); //array of objects
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={`/product/${product._id}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
