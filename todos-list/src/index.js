import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Sign-In.css';
import './css/Navbar.css';
import { RouterProvider} from "react-router-dom";
import {router} from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
