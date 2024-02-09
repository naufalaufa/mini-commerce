/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Article from "src/pages/Article";
import Cart from "src/pages/Cart";
import Home from "src/pages/Home";

const CartPage = lazy(() => import("src/pages/CartPage"));
const Detail = lazy(() => import("src/pages/Detail"));

const PRIVATE_ROUTER = createBrowserRouter([
  {
    path: "/",
    name: "Dashboard",
    key: "dashboard",
    element: <Home />,
    children: [
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/detail:/id",
    name: "detail:/id",
    key: "detail:/id",
    element: <Detail />,
  },
  {
    path: "/article",
    name: "article",
    key: "article",
    element: <Article />,
  },
  {
    path: "/cart",
    name: "cart",
    key: "cart",
    element: <Cart />,
  },
  {
    index: false,
    path: "*",
    name: "Not Found",
    key: "*",
    element: <Navigate to="/" />,
  },
]);

export default PRIVATE_ROUTER;
