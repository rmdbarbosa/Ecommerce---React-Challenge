import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [url]);

  const productElements = products.map((product) => {
    return <ProductCard key={product.id} {...product} />;
  });

  return <div>{productElements}</div>;
}

export default App;
