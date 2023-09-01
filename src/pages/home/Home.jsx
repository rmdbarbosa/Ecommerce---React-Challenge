import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./home.css";
import { ShopContext } from "../../context/shop-context";

export default function Home() {
  const { products } = React.useContext(ShopContext);

  const productElements = products.map((product) => {
    return <Product key={product.id} {...product} />;
  });

  return <div className="container">{productElements}</div>;
}
