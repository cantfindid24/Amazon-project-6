import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product._id}>
              <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-info">
                <a href={`/product/${product._id}`}>
                  <p>{product.name}</p>
                </a>
                <p>{product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
