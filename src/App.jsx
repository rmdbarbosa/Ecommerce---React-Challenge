import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import DrawerAppBar from "./components/DrawerAppBar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
