import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as PaisesLoader } from "./Pages/Index";
import NavBar from "./components/NavBar";
import Index from "./Pages/Index";
import PaisDetalle from "./components/PaisDetalle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    loader: PaisesLoader,
    children: [
      {
        index: true,
        element: <NavBar />,
      },
    ],
  },
  {
    path:"/pais/:id",
    element:<PaisDetalle/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
