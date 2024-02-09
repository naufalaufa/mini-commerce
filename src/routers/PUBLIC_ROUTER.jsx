/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Register from "src/pages/Register";

const SignIn = lazy(() => import("src/pages/SignIn"));
const LandingHome = lazy(() => import("src/pages/LandingHome"));

const PUBLIC_ROUTER = createBrowserRouter([
  {
    path: "/landinghome",
    name: "landinghome",
    key: "landinghome",
    element: <LandingHome />,
  },
  {
    path: "/signin",
    name: "signin",
    key: "signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    name: "register",
    key: "register",
    element: <Register />,
  },
  {
    index: false,
    path: "*",
    name: "*",
    key: "*",
    element: <Navigate to="/signin" />,
  },
]);

export default PUBLIC_ROUTER;
