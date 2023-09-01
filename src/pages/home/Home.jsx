import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./home.css";

export default function Home() {
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const productElements = products.map((product) => {
    return <Product key={product.id} {...product} />;
  });

  return <div className="container">{productElements}</div>;
}
