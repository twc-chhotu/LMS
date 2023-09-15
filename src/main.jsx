import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import store from "./Redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  // </Provider>
);
