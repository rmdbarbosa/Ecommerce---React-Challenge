import React from "react";
import ReactDOM from "react-dom/client";
import DrawerAppBar from "./components/DrawerAppBar";
import ProductCard from "./components/ProductCard";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DrawerAppBar />
    <ProductCard />
    <App />
  </React.StrictMode>
);
