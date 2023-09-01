import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ProductionQuantityLimitsSharp.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState();

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}
