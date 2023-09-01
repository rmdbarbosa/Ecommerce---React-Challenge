import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import DrawerAppBar from "./components/DrawerAppBar";
import ShopContextProvider from "./context/shop-context";

export default function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <DrawerAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
