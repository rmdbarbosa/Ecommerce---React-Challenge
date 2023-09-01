import React from "react";
import ReactDOM from "react-dom/client";
import DrawerAppBar from "./components/DrawerAppBar";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DrawerAppBar />
    <App />
  </React.StrictMode>
);
