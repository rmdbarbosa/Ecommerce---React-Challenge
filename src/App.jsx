import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
          <Route path="/checkout" />
        </Routes>
      </Router>
    </div>
  );
}
